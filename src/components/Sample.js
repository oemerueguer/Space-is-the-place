import React from 'react';
import { Grid, Image } from 'semantic-ui-react';


const Sample = () => (
  <Grid inverted>
    <Grid.Column width={4} computer={4} mobile={12}>
      <Image src='#' />
    </Grid.Column>
    <Grid.Column width={9} computer={6} mobile={12}>
      <h1>Saturn</h1>
      <p>30.000km distance to earth</p>
    </Grid.Column>
    <Grid.Column width={3} computer={2} mobile={12}>
      <p>30000 km to Earth</p>
    </Grid.Column>
  </Grid>
)

export default Sample;
