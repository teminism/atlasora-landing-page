import { motion } from 'framer-motion';
import styles from './Card.module.css';

const Card = ({ title, description, icon }: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};

export default Card;