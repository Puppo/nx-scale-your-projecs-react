import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

type NavItem = {
  label: string;
  path: string;
};

interface Props {
  navItems: NavItem[]
}

export function NavBar({
  navItems
}: Props) {

  return <nav className={styles['NavBar']}>
    {
      navItems.map(item => (<Link className={styles['NavBar__link']} key={item.label} to={item.path}
      >{item.label}
      </Link>))
    }
  </nav>
}

