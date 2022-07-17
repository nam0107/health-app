

import styles from "./styles.module.css";


const Footer = () => {
    return (
      <div className={styles.footer}>
          <div className={styles.listButton}>
            <div className={styles.footer_button}>会員登録</div>
            <div className={styles.footer_button}>運営会社</div>
            <div className={styles.footer_button}>利用規約</div>
            <div className={styles.footer_button}>個人情報の取扱について</div>
            <div className={styles.footer_button}>特定商取引法に基づく表記</div>
            <div className={styles.footer_button}>お問い合わせ</div>
          </div>
        </div>
    )
}

export default Footer;