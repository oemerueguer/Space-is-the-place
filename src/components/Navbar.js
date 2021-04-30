import { useEffect, useState } from 'react'
import { Menu, Sticky } from 'semantic-ui-react'
import Logo from '../images/discover-logo.png'
import './navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('home')

useEffect(() => {
  setActiveItem(`${window.location.pathname.split('/')[1]}`)
}, [])

  return (
    <Menu inverted fluid widths={6} fixed='top' className="spaceNavBar">
      <Menu.Item >
        <img className='logo' src={Logo} />
      </Menu.Item>
      <Menu.Item as={Link}
        to='/home'
        name='home'
        active={activeItem === 'home'}
        onClick={(() => setActiveItem('home'))}
      />

      <Menu.Item as={Link}
        to='/satellites'
        name='satellites'
        active={activeItem === 'satellites'}
        onClick={(() => setActiveItem('satellites'))}
      />
      <Menu.Item as={Link}
        to='/moons'
        name='moons'
        active={activeItem === 'moons'}
        onClick={(() => setActiveItem('moons'))}
      />
      <Menu.Item as={Link}
        to='/planets'
        name='planets'
        active={activeItem === 'planets'}
        onClick={(() => setActiveItem('planets'))}
      />
      <Menu.Item as={Link}
        to='/stars'
        name='stars'
        active={activeItem === 'stars'}
        onClick={(() => setActiveItem('stars'))}
      />
    </Menu>
  )
}