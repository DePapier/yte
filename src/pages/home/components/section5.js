import React, { useState, useEffect } from 'react'
import { request } from '_helpers/request'
import { Row, Col, Typography } from 'antd'
import './style.css'

const { Title } = Typography;
function Section5() {
  const [webLink, setWebLink] = useState([])
  useEffect(() => {
    request.get('/WebLink')
    .then(res => setWebLink(res))
  }, [])
  return (
    <section className='section-5'>
      <section className='trans-5'>
        <br />
        <Row>
          <Col xs={24}>
            <Title underline level={2}> Website liên kết </Title>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={24} md={{ span: 18, offset: 3 }} className='linkw'>
            {
              webLink.map((e) => <img key={e.id} src={e.linkImage} alt={e.title} />)
            }

          </Col>
        </Row>
      </section>
    </section>
  )
}
export default Section5
