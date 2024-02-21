import React from "react";
import { UploadImage } from "../../../img/svg/UploadImage";
import { IconButton } from "@mui/material";
import { Button } from "../../../components/Button";
import { HorizontalBorderLine } from "../../../components/HorizontalBorderLine";
import { SearchBar } from "../../../components/SearchBar";
import { RecordsFilterButtonMenu } from "./RecordsFilterButton";
import { RecordsTable } from "./RecordsTable";

const MOCK_RECORDS = [
  {
    id: "1",
    createdAt: "07 / 12/ 2022",
    diagnosis: "Sâu răng",
  },
  {
    id: "2",
    createdAt: "06 / 12/ 2022",
    diagnosis: "Sâu răng",
  },
  {
    id: "3",
    createdAt: "05 / 12/ 2022",
    diagnosis: "Sâu răng",
  },
];

export const ViewPatientContent = () => {
  return (
    <div className="view-patient-container">
      <div className="info-box">
        <div className="info-item-avatar">
          <IconButton>
            <UploadImage width="104px" height="104px" stroke="0.75" />
          </IconButton>
        </div>
        <div className="info-item-name-age">
          <div className="name">Triết Phạm</div>
          <div className="age">25 tuổi</div>
        </div>
        <div className="info-item-button">
          <Button text="Cập nhật" />
        </div>
        <HorizontalBorderLine />
        <div className="info-item-details">
          <div className="title">Thông tin :</div>
          <div className="details">
            <PatientInfoItem type="Giới tính" value="Nam" />
            <PatientInfoItem
              type="Địa chỉ"
              value="281/24 Lê Văn Sỹ, phường 1, quận Tân Bình, TP.HCM."
            />
            <PatientInfoItem type="Dị ứng" value="Không" />
            <PatientInfoItem type="Số điện thoại" value="+84 854 897 802" />
            <PatientInfoItem type="Số hồ sơ" value="22083782" />
            <PatientInfoItem type="Lần cuối khám" value="16 / 12 / 2022" />
            <PatientInfoItem type="Note" value="Không" />
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
          <RecordsTable records={MOCK_RECORDS} />
        </div>
      </div>
    </div>
  );
};

const PatientInfoItem = ({ type, value }: { type: string; value: string }) => {
  return (
    <div className="detail-item">
      <div className="key">
        <div className="key-text">{type}:</div>
      </div>
      <div className="value">{value}</div>
    </div>
  );
};
