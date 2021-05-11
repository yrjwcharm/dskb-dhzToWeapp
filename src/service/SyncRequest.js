import axios from '../utils/axios'

export function getWxConfig(url) {
  return axios.post(`/manage/wxDevelop/getWxConfig`,{url});
}
