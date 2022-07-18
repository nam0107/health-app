import styles from './styles.module.css';

const RecomenendedBox = (props) => {
  const { label1, label2, content } = props;
  return (
    <div className={styles.recomemendedBox}>
      <div className={styles.recomemended}>
        <div className={styles.recomemendedTitle}>{label1}<br />{label2}</div>
        <div className={styles.recomemendedLine}></div>
        <div className={styles.recomemendedContent}>{content}</div>
      </div>
    </div>
  );
};

export default RecomenendedBox;
