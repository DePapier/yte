import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Typography } from 'antd'
import { request } from '_helpers/request'
import Section6 from '../home/components/section6'

function News(props) {
  const [news, setNews] = useState([])
  const { Title } = Typography
  useEffect(() => {
    request.get(`/News/${props?.match?.params?.category}/1/20`)
    .then(res => {
      setNews(res)
    })
  }, [props?.match?.params?.category])

  function canDownload(name) {
    return name && name.indexOf('.pdf') > -1
  }
  return (
    <Row>
      <br />
      <Col xs={24} md={{ span: 18, offset: 3 }} style={{ textAlign: 'left', marginTop: '10px' }}>
        <Title level={4}>{props?.location?.state?.displayName}</Title>
      </Col>
      {
        props?.location?.state?.name &&
        <Section6 />
      }
      <Col xs={24} md={{ span: 18, offset: 3 }}>
        <Row glutter={16}>
          {
            news?.results?.map((e) =>
            <Col xs={24} md={24}>
              <Card title={e.title} extra={<a href="#">Xem thêm</a>} style={{ textAlign: 'left', marginBottom: '10px' }}>
                {
                  !canDownload(e.urlFile) &&
                  <img src={e.urlFile} alt='file' />
                }
                {
                  canDownload(e.urlFile) &&
                  <a href={e.urlFile} download> {e.content} </a>
                }
                <p>{e.content}</p>
              </Card>
            </Col>
            )
          }

        </Row>
      </Col>

    </Row>
  )
}

export default News
