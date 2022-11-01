import { worksFormat } from '@nx-react/utils/format';

export function Cart() {
  const title = 'Cart';
  const text = worksFormat(title);
  return <>
    <h1>{title}</h1>
    <p>{text}</p>
  </>;
}

export default Cart;
