import { useQuery } from "@tanstack/react-query"
import { QueryKeys, fetcher } from "../../queryClient"
import { Product } from "../../type"
import ProductItem from "../../components/prouduct/item"
const ProductList = () => {
  const {data} = useQuery<Product[]>([QueryKeys.PRODUCTS],() => fetcher({
    method: 'GET',
    path: '/products'
  }) )
  console.log(data)
  return(
    <>
    <div >
      <ul className="products">
        {data?.map(product => (
          <ProductItem {...product} key={product.id} />
        ))}   
      </ul>
    </div>
    </>
  )
}
export default ProductList