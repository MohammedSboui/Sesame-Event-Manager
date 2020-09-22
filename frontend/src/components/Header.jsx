import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu} from 'semantic-ui-react'
function Header() {
    const [activeItem , SetactiveItem] = useState('login');
    const handleItemClick = (e, { name }) => SetactiveItem(name);
  return (
    <div style = {{backgroundColor:'blue'}}>
      <Menu pointing primary color='blue'>
          
              <Link to = '/home'><Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick} 
          /></Link>
          
          <Menu.Menu position='right'>
          
            <Link to = '/register'><Menu.Item
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
            /></Link>
            
            
                <Link to = '/login'><Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
            /></Link>
           
          </Menu.Menu>
        </Menu>
    </div>
  );
}

export default Header;
