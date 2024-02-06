import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import { EditPatientIcon } from "../../img/svg/EditPatientIcon";
import { RemovePatientIcon } from "../../img/svg/RemovePatientIcon";
import { MorePatientInfoIcon } from "../../img/svg/MorePatientInfoIcon";
import { DropDownMenu, MenuListType } from "../content/DropDownMenu";
import { SectionContext } from "../../context/SectionContext";
import { SectionId } from "../../data/sectionIdEnum";

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

export interface DoctorRow {
  id: string;
  name: string;
  sex: string;
  dateOfBirth: string;
  phoneNumber: string;
}

export const DoctorContentTable = ({ doctors }: { doctors: DoctorRow[] }) => {
  const { setSectionId } = React.useContext(SectionContext);

  const MORE_INFO_MENU_LIST: MenuListType[] = [
    {
      icon: <EditPatientIcon defaultColor="#8C949D" selectedColor="#0D0C0C" />,
      text: "Sửa hồ sơ",
      onClick: () => {
        setSectionId(SectionId.DOCTOR_DETAIL_PAGE);
      },
    },
    {
      icon: (
        <RemovePatientIcon defaultColor="#8C949D" selectedColor="#0D0C0C" />
      ),
      text: "Xoá hồ sơ",
    },
  ];

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
          <StyledTableCell align="left">Họ Tên</StyledTableCell>
          <StyledTableCell align="left">Giới tính</StyledTableCell>
          <StyledTableCell align="left">Ngày sinh</StyledTableCell>
          <StyledTableCell align="left">Số điện thoại</StyledTableCell>
          <StyledTableCell align="left"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {doctors.map((row) => (
          <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>
            <StyledTableCell align="left">{row.name}</StyledTableCell>
            <StyledTableCell align="left">
              <SexBox sex={row.sex} />
            </StyledTableCell>
            <StyledTableCell align="left">{row.dateOfBirth}</StyledTableCell>
            <StyledTableCell align="left">{row.phoneNumber}</StyledTableCell>
            <StyledTableCell align="left">
              <DropDownMenu
                Button={MoreInfoButton}
                menuList={MORE_INFO_MENU_LIST}
                customStyle={{ width: "207px" }}
              />
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

const MoreInfoButton = ({ onClick }: { onClick: any }) => {
  return (
    <IconButton sx={{ height: "100%" }} onClick={onClick}>
      <MorePatientInfoIcon />
    </IconButton>
  );
};
