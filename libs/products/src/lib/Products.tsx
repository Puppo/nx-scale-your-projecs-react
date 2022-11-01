import { worksFormat } from '@nx-react/utils/format';

export function Products() {
  const title = 'Products';
  const text = worksFormat(title);
  return <>
    <h1>{title}</h1>
    <p>{text}</p>
  </>;
}

export default Products;
