import React, { useRef } from 'react';
import styles from './styles.module.css';
import MyExerciseItem from '../../component/myExerciseItem';
import RecordButton from '../../component/recordButton';
import MyDiaryItem from '../../component/myDiaryItem';
import BodyChart from '../../component/bodyChart';
const data = [
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '1',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '2',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '3',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '4',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '5',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '6',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '7',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '8',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '9',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '10',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '11',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '12',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '13',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '14',
  },
  {
    content: '家事全般（立位・軽い',
    time: '10 min',
    kcal: '26kcal',
    id: '15',
  },
];
function MyRecord() {
  const bodyRecordRef = useRef(null);
  const myExerciseRef = useRef(null);
  const myDiaryRef = useRef(null);
  return (
    <div className={styles.MyRecordBox}>
      <div className={styles.listRecordBoxWrapper}>
        <div className={styles.listRecordBox}>
          <RecordButton
            imgSrc={'/images/my1.png'}
            label={'BODY RECORD'}
            content={'自分のカラダの記録'}
            refDiv={bodyRecordRef}
          />
          <RecordButton
            imgSrc={'/images/my2.png'}
            label={'MY EXERCISE'}
            content={'自分の運動の記録'}
            refDiv={myExerciseRef}
          />
          <RecordButton
            imgSrc={'images/my3.png'}
            label={'MY DIARY'}
            content={'自分の日記'}
            refDiv={myDiaryRef}
          />
        </div>
      </div>
      <div className={styles.graphBoxWrapper} ref={bodyRecordRef}>
        <div className={styles.graphBox}>
          <div className={styles.grapHeader}>
            <div className={styles.grapHeaderName}>BODY RECORD</div>
            <div className={styles.grapHeaderDate}>2021.05.21</div>
          </div>
          <div>
            <BodyChart />
          </div>
          <div className={styles.graphBodyFooter}>
            <div className={styles.listGraphButton}>
              <div className={styles.graphButtonBox}>
                <div className={styles.graphButton}>日</div>
              </div>
              <div className={styles.graphButtonBox}>
                <div className={styles.graphButton}>日</div>
              </div>
              <div className={styles.graphButtonBox}>
                <div className={styles.graphButton}>日</div>
              </div>
              <div className={styles.graphButtonBox + ' ' + styles.choose}>
                <div className={styles.graphButton}>日</div>
              </div>
              <div style={{ flex: 1 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.graphBoxWrapper} ref={myExerciseRef}>
        <div className={styles.graphBox}>
          <div className={styles.grapHeader}>
            <div className={styles.grapHeaderName}>MY EXERCISE</div>
            <div className={styles.grapHeaderDate}>2021.05.21</div>
          </div>
          <div className={styles.exerciseBody}>
            <div className={styles.listContentBox}>
              {(data || []).map((record) => (
                <MyExerciseItem
                  content={record?.content}
                  time={record?.time}
                  kcal={record?.kcal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.myDiary} ref={myDiaryRef}>
        <div className={styles.myDiaryHeadding}>MY DIARY</div>
        <div className={styles.diaryListBox}>
          <MyDiaryItem
            date={'2021.05.21'}
            time={'23:25'}
            title={'私の日記の記録が一部表示されます。'}
            content={
              'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
            }
          />
          <MyDiaryItem
            date={'2021.05.21'}
            time={'23:25'}
            title={'私の日記の記録が一部表示されます。'}
            content={
              'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
            }
          />
          <MyDiaryItem
            date={'2021.05.21'}
            time={'23:25'}
            title={'私の日記の記録が一部表示されます。'}
            content={
              'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
            }
          />
          <MyDiaryItem
            date={'2021.05.21'}
            time={'23:25'}
            title={'私の日記の記録が一部表示されます。'}
            content={
              'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
            }
          />
          <MyDiaryItem
            date={'2021.05.21'}
            time={'23:25'}
            title={'私の日記の記録が一部表示されます。'}
            content={
              'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
            }
          />
          <MyDiaryItem
            date={'2021.05.21'}
            time={'23:25'}
            title={'私の日記の記録が一部表示されます。'}
            content={
              'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
            }
          />
          <MyDiaryItem
            date={'2021.05.21'}
            time={'23:25'}
            title={'私の日記の記録が一部表示されます。'}
            content={
              'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
            }
          />
          <MyDiaryItem
            date={'2021.05.21'}
            time={'23:25'}
            title={'私の日記の記録が一部表示されます。'}
            content={
              'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
            }
          />
        </div>
      </div>
      <div className={styles.body_buttonBox}>
        <div className={styles.body_button}>自分の日記をもっと見る</div>
      </div>
    </div>
  );
}

export default MyRecord;
