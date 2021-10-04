import { useContext } from 'react';

import { CartContext } from '../../providers/cart';
import { CatalogueContext } from '../../providers/catalogue';

import { ButtonContainer } from './styles';

const Button = ({ type, item }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { catalogue, addToCatalogue, removeFromCatalogue } =
    useContext(CatalogueContext);

  const text = type === 'catalogue' ? 'Add to cart' : 'Remove from cart';

  const handleClick = () => {
    if (type === 'catalogue') {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return (
    <ButtonContainer>
      <button onClick={handleClick}>{text}</button>
    </ButtonContainer>
  );
};

export default Button;
