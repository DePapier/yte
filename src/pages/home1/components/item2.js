import React from 'react'
import anh from '../assets/2.jpg'
import { useHistory } from 'react-router-dom'
import '../style.css'

function Item2(props) {
  const history = useHistory()
  return (
    <div className='item2' onClick={() => history.push('/2/detail')}>
      <img src={anh} alt='anh' />
      <div>
        <div>Một số dược liệu, vị thuốc cổ truyền và cây thuốc trong phòng, chống bệnh viêm đường...</div>
        <small> 19/6/2021 </small>
      </div>
    </div>
  )
}

export default Item2
