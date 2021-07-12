import React from 'react'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import { Row, Col, Typography, Divider, Card, Space  } from 'antd'
import { useHistory } from 'react-router-dom'
import Item from './components/item'
import Item2 from './components/item2'
import banner from './assets/bn1.png'
import anh from './assets/2.jpg'
import './style.css'

const { Title, Text } = Typography;
const { Meta } = Card
function Home(props) {
  const history = useHistory()
  return (
    <React.Fragment>
      <div className='home-2'>
        <section className='h2-trans'>
          <br />
          <Row gutter={16} >
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px', boxShadow: '0 10px 10px 0px #8a8484' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> TIN CHÍNH </Divider>
              <Row gutter={16}>
                <Col md={12} style={{ minHeight: '60vh' }}>
                  <Item />
                </Col>
                <Col md={12}>
                  <Row gutter={16} style={{ minHeight: '30vh' }}>
                    <Col xs={24}>
                      <Item />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16} style={{ minHeight: '30vh' }}>
                    <Col md={12}>
                      <Item />
                    </Col>
                    <Col md={12}>
                      <Item />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>


          <Row gutter={16} >
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px', boxShadow: '0 10px 10px 0px #8a8484' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> Y CỔ TRUYỀN </Divider>
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Card
                    hoverable
                    style={{ maxWidth: '100%', textAlign: 'left' }}
                    cover={<img alt="example" src={anh} />}
                    onClick={() => history.push('/2/detail')}
                  >
                    <Meta title={'Thông tin công văn'} description={'Công văn số 490/YDCT-QLY ngày 28/05/2021 về việc sử dụng thuốc và các phương pháp...'} />
                  </Card>
                </Col>
                <Col md={12}>
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />

                </Col>
              </Row>
            </Col>
          </Row>



          <Row gutter={16} >
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px', boxShadow: '0 10px 10px 0px #8a8484' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> DƯỢC CỔ TRUYỀN </Divider>
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Card
                    hoverable
                    style={{ maxWidth: '100%', textAlign: 'left' }}
                    cover={<img alt="example" src={anh} />}
                    onClick={() => history.push('/2/detail')}
                  >
                    <Meta title={'Thông tin công văn'} description={'Danh sách công bố các cơ sở kinh doanh có dược liệu, vị thuốc cổ truyền vi phạm chất...'} />
                  </Card>
                </Col>
                <Col md={12}>
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={16}>
                    <Col xs={24}>
                      <Item2 />
                    </Col>
                  </Row>
                  <br />

                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px', boxShadow: '0 10px 10px 0px #8a8484' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> HỢP TÁC QUỐC TẾ </Divider>
              <Row gutter={16}>
                <Col xs={24} md={6}>
                  <Card
                    hoverable
                    style={{ maxWidth: '100%', textAlign: 'left' }}
                    cover={<img alt="example" src={anh} />}
                    onClick={() => history.push('/2/detail')}
                  >
                    <Meta title={''} description={'Hội nghị Bộ trưởng Y tế các nước thuộc khối BRICS'} />
                  </Card>
                </Col>
                <Col xs={24} md={6}>
                  <Card
                    hoverable
                    style={{ maxWidth: '100%', textAlign: 'left' }}
                    cover={<img alt="example" src={anh} />}
                    onClick={() => history.push('/2/detail')}
                  >
                    <Meta title={''} description={'Đoàn cán bộ y tế tham dự “Lớp kỹ năng điều dưỡng y học cổ truyền”'} />
                  </Card>
                </Col>
                <Col xs={24} md={6}>
                  <Card
                    hoverable
                    style={{ maxWidth: '100%', textAlign: 'left' }}
                    cover={<img alt="example" src={anh} />}
                    onClick={() => history.push('/2/detail')}
                  >
                    <Meta title={''} description={'Chiến lược y học cổ truyền Tổ chức Y tế Thế giới (WHO) giai đoạn 2014-2023'} />
                  </Card>
                </Col>
                <Col xs={24} md={6}>
                  <Card
                    hoverable
                    style={{ maxWidth: '100%', textAlign: 'left' }}
                    cover={<img alt="example" src={anh} />}
                    onClick={() => history.push('/2/detail')}
                  >
                    <Meta title={''} description={'Chiến lược y học cổ truyền Tổ chức Y tế Thế giới (WHO) giai đoạn 2014-2023'} />
                  </Card>
                </Col>

              </Row>
            </Col>
          </Row>

          <Row gutter={16} >
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px', boxShadow: '0 10px 10px 0px #8a8484' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> LIÊN HỆ </Divider>
              <Row gutter={16}>
                <Col xs={24} md={{ span: 8 }}>
                    <div className="mapouter">
                      <div className="gmap_canvas">
                          <iframe src="https://www.google.com/maps/d/embed?mid=1MupBLqSnb6E33rKIMEUQ_DRkjHMAUOVZ&hl=en" width="100%" height="300px" loading="lazy"></iframe>

                        </div>
                      </div>
                </Col>
                <Col xs={24} md={{ span: 16  }} style={{ textAlign: 'left'}}>
                  <h4> Yêu cầu hỗ trợ </h4>
                  <Space direction="vertical">
                    <Text>
                    Mọi yêu cầu , thắc mắc cần hỗ trợ vui lòng liên hệ với chúng tôi qua  thông tin sau:
                    </Text>
                    <Text>
                    Điện thoại: 04 6273 2247 - Số Fax: (04)6273 3338 Email: ydct@moh.gov.vn
                    </Text>
                  </Space>
                  <br />
                  <br />
                  <br />
                  <h4> Trụ sở chính </h4>
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
            </Col>
          </Row>



          <br />
        </section>
      </div>
    </React.Fragment>
  )
}
export default Home
