import React, { useState, useEffect} from 'react'
import { Row, Col, Typography, Divider, Card, Space, Button, Carousel, Anchor   } from 'antd'
import { HistoryOutlined, ApartmentOutlined, AuditOutlined, MailOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import Item from './components/item'
import Item2 from './components/item2'
import Item3 from './components/item3'
import banner from './assets/banner_t.jpg'
import anh from './assets/2.jpg'
import './style.css'

const { Title, Text } = Typography;
const { Link } = Anchor;
const { Meta } = Card
const contentStyle = {
  height: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};
function Home(props) {
  const history = useHistory()
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <React.Fragment>

      <div className='home-3' id='intro'>

        <section className='h3-trans'>
        <Anchor style={{ display: 'flex' }}>
        <Link href="#intro" title="Giới thiệu" />
        <Link href="#hot" title="Thông báo" />
        <Link href="#news" title="Tin Tức" />
      </Anchor>
          <Row gutter={16} className='home31'>
            <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 3 }} style={{ padding: '8px' }}>
              <Title level={2} style={{ color: 'white' }}> CỤC QUẢN LÝ Y, DƯỢC CỔ TRUYỀN </Title>
              <Text style={{ color: 'white' }} className='text'>Cục Quản lý Y, Dược cổ truyền là cục chuyên ngành thuộc Bộ Y tế, thực hiện chức năng tham mưu, giúp Bộ trưởng Bộ Y tế quản lý nhà nước và tổ chức thực thi pháp luật, chỉ đạo điều hành các hoạt động chuyên môn, nghiệp vụ về lĩnh vực y dược cổ truyền trong phạm vi cả nước với mục tiêu kế thừa, bảo tồn và phát triển y dược học cổ truyền, kết hợp với y dược học hiện đại trong việc chăm sóc và bảo vệ sức khoẻ nhân dân; xây dựng nền y dược Việt Nam hiện đại, khoa học, dân tộc và đại chúng.</Text>
            </Col>
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ padding: '8px', marginTop: '16px' }}>
              <Row gutter={16}>
                <Col md={6} sm={12} xs={24}>
                  <Button type="primary" size={'large'} style={{ width: '100%' }}>
                    <HistoryOutlined />
                    LỊCH SỬ PHÁT TRIỂN
                  </Button>
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                  <Button type="primary" size={'large'} style={{ width: '100%' }}>
                  <AuditOutlined />
                    CHỨC NĂNG NHIỆM VỤ
                  </Button>
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                  <Button type="primary" size={'large'} style={{ width: '100%' }}>
                  <ApartmentOutlined />
                    CƠ CẤU TỔ CHỨC
                  </Button>
                  </Col>
                  <Col md={6} sm={12} xs={24}>
                  <Button type="primary" size={'large'} style={{ width: '100%' }}>
                  <MailOutlined />
                    LIÊN HỆ
                  </Button>
                  </Col>
              </Row>
            </Col>
          </Row>
          </section>
          <section className='h3-trans-1' id='hot'>
            <Carousel autoplay effect="fade">
              <Item3 title={'Thông báo về việc viết bài Hội thảo khoa học y dược cổ truyền toàn quốc lần thứ Nhất'} text={'Cục Quản lý Y, Dược cổ truyền tổ chức Hội thảo khoa học y dược cổ truyền toàn quốc lần thứ Nhất (dự kiến vào tháng 10/2020) và sẽ định kỳ tổ chức hội thảo khoa học hai năm một lần.'} />
              <Item3 title={'THÔNG BÁO 2'} text={'Các tác giả/nhóm tác giả có báo cáo trình bày tại Hội thảo (xem danh sách cuối trang) chuẩn bị bài trình bày và gửi về ban tổ chức trước ngày 16/10/2020'}/>
              <Item3 title={'THÔNG BÁO 3'} text={'Để Ban tổ chức chuẩn bị tốt về hậu cần và tài liệu, Cục Quản lý Y, Dược cổ truyền đề nghị các tổ chức, cá nhân đăng ký đại biểu tham dự và gửi về Ban Tổ chức (Cục Quản lý Y, Dược cổ truyền, Bộ Y tế, địa chỉ: 138A, Giảng Võ, Ba Đình, Hà Nội) trước ngày 10/10/2020. Mẫu đăng ký tại Phụ lục và gửi bản mềm theo email: htkh.ydct@gmail.com'}/>
              <Item3 title={'THÔNG BÁO 4'} text={'Cục quản lý Y, Dược cổ truyền Bộ Y tế trân trọng thông báo về chủ đề của Hội thảo khoa học y, dược cổ truyền toàn quốc lần thứ 2 là: "Y dược cổ truyền kết hợp y dược hiện đại trong điều trị bệnh không lây nhiễm"'}/>
            </Carousel>
          </section>
          <section className='h4-trans' id='news'>
          <Row gutter={16} >
            <Col xs={24} md={{ span: 18, offset: 3 }} style={{ paddingBottom: '8px' }}>
              <Divider orientation="left" style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> <h1 style={{ color: 'white'}}> TIN TỨC </h1> </Divider>
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
              <Divider style={{ borderTopColor: '#85a1b2', borderTopWidth: '3px' }}> <Button> Xem tất cả </Button> </Divider>

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
          </section>
          <section className='h3-trans'>





          <br />
        </section>
      </div>
    </React.Fragment>
  )
}
export default Home
