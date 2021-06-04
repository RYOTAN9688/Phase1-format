let testTimer1; //testTimer 1を宣言
let testTimer2; //testTimer 2を宣言
let testTimer3; //testTimer 3を宣言

const nowTime1 = document.getElementById('nowTime'); //nowTimeのオブジェクトを取得(真ん中左の数字)
const nowTime2 = document.getElementById('nowTime2');//nowTime2のオブジェクトを取得（真ん中の数字）
const nowTime3 = document.getElementById('nowTime3');//nowTime3のオブジェクトを取得（真ん中右の数字）


let count1 = 0; //count1を宣言し、0を代入
let count2 = 0; //count2を宣言し、0を代入
let count3 = 0; //count3を宣言し、0を代入

let leftCount = 3;  //leftCount3を宣言し、3を代入

nowTime1.textContent = count1;　//nowTime1のtextContent に　count1 (0)を代入
nowTime2.textContent = count2;　//nowTime2のtextContent に　count1 (0)を代入
nowTime3.textContent = count3;　//nowTime3のtextContent に　count1 (0)を代入

const setTime1 = document.getElementById('setTime1');　//setTime1のオブジェクトを取得（左のストップボタン）
const setTime2 = document.getElementById('setTime2');　//setTime2のオブジェクトを取得（真ん中のストップボタン）
const setTime3 = document.getElementById('setTime3');　//setTime3のオブジェクトを取得（右のストップボタン）
const startTimer = document.getElementById('startTimer');　//startTimerのオブジェクトを取得（スタートボタン）

startTimer.addEventListener('click', function () {　//スタートボタンを押したときに関数を処理する
  setTime1.disabled = false;  //左のストップボタンを押せるようにする
  setTime2.disabled = false;  //真ん中のストップボタンを押せるようにする
  setTime3.disabled = false;  //右のストップボタンを押せるようにする
  clearInterval(testTimer1);　//testTimer1のタイマーが起動していた場合、クリアにする
  clearInterval(testTimer2);　//testTimer2のタイマーが起動していた場合、クリアにする
  clearInterval(testTimer3);　//testTimer3のタイマーが起動していた場合、クリアにする
  slotFunction();　//
  leftCount = 3;　//leftCountに3を代入
});

