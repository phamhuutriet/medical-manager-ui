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
import { EditPatientIcon } from "../../img/svg/EditPatientIcon";
import { ViewRecordTestModal } from "./AddRecordTestModal";

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
  const [open, setOpen] = React.useState(false);
  const [selectedRecordTest, setSelectedRecordTest] = React.useState();

  const onClickViewMoreRecordTest = (test: any) => {
    setSelectedRecordTest(test);
    setOpen(true);
  };

  return (
    <Table
      sx={{ minWidth: 700, borderCollapse: "separate" }}
      aria-label="customized table"
    >
      {selectedRecordTest && (
        <ViewRecordTestModal
          open={open}
          handleClose={() => setOpen(false)}
          recordTest={selectedRecordTest}
        />
      )}

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
                onClick={() => onClickViewMoreRecordTest(row)}
                className="view-record-test-button"
              />
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const AddNewTreatmentPlanRow = ({
  removeNewRow,
  setTreatmentPlans,
}: {
  removeNewRow: any;
  setTreatmentPlans: Function;
}) => {
  const [name, setName] = React.useState("");

  const onClickAddNewTreatmentPlan = () => {
    setTreatmentPlans((prev: any) => [...prev, name]);
    removeNewRow();
  };

  return (
    <StyledTableRow>
      <StyledTableCell align="left">
        <TextBox
          placeholder="Thêm điều trị mới"
          text={name}
          setText={setName}
        />
      </StyledTableCell>
      <StyledTableCell className="add-treatment-buttons" align="right">
        <IconButton onClick={onClickAddNewTreatmentPlan} disabled={name === ""}>
          <EditPatientIcon
            defaultColor="var(--color-border-secondary)"
            selectedColor="black"
            isSelected={name !== ""}
          />
        </IconButton>
        <IconButton onClick={removeNewRow}>
          <CloseIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export const RecordTreatmentPlanTable = ({
  isAddNewTreatmentPlan,
  setIsAddNewTreatmentPlan,
  treatmentPlans,
  setTreatmentPlans,
}: {
  isAddNewTreatmentPlan: boolean;
  setIsAddNewTreatmentPlan: Function;
  treatmentPlans: string[];
  setTreatmentPlans: Function;
}) => {
  const onClickRemoveTreatmentPlan = (treatment: string) => {
    setTreatmentPlans((prev: any) =>
      prev.filter((treatmentPlan: string) => treatmentPlan !== treatment)
    );
  };

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
          <StyledTableCell align="left">Điều trị</StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {treatmentPlans.map((row, idx) => (
          <StyledTableRow key={idx}>
            <StyledTableCell component="th" scope="row">
              {row}
            </StyledTableCell>
            <StyledTableCell
              sx={{ display: "flex", flexDirection: "flex-end" }}
              align="right"
            >
              <IconButton onClick={() => onClickRemoveTreatmentPlan(row)}>
                <CloseIcon />
              </IconButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
        {isAddNewTreatmentPlan && (
          <AddNewTreatmentPlanRow
            setTreatmentPlans={setTreatmentPlans}
            removeNewRow={() => setIsAddNewTreatmentPlan(false)}
          />
        )}
      </TableBody>
    </Table>
  );
};

export const RecordTreatmentsTable = ({
  isAddNewTreatment,
  removeNewRow,
  treatments,
  setTreatments,
  setNeedUpdateTreatments,
}: {
  isAddNewTreatment?: boolean;
  removeNewRow: Function;
  treatments: Treatment[];
  setTreatments: Function;
  setNeedUpdateTreatments: Function;
}) => {
  console.log("TREATMENTS:", treatments);
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
          <StyledTableCell align="left">Ngày khám</StyledTableCell>
          <StyledTableCell align="left">Điều trị</StyledTableCell>
          <StyledTableCell align="left">Giá tiền</StyledTableCell>
          <StyledTableCell align="left">Ghi chú</StyledTableCell>
          <StyledTableCell align="left">Bác sĩ</StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {treatments.map((treatment) => (
          <StyledTableRow>
            <StyledTableCell align="left">{treatment.date}</StyledTableCell>
            <StyledTableCell align="left">{treatment.name}</StyledTableCell>
            <StyledTableCell align="left">{treatment.cost}</StyledTableCell>
            <StyledTableCell align="left">{treatment.note}</StyledTableCell>
            <StyledTableCell align="left">{`${treatment.doctor.firstName} ${treatment.doctor.lastName}`}</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
        ))}
        {isAddNewTreatment && (
          <AddRow
            removeNewRow={removeNewRow}
            setTreatments={setTreatments}
            setNeedUpdateTreatments={setNeedUpdateTreatments}
          />
        )}
      </TableBody>
    </Table>
  );
};

const AddRow = ({
  removeNewRow,
  setTreatments,
  setNeedUpdateTreatments,
}: {
  removeNewRow: any;
  setTreatments: Function;
  setNeedUpdateTreatments: Function;
}) => {
  const [date, setVisitDate] = React.useState();
  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState("");
  const [note, setNote] = React.useState("");
  const [doctor, setDoctor] = React.useState();

  const onClickAddNewTreatment = () => {
    setNeedUpdateTreatments((prev: any) => [
      ...prev,
      {
        date,
        name,
        cost,
        note,
        doctor,
      },
    ]);
    setTreatments((prev: any) => [
      ...prev,
      {
        date,
        name,
        cost,
        note,
        doctor,
      },
    ]);
    removeNewRow();
  };

  return (
    <StyledTableRow>
      {" "}
      <StyledTableCell align="left">
        <VisitDate visitDate={date} setVisitDate={setVisitDate} />
      </StyledTableCell>
      <StyledTableCell align="left">
        <TextBox
          text={name}
          setText={setName}
          placeholder="Nhập thông tin điều trị"
        />
      </StyledTableCell>
      <StyledTableCell align="left">
        <TextBox text={cost} setText={setCost} placeholder="Giá tiền" />
      </StyledTableCell>
      <StyledTableCell align="left">
        <TextBox text={note} setText={setNote} placeholder="Ghi chú" />
      </StyledTableCell>
      <StyledTableCell align="left">
        <DoctorDropDown doctor={doctor} setDoctor={setDoctor} noTitle />
      </StyledTableCell>
      <StyledTableCell align="right">
        <div className="add-treatment-buttons">
          <IconButton onClick={onClickAddNewTreatment}>
            <EditPatientIcon defaultColor="black" selectedColor="black" />
          </IconButton>
          <IconButton onClick={removeNewRow}>
            <CloseIcon />
          </IconButton>
        </div>
      </StyledTableCell>
    </StyledTableRow>
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
    <div className={`visit-date-container ${visitDate && "text-box-filled"}`}>
      <div>{visitDate ? visitDate : "Ngày"}</div>
      <IconButton onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
        <CalendarIcon
          defaultColor="#8c949d"
          selectedColor="black"
          isSelected={visitDate !== undefined}
        />
      </IconButton>
      <BirthCalendar
        selectedDate={
          visitDate ? dayjs(visitDate, "DD / MM / YYYY") : undefined
        }
        setSelectedDate={onSelectDate}
        isCalendarOpen={isCalendarOpen}
        customStyle={{ left: 0 }}
      />
    </div>
  );
};

const TextBox = ({
  placeholder,
  text,
  setText,
}: {
  placeholder: string;
  text: string;
  setText: Function;
}) => {
  return (
    <input
      className={`treatment-text-box ${text && "text-box-filled"}`}
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
