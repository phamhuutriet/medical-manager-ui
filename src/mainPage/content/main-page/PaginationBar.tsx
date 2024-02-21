import React from "react";
import { Button } from "../../../components/Button";
import { ArrowRightIcon } from "../../../img/svg/ArrowRightIcon";
import { ArrowLeftIcon } from "../../../img/svg/ArrowLeftIcon";

export const PaginationBar = ({
  numOfPages,
  selectedPage,
  onClickPage,
  setCurPage,
}: {
  numOfPages: number;
  selectedPage: number;
  onClickPage: any;
  setCurPage: any;
}) => {
  const pageElements = Array.from(
    { length: numOfPages },
    (value, index) => index
  );
  const isReachLeftmost = selectedPage === 0;
  const isReachRightmost = selectedPage === numOfPages - 1;

  return (
    <div className="page-container">
      <Button
        className="arrow-right"
        icon={
          <ArrowLeftIcon
            defaultColor={isReachLeftmost ? "#A5A7AF" : "#0D0C0C"}
            selectedColor={isReachLeftmost ? "#0D0C0C" : "#A5A7AF"}
          />
        }
        disable={isReachLeftmost}
        onClick={() => setCurPage(Math.max(selectedPage - 1, 0))}
      />
      {pageElements.map((value, idx) => {
        return (
          <Button
            key={idx}
            onClick={() => onClickPage(idx)}
            text={(idx + 1).toString()}
            className={
              selectedPage === idx ? "page-number" : "page-number-unselected"
            }
            innerButtonClassName={
              selectedPage === idx ? "" : "page-number-unselected-inner"
            }
          />
        );
      })}
      <Button
        className="arrow-right"
        icon={
          <ArrowRightIcon
            defaultColor={isReachRightmost ? "#A5A7AF" : "#0D0C0C"}
            selectedColor={isReachRightmost ? "#0D0C0C" : "#A5A7AF"}
          />
        }
        disable={isReachRightmost}
        onClick={() => setCurPage(Math.min(selectedPage + 1, numOfPages - 1))}
      />
    </div>
  );
};
