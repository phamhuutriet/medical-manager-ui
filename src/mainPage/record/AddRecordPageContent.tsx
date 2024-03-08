import React, { useState } from "react";
import { Button } from "../../components/Button";
import { TextInputBox } from "../doctor/doctor-detail/NameBox";
import {
  RecordTestTable,
  RecordTreatmentPlanTable,
  RecordTreatmentsTable,
} from "./RecordTable";
import "./index.css";
import { AddIcon } from "../../img/svg/AddIcon";

const MOCK_TESTS = [{ id: "1", createdAt: "07 / 02 / 2022", name: "X-quang" }];
const MOCK_TREATMENTS_PLAN = [
  { id: "1", name: "Cạo vôi răng, đánh bóng hai hàm" },
  { id: "2", name: "Phục hình cầu R11 - 14, cầu R23 - 24" },
];
const MOCK_TREATMENTS: any[] = [
  {
    data: {
      treatmentType: "Mo ruot thua",
      visitDate: "02 / 12 / 2023",
      cost: "100.000",
      note: "viem ruot thua",
      doctor: {
        id: "2c275720-0c18-446b-96b3-2b94cc3db6fe",
        firstName: "Triet",
        lastName: "Pham",
        gender: "Male",
        dateOfBirth: "2/1/1991",
        phoneNumber: "+62 207 553 4237",
        createdAt: "9/16/2023",
      },
    },
  },
];

export const AddRecordPageContent = () => {
  const [record, setRecord] = useState<any>();

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

  return (
    <div>
      <div className="record-content-container">
        <TextInputBox
          text={record?.reasonForVisit}
          setText={() => setAttribute("reasonForVisit")}
          boxTitle="Lý do đến khám"
        />
        <TextInputBox
          text={record?.medicalHistory}
          setText={() => setAttribute("medicalHistory")}
          boxTitle="Bệnh sử"
          className="big-box"
        />
        <TextInputBox
          text={record?.symptom}
          setText={() => setAttribute("symptom")}
          boxTitle="Triệu chứng"
          className="big-box"
        />
        <VitalSigns record={record} setNestedAttribute={setNestedAttribute} />
        <ClinicalTest />
        <TextInputBox
          text={record?.diagnosis}
          setText={() => setAttribute("diagnosis")}
          boxTitle="Chẩn đoán"
          className="big-box"
        />
        <TreatmentPlan />
        <Treatments />
      </div>
      <ButtonsBox saveRecord={() => {}} cancelEditRecord={() => {}} />
    </div>
  );
};

const ButtonsBox = ({
  saveRecord,
  cancelEditRecord,
}: {
  saveRecord: Function;
  cancelEditRecord: Function;
}) => {
  return (
    <div className="buttons-box">
      <Button
        text="Huỷ"
        className="cancel-button"
        onClick={cancelEditRecord}
        innerButtonClassName="cancel-button-inner"
      />
      <Button
        text="Lưu"
        className="save-button"
        onClick={saveRecord}
        innerButtonClassName="save-button-inner"
      />
    </div>
  );
};

const VitalSigns = ({
  record,
  setNestedAttribute,
}: {
  record: any;
  setNestedAttribute: Function;
}) => {
  return (
    <div className="vital-signs-container">
      <TextInputBox
        text={record?.vitalSigns.heartRate}
        setText={() => setNestedAttribute("vitalSigns", "reasonForVisit")}
        boxTitle="Mạch"
      />
      <TextInputBox
        text={record?.vitalSigns.temperature}
        setText={() => setNestedAttribute("vitalSigns", "temperature")}
        boxTitle="Nhiệt độ"
      />
      <TextInputBox
        text={record?.vitalSigns.bloodPressure}
        setText={() => setNestedAttribute("vitalSigns", "bloodPressure")}
        boxTitle="Huyết áp"
      />
      <TextInputBox
        text={record?.vitalSigns.breathRate}
        setText={() => setNestedAttribute("vitalSigns", "breathRate")}
        boxTitle="Nhịp thở"
      />
    </div>
  );
};

const ClinicalTest = () => {
  return (
    <div className="table-container">
      <div className="title-bar">
        <div>Xét nghiệm cận lâm sàng</div>
        <Button
          text="Thêm"
          icon={<AddIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />}
          onClick={() => {}}
          className="add-test-button"
        />
      </div>
      <div className="content">
        <RecordTestTable tests={MOCK_TESTS} />
      </div>
    </div>
  );
};

const TreatmentPlan = () => {
  const [treatmentPlans, setTreatmentPlans] = useState(MOCK_TREATMENTS_PLAN);
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

const Treatments = () => {
  const [treatments, setTreatments] = useState(MOCK_TREATMENTS);
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
        />
      </div>
    </div>
  );
};
