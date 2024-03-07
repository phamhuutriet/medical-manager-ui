import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "../../components/Button";

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
          <StyledTableCell sx={{ minWidth: "120px" }} align="left">
            Ngày xét nghiệm
          </StyledTableCell>
          <StyledTableCell sx={{ minWidth: "120px" }} align="left">
            Loại xét nghiệm
          </StyledTableCell>
          <StyledTableCell
            sx={{ width: "100%" }}
            align="right"
          ></StyledTableCell>
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
          <StyledTableCell sx={{ minWidth: "120px" }} align="left">
            Điều trị
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {treatmentPlans.map((row, idx) => (
          <StyledTableRow key={idx}>
            <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};
