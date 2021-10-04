import Button from '../button';

import { useContext } from 'react';

import { CatalogueContext } from '../../providers/catalogue';
import { CartContext } from '../../providers/cart';
import { ProductContainer } from './styles';

const ProductsList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <ProductContainer>
      <ul>
        {type === 'catalogue' && <span>Products List: </span>}
        {type === 'catalogue' &&
          catalogue.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <Button type={type} item={item} />
            </li>
          ))}
        {type === 'cart' && <span>Cart: </span>}
        {type === 'cart' &&
          cart.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <Button type={type} item={item} />
            </li>
          ))}
      </ul>
    </ProductContainer>
  );
};

export default ProductsList;
