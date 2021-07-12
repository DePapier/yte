import React from 'react'
import { Row, Col, Typography, Divider, Card, Space  } from 'antd'
import { useHistory } from 'react-router-dom'
import Item from './components/item'
import Item2 from './components/item2'
import banner from './assets/banner_t.jpg'
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
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px' }}>
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
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px' }}>
              <img src={banner} style={{ width: '100%' }} />
            </Col>
          </Row>

          <Row gutter={16} >
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> Y CỔ TRUYỀN </Divider>
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
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> DƯỢC CỔ TRUYỀN </Divider>
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
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px' }}>
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
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> TIN TỨC - SỰ KIỆN </Divider>
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
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ background: 'white', paddingBottom: '8px' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> LIÊN HỆ </Divider>
              <Row gutter={16}>
                <Col xs={24} md={{ span: 8 }}>
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



        </section>
      </div>
    </React.Fragment>
  )
}
export default Home
