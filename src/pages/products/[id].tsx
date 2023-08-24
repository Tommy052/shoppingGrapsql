import { useQuery } from "@tanstack/react-query";
import { QueryKeys, graphqlFetcher } from "../../queryClient";
import { useParams } from "react-router-dom";
import { Product } from "../../types";
import { ProductDetail } from "../../components/product/detail";
import { GET_PRODUCT } from "../../graphql/products";


const ProductDetailPage = () => {
  const { id } = useParams();

  // const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
  //   fetcher({
  //     method: "GET",
  //     path: `products/${id}`,
  //   })
  // );
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
  graphqlFetcher<Product>(GET_PRODUCT, {id})
  )
  if (!data) return null;

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail item={data} />
    </div>
  );
};

export default ProductDetailPage;