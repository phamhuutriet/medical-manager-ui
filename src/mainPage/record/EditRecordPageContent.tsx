import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { TextInputBox } from "../doctor/doctor-detail/NameBox";
import {
  RecordTestTable,
  RecordTreatmentPlanTable,
  RecordTreatmentsTable,
} from "./RecordTable";
import { AddIcon } from "../../img/svg/AddIcon";
import { AddRecordTestModal } from "./AddRecordTestModal";
import { AddSuccessfulModal } from "../../components/AddSuccessfulModal";
import { useNavigate, useParams } from "react-router-dom";
import { getRecord, updateRecord } from "../../service/recordService";
import { useThrowAsyncError } from "../../hooks/useThrowAsyncError";
import { WholeComponentLoadingWrapper } from "../../components/LoadingWrapper";
import "./index.css";
import { createUpdateTreatments } from "../../service/treatmentService";

export const EditRecordPageContent = () => {
  const { recordId, patientId } = useParams();
  const [record, setRecord] = useState<any>();
  const [tests, setTests] = useState([]);
  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [isAddedRecord, setIsAddedRecord] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [needUpdateTreatments, setNeedUpdateTreatments] = useState([]);
  const navigate = useNavigate();
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const fetchedRecord = await getRecord(
          patientId as string,
          recordId as string
        );
        setRecord(fetchedRecord);
        setTreatmentPlans(fetchedRecord.treatmentPlan);
        setTreatments(fetchedRecord.treatments);
        setTests(fetchedRecord.tests);
      } catch (error) {
        throwAsyncError(new Error("Lỗi tải bệnh án, vui lòng thử lại"));
      }
    };
    fetchRecord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordId, patientId]);

  const setAttribute = (attribute: string) => {
    return (value: any) => {
      if (record) {
        setRecord({ ...record, [attribute]: value });
      }
    };
  };

  const setNestedAttribute = (outerAttr: string, innerAttr: string) => {
    return (value: any) => {
      if (record) {
        setRecord({
          ...record,
          [outerAttr]: { ...record[outerAttr], [innerAttr]: value },
        });
      }
    };
  };

  const onClickSaveRecord = async () => {
    try {
      setIsLoading(true);
      await updateRecord(record);
      await createUpdateTreatments(
        patientId as string,
        recordId as string,
        needUpdateTreatments
      );
      // TODO: fix this later
      // await createUpdateTests(patientId as string, recordId as string, tests);
      setIsLoading(false);
    } catch (error) {
      throwAsyncError(new Error("Lỗi cập nhật bệnh án"));
    }
    setIsAddedRecord(true);
  };

  if (!record) return <>Bệnh án không tồn tại</>;

  return (
    <WholeComponentLoadingWrapper
      isLoading={isLoading}
      loadingText="Đang tải bệnh án, vui lòng đợi tí"
    >
      <div>
        <AddSuccessfulModal
          open={isAddedRecord}
          handleClose={() => setIsAddedRecord(false)} // do nothing here since we will use the buttons to navigate
          handleRedirect={() => navigate(`/patients/details/${patientId}`)}
          onClickConfirm={() => setIsAddedRecord(false)}
          title="Thêm bệnh án thành công"
          innerText="Chúc mừng bạn đã tạo hồ sơ bệnh án thành công"
          leftButtonText="Quay về hồ sơ bệnh nhân"
          rightButtonText="Xem chi tiết"
        />
        <div className="record-content-container">
          <TextInputBox
            text={record.reasonForVisit}
            setText={setAttribute("reasonForVisit")}
            boxTitle="Lý do đến khám"
          />
          <TextInputBox
            text={record.medicalHistory}
            setText={setAttribute("medicalHistory")}
            boxTitle="Bệnh sử"
            className="big-box"
          />
          <TextInputBox
            text={record.symptom}
            setText={setAttribute("symptom")}
            boxTitle="Triệu chứng"
            className="big-box"
          />
          <VitalSigns
            vitalSigns={record.vitalSigns}
            setNestedAttribute={setNestedAttribute}
          />
          <ClinicalTest tests={tests} setTests={setTests} />
          <TextInputBox
            text={record.diagnosis}
            setText={setAttribute("diagnosis")}
            boxTitle="Chẩn đoán"
            className="big-box"
          />
          <TreatmentPlan
            treatmentPlans={treatmentPlans}
            setTreatmentPlans={setTreatmentPlans}
          />
          <Treatments
            treatments={treatments}
            setTreatments={setTreatments}
            setNeedUpdateTreatments={setNeedUpdateTreatments}
          />
        </div>
        <ButtonsBox
          isAddable
          saveRecord={onClickSaveRecord}
          cancelEditRecord={() => navigate(-1)}
        />
      </div>
    </WholeComponentLoadingWrapper>
  );
};

