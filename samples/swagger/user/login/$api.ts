/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user/login'
  const GET = 'GET'

  return {
    /**
     * @returns successful operation
     */
    get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).text(),
    /**
     * @returns successful operation
     */
    $get: (option: { query: Methods0['get']['query'], config?: T }) =>
      fetch<Methods0['get']['resBody'], Methods0['get']['resHeaders'], Methods0['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
    $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
