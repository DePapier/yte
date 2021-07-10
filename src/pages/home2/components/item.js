import React from 'react'
import '../style.css'
import { useHistory } from 'react-router-dom'

function Item(props) {
  const history = useHistory()
  return (
    <div className='item' onClick={() => history.push('/2/detail')}>
      <div className='item-trans'>
        <p> THÔNG BÁO </p>
        <h4>Tăng cường phòng, chống bệnh viêm đường hô hấp cấp do SARS-CoV-2 bằng thuốc cổ truyền và các phương pháp y học cổ truyền.</h4>
      </div>
    </div>
  )
}

export default Item
