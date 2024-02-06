import React, { useState } from "react";
import { ArrowDownIcon } from "../../img/svg/ArrowDownIcon";
import { Button } from "../../components/Button";
import { DoctorItemList } from "./DoctorItemList";

export const DoctorListPage = () => {
  return (
    <div className="page-content-container">
      <div className="content-header">
        <div>Danh sách bác sĩ</div>
        <AddButton onClick={() => {}} />
      </div>
      <DoctorItemList />
    </div>
  );
};

const AddButton = ({ onClick }: { onClick?: any }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onMouseLeaveCall = () => {
    setIsClicked(false);
  };

  const onClickButton = (event: any) => {
    onClick(event);
    setIsClicked(true);
  };

  return (
    <div onMouseLeave={onMouseLeaveCall}>
      <Button
        onClick={onClickButton}
        text="Thêm"
        icon={<ArrowDownIcon defaultColor="white" selectedColor="white" />}
        isClicked={isClicked}
      />
    </div>
  );
};
