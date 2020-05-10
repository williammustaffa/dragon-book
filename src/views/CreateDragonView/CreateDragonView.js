import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { DragonForm } from "components/DragonForm";
import { Spinner } from "components/Spinner";

function CreateDragonView() {
  const dispatch = useDispatch();
  function onSubmit(data) {
    // dispatch(createPost({
    //   ...data,
    //   author: user.profile.id
    // }));
  }

  // if (isFetching) {
  //   return <Spinner />;
  // }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Header as="h1" textAlign="center" className="page-title">Add new dragon</Header>
          <DragonForm onSubmit={onSubmit}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CreateDragonView;