
const BASE_URL = 'https://fakestoreapi.com';

type AnyOBJ = { [key:string] : any } ;
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

export const QueryKeys = {
  PRODUCTS : 'PRODUCTS'
}