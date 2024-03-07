import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "../../components/Button";
import { IconButton } from "@mui/material";
import { CloseIcon } from "../../img/svg/Close";
import { Treatment } from "../../data/dataTypes";
import { BirthCalendar } from "../doctor/doctor-detail/BirthCalendar";
import dayjs, { Dayjs } from "dayjs";
import { CalendarIcon } from "../../img/svg/CalendarIcon";
import { DoctorDropDown } from "../doctor/doctor-detail/DoctorDropDown";
import { TickCircle } from "../../img/svg/TickCircle";
import { EditAvatarIcon } from "../../img/svg/EditAvatarIcon";
import { EditPatientIcon } from "../../img/svg/EditPatientIcon";

const StickyTableCell = styled(TableCell)((theme) => ({
  head: {
    left: 0,
    position: "sticky",
    // zIndex: theme.zIndex.appBar + 2,
  },
  body: {
    left: 0,
    position: "sticky",
    // zIndex: theme.zIndex.appBar + 1,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F6F6F9",
    color: "#0D0C0C",
    fontSize: "14px",
    fontFamily: "Be Vietnam Pro",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
    fontFamily: "Be Vietnam Pro",
    height: "auto",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "& td, & th": {
    border: 0,
  },
  "&:first-child td, &:first-child th": {
    paddingTop: "24px",
  },
}));

export interface Test {
  id: string;
  createdAt: string;
  name: string;
}

export const RecordTestTable = ({ tests }: { tests: Test[] }) => {
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
          <StyledTableCell align="left">Ngày xét nghiệm</StyledTableCell>
          <StyledTableCell align="left">Loại xét nghiệm</StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tests.map((row) => (
          <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
              {row.createdAt}
            </StyledTableCell>
            <StyledTableCell align="left">{row.name}</StyledTableCell>
            <StyledTableCell
              sx={{ display: "flex", flexDirection: "flex-end" }}
              align="right"
            >
              <Button
                text="Xem chi tiết"
                onClick={() => {}}
                className="view-record-test-button"
              />
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export interface TreatmentPlan {
  name: string;
}

export const RecordTreatmentPlanTable = ({
  treatmentPlans,
}: {
  treatmentPlans: TreatmentPlan[];
}) => {
  const onClickRemoveOption = () => {};

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
          <StyledTableCell sx={{ width: "auto" }} align="left">
            Điều trị
          </StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {treatmentPlans.map((row, idx) => (
          <StyledTableRow key={idx}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
            <StyledTableCell
              sx={{ display: "flex", flexDirection: "flex-end" }}
              align="right"
            >
              <IconButton onClick={onClickRemoveOption}>
                <CloseIcon />
              </IconButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const RecordTreatmentsTable = ({
  isAddNewTreatment,
  removeNewRow,
  treatments,
}: {
  isAddNewTreatment?: boolean;
  removeNewRow: Function;
  treatments: Treatment[];
}) => {
  const onClickRemoveOption = () => {};

  return (
    <Table
      sx={{ minWidth: 700, borderCollapse: "separate" }}
      aria-label="customized table"
      stickyHeader
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
          <StyledTableCell align="left">Điều trị</StyledTableCell>
          <StyledTableCell align="left">Ngày khám</StyledTableCell>
          <StyledTableCell align="left">Giá tiền</StyledTableCell>
          <StyledTableCell align="left">Ghi chú</StyledTableCell>
          <StyledTableCell align="left">Bác sĩ</StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isAddNewTreatment && <AddRow removeNewRow={removeNewRow} />}
      </TableBody>
    </Table>
  );
};

const AddRow = ({ removeNewRow }: { removeNewRow: any }) => {
  return (
    <>
      {" "}
      <StyledTableCell align="left">
        <VisitDate visitDate="" setVisitDate={() => {}} />
      </StyledTableCell>
      <StyledTableCell align="left">
        <TextBox placeholder="Nhập thông tin điều trị" />
      </StyledTableCell>
      <StyledTableCell align="left">
        <TextBox placeholder="Giá tiền" />
      </StyledTableCell>
      <StyledTableCell align="left">
        <TextBox placeholder="Ghi chú" />
      </StyledTableCell>
      <StyledTableCell align="left">
        <DoctorDropDown setDoctor={() => {}} noTitle />
      </StyledTableCell>
      <StyledTableCell align="right">
        <div className="add-treatment-buttons">
          <IconButton>
            <EditPatientIcon defaultColor="black" selectedColor="black" />
          </IconButton>
          <IconButton onClick={removeNewRow}>
            <CloseIcon />
          </IconButton>
        </div>
      </StyledTableCell>
    </>
  );
};

const VisitDate = ({
  visitDate,
  setVisitDate,
}: {
  visitDate?: string;
  setVisitDate: Function;
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  const onSelectDate = (newDate: Dayjs) => {
    setVisitDate(newDate.format("DD / MM / YYYY"));
  };

  return (
    <div className="visit-date-container">
      <div>{visitDate ? visitDate : "Ngày"}</div>
      <IconButton onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <CalendarIcon defaultColor="#8c949d" selectedColor="#8c949d" />
      </IconButton>
      <BirthCalendar
        selectedDate={visitDate ? dayjs(visitDate) : undefined}
        setSelectedDate={onSelectDate}
        isCalendarOpen={isCalendarOpen}
        customStyle={{ right: "-90%" }}
      />
    </div>
  );
};

const TextBox = ({ placeholder }: { placeholder: string }) => {
  return <input className="treatment-text-box" placeholder={placeholder} />;
};
