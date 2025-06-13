'use client';
import './i18n';
import styles from './Home.module.css';
import Header from './components/Header';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.3, duration: 0.8 } },
    hover: { scale: 1.04, boxShadow: '0 8px 32px rgba(24,156,230,0.15)' }
  };

  return (
    <div className={styles.bgWrap}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            {t('hero.title')}
          </h1>
          <p className={styles.heroSubtitle}>
            {t('hero.subtitle')}
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.primaryCta}>{t('hero.cta.primary')}</button>
            <button className={styles.secondaryCta}>{t('hero.cta.secondary')}</button>
          </div>
        </section>

        {/* Analytics Image Placeholder */}
        <section className={styles.analyticsSection}>
          <div className={styles.analyticsImage}>
            <img
              src="/dashboard.svg"
              alt={t('analytics.alt')}
              className={styles.analyticsImage}
            />
          </div>
        </section>

        {/* Why Choose Section */}
        <section className={styles.whySection}>
          <h2 className={styles.whyTitle}>{t('whyChoose.title')}</h2>
          <p className={styles.whySubtitle}>
            {t('whyChoose.subtitle')}
          </p>
          <div className={styles.whyCards}>
            <motion.div
              className={styles.whyCard + ' ' + styles.whyCardBlue}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className={styles.whyIcon}>%</div>
              <h3 className={styles.whyCardTitle}>{t('whyChoose.cards.fees.title')}</h3>
              <p className={styles.whyCardDesc}>{t('whyChoose.cards.fees.description')}</p>
              <a href="#" className={styles.whyLearn}>{t('whyChoose.cards.fees.link')}</a>
            </motion.div>
            <motion.div
              className={styles.whyCard + ' ' + styles.whyCardGreen}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className={styles.whyIcon}>⚡</div>
              <h3 className={styles.whyCardTitle}>{t('whyChoose.cards.payouts.title')}</h3>
              <p className={styles.whyCardDesc}>{t('whyChoose.cards.payouts.description')}</p>
              <a href="#" className={styles.whyLearn}>{t('whyChoose.cards.payouts.link')}</a>
            </motion.div>
            <motion.div
              className={styles.whyCard + ' ' + styles.whyCardPurple}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className={styles.whyIcon}>🛡️</div>
              <h3 className={styles.whyCardTitle}>{t('whyChoose.cards.shield.title')}</h3>
              <p className={styles.whyCardDesc}>{t('whyChoose.cards.shield.description')}</p>
              <a href="#" className={styles.whyLearn}>{t('whyChoose.cards.shield.link')}</a>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className={styles.statsBar}>
          <div className={styles.stat}><span className={styles.statValue}>50K+</span><span className={styles.statLabel}>{t('stats.properties')}</span></div>
          <div className={styles.stat}><span className={styles.statValue}>25K+</span><span className={styles.statLabel}>{t('stats.hosts')}</span></div>
          <div className={styles.stat}><span className={styles.statValue}>500K+</span><span className={styles.statLabel}>{t('stats.bookings')}</span></div>
          <div className={styles.stat}><span className={styles.statValue}>99%</span><span className={styles.statLabel}>{t('stats.satisfaction')}</span></div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <h2 className={styles.newsletterTitle}>{t('newsletter.title')}</h2>
          <p className={styles.newsletterSubtitle}>{t('newsletter.subtitle')}</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder={t('newsletter.placeholder')} className={styles.newsletterInput} />
            <button type="submit" className={styles.newsletterButton}>{t('newsletter.button')}</button>
          </form>
        </section>
      </main>
    </div>
  );
}