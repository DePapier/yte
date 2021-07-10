import React from 'react'
import { Row, Col, Typography, Space, Divider } from 'antd'
import anh from './2.jpg'

function Detail() {
  return (
  <div style={{ background: '#fcfaf6', textAlign: 'justify', minHeight: 'calc(100vh - 50px)' }}>
      <br />
      <Row gutter={16} style={{ background: '#fcfaf6'}}>
        <Col xs={24} md={{ span: 14, offset: 3 }} style={{ background: '#fcfaf6', paddingBottom: '8px' }}>
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <p> Tin tức </p>
            <p><i> Thứ bảy, 10/7/2021, 11:37 (GMT+7) </i></p>
          </Space>
          <h2>Tăng cường phòng, chống bệnh viêm đường hô hấp cấp do SARS-CoV-2 bằng thuốc cổ truyền và các phương pháp y học cổ truyền.</h2>
          <h3>Ngày 17/3/2020 Thứ trưởng Bộ Y tế Nguyễn Trường Sơn ký công văn số 1306/BYT-YDCT kèm theo tài liệu hướng dẫn sử dụng thuốc cổ truyền, phương pháp y học cổ truyền trong phòng và hỗ trợ điều trị viêm đường hô hấp cấp do Sars-Cov -2 áp dụng trong các cơ sở khám bệnh, chữa bệnh.</h3>
          <p>
          Tình hình dịch bệnh viêm đường hô hấp cấp do Sars-CoV-2 xảy ra tại hơn 160 quốc gia, vùng lãnh thổ trên thế giới khiến hơn 182.000 người nhiễm bệnh và chưa có dấu hiệu dừng lại, riêng trong 10 ngày gần đây số người nhiễm tăng nhanh, xuất hiện nhiều ổ dịch lớn với số người mắc, số người tử vong gia tăng nhanh. Tại Việt Nam trong những ngày qua đã xuất hiện thêm nhiều ca nhiễm bệnh mới, tăng gấp 4 lần so với trước đó, nguy cơ lây lan dịch bệnh rất cao.
Trước diễn biến mới của dịch bệnh, để tăng cường thêm các biện pháp phòng, chống dịch bệnh, Cục Quản lý Y, Dược cổ truyền - Bộ Y tế cùng các đơn vị đầu ngành y học cổ truyền khẩn trương nghiên cứu, tổng hợp các tài liệu trong nước và quốc tế trong điều trị viêm đường hô hấp cấp do SARS-CoV-2. Tài liệu được Hội đồng chuyên môn gồm các chuyên gia đầu ngành về y, dược cổ truyền thẩm định và trình Thứ trưởng Nguyễn Trường Sơn ký ban hành tại Công văn số 1306/BYT-YDCT ngày 17/3/2020.
          </p>
        </Col>
        <Col xs={24} md={{ span: 3, offset: 1 }} style={{ background: '#fcfaf6', paddingBottom: '8px' }}>
          <h3>Tin cùng chuyên mục</h3>
          <img src={anh} alt='ddd' style={{ maxWidth: '100%' }} />
          <h4>Vắc xin của Việt Nam đạt chuẩn quốc tế</h4>
          <Divider />
          <h4>Y Dược Cổ Truyền Việt Nam trong chăm sóc sức khỏe ban đầu</h4>
          <Divider />
          <h4>Thông báo số 3 về Hội thảo khoa học y dược cổ truyền toàn quốc lần thứ nhất</h4>
          <Divider />
        </Col>
      </Row>
    </div>
  )
}
export default Detail
