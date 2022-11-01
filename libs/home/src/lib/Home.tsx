import { worksFormat } from '@nx-react/utils/format';

export function Home() {
  const title = 'Home';
  const text = worksFormat(title);
  return <>
    <h1>{title}</h1>
    <p>{text}</p>
  </>;
}

export default Home;
