import React, { useState } from "react";
import { useNavigate } from "react-router";
import { RouteEnum } from "../../data/routeEnum";
import { Button } from "../../components/Button";
import { TextInputBox } from "../doctor/doctor-detail/NameBox";
import { RecordTestTable, RecordTreatmentPlanTable } from "./RecordTable";
import "./index.css";
import { AddIcon } from "../../img/svg/AddIcon";

const MOCK_TESTS = [{ id: "1", createdAt: "07 / 02 / 2022", name: "X-quang" }];
const MOCK_TREATMENTS_PLAN = [
  { name: "Cạo vôi răng, đánh bóng hai hàm" },
  { name: "Phục hình cầu R11 - 14, cầu R23 - 24" },
];

export const AddRecordPageContent = () => {
  const [record, setRecord] = useState<any>();
  const navigate = useNavigate();

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

  const saveDoctor = () => {
    // setDoctors(
    //   doctors.map((doctorItem) => {
    //     if (doctor && doctorItem.id === doctor.id) {
    //       return doctor;
    //     }
    //     return doctorItem;
    //   })
    // );
    // navigate(RouteEnum.DOCTOR_PAGE);
  };

  const cancelEditDoctor = () => {
    navigate(RouteEnum.DOCTOR_PAGE);
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
        <TextInputBox
          text={record?.diagnosis}
          setText={() => setAttribute("diagnosis")}
          boxTitle="Chẩn đoán"
          className="big-box"
        />
        <div className="table-container">
          <div className="title-bar">
            <div>Kế hoạch điều trị</div>
            <Button
              text="Thêm"
              icon={<AddIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />}
              onClick={() => {}}
              className="add-test-button"
            />
          </div>
          <div className="content">
            <RecordTreatmentPlanTable treatmentPlans={MOCK_TREATMENTS_PLAN} />
          </div>
        </div>
      </div>
      <ButtonsBox saveDoctor={saveDoctor} cancelEditDoctor={cancelEditDoctor} />
    </div>
  );
};

const ButtonsBox = ({
  saveDoctor,
  cancelEditDoctor,
}: {
  saveDoctor: Function;
  cancelEditDoctor: Function;
}) => {
  return (
    <div className="buttons-box">
      <Button
        text="Huỷ"
        className="cancel-button"
        onClick={cancelEditDoctor}
        innerButtonClassName="cancel-button-inner"
      />
      <Button
        text="Lưu"
        className="save-button"
        onClick={saveDoctor}
        innerButtonClassName="save-button-inner"
      />
    </div>
  );
};
