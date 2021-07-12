import React from 'react'
import { Row, Col, Typography, Space } from 'antd'
import './style.css'

const { Title, Text } = Typography;
function Section6(props) {
  return (
    <section className='section-6'>
      <section className='trans-6'>
        <br />
        <Row>
          <Col xs={24}>
            <Title underline level={2} id={props.title}> Liên hệ </Title>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={{ span: 16, offset: 4 }}>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title='ggmap'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5473.4312217937295!2d105.81875634683443!3d21.028871598083633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab76ab560c29%3A0x253637caebea1353!2zQ-G7pWMgUXXhuqNuIEzDvSBExrDhu6Nj!5e0!3m2!1sen!2sus!4v1625208074683!5m2!1sen!2sus"
                    height="300px"
                    width="100%"
                    allowFullScreen=""
                    loading="lazy"></iframe>
                  </div>
                </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={{ span: 8, offset: 4 }} style={{ textAlign: 'left'}}>
            <Title underline level={3}> Yêu cầu hỗ trợ </Title>
            <Space direction="vertical">
              <Text>
              Mọi yêu cầu , thắc mắc cần hỗ trợ vui lòng liên hệ với chúng tôi qua  thông tin sau:
              </Text>
              <Text>
              Điện thoại: 04 6273 2247 - Số Fax: (04)6273 3338 Email: ydct@moh.gov.vn
              </Text>
            </Space>
          </Col>
          <Col xs={24} sm={8} style={{ textAlign: 'left'}}>
            <Title underline level={3}> Trụ sở chính </Title>
            <Space direction="vertical">
              <Text>
              Địa chỉ: 138A Giảng Võ - Ba Đình - Hà Nội
              </Text>
              <Text>
              Cơ quan chủ quản: Bộ Y tế.
              </Text>
              <Text>
              Chịu trách nhiệm: PGS.TS Nguyễn Thế Thịnh - Cục trưởng Cục quản lý Y, Dược Cổ truyền
              </Text>
            </Space>
          </Col>
        </Row>
      </section>
    </section>
  )
}
export default Section6
