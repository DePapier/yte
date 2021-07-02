import React from 'react'
import { Row, Col, Typography } from 'antd'
import './style.css'

const { Title } = Typography;
function Section1() {
  return (
    <section className='section-1'>
      <section className='trans'>
        <Row>
          <Col xs={24}>
            <Title> Vì sức khỏe của đất nước, vì sức khỏe nhân dân </Title>
          </Col>
        </Row>
      </section>
    </section>
  )
}
export default Section1
