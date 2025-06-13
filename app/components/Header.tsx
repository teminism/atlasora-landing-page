'use client';
import '../i18n';
import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.logoText}>{t('header.logo')}</div>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>{t('header.nav.features')}</a>
        <a href="#" className={styles.link}>{t('header.nav.pricing')}</a>
        <a href="#" className={styles.link}>{t('header.nav.about')}</a>
        <a href="#" className={styles.link}>{t('header.nav.contact')}</a>
      </nav>
      <div className={styles.actions}>
        <a href="#" className={styles.signIn}>{t('header.actions.signIn')}</a>
        <a href="#" className={styles.getStarted}>{t('header.actions.getStarted')}</a>
      </div>
    </header>
  );
};

export default Header;