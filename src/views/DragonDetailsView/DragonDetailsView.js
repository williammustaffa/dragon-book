import React, { useEffect } from "react";
import { Grid, Image, Header, Divider, Button, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDragon } from "store/actions";
import { Spinner } from "components/Spinner";
import { ErrorMessage } from "components/ErrorMessage";
import { push } from "connected-react-router";
import imageNotAvailable from "assets/images/imageNotAvailable.png";

function DragonDetailsView(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  useEffect(function () {
    dispatch(fetchDragon(id));
  }, [dispatch, id]);

  const { dragon, isFetching, errorMessage } = useSelector(function (state) {
    return {
      dragon: state.dragon.details,
      isFetching: state.dragon.isFetching,
      errorMessage: state.dragon.errorMessage 
    }
  });

  // Handle loading
  if (isFetching) {
    return <Spinner />;
  }

  // Handle error
  if (errorMessage) {
    return <ErrorMessage title="Error loading the page" content={errorMessage} />
  }

  return (
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image
          src={dragon.imageUrl || imageNotAvailable}
          label={{
            as: 'a',
            color: dragon.typeColor,
            content: dragon.type,
            attached: "bottom",
            className: "text-right text-uppercase"
          }}
        />
        <Button
          color="red"
          fluid
          onClick={navigateTo(dragon.updateUrl)}
          className="margin-top"
        >
          <Icon name="edit"/> Edit
        </Button>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={12}>
        <Header as="h2">{dragon.name}</Header>
        Created at {dragon.creationDate}
        <Divider />
        <p>{dragon.history}</p>
      </Grid.Column>
    </Grid>
  );
}

export default DragonDetailsView;