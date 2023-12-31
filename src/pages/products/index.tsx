import { useQuery } from "@tanstack/react-query";
import { graphqlFetcher,QueryKeys } from "../../queryClient";
import ProductItem from "../../components/product/item";
import GET_PRODUCTS, { Products } from "../../graphql/products";


const ProductList = () => {
  // const { data } = useQuery<Product[]>([QueryKeys.PRODUCTS], () =>
  //   fetcher({
  //     method: "GET",
  //     path: "products",
  //   })
  // );

  const { data } = useQuery<Products>([QueryKeys.PRODUCTS], () =>
  graphqlFetcher<Products>(GET_PRODUCTS)
  )
  console.log(data)
  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.products?.map( product => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;