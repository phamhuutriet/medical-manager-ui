import * as React from "react";
import { Button } from "../../../components/Button";
import { AddIcon } from "../../../img/svg/AddIcon";
import "./viewPatient.css";

export const ViewPatientAddTemplateButton = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const onMouseLeaveCall = () => {
    setIsClicked(false);
  };

  const onClickButton = (event: any) => {
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
