import { request } from './request'
export function getHomeMultidata() {
  return request({
    url: "http://152.136.185.210:7878/api/hy66/home/multidata"
  })
}