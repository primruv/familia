// eslint-disable-next-line no-unused-vars
import axios from 'axios'

const client = axios.create({
  json: true
})

export default {
  async excute(method, path, data) {
    return client({
      method,
      url: path,
      headers: {
        'Content-Type': 'application/json'
      },
      data
    }).then((req) => {
      // eslint-disable-next-line no-console
      console.log(req.data)
      return req.data
      // eslint-disable-next-line no-console
    }).catch(e => console.log(e))
  },

  createRefferal(data) {
    return this.excute('POST', '/api', data)
  }
}