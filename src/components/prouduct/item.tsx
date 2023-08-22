import { Link } from 'react-router-dom'
import {Product} from '../../type'
const ProductItem = ({category,description,image,price,id,title}:Product) => {
  return(<>
    <li className='product-item'>
      <Link to={`/products/${id}`} >
      <p className='product-item__category'>{category}</p>
      <p className='product-item__dexcription'>{description}</p>
      <img className='product-item__image' src={image}/>
      <span className='product-item__price' >${price}</span>
      <span className='product-item__title'>{title}</span>
      </Link>
    </li>
  </>)
}
export default ProductItem