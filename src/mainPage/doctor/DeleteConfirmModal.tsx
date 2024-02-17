import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { Button } from "../../components/Button";
import "./index.css";
import { ExclamationMark } from "../../img/svg/ExclamationMark";

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

export const DeleteConfimModal = ({
  open,
  handleClose,
  onClickConfirmDelete,
  title,
  innerText,
}: {
  open: boolean;
  handleClose: any;
  onClickConfirmDelete: any;
  title: string;
  innerText: string;
}) => {
  return (
    <Modal className="delete-confirm-modal" open={open} onClose={handleClose}>
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
            text="Hủy"
            className="cancel-delete-confirm-button"
            onClick={handleClose}
            innerButtonClassName="cancel-button-inner"
          />
          <Button
            text="Xoá"
            className="delete-confirm-button"
            onClick={onClickConfirmDelete}
            innerButtonClassName="cancel-button-inner"
          />
        </div>
      </Box>
    </Modal>
  );
};
