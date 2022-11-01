import { NavBar } from '@nx-react/ui';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from './Routes';


const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Cart', path: '/cart' },
];

export function App() {


  return <Router>
    <NavBar navItems={navItems} />
    <Routes />
  </Router>;
}

export default App;
