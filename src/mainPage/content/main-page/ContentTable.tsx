import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Patient, PatientContext } from "../../../context/PatientContext";
import { PatientMoreInfoMenu } from "./PatientMoreInfoMenu";
import "../index.css";
import { DeleteConfimModal } from "../../../components/DeleteConfirmModal";
import { deletePatient } from "../../../service/patientService";
import { useThrowAsyncError } from "../../../hooks/useThrowAsyncError";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F6F6F9",
    color: "#0D0C0C",
    fontSize: "14px",
    fontFamily: "Be Vietnam Pro",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "16px",
    fontFamily: "Be Vietnam Pro",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:first-child td, &:first-child th": {
    paddingTop: "24px",
  },
}));

export const ContentTable = ({ patients }: { patients: Patient[] }) => {
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    React.useState(false);
  const [toDeletePatient, setToDeletePatient] = React.useState("");
  const { setPatients } = React.useContext(PatientContext);
  const throwAsyncError = useThrowAsyncError();

  const onClickOpenDeleteConfirmModal = (patientId: string) => {
    setIsConfirmDeleteModalOpen(true);
    setToDeletePatient(patientId);
  };

  const onClickConfirmDelete = async () => {
    try {
      await deletePatient(toDeletePatient);
      setPatients(patients.filter((patient) => patient.id !== toDeletePatient));
      setIsConfirmDeleteModalOpen(false);
    } catch (error) {
      throwAsyncError(new Error("Lỗi xoá bệnh nhân, vui lòng thử lại"));
    }
  };

  return (
    <Table
      sx={{ minWidth: 700, borderCollapse: "separate" }}
      aria-label="customized table"
    >
      <DeleteConfimModal
        open={isConfirmDeleteModalOpen}
        handleClose={() => setIsConfirmDeleteModalOpen(false)}
        onClickConfirmDelete={onClickConfirmDelete}
        title="Xoá hồ sơ bác sĩ"
        innerText="Bạn có chắc muốn xoá hồ sơ bác sĩ này không?"
      />
      <TableHead
        sx={{
          "& th:first-child": {
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          },
          "& th:last-child": {
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          },
        }}
      >
        <TableRow>
          <StyledTableCell>Số hồ sơ</StyledTableCell>
          <StyledTableCell align="left">Bệnh nhân</StyledTableCell>
          <StyledTableCell align="left">Giới tính</StyledTableCell>
          <StyledTableCell align="left">Ngày sinh</StyledTableCell>
          <StyledTableCell align="left">Ngày khám</StyledTableCell>
          <StyledTableCell align="left">Bác sĩ</StyledTableCell>
          <StyledTableCell align="left"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {patients.map((row) => (
          <StyledTableRow key={`${row.firstName} ${row.lastName}`}>
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>
            <StyledTableCell align="left">{`${row.lastName} ${row.firstName}`}</StyledTableCell>
            <StyledTableCell align="left">
              <SexBox sex={row.gender} />
            </StyledTableCell>
            <StyledTableCell align="left">{row.dateOfBirth}</StyledTableCell>
            <StyledTableCell align="left">{row.createdAt}</StyledTableCell>
            <StyledTableCell align="left">
              {row.doctor && `${row.doctor.lastName} ${row.doctor.firstName}`}
            </StyledTableCell>
            <StyledTableCell align="left">
              <PatientMoreInfoMenu
                patientId={row.id}
                openDeleteConfirmModal={() =>
                  onClickOpenDeleteConfirmModal(row.id)
                }
              />
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const SexBox = ({ sex }: { sex: string }) => {
  const className = sex === "M" ? "sex-box-male" : "sex-box-female";
  const text = sex === "M" ? "Nam" : "Nữ";

  return <div className={className}>{text}</div>;
};
