import {Product} from "../../type"

const ProductDetail = ({item:{category,description,image,price,title}} : {item: Product}) => {

  return(
    <>
        <div className='product-detail'>
      <p className='product-detail__category'>{category}</p>
      <p className='product-detail__dexcription'>{description}</p>
      <img className='product-detail__image' src={image}/>
      <span className='product-detail__price' >${price}</span>
      <span className='product-detail__title'>{title}</span>
    </div>
    </>
  )
}
export default ProductDetail