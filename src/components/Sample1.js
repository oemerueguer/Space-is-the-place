import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import Ceres from  '../images/ceres.jpg';

const extra = (
  
  <p>

    <Icon name='Distance'/>
    30000 km
    <Icon name='created_at'/>
    24.02.2021
  </p>
)

const Sample1 = () => (
  

  <Card 
    className='CardLayOut'
    image={Ceres}
    header='Saturn'
    meta='Planet - Medium'
    aligned="center"
    description='Elliot is a sound engineer living in 
    Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
    centered
  />


)

export default Sample1;