import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "danger", children }) => {
    return (
        <Alert variant={variant} style={{ fontSize: 20,marginLeft:60,marginRight:60 }}>
          <strong>{children}</strong>
        </Alert>
      );
};

export default ErrorMessage;