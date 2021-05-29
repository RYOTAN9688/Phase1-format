// const inputTime = document.getElementById("inputTime");
// const setTime = document.getElementById("setTime");
// const nowTime = document.getElementById("nowTime");
// const startTimer = document.getElementById("startTimer");
// const stopTimer = document.getElementById("stopTimer");
// let sec = 10;
// //変更ボタンを押すと、テキストボックス内の数字をセットする。
// setTime.addEventListener("click", function () {
//     sec = inputTime.value;
//     nowTime.textContent = `${sec}:セット完了`;
// });

// //スタートボタンを押すと、カウントダウンタイマー処理を開始
// let timer;
// startTimer.addEventListener("click", function () {
//     clearInterval(timer);
//     timer = setInterval("countDown()", 1000);
// });
// //一秒ごとにカウントダウンを開始
// const countDown = function () {
//     sec -= 1;
//     nowTime.textContent = sec;
//     //0秒になったら処理をストップさせ、アラートにて終了と伝える
//     if (sec === 0) {
//         alert("終了")
//         clearInterval(timer);
//     }
// };
// //ストップタイマーを押すと、カウントを停止する
// stopTimer.addEventListener("click", function () {
//     clearInterval(timer);
//     nowTime.textContent = `${sec}+ :ストップしました`;
// });

let leftHour;
let leftMin;
let leftSec;
// 変更ボタン押すと、秒数をnowTimeにセットする。
const inputTime = document.getElementById("inputTime");
const setTime = document.getElementById("setTime");
const nowTime = document.getElementById("nowTime");
const startTimer = document.getElementById("startTimer");
const stopTImer = document.getElementById("stopTimer");

setTime.addEventListener("click", function () {
    sec = inputTime.value;
    leftSec = sec % 60;//4000/60=66余り40より秒を40とする
    leftMin = Math.floor((sec % 3600) / 60);//4000/3600=1余り400より、余りの400を使い、400/60＝6.66から6分となる
    leftHour = Math.floor(sec / 3600);//4000/3600＝1.1111で小数点を切り捨てて1時間とする
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒です。`;
    //4000=3600*1+60*6+40 を分解して計算している。
});
//スタートボタンを押すと、カウントダウン開始
let timer;
startTimer.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval("countDown()", 1000);
});

const countDown = function () {
    sec -= 1;
    leftSec = sec % 60;
    leftMin = Math.floor((sec % 3600) / 60);
    leftHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒です。`;
    if (sec === 0) {
        alert("終了");
        clearInterval(timer);
    }
};
//ストップボタンを押すと、カウントが停止する
stopTimer.addEventListener("click", function () {
    clearInterval(timer);
    nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒でストップしました。 `;
});