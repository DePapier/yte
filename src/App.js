// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import { Menu } from 'antd';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import logo from './assets/logo.png'
import Home from './pages/home'
import NoMatch from './pages/NoMatch'
import { request } from '_helpers/request'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const { SubMenu } = Menu;

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transition: '0.2s'
  };
}
function App() {
  const [key, setKey] = useState('home')
  const [menus, setMenus] = useState([])
  function handleClick() {

  }
  useEffect(() => {
    request.get('/Menu')
    .then(res => {
      setMenus(res)
    })
  }, [])
  return (
    <div className="App">
      <Menu onClick={handleClick} selectedKeys={['home']} mode="horizontal" style={{ position: 'sticky', top: 0 }}>
          <Menu.Item key='logo' icon={<img style={{ maxWidth: '50px' }} src={logo} alt='logo' />} style={{ background: 'yellow' }}>
            <b>BỘ Y TẾ - CỤC QUẢN LÝ Y, DƯỢC CỔ TRUYỀN</b>
          </Menu.Item>
          <Menu.Item key="home">
            Trang chủ
          </Menu.Item>
          {
            menus.map((e) => {
              if (e.submenu && e.submenu.length > 0) {
                return (
                  <SubMenu key={e.urlName} title={e.name} onTitleClick={() => history.push(e.urlName)}>
                    {
                      e.submenu.map((sub) => <Menu.Item key={sub.urlName} onClick={() => history.push(sub.urlName)}>{sub.displayName}</Menu.Item>)
                    }
                  </SubMenu>
                )
              }
              return (
                <Menu.Item key={e.urlName} onClick={() => history.push(e.urlName)}>
                  {e.name}
                </Menu.Item>
              )
            })
          }

        </Menu>
      <BrowserRouter>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            mapStyles={mapStyles}
            className="switch-wrapper"
          >
            <Route exact path="/home-page" name="Home" component={Home} />
            <Redirect to="/home-page" />
            <Route component={NoMatch} />
          </AnimatedSwitch>
      </BrowserRouter>
    </div>

  );
}

export default App;
