import React from 'react';
import styles from './styles.module.css';
import my1 from '../../image/my1.png';
import my2 from '../../image/my2.png';
import my3 from '../../image/my3.png';
import graph_background from '../../image/graph_background.png';
import graph1 from '../../image/graph1.png';
import graph2 from '../../image/graph2.png';
import graph_number from '../../image/graph_number.png';

import MyExerciseItem from '../../component/myExerciseItem';
import RecordButton from '../../component/recordButton';
import MyDiaryItem from '../../component/myDiaryItem';

function MyRecord() {
  return (
    <div className={styles.MyRecordBox}>
      <div className={styles.listRecordBoxWrapper}>
        <div className={styles.listRecordBox}>
          <RecordButton
            imgSrc={my1}
            label={'BODY RECORD'}
            content={'自分のカラダの記録'}
          />
          <RecordButton
            imgSrc={my2}
            label={'MY EXERCISE'}
            content={'自分の運動の記録'}
          />
          <RecordButton
            imgSrc={my3}
            label={'MY DIARY'}
            content={'自分の日記'}
          />
        </div>
      </div>
      <div className={styles.graphBoxWrapper}>
        <div className={styles.graphBox}>
          <div className={styles.grapHeader}>
            <div className={styles.grapHeaderName}>BODY RECORD</div>
            <div className={styles.grapHeaderDate}>2021.05.21</div>
          </div>
          <div className={styles.graphBodyWrapper}>
            <div className={styles.graphBody}>
              <img
                alt=''
                className={styles.graph_background}
                src={graph_background}
              />
              <img alt='' className={styles.graph_image} src={graph2} />
              <img alt='' className={styles.graph_image} src={graph1} />
              <img alt='' className={styles.graph_number} src={graph_number} />
            </div>
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
      <div className={styles.graphBoxWrapper}>
        <div className={styles.graphBox}>
          <div className={styles.grapHeader}>
            <div className={styles.grapHeaderName}>MY EXERCISE</div>
            <div className={styles.grapHeaderDate}>2021.05.21</div>
          </div>
          <div className={styles.exerciseBody}>
            <div className={styles.listContentBox}>
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
              <MyExerciseItem
                content={'家事全般（立位・軽い'}
                time={'10 min'}
                kcal={'26kcal'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.myDiary}>
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
