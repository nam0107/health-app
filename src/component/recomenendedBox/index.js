import styles from './styles.module.css';

const RecomenendedBox = (props) => {
  const { label, content } = props;
  return (
    <div className={styles.recomemendedBox}>
      <div className={styles.recomemended}>
        <div className={styles.recomemendedTitle}>{label}</div>
        <div className={styles.recomemendedLine}></div>
        <div className={styles.recomemendedContent}>{content}</div>
      </div>
    </div>
  );
};

export default RecomenendedBox;
