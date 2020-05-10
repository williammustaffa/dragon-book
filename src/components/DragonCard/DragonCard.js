import React from "react";
import PropTypes from "prop-types";
import HTMLEllipsis from "react-lines-ellipsis/lib/html"
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { Card, Label } from "semantic-ui-react";

function DragonCard({ dragon }) {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  return (
    <Card fluid className="dragon-card" onClick={navigateTo(dragon.url)}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${dragon.imageUrl})` }}
      ></div>
      <Card.Content>
        <Card.Header onClick={navigateTo(dragon.url)}>
          <span >{dragon.name}</span>
        </Card.Header>
        <Card.Meta>
          Created at <span className="link static">{dragon.creationDate}</span>
        </Card.Meta>
        <Card.Description>
          <HTMLEllipsis
            unsafeHTML={dragon.shortDescription}
            maxLine="3"
            ellipsis="..."
            basedOn="letters"
          />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label
          className="text-right text-uppercase"
          attached="bottom"
          color={dragon.typeColor}
          size="small"
        >
          {dragon.type}
        </Label>
      </Card.Content>
    </Card>
  );
}

DragonCard.propTypes = {
  dragon: PropTypes.object.isRequired,
};

export default DragonCard;