import React, { useEffect, useState } from "react";
import { UploadImage } from "../../../img/svg/UploadImage";
import { IconButton } from "@mui/material";
import { Button } from "../../../components/Button";
import { HorizontalBorderLine } from "../../../components/HorizontalBorderLine";
import { SearchBar } from "../../../components/SearchBar";
import { RecordsFilterButtonMenu } from "./RecordsFilterButton";
import { RecordsTable } from "./RecordsTable";
import { useNavigate, useParams } from "react-router-dom";
import { getAge } from "../../../utils/utils";
import { Record } from "../../../data/dataTypes";
import { getAllRecords } from "../../../service/recordService";
import { useThrowAsyncError } from "../../../hooks/useThrowAsyncError";
import { WholeComponentLoadingWrapper } from "../../../components/LoadingWrapper";
import { usePatientData } from "../../../context/PatientDataProvider";
import dayjs from "dayjs";

export const ViewPatientContent = () => {
  const { patientId } = useParams();
  const { patients } = usePatientData();
  const currentPatient = patients.find((patient) => patient.id === patientId);

  const [records, setRecords] = useState<Record[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setIsLoading(true);
        const fetchedRecords = await getAllRecords(patientId as string);
        setRecords(fetchedRecords);
        setIsLoading(false);
      } catch (error) {
        throwAsyncError(
          new Error("Lỗi tải danh sách bệnh án, vui lòng thử lại")
        );
      }
    };
    fetchRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientId]);

  if (!currentPatient) {
    return <div>Error no patient</div>;
  }

  const onClickUpdateButton = () => {
    navigate(`/patients/edit-patient/${patientId}`);
  };

  return (
    <div className="view-patient-container">
      <div className="info-box">
        <div className="info-item-avatar">
          <IconButton>
            <UploadImage width="104px" height="104px" stroke="0.75" />
          </IconButton>
        </div>
        <div className="info-item-name-age">
          <div className="name">{`${currentPatient.firstName} ${currentPatient.lastName}`}</div>
          <div className="age">
            {getAge(dayjs(currentPatient.dateOfBirth, "DD / MM / YYYY"))} tuổi
          </div>
        </div>
        <div className="info-item-button">
          <Button text="Cập nhật" onClick={onClickUpdateButton} />
        </div>
        <HorizontalBorderLine />
        <div className="info-item-details">
          <div className="title">Thông tin :</div>
          <div className="details">
            <PatientInfoItem
              type="Giới tính"
              value={currentPatient.gender === "M" ? "Nam" : "Nữ"}
            />
            <PatientInfoItem type="Địa chỉ" value={currentPatient.address} />
            <PatientInfoItem
              type="Dị ứng"
              value={
                currentPatient.allergies.length > 0 ? (
                  <ListItem list={currentPatient.allergies} />
                ) : (
                  "Không"
                )
              }
            />
            <PatientInfoItem
              type="Số điện thoại"
              value={currentPatient.phoneNumber}
            />
            <PatientInfoItem type="Số hồ sơ" value={currentPatient.id} />
            <PatientInfoItem
              type="Lần cuối khám"
              value={currentPatient.createdAt}
            />
            <PatientInfoItem
              type="Note"
              value={currentPatient.note ? currentPatient.note : "Không"}
            />
          </div>
        </div>
      </div>
      <div className="record-list-box">
        <div className="search-filter-bar">
          <SearchBar
            entities={[]}
            setEntity={() => {}}
            placeholder="Tìm kiếm"
          />
          <RecordsFilterButtonMenu />
        </div>
        <div className="record-table">
          <WholeComponentLoadingWrapper
            isLoading={isLoading}
            loadingText="Đang tải danh sách bệnh án"
          >
            <RecordsTable records={records} />
          </WholeComponentLoadingWrapper>
        </div>
      </div>
    </div>
  );
};

const PatientInfoItem = ({ type, value }: { type: string; value: any }) => {
  return (
    <div className="detail-item">
      <div className="key">
        <div className="key-text">{type}:</div>
      </div>
      <div className="value">{value}</div>
    </div>
  );
};

const ListItem = ({ list }: { list: string[] }) => {
  return (
    <>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
};
