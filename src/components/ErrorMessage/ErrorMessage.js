import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

function ErrorMessage({ title, content }) {
  return (
    <Message negative>
      {title && <Message.Header>{title}</Message.Header>}
      <p>{content}</p>
    </Message>
  );
}

ErrorMessage.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default ErrorMessage;