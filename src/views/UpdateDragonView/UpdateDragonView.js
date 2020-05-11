import React, { useEffect, useState } from "react";
import { Grid, Header, Button, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { DragonForm } from "components/DragonForm";
import { Spinner } from "components/Spinner";
import { ErrorMessage } from "components/ErrorMessage";
import { ConfirmationModal } from "components/ConfirmationModal";
import { fetchDragon, updateDragon, deleteDragon } from "store/actions";

function UpdateDragonView(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();

  // Fetch dragon data
  useEffect(function () {
    dispatch(fetchDragon(id));
  }, [dispatch, id]);

  // Map state to props
  const { dragon, isFetching, errorMessage } = useSelector(function (state) {
    return {
      dragon: state.dragon.details,
      isFetching: state.dragon.isFetching,
      errorMessage: state.dragon.errorMessage,
    };
  });

  // Deletion modal
  const [showDeleteModal, setShowDeleteModal] = useState();

  // Open deletion modal
  function openDeleteModal() {
    setShowDeleteModal(true);
  }

  // Close deletion modal
  function closeDeleteModal() {
    setShowDeleteModal(false);
  }

  // Submit dragon update form
  function onSubmit(data) {
    dispatch(updateDragon(data));
  }

  // Delete dragon
  function onDelete() {
    dispatch(deleteDragon(dragon.id));
  }

  // On deletion modal confirm
  function onConfirmDeleteModal() {
    onDelete();
    closeDeleteModal();
  }

  // Handle spinner
  if (isFetching) {
    return <Spinner />;
  }

  // Handle error message
  if (errorMessage) {
    return <ErrorMessage title="Error loading the page" content={errorMessage} />
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Header as="h1" textAlign="center" className="page-title">Update dragon</Header>
          <DragonForm 
            onSubmit={onSubmit}
            dragon={dragon}
            loading={isFetching}
            errorMessage={errorMessage}
          />
          <Button className="margin-top" onClick={openDeleteModal} fluid color="red">
            <Icon name="warning sign" />Delete
          </Button>
        </Grid.Column>
      </Grid.Row>
      <ConfirmationModal
        title={`Delete dragon "${dragon.name}"`}
        text={`Are you sure you want to delete this dragon?`}
        open={showDeleteModal}
        onConfirm={onConfirmDeleteModal}
        onClose={closeDeleteModal}
      />
    </Grid>
  );
}

export default UpdateDragonView;