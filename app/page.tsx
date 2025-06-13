'use client';
import styles from './Home.module.css';
import Header from './components/Header';
import { motion } from 'framer-motion';

export default function Home() {
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
            Revolutionize Your<br />Booking Experience
          </h1>
          <p className={styles.heroSubtitle}>
            Connect hosts and guests with confidence. Experience seamless bookings, instant payouts, and industry-leading safety features.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.primaryCta}>Start Hosting Today</button>
            <button className={styles.secondaryCta}>Explore Properties</button>
          </div>
        </section>

        {/* Analytics Image Placeholder */}
        <section className={styles.analyticsSection}>
          <div className={styles.analyticsImage}>
          <img
            src="/dashboard.svg"
            alt="Analytics dashboard illustration"
            className={styles.analyticsImage}
          />
          </div>
        </section>

        {/* Why Choose Section */}
        <section className={styles.whySection}>
          <h2 className={styles.whyTitle}>Why Choose AtlasOra?</h2>
          <p className={styles.whySubtitle}>
            We&apos;ve built the most advanced booking platform with features that matter to both hosts and guests.
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
              <h3 className={styles.whyCardTitle}>Only 5% Booking Fees</h3>
              <p className={styles.whyCardDesc}>Keep more of your earnings with industry-low fees. No hidden charges, no surprises – just transparent, fair pricing for everyone.</p>
              <a href="#" className={styles.whyLearn}>Learn More →</a>
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
              <h3 className={styles.whyCardTitle}>Instant Payouts</h3>
              <p className={styles.whyCardDesc}>Get paid immediately after checkout. No waiting periods, no delays – your money is available when you need it.</p>
              <a href="#" className={styles.whyLearn}>Learn More →</a>
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
              <h3 className={styles.whyCardTitle}>Check-in Shield</h3>
              <p className={styles.whyCardDesc}>Advanced verification and safety protocols protect both hosts and guests. Book with confidence, host with peace of mind.</p>
              <a href="#" className={styles.whyLearn}>Learn More →</a>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className={styles.statsBar}>
          <div className={styles.stat}><span className={styles.statValue}>50K+</span><span className={styles.statLabel}>Properties Listed</span></div>
          <div className={styles.stat}><span className={styles.statValue}>25K+</span><span className={styles.statLabel}>Happy Hosts</span></div>
          <div className={styles.stat}><span className={styles.statValue}>500K+</span><span className={styles.statLabel}>Bookings Completed</span></div>
          <div className={styles.stat}><span className={styles.statValue}>99%</span><span className={styles.statLabel}>Satisfaction Rate</span></div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <h2 className={styles.newsletterTitle}>Stay Updated</h2>
          <p className={styles.newsletterSubtitle}>Get the latest updates, tips, and exclusive offers delivered to your inbox.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" className={styles.newsletterInput} />
            <button type="submit" className={styles.newsletterButton}>Subscribe</button>
          </form>
        </section>
      </main>
    </div>
  );
}