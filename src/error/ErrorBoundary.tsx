import React, { PropsWithChildren } from "react";
import { ErrorModal } from "./ErrorModal";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | undefined;
}

export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: undefined };
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  handleClose() {
    this.setState({ hasError: false });
  }

  render() {
    // Render the children inside a fragment and the modal
    return (
      <>
        {this.props.children}
        {this.state.hasError && (
          <ErrorModal
            open
            handleClose={this.handleClose}
            errorText={this.state.error ? this.state.error.message : "Error"}
          />
        )}
      </>
    );
  }
}
