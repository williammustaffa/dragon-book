import React from "react";
import PropTypes from "prop-types";
import HTMLEllipsis from "react-lines-ellipsis/lib/html"
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { Card, Label, Icon } from "semantic-ui-react";
import imageNotAvailable from "assets/images/imageNotAvailable.png";

function DragonCard({ dragon }) {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  return (
    <Card fluid className="dragon-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${dragon.imageUrl || imageNotAvailable})` }}
      >
        <div className="card-actions">
          <div className="card-action clickable" onClick={navigateTo(dragon.detailsUrl)}>
            <Icon name="eye"/>
          </div>
          <div className="card-action clickable" onClick={navigateTo(dragon.updateUrl)}>
            <Icon name="edit"/>
          </div>
        </div>
      </div>
      <Card.Content className="clickable" onClick={navigateTo(dragon.detailsUrl)}>
        <Card.Header>
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
      <Card.Content extra onClick={navigateTo(dragon.detailsUrl)}>
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