import 'antd/dist/antd.css'
import React from 'react'
import { Card, Row, Col, Typography } from 'antd'
import action from 'assets/action.webp'
import './style.css'

const { Title } = Typography
const { Meta } = Card
function Section2(props) {
  return (
    <div className='section-4'>
      <br />
      <Row>
        <Col xs={24}>
          <Title level={2} underline id={props.title}> {'Nghiên cứu - Đào tạo'} </Title>
        </Col>

      </Row>
      <Row gutter={16}>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
          <Row gutter={16}>
            {
              props.menus && props.menus.filter((e) => e.urlName === props.title)[0] &&
              props.menus.filter((e) => e.urlName === props.title)[0]
              .submenu.map((e) =>
                <Col xs={24} md={12} key={e.id}>
                  <Card
                    hoverable
                    style={{ maxWidth: '100%' }}
                    cover={<img alt="example" src={e.urlImage} />}
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
