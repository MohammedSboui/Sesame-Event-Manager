import { PromiseProvider } from 'mongoose';
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu} from 'semantic-ui-react'
import jwt_decode from 'jwt-decode'
function Header() {
    const token = localStorage.usertoken;
    let decoded ;
    if(token)decoded = jwt_decode(token);
    const [activeItem , SetactiveItem] = useState('home');
    const handleItemClick = (e, { name }) => {
      
      if(name==='logout'){
        localStorage.removeItem('usertoken');
      }
      SetactiveItem(name);
    }
  return (
    <div style = {{backgroundColor:'blue'}}>
      <Menu pointing primary color='blue'>
          
              <Link to = '/home'><Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick} 
          /></Link>
           {decoded && decoded.role === 'admin' && <Link to = '/addevent'><Menu.Item
            name='Add event'
            active={activeItem === 'Add event'}
            onClick={handleItemClick} 
          /></Link>
          }
          
          { !localStorage.usertoken && <Menu.Menu position='right'>
          
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
           
          </Menu.Menu>}
          { localStorage.usertoken && <Menu.Menu position='right'>
          <Link to = '/login'><Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          /></Link>
        </Menu.Menu>}
        </Menu>
    </div>
  );
}

export default Header;
