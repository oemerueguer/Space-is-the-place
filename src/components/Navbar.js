import { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, name) => setActiveItem(name)

  return (
    <Menu inverted fluid widths={6}>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='satellites'
        active={activeItem === 'satellites'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='Moons'
        active={activeItem === 'Moons'}
        onClick={handleItemClick}
      />
            <Menu.Item
        name='Planets'
        active={activeItem === 'Planets'}
        onClick={handleItemClick}
      />
            <Menu.Item
        name='Stars'
        active={activeItem === 'Stars'}
        onClick={handleItemClick}
      />
    </Menu>
  )
}