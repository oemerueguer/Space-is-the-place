import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Sample2 = () => (
  <Grid celled>
    <Grid.Row class="borderDesign">
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Grid.Column>

    </Grid.Row>
  </Grid>
)

export default Sample2;
