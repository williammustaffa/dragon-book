import React from "react"
import PropTypes from "prop-types";
import { Button, Modal } from "semantic-ui-react"

function ConfirmationModal({ open, title, text, onConfirm, onClose }) {
  function onConfirmClick() {
    if (typeof onConfirm === "function") {
      onConfirm();
    }
  }

  return (
    <Modal size="tiny" open={open} onClose={onClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="red"
          onClick={onClose}
          icon="close"
          labelPosition="right"
          content="No"
        />
        <Button
          secondary
          onClick={onConfirmClick}
          icon="checkmark"
          labelPosition="right"
          content="Yes"
        />
      </Modal.Actions>
    </Modal>
  )
}

ConfirmationModal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
};

export default ConfirmationModal;