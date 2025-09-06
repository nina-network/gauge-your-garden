import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/favicon_gyg.png" alt="GYG Logo" className={styles.logo} />
        <p> to make this mobile friendly, this is where the menu will be </p>
      </footer>
    </>
  );
}
