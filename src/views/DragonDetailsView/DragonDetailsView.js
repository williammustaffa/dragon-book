import React, { useEffect } from "react";
import { Grid, Image, Header, Divider } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDragon } from "store/actions";
import { Spinner } from "components/Spinner";

function DragonDetailsView(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(fetchDragon(id));
  }, [dispatch]);

  const { dragon, isFetching, errorMessage } = useSelector(function (state) {
    return {
      dragon: state.dragon.details,
      isFetching: state.dragon.isFetching,
      errorMessage: state.dragon.errorMessage 
    }
  });

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image
          src={dragon.imageUrl}
          label={{
            as: 'a',
            color: dragon.typeColor,
            content: dragon.type,
            attached: "bottom",
            className: "text-right text-uppercase"
          }}
        />
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