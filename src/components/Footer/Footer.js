import React from "react";
import { Grid, Segment, Container, } from "semantic-ui-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Segment inverted vertical id="footer">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="center">
              Dragons Book © {year}
            </Grid.Column>
          </Grid.Row>
          </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;