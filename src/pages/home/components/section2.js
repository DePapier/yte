import 'antd/dist/antd.css'
import React from 'react'
import { Card, Row, Col, Typography } from 'antd'
import { useHistory } from 'react-router-dom'
// import action from 'assets/action.webp'
import './style.css'

const { Title } = Typography
const { Meta } = Card
function Section2(props) {
  const history = useHistory()
  return (
    <div className='section-2'>
      <br />
      <Row>
        <Col xs={24}>
          <Title level={2} underline id={props.title}> HOẠT ĐỘNG </Title>
        </Col>

      </Row>
      <Row gutter={16}>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
          <Row gutter={16}>
            {
              props.menus && props.menus.filter((e) => e.urlName === 'hoat-dong')[0] &&
              props.menus.filter((e) => e.urlName === 'hoat-dong')[0]
              .submenu.map((e) =>
                <Col xs={24} md={8} key={e.id}>
                  <Card
                    hoverable
                    style={{ maxWidth: '100%' }}
                    cover={<img alt="example" src={e.urlImage} />}
                    onClick={() => history.push({
                      pathname: e.urlName,
                      state: {
                        displayName: e.displayName
                      }
                    })}
                  >
                    <Meta title={e.displayName} description={e.description} />
                  </Card>
                </Col>
              )
            }

          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Section2
