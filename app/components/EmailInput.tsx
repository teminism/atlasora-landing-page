import styles from './EmailInput.module.css';

const EmailInput = () => {
    return (
      <div className={styles.wrapper}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.input}
        />
        <button className={styles.button}>
          Get Started
        </button>
      </div>
    );
  };
  
  export default EmailInput;