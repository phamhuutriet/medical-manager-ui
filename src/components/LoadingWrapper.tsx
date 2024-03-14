import React from "react";
import { Spinner } from "./Spinner";
import "./Loading.css";

interface WholeComponentLoadingWrapperProps extends React.PropsWithChildren {
  isLoading: boolean;
  loadingText?: string;
}

export const WholeComponentLoadingWrapper = ({
  isLoading,
  children,
  loadingText,
}: WholeComponentLoadingWrapperProps) => {
  if (isLoading) {
    return (
      <div className="loading-container">
        {loadingText}
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
};

export const ModalLoadingWrapper = () => {};
