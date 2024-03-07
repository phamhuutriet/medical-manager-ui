import React, { useEffect, useState } from "react";
import { FormControlLabel, FormGroup, IconButton } from "@mui/material";
import { EditPatientIcon } from "../../../img/svg/EditPatientIcon";
import { CalendarIcon } from "../../../img/svg/CalendarIcon";
import { BirthCalendar } from "./BirthCalendar";
import dayjs, { Dayjs } from "dayjs";
import CheckBox from "@mui/material/Checkbox";
import { CheckedBox } from "../../../img/svg/CheckedBox";
import { UncheckBox } from "../../../img/svg/UncheckBox";
import { CloseIcon } from "../../../img/svg/Close";
import { Button } from "../../../components/Button";
import { AddIcon } from "../../../img/svg/AddIcon";

export const TextInputBox = ({
  text,
  setText,
  boxTitle,
  placeholder,
  icon,
  className,
}: {
  text: any;
  setText: Function;
  boxTitle: string;
  placeholder?: string;
  icon?: any;
  className?: string;
}) => {
  return (
    <div className={`box-item ${className}`}>
      <div className="title">{boxTitle}</div>
      <div className="content">
        <input
          value={text}
          className="content-input"
          placeholder={placeholder ? placeholder : "Nhập thông tin"}
          onChange={(e) => setText(e.target.value)}
        />
        <IconButton>
          {icon ? (
            React.cloneElement(icon)
          ) : (
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#586EE0" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export const NameBox = ({
  entity,
  setFirstName,
  setLastName,
}: {
  entity?: any;
  setFirstName: Function;
  setLastName: Function;
}) => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Họ</div>
        <div className="content">
          <input
            value={entity ? entity.firstName : ""}
            className="content-input"
            placeholder="Họ"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <IconButton>
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#586EE0" />
          </IconButton>
        </div>
      </div>
      <div className="box-item">
        <div className="title">Tên</div>
        <div className="content">
          <input
            value={entity ? entity.lastName : ""}
            className="content-input"
            placeholder="Tên"
            onChange={(e) => setLastName(e.target.value)}
          />
          <IconButton>
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#586EE0" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const BirthBox = ({
  dateOfBirth,
  setDateOfBirth,
  isCalendarOpen,
  setIsCalendarOpen,
}: {
  dateOfBirth: string;
  setDateOfBirth: Function;
  isCalendarOpen: boolean;
  setIsCalendarOpen: Function;
}) => {
  const selectedDate = dayjs(dateOfBirth, "DD / MM / YYYY");
  const defaultDate = dayjs("02 / 01 / 1991");

  const setSelectedDate = (newDate: Dayjs) => {
    setDateOfBirth(newDate.format("DD / MM / YYYY"));
  };

  return (
    <div className="box">
      <div className="box-item" style={{ position: "relative" }}>
        <div className="title">Ngày sinh</div>
        <div className="content">
          <div style={{ width: "100%" }}>
            {dateOfBirth ? (
              selectedDate.format("DD / MM / YYYY")
            ) : (
              <div style={{ color: "#8c949d" }}>DD / MM / YYYY</div>
            )}
          </div>
          <IconButton
            sx={{ height: "100%" }}
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            <CalendarIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
        </div>
        <BirthCalendar
          selectedDate={dateOfBirth ? selectedDate : defaultDate}
          setSelectedDate={setSelectedDate}
          isCalendarOpen={isCalendarOpen}
        />
      </div>
    </div>
  );
};

export const PhoneNumberBox = ({
  phoneNumber,
  setPhoneNumber,
  isIconDisplay,
}: {
  phoneNumber: string;
  setPhoneNumber: Function;
  isIconDisplay: boolean;
}) => {
  return (
    <div className="box">
      <div className="box-item">
        <div className="title">Số điện thoại</div>
        <div className="content">
          <input
            value={phoneNumber}
            placeholder="+84 999 999 999"
            className="content-input"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <IconButton
            sx={{
              height: "100%",
              display: isIconDisplay ? "" : "none",
            }}
          >
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

interface Option {
  text: string;
  isSelected: boolean;
}

export const MultiOptionBox = ({
  options,
  setOptions,
}: {
  options: string[];
  setOptions: Function;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    options.map((option) => ({
      text: option,
      isSelected: true,
    }))
  );
  const [isAddNewOption, setIsAddNewOption] = useState<boolean>(false);
  const [currentNewOption, setCurrentNewOption] = useState<string>("");

  useEffect(() => {
    setOptions(
      selectedOptions
        .filter((option) => option.isSelected)
        .map((option) => option.text)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  const handleOnclickOption = (index: number) => {
    setSelectedOptions(
      selectedOptions.map((option, idx) => {
        if (idx === index) {
          return { ...option, isSelected: !option.isSelected };
        }
        return option;
      })
    );
  };

  const onClickRemoveOption = (index: number) => {
    setSelectedOptions(selectedOptions.filter((option, idx) => idx !== index));
  };

  const onClickAddOption = (label: string) => {
    setIsAddNewOption(false);
    setSelectedOptions([...selectedOptions, { text: label, isSelected: true }]);
    setCurrentNewOption("");
  };

  const onClickCancelAddOption = () => {
    setCurrentNewOption("");
    setIsAddNewOption(false);
  };

  return (
    <div className="box-item multi-option">
      <div className="title">Dị ứng</div>
      <div className="multi-option-box">
        <FormGroup>
          {selectedOptions.map((option: Option, index: number) => {
            return (
              <div
                className={`multi-option-box-item ${
                  !option.isSelected && "multi-option-box-item-unchecked"
                }`}
              >
                <FormControlLabel
                  control={
                    <CheckBox
                      checkedIcon={<CheckedBox />}
                      icon={<UncheckBox />}
                      checked={option.isSelected}
                    />
                  }
                  label={option.text}
                  onClick={() => handleOnclickOption(index)}
                />
                <IconButton onClick={() => onClickRemoveOption(index)}>
                  <CloseIcon />
                </IconButton>
              </div>
            );
          })}
        </FormGroup>
      </div>
      {options.length > 0 && !isAddNewOption ? (
        <Button
          className="add-button"
          text="Thêm"
          icon={<AddIcon defaultColor="#586EE0" selectedColor="#586EE0" />}
          onClick={() => setIsAddNewOption(true)}
        />
      ) : (
        <div className="content">
          <input
            value={currentNewOption}
            placeholder="Điền dị ứng"
            className="content-input"
            onChange={(e) => setCurrentNewOption(e.target.value)}
          />
          <IconButton
            sx={{ height: "100%" }}
            onClick={() => onClickAddOption(currentNewOption)}
          >
            <EditPatientIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
          </IconButton>
          <IconButton sx={{ height: "100%" }} onClick={onClickCancelAddOption}>
            <CloseIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};
