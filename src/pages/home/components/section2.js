import 'antd/dist/antd.css'
import React from 'react'
import { Card, Row, Col, Typography } from 'antd'
import action from 'assets/action.webp'
import './style.css'

const { Title } = Typography
const { Meta } = Card
function Section2() {
  return (
    <div className='section-2'>
      <br />
      <Row>
        <Col xs={24}>
          <Title level={2} underline> HOẠT ĐỘNG </Title>
        </Col>

      </Row>
      <Row gutter={16}>
        <Col xs={24} md={{ span: 6, offset: 3 }}>
          <Card
            hoverable
            style={{ maxWidth: '100%' }}
            cover={<img alt="example" src={action} />}
          >
            <Meta title="Hoạt động chung" description="Các hoạt động chỉ đạo chung của ngành y dược cổ truyền..." />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card
            hoverable
            style={{ maxWidth: '100%' }}
            cover={<img alt="example" src={action} />}
          >
            <Meta title="Hoạt động chung" description="Các hoạt động chỉ đạo chung của ngành y dược cổ truyền..." />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card
            hoverable
            style={{ maxWidth: '100%' }}
            cover={<img alt="example" src={action} />}
          >
            <Meta title="Hoạt động chung" description="Các hoạt động chỉ đạo chung của ngành y dược cổ truyền..." />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default Section2
