import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoText}>AtlasOra</div>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>Features</a>
        <a href="#" className={styles.link}>Pricing</a>
        <a href="#" className={styles.link}>About</a>
        <a href="#" className={styles.link}>Contact</a>
      </nav>
      <div className={styles.actions}>
        <a href="#" className={styles.signIn}>Sign In</a>
        <a href="#" className={styles.getStarted}>Get Started</a>
      </div>
    </header>
  );
};

export default Header;