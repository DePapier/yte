// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import { Menu } from 'antd';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import logo from './assets/logo.png'
import Home from './pages/home'
import Home2 from './pages/home2'
import Home1 from './pages/home1'
import Detail from './pages/detail'
import News from './pages/news'
import NoMatch from './pages/NoMatch'
import { request } from '_helpers/request'
import { useHistory } from 'react-router-dom'

const { SubMenu } = Menu;
const scrollList = ['hoat-dong', 'nghien-cuu-dao-tao', 'lien-he']

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transition: '0.2s'
  };
}
function App() {
  // const [key, setKey] = useState('home')
  const [menus, setMenus] = useState([])
  useEffect(() => {
    request.get('/Menu')
    .then(res => {
      setMenus(res)
    })
  }, [])


  return (
    <div className="App">

      <BrowserRouter>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            mapStyles={mapStyles}
            className="switch-wrapper"
          >

            <Route exact path="/" name="Home" render={(props) => (
              <Header menus={menus} computedMatch={props.computedMatch}><Home menus={menus} /></Header>
            )} />
            <Route exact path="/2" name="Home2" render={(props) => (
              <Header menus={menus} computedMatch={props.computedMatch}><Home2 menus={menus} /></Header>
            )} />
            <Route exact path="/1" name="Home1" render={(props) => (
              <Header menus={menus} computedMatch={props.computedMatch}><Home1 menus={menus} /></Header>
            )} />
            <Route exact path="/2/detail" name="Detail" render={(props) => (
              <Header menus={menus} computedMatch={props.computedMatch}><Detail menus={menus} /></Header>
            )} />
            <Route exact path="/:category" name="News" render={(props) => (
              <Header menus={menus} {...props}><News menus={menus} {...props} /></Header>
            )} />
            <Redirect to="/" />
            <Route component={NoMatch} />
          </AnimatedSwitch>
      </BrowserRouter>
    </div>

  );
}

function Header({ menus, children, match }) {
  const history = useHistory()

  function navi(obj) {
    if (scrollList.indexOf(obj.urlName) > -1 && document.querySelector(`#${obj.urlName}`)) {
      document.querySelector(`#${obj.urlName}`).scrollIntoView({
          behavior: 'smooth',
      })
    } else {
      history.push({
        pathname: obj.urlName,
        state: {
          displayName: obj.displayName,
          name: obj.name
        }
      })
    }
  }
  function handleClick() {

  }
  return (
    <React.Fragment>
      <Menu onClick={handleClick} selectedKeys={[match?.params?.category || 'home']} mode="horizontal">
          <Menu.Item onClick={() => history.push('/')} key='logo' icon={<img style={{ maxWidth: '50px' }} src={logo} alt='logo' />} style={{ background: 'yellow' }}>
            <b>CỤC QUẢN LÝ Y, DƯỢC CỔ TRUYỀN</b>
          </Menu.Item>
          <Menu.Item key="home" onClick={() => history.push('/')}>
            Trang chủ
          </Menu.Item>
          {
            menus.map((e) => {
              if (e.submenu && e.submenu.length > 0) {
                return (
                  <SubMenu key={e.urlName} title={e.name} onTitleClick={() => navi(e.urlName)}>
                    {
                      e.submenu.map((sub) => <Menu.Item key={sub.urlName} onClick={() => navi(sub)}>{sub.displayName}</Menu.Item>)
                    }
                  </SubMenu>
                )
              }
              return (
                <Menu.Item key={e.urlName} onClick={() => navi(e)}>
                  {e.name}
                </Menu.Item>
              )
            })
          }

        </Menu>
      {
        children
      }
      </React.Fragment>
  )
}
//
export default App;
