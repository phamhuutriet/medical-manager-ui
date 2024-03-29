import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import CheckBox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup, IconButton } from "@mui/material";
import { EditPatientIcon } from "../../../img/svg/EditPatientIcon";
import { CalendarIcon } from "../../../img/svg/CalendarIcon";
import { BirthCalendar } from "./BirthCalendar";
import { CheckedBox } from "../../../img/svg/CheckedBox";
import { UncheckBox } from "../../../img/svg/UncheckBox";
import { CloseIcon } from "../../../img/svg/Close";
import { Button } from "../../../components/Button";
import { AddIcon } from "../../../img/svg/AddIcon";
import { Box, BoxItem } from "./Styles";

export const TextInputBox = ({
  text,
  setText,
  boxTitle,
  placeholder,
  icon,
  className,
  isPassword,
  isError,
  errorMessage,
  onClickIcon,
  onEnter,
  id,
}: {
  text: any;
  setText: Function;
  boxTitle: string;
  placeholder?: string;
  icon?: any;
  className?: string;
  isPassword?: boolean;
  isError?: boolean;
  errorMessage?: any;
  onClickIcon?: any;
  onEnter?: any;
  id?: string;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const isActive = isFocus;

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
        onEnter();
      }
    };

    if (id && document.getElementById(id)) {
      (document.getElementById(id) as any).addEventListener(
        "keydown",
        handleKeyPress
      );
    }

    return () => {
      if (id && document.getElementById(id)) {
        (document.getElementById(id) as any).removeEventListener(
          "keydown",
          handleKeyPress
        );
      }
    };
  }, [id, onEnter]);

  return (
    <BoxItem id={id} className={`box-item ${className}`}>
      <div className="title">{boxTitle}</div>
      <div
        className={`content ${isActive && "box-item-focus"} ${
          isError && "box-item-error"
        }`}
      >
        <input
          value={text}
          className="content-input"
          placeholder={placeholder ? placeholder : "Nhập thông tin"}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          type={isPassword ? "password" : ""}
        />
        <IconButton onClick={onClickIcon ? onClickIcon : () => {}}>
          {icon ? (
            React.cloneElement(icon, { isSelected: isActive })
          ) : (
            <EditPatientIcon
              defaultColor="#8C949D"
              selectedColor={isError ? "var(--color-text-error)" : "black"}
              isSelected={isActive}
            />
          )}
        </IconButton>
      </div>
      {isError && <div className="error-message">{errorMessage}</div>}
    </BoxItem>
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
    <Box>
      <TextInputBox
        text={entity ? entity.firstName : ""}
        setText={setFirstName}
        boxTitle="Tên"
        placeholder="Tên"
      />
      <TextInputBox
        text={entity ? entity.lastName : ""}
        setText={setLastName}
        boxTitle="Họ"
        placeholder="Họ"
      />
    </Box>
  );
};

export const BirthBox = ({
  title,
  dateOfBirth,
  setDateOfBirth,
}: {
  title?: string;
  dateOfBirth: string;
  setDateOfBirth: Function;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedDate = dayjs(dateOfBirth, "DD / MM / YYYY");
  const defaultDate = dayjs();

  const setSelectedDate = (newDate: Dayjs) => {
    setDateOfBirth(newDate.format("DD / MM / YYYY"));
  };

  return (
    <div className="box-item" style={{ position: "relative" }}>
      <div className="title">{title ? title : "Ngày sinh"}</div>
      <div className="content">
        <div style={{ width: "100%" }}>
          {dateOfBirth ? (
            selectedDate.format("DD / MM / YYYY")
          ) : (
            <div style={{ color: "#8c949d" }}>DD / MM / YYYY</div>
          )}
        </div>
        <IconButton sx={{ height: "100%" }} onClick={() => setIsOpen(!isOpen)}>
          <CalendarIcon defaultColor="#0D0C0C" selectedColor="#0D0C0C" />
        </IconButton>
      </div>
      <BirthCalendar
        selectedDate={dateOfBirth ? selectedDate : defaultDate}
        setSelectedDate={setSelectedDate}
        isCalendarOpen={isOpen}
        customStyle={{ zIndex: "3" }}
      />
    </div>
  );
};

export const PhoneNumberBox = ({
  phoneNumber,
  setPhoneNumber,
}: {
  phoneNumber: string;
  setPhoneNumber: Function;
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
                key={`${option}-${index}`}
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
