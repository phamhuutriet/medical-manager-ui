import React from "react";
import { Box, Modal } from "@mui/material";
import { ExclamationMark } from "../img/svg/ExclamationMark";
import "./index.css";
import { useNavigate } from "react-router-dom";

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

export const ErrorModal = ({
  open,
  handleClose,
  errorText,
}: {
  open: boolean;
  handleClose: any;
  errorText: string;
}) => {
  return (
    <Modal className="error-modal" open={open} onClose={handleClose}>
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
          <ExclamationMark />
          <div style={{ fontSize: "20px", fontWeight: "600" }}>OOps !!</div>
          <div
            style={{ fontSize: "14px", fontWeight: "400", color: "#8C949D" }}
          >
            {errorText}
          </div>
        </div>
      </Box>
    </Modal>
  );
};