const slotFunction = function () { //slotFunctionを宣言し、関数を定義する
  testTimer1 = setInterval(function () { //testTimer1に、一定時間ごとに特定の処理を繰り返す関数を実行
    if (count1 === 0) {　//もし、count1が0であった場合、
      count1 = 0; //count1に0を代入
      nowTime1.textContent = count1; //真ん中左の数字に、count1 (0)を代入
      nowTime4.textContent = 9; //上左の数字に、９を代入
      nowTime7.textContent = 1; // 下左の数字に。1を代入
      count1 += 1; //count1(0)に1を足す
    } else if (count1 === 9) {　　//もしcount1が9であった場合、
      nowTime1.textContent = count1; 　//真ん中左の数字に、count1(9)を代入
      nowTime4.textContent = count1 - 1; //上左の数字に、count1(9)-1　＝8を代入　 
      nowTime7.textContent = 0;　//下左の数字に 0を代入
      count1 = 0;　//count1に0を代入
    } else { //count1がそれ以外の場合は、
      nowTime1.textContent = count1;　//真ん中左の数字に、count1を代入
      nowTime4.textContent = count1 - 1;　//上左の数字に、count1-1を代入
      nowTime7.textContent = count1 + 1; //下左の数字に、count +1 を代入
      count1 += 1;  //count1に1を足す
    }
  }, 100);　//一定時間は0.1秒とする

  testTimer2 = setInterval(function () {//testTimer2に、一定時間ごとに特定の処理を繰り返す関数を実行
    if (count2 === 0) {//もし、count2が0であった場合
      count2 = 0;//count2に0を代入
      nowTime2.textContent = count2;//真ん中の数字に、count2(0)を代入
      nowTime5.textContent = 9;//上真ん中の数字に、９を代入
      nowTime8.textContent = 1;// 下真ん中の数字に。1を代入
      count2 += 1;//count2(0)に1を足す
    } else if (count2 === 9) {//もしcount2が9であった場合、
      nowTime2.textContent = count2;//真ん中の数字に、count2(9)を代入
      nowTime5.textContent = count2 - 1;//上真ん中の数字に、count2(9)-1　＝8を代入　 
      nowTime8.textContent = 0;//下真ん中の数字に 0を代入
      count2 = 0;//count2に0を代入
    } else {//count1がそれ以外の場合は、
      nowTime2.textContent = count2;//真ん中の数字に、count2を代入
      nowTime5.textContent = count2 - 1;//上真ん中の数字に、count2-1を代入
      nowTime8.textContent = count2 + 1;//下真ん中の数字に、count2 +1 を代入
      count2 += 1; //count2に1を足す
    }
  }, 100);//一定時間を0.1秒とする

  testTimer3 = setInterval(function () {  //testTimer3に、一定時ごとに特定の処理を繰り返す関数を実行
    if (count3 === 0) {//もし count3　が０だった場合、
      count3 = 0; //count3に0を代入する
      nowTime3.textContent = count3; //真ん中右に count3（0）を代入する
      nowTime6.textContent = 9;// 上右に9を代入する
      nowTime9.textContent = 1;//下右に1を代入する
      count3 += 1;//count3に1を足す
    } else if (count3 === 9) { //count3が9だった場合、
      nowTime3.textContent = count3;//真ん中右にcount3を代入する
      nowTime6.textContent = count3 - 1;//上右にcount3-1を代入する
      nowTime9.textContent = 0;//下右に0を代入する
      count3 = 0;//count3に0を代入する
    } else {// count3がそれ以外だった場合は、
      nowTime3.textContent = count3;//真ん中右に、今の数字を代入する
      nowTime6.textContent = count3 - 1;//上右に、今の数字から1を引いた数字を代入する
      nowTime9.textContent = count3 + 1;//下右に、今の数字から1を足した数字を代入する
      count3 += 1;//　今の数字に1を足す
    }
  }, 100);//一定時間を0.1秒とする
};

setTime1.addEventListener('click', function () {//左のストップボタンを押した時に関数を実行
  setTime1.setAttribute('disabled', 'true'); //setAttribute メソッドは指定した属性名の属性値に新しい値を設定 左のストップボタンを押せなくする
  clearInterval(testTimer1);//testTimer1のタイマーが実行場合、クリアにする。
  leftCount -= 1;//leftCountを1引く
  checkCount();//checkCount
});

setTime2.addEventListener('click', function () {
  setTime2.setAttribute('disabled', 'true');
  clearInterval(testTimer2);
  leftCount -= 1;
  checkCount();
});

setTime3.addEventListener('click', function () {
  setTime3.setAttribute('disabled', 'true');
  clearInterval(testTimer3);
  leftCount -= 1;
  checkCount();
});

const checkCount = function () {
  if (leftCount === 0) {
    leftCount = 3;
    if (
      nowTime1.textContent === nowTime2.textContent &&
      nowTime1.textContent === nowTime3.textContent
    ) {
      alert('おめでとう');
    } else {
      alert('再挑戦');
    }
  }
};

// 追加チャレンジ問題

const nowTime4 = document.getElementById('nowTime4');
const nowTime5 = document.getElementById('nowTime5');
const nowTime6 = document.getElementById('nowTime6');
const nowTime7 = document.getElementById('nowTime7');
const nowTime8 = document.getElementById('nowTime8');
const nowTime9 = document.getElementById('nowTime9');
nowTime4.textContent = 9;
nowTime5.textContent = 9;
nowTime6.textContent = 9;
nowTime7.textContent = 1;
nowTime8.textContent = 1;
nowTime9.textContent = 1;

// 追加チャレンジ問題 ここまで
