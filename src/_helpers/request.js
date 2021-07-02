import axios from 'axios'
// import Notification from '_components/Notification'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const APP_API = 'yteapi' // dev
const methods = ['GET', 'POST', 'PUT', 'DELETE']
let clientApi = {}


methods.forEach((method) => {
  const request = (url, { params, data } = {}, header = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method,
        url: `${APP_API}${url}`,
        data,
        params,
        headers: {
          ...header,
        }
      }).then(response => {
        return resolve(response.data)
      }).catch((error) => {
        const response = error?.response
        const data = response?.data
        if (response?.status === 400 || response?.status === 500) {
          // Notification.error(data.message || 'Đã có lỗi xảy ra vui lòng thử lại sau')
          return reject(data)
        }
        if (response?.status === 401) {
          // Notification.error('Bạn chưa đăng nhập hoặc phiên làm việc đã hết hạn')
          sessionStorage.removeItem('token')
          history.push('')
          return
        } else if (response.body && response.body.message) {
          // Notification.error(response.body.message)
        } else {
          // Notification.error('Đã có lỗi xảy ra vui lòng thử lại sau')
        }
        reject(data || 'Đã có lỗi xảy ra vui lòng thử lại sau')
      })
    })
  }

  clientApi[method.toLowerCase()] = request
})

export const request = clientApi
