import styles from './Header.module.css'

import igniteLogo from '../assets/ignite.svg'

console.log(styles)

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="ignite logo" />
    </header>
  );
}