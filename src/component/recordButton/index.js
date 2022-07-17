import styles from './styles.module.css';

const RecordButton = (props) => {
  const { imgSrc, label, content } = props;
  return (
    <div className={styles.recordBoxB}>
      <div className={styles.recordBox}>
        <div className={styles.record}>
          <div className={styles.recordButtonBox}>
            <div className={styles.recordButtonContent}>{label}</div>
            <div className={styles.recordButton}>{content}</div>
          </div>
          <img alt='' src={imgSrc} className={styles.recordImage} />
        </div>
      </div>
    </div>
  );
};

export default RecordButton;
