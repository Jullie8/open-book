import React from 'react';
import { Header, Image } from 'semantic-ui-react'

const HeaderComponent = () => (
    <Header as='h2'>
        <Image className='book-img' circular src='https://i1.wp.com/www.spotlightfirst.com/wp-content/uploads/2018/01/cardi.jpg?resize=500%2C440' /> Cardi B
  </Header>
)

export default HeaderComponent;