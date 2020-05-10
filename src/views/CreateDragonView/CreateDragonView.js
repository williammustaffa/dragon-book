import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { DragonForm } from "components/DragonForm";
import { Spinner } from "components/Spinner";
import { createDragon } from "store/actions";

function CreateDragonView() {
  const dispatch = useDispatch();

  const { isFetching, errorMessage } = useSelector(function (state) {
    return {
      isFetching: state.dragon.isFetching,
      errorMessage: state.dragon.errorMessage,
    };
  });

  function onSubmit(data) {
    dispatch(createDragon(data));
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Header as="h1" textAlign="center" className="page-title">Add new dragon</Header>
          <DragonForm 
            onSubmit={onSubmit}
            loading={isFetching}
            errorMessage={errorMessage}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CreateDragonView;