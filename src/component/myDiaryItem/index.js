import styles from './styles.module.css';

const MyDiaryItem = (props) => {
  const { content, date, time, title } = props;
  return (
    <div className={styles.diaryBox}>
      <div className={styles.diary}>
        <div className={styles.diaryTime}>
          {date}
          <br />
          {time}
        </div>
        <div className={styles.diaryContent}>
          {title} <br />
          {content}
        </div>
      </div>
    </div>
  );
};

export default MyDiaryItem;
