import React from 'react'
import { Row, Col, Typography } from 'antd'
import './style.css'

const { Title, Text } = Typography;
function Section3() {
  return (
    <section className='section-3'>
      <section className='trans-3'>
        <Row style={{ alignItems: 'center' }}>
          <Col xs={18} offset={4} style={{ textAlign: 'left' }}>
            <Row>
              <Col xs={24}>
                <Title level={2} underline> GIỚI THIỆU </Title>
              </Col>
            </Row>
            <Row>
              <Col xs={24}>
              <Text>
              Cục Quản lý Y, Dược cổ truyền là cục chuyên ngành thuộc Bộ Y tế, thực hiện chức năng tham mưu,
              giúp Bộ trưởng Bộ Y tế quản lý nhà nước và tổ chức thực thi pháp luật,
              chỉ đạo điều hành các hoạt động chuyên môn, nghiệp vụ về lĩnh vực y dược cổ truyền
              trong phạm vi cả nước với mục tiêu kế thừa, bảo tồn và phát triển y dược học cổ truyền,
              kết hợp với y dược học hiện đại trong việc chăm sóc và bảo vệ sức khoẻ nhân dân;
              xây dựng nền y dược Việt Nam hiện đại, khoa học, dân tộc và đại chúng...
              </Text>
              </Col>
            </Row>

          </Col>
        </Row>
      </section>
    </section>
  )
}
export default Section3
