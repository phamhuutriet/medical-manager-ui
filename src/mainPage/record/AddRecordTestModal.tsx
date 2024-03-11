import React, { useRef, useState } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import { CloseIcon } from "../../img/svg/Close";
import { BirthBox, TextInputBox } from "../doctor/doctor-detail/NameBox";
import { Button } from "../../components/Button";
import "./index.css";
import { UploadIcon } from "../../img/svg/UploadIcon";
import styled from "@emotion/styled";

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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface AddRecordTestModalProps {
  open: boolean;
  handleClose: any;
  setTests: Function;
}

export const AddRecordTestModal = ({
  open,
  handleClose,
  setTests,
}: AddRecordTestModalProps) => {
  const [testName, setTestName] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [testImages, setTestImages] = useState<any[]>([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const fileInputRef = useRef<any>();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log("Files: ", files);
    if (files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        console.log(event.target.result);
        setTestImages([...testImages, event.target.result]);
      };

      reader.readAsDataURL(files[0]);
    }
  };

  const isDisableSaveButton = testName === "" || createdAt === "";

  const onClose = () => {
    resetState();
    handleClose();
  };

  const resetState = () => {
    setTestName("");
    setCreatedAt("");
    setTestImages([]);
  };

  const onClickSave = () => {
    setTests((prev: any) => [
      ...prev,
      { id: "1", name: testName, createdAt: createdAt, images: testImages },
    ]);
    resetState();
    handleClose();
  };

  const onClickRemoveImage = (toRemoveImage: any) => {
    setTestImages(testImages.filter((image) => image !== toRemoveImage));
  };

  return (
    <Modal open={open} onClose={onClose}>
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
            text={testName}
            setText={setTestName}
            boxTitle="Tên"
          />
          <BirthBox
            title="Ngày xét nghiệm"
            dateOfBirth={createdAt}
            setDateOfBirth={setCreatedAt}
            isCalendarOpen={isCalendarOpen}
            setIsCalendarOpen={setIsCalendarOpen}
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
            onClick={handleButtonClick}
          />
          <VisuallyHiddenInput
            id="file-input"
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
          />
        </div>
        {testImages.length > 0 && (
          <div className="uploaded-images">
            {testImages.map((image) => {
              return (
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    alt=""
                    src={image}
                    width="112px"
                    height="112px"
                    style={{ borderRadius: "8px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => onClickRemoveImage(image)}
                    >
                      <CloseIcon width="24px" height="24px" color="white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="add-test-modal-button-rows">
          <Button
            text="Lưu"
            className={`save-button ${
              isDisableSaveButton && "background-disable"
            }`}
            onClick={onClickSave}
            disable={isDisableSaveButton}
            innerButtonClassName={`${
              isDisableSaveButton && "save-button-inner-disable"
            }`}
          />
        </div>
      </Box>
    </Modal>
  );
};
