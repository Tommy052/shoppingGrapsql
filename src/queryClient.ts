import { QueryClient } from '@tanstack/react-query';
import { request, RequestDocument } from 'graphql-request'

const BASE_URL = 'https://fakestoreapi.com';
const MSW_URL = '/';
type AnyOBJ = { [key: string]: any } 
export const getClient = (() => {
  let client: QueryClient | null = null
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      })
    return client
  }
})()
export const fetcher = async ({
  method,
  path,
  body,
  params
}:{
  method : 'GET' | 'PUT' | 'DELETE' | 'PATCH';
  path:string;
  body?:AnyOBJ;
  params?: AnyOBJ;
}) => {
  try{
    let url = `${BASE_URL}${path}`
    const fetchOptions:RequestInit = {
      method,
      headers:{
        'Content-Type' : 'application/json',
        'Access-Cpmtrol-Allow-Origin' : BASE_URL
      }
    }
    if(params){
      const searchParams = new URLSearchParams(params);
      url += '?' + searchParams.toString()
    }
    if(body) fetchOptions.body = JSON.stringify(body);
    const res = await fetch(url,fetchOptions)
    const json = await res.json()
    return json
  }catch(err){
    console.log(err)
  }
}

export const graphqlFetcher = <T>(query: RequestDocument, variables = {}) =>
  request<T>(MSW_URL, query, variables);
export const QueryKeys = {
  PRODUCTS : 'PRODUCTS',
  CART : 'CART'
}