const ButtonsBox = ({
  isAddable,
  saveRecord,
  cancelEditRecord,
}: {
  isAddable: boolean;
  saveRecord: Function;
  cancelEditRecord: Function;
}) => {
  return (
    <div className="buttons-box add-record-buttons">
      <Button
        text="Huỷ"
        className="cancel-button"
        onClick={cancelEditRecord}
        innerButtonClassName="cancel-button-inner"
      />
      <Button
        text="Lưu"
        className={`save-button ${!isAddable && "background-disable"}`}
        onClick={saveRecord}
        disable={!isAddable}
        innerButtonClassName={`${!isAddable && "save-button-inner-disable"}`}
      />
    </div>
  );
};

const VitalSigns = ({
  vitalSigns,
  setNestedAttribute,
}: {
  vitalSigns: any;
  setNestedAttribute: Function;
}) => {
  return (
    <div className="vital-signs-container">
      <TextInputBox
        text={vitalSigns.heartRate}
        setText={setNestedAttribute("vitalSigns", "heartRate")}
        boxTitle="Mạch"
      />
      <TextInputBox
        text={vitalSigns.temperature}
        setText={setNestedAttribute("vitalSigns", "temperature")}
        boxTitle="Nhiệt độ"
      />
      <TextInputBox
        text={vitalSigns.bloodPressure}
        setText={setNestedAttribute("vitalSigns", "bloodPressure")}
        boxTitle="Huyết áp"
      />
      <TextInputBox
        text={vitalSigns.breathRate}
        setText={setNestedAttribute("vitalSigns", "breathRate")}
        boxTitle="Nhịp thở"
      />
    </div>
  );
};

const ClinicalTest = ({ tests, setTests }: { tests: any; setTests: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="table-container">
      <AddRecordTestModal
        open={open}
        handleClose={() => setOpen(false)}
        setTests={setTests}
      />
      <div className="title-bar">
        <div>Xét nghiệm cận lâm sàng</div>
        <Button
          text="Thêm"
          icon={<AddIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />}
          onClick={() => setOpen(true)}
          className="add-test-button"
        />
      </div>
      <div className="content">
        <RecordTestTable tests={tests} />
      </div>
    </div>
  );
};

const TreatmentPlan = ({
  treatmentPlans,
  setTreatmentPlans,
}: {
  treatmentPlans: any;
  setTreatmentPlans: any;
}) => {
  const [isAddNewTreatmentPlan, setIsAddNewTreatmentPlan] =
    React.useState(false);

  return (
    <div className="table-container">
      <div className="title-bar">
        <div>Kế hoạch điều trị</div>
        <Button
          text="Thêm"
          icon={<AddIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />}
          onClick={() => setIsAddNewTreatmentPlan(true)}
          className="add-test-button"
        />
      </div>
      <div className="content">
        <RecordTreatmentPlanTable
          isAddNewTreatmentPlan={isAddNewTreatmentPlan}
          setIsAddNewTreatmentPlan={setIsAddNewTreatmentPlan}
          treatmentPlans={treatmentPlans}
          setTreatmentPlans={setTreatmentPlans}
        />
      </div>
    </div>
  );
};

const Treatments = ({
  treatments,
  setTreatments,
  setNeedUpdateTreatments,
}: {
  treatments: any;
  setTreatments: any;
  setNeedUpdateTreatments: Function;
}) => {
  const [isAddNewRow, setIsAddNewRow] = useState(false);

  const removeNewRow = () => {
    setIsAddNewRow(false);
  };

  return (
    <div className="table-container">
      <div className="title-bar">
        <div>Phác đồ điều trị thực tế</div>
        <Button
          text="Thêm điều trị mới"
          icon={<AddIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />}
          onClick={() => setIsAddNewRow(true)}
          className="add-treatment-button"
        />
      </div>
      <div className="content">
        <RecordTreatmentsTable
          treatments={treatments}
          isAddNewTreatment={isAddNewRow}
          removeNewRow={removeNewRow}
          setTreatments={setTreatments}
          setNeedUpdateTreatments={setNeedUpdateTreatments}
        />
      </div>
    </div>
  );
};
