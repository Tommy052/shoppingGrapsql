import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
// import { cartItemSelector } from "../../recoil/cart";
// import { useRecoilState } from "recoil";
import { ADD_CART } from '../../graphql/cart'
import { graphqlFetcher } from '../../queryClient'
import { useMutation } from "@tanstack/react-query";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title
}: Product) => {
  // const [CartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  // const addToCart = () => setCartAmount((prev) => (prev || 0 )+ 1);
  const { mutate: addCart } = useMutation((id: string) => graphqlFetcher(ADD_CART, { id }))
  return (
    <>
      <li className="products-item">
        <Link to={`/products/${id}`}>
          <p className="products-item__categoty">{title}</p>

          <img className="products-item__image" src={imageUrl} alt="" />
          <span className="products-item__price">${price}</span>
        </Link>
        <button className="product-item__add-cart" onClick={() => addCart(id)}>
        담기
      </button>
      </li>
    </>
  );
};

export default ProductItem;
