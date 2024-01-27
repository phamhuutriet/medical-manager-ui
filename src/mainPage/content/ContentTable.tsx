import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MoreIcon from "../../img/more.svg";
import "./index.css";
import { IconButton } from "@mui/material";

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

function createData(
  id: string,
  name: string,
  sex: string,
  dateOfBirth: string,
  visitDate: string,
  doctor: string
) {
  return { id, name, sex, dateOfBirth, visitDate, doctor };
}

const rows = [
  createData(
    "22220888",
    "Lâm Trung Hưng",
    "Male",
    "04/06/1971",
    "16/12/2022",
    "Phạm Hữu Triết"
  ),
  createData(
    "22220888",
    "Lâm Trung Hưng",
    "Female",
    "04/06/1971",
    "16/12/2022",
    "Phạm Hữu Triết"
  ),
  createData(
    "22220888",
    "Lâm Trung Hưng",
    "Male",
    "04/06/1971",
    "16/12/2022",
    "Phạm Hữu Triết"
  ),
  createData(
    "22220888",
    "Lâm Trung Hưng",
    "Female",
    "04/06/1971",
    "16/12/2022",
    "Phạm Hữu Triết"
  ),
];

export const ContentTable = () => {
  return (
    <Table
      sx={{ minWidth: 700, borderCollapse: "separate" }}
      aria-label="customized table"
    >
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
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>
            <StyledTableCell align="left">{row.name}</StyledTableCell>
            <StyledTableCell align="left">
              <SexBox sex={row.sex} />
            </StyledTableCell>
            <StyledTableCell align="left">{row.dateOfBirth}</StyledTableCell>
            <StyledTableCell align="left">{row.visitDate}</StyledTableCell>
            <StyledTableCell align="left">{row.doctor}</StyledTableCell>
            <StyledTableCell align="left">
              <IconButton sx={{ height: "100%" }}>
                <img className="image" alt="more" src={MoreIcon} />
              </IconButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const SexBox = ({ sex }: { sex: string }) => {
  const className = sex === "Male" ? "sex-box-male" : "sex-box-female";
  const text = sex === "Male" ? "Nam" : "Nữ";

  return <div className={className}>{text}</div>;
};
