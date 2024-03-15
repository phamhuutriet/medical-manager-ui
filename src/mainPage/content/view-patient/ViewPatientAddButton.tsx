import * as React from "react";
import { Button } from "../../../components/Button";
import { AddIcon } from "../../../img/svg/AddIcon";
import "./viewPatient.css";
import { useNavigate, useParams } from "react-router-dom";

export const ViewPatientAddRecordButton = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const { patientId } = useParams();
  const navigate = useNavigate();

  const onMouseLeaveCall = () => {
    setIsClicked(false);
  };

  const onClickButton = (event: any) => {
    navigate(`/patients/details/${patientId}/records/`);
    setIsClicked(true);
  };

  return (
    <div onMouseLeave={onMouseLeaveCall}>
      <Button
        onClick={onClickButton}
        text="Thêm bệnh án"
        icon={<AddIcon defaultColor="white" selectedColor="white" />}
        isClicked={isClicked}
        className="add-template-button-container"
      />
    </div>
  );
};
