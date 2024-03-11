import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { Button } from "./Button";
import { TickCircle } from "../img/svg/TickCircle";
import "./modal.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

export const AddSuccessfulModal = ({
  open,
  handleClose,
  handleRedirect,
  onClickConfirm,
  title,
  innerText,
  leftButtonText,
  rightButtonText,
}: {
  open: boolean;
  handleClose: any;
  handleRedirect: any;
  onClickConfirm: any;
  title: string;
  innerText: string;
  leftButtonText: string;
  rightButtonText: string;
}) => {
  return (
    <Modal className="confirm-modal" open={open} onClose={handleClose}>
      <Box sx={style}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            fontFamily: "Be Vietnam Pro",
          }}
        >
          <TickCircle />
          <div style={{ fontSize: "20px", fontWeight: "600" }}>{title}</div>
          <div
            style={{ fontSize: "14px", fontWeight: "400", color: "#8C949D" }}
          >
            {innerText}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Button
            text={leftButtonText}
            className="cancel-confirm-button"
            onClick={handleRedirect}
            innerButtonClassName="cancel-button-inner"
          />
          <Button
            text={rightButtonText}
            className="confirm-button"
            onClick={onClickConfirm}
            innerButtonClassName="cancel-button-inner"
          />
        </div>
      </Box>
    </Modal>
  );
};
