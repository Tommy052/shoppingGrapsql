import { useParams } from "react-router"
import { QueryKeys, fetcher } from "../../queryClient";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../type";
import ProductDetail from "../../components/prouduct/detail";

const ProductDetailPage = () => {
  const {id} = useParams();
  const {data} = useQuery<Product>([QueryKeys.PRODUCTS,id],() => fetcher({
    method: 'GET',
    path: `/products/${id}`
  }))
  console.log(data)
  if(!data) return null
  return(
    <>
       <ProductDetail item={data} />
    </>
  )
}
export default ProductDetailPage