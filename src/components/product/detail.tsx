import { Product } from "../../graphql/products";


export const ProductDetail = ({
  item: {
    imageUrl,
    price,
    title,
    description
  },
}: {
  item: Product;
}) => (
  <div className="products-detail">
    <p className="products-detail__categoty">{title}</p>
    <img className="products-detail__image" src={imageUrl} alt="" />
    <p className="products-detail__description">{description}</p>
    <span className="products-detail__price">${price}</span>
  </div>
);