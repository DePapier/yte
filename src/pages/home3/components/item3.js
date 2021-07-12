import React from 'react'
import '../style.css'
import anh from '../assets/2.jpg'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import { DoubleRightOutlined } from '@ant-design/icons'

function Item(props) {
  const history = useHistory()
  return (
    <>
    <div className='item3' >
      <h1 style={{ color: 'white', width: '100%', fontSize: '36px' }}> THÔNG BÁO CHÍNH THỨC </h1>
      <div className='item33'>
        <img src={anh} />
        <div className='flex2'>
          <h3 style={{ color: 'white' }}> {props.title}</h3>
          <p style={{ color: 'white' }}>{props.text}</p>
          <Button type="primary" size="large" onClick={() => history.push('/2/detail')}> XEM CHI TIẾT <DoubleRightOutlined /> </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Item
