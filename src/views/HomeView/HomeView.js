import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDragons } from "store/actions";
import { Grid } from "semantic-ui-react";
import { DragonCard } from "components/DragonCard";

function HomeView() {
  const dispatch = useDispatch();

  const { dragons } = useSelector(function (state) {
    return {
      dragons: state.dragons.items,
    }
  });

  useEffect(function () {
    dispatch(fetchDragons());
  }, [dispatch]);

  const renderDragonCard = dragon => (
    <Grid.Column key={dragon.id} stretched mobile={16} tablet={8} computer={4}>
      <DragonCard dragon={dragon} />
    </Grid.Column>
  );

  return (
    <Grid>
      {dragons.map(renderDragonCard)}
    </Grid>
  );
}

export default HomeView;