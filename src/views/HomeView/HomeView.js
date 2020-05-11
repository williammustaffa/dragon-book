import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDragons } from "store/actions";
import { Grid, Message } from "semantic-ui-react";
import { DragonCard } from "components/DragonCard";
import { Spinner } from "components/Spinner";
import { ErrorMessage } from "components/ErrorMessage";
import { push } from "connected-react-router";

function HomeView() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  // Get data
  const { dragons, isFetching, errorMessage } = useSelector(function (state) {
    return {
      dragons: state.dragons.items,
      isFetching: state.dragons.isFetching,
      errorMessage: state.dragons.errorMessage,
    }
  });

  // Fetch dragons list
  useEffect(function () {
    dispatch(fetchDragons());
  }, [dispatch]);

  // Render dragon card
  const renderDragonCard = dragon => (
    <Grid.Column key={dragon.id} stretched mobile={16} tablet={8} computer={4}>
      <DragonCard dragon={dragon} />
    </Grid.Column>
  );

  // Handle empty database
  const emptyListMessage = (
    <Grid.Column>
      <Message>
        <Message.Header>Empty database</Message.Header>
        <p>No dragons were found in the database. Please go to <span className="clickable link" onClick={navigateTo("/dragon/add")}>"add dragon"</span> page and start registering.</p>
      </Message>
    </Grid.Column>
  );

  // Handle fetching
  if (isFetching) {
    return <Spinner />;
  }

  // Handle error
  if (errorMessage) {
    return <ErrorMessage title="Error loading the page" content={errorMessage} />
  }

  return (
    <Grid>
      {
        dragons.length ?
        dragons.map(renderDragonCard) :
        emptyListMessage
      }
    </Grid>
  );
}

export default HomeView;