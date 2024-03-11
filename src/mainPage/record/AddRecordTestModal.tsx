import React from "react";
import { Box, IconButton, Modal } from "@mui/material";
import { CloseIcon } from "../../img/svg/Close";
import { BirthBox, TextInputBox } from "../doctor/doctor-detail/NameBox";
import { Button } from "../../components/Button";
import "./index.css";
import { UploadIcon } from "../../img/svg/UploadIcon";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  alignItems: "center",
  padding: "24px",
  boxSizing: "border-box",
};

interface AddRecordTestModalProps {
  open: boolean;
  handleClose: any;
}

export const AddRecordTestModal = ({
  open,
  handleClose,
}: AddRecordTestModalProps) => {
  const isDisableSaveButton = false;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className="modal-title-row">
          <div className="add-test-modal-title">Kết quả cận lâm sàng</div>
          <IconButton onClick={handleClose} sx={{ height: "24px" }}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="input-row">
          <TextInputBox
            className="add-test-modal-custom-text-input"
            text=""
            setText={() => {}}
            boxTitle="Tên"
          />
          <BirthBox
            dateOfBirth=""
            setDateOfBirth={() => {}}
            isCalendarOpen={false}
            setIsCalendarOpen={() => {}}
          />
        </div>
        <div className="upload-test-image">
          <UploadIcon />
          <div className="upload-test-image-title">Tải ảnh</div>
          <div className="upload-test-image-description">
            Kéo thả hình ảnh hoặc chọn từ thiết bị
          </div>
          <Button
            text="Tải lên"
            className="upload-file-button"
            onClick={() => {}}
          />
        </div>
        <div className="add-test-modal-button-rows">
          <Button
            text="Lưu"
            className={`save-button ${
              isDisableSaveButton && "background-disable"
            }`}
            onClick={() => {}}
            innerButtonClassName={`${
              isDisableSaveButton && "save-button-inner-disable"
            }`}
          />
        </div>
      </Box>
    </Modal>
  );
};
