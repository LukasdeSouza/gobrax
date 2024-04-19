import { baseUrl } from "../utils/baseUrl.JS";

export const serviceApi = (endPoint, method, body) => {
  const response = fetch(`${baseUrl}/${endPoint}`, {
    method,
    body
  })
  .then((data) => data.json())

  return response
}