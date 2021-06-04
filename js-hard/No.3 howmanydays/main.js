const doraemon = document.createElement('p'); //要素作成
const body = document.querySelector('body'); //親ノード取得
body.appendChild(doraemon); //子ノード追加

let timer; //タイマー設定
let timer2;

const birthdayDoremon = moment('2112-09-03 12:00'); //日付選択

const count = function() {
  const date = moment();
  const secondLeft = birthdayDoremon.diff(date, 'second') % 60;
  const minuteLeft = birthdayDoremon.diff(date, 'minute') % 60;
  const hourLeft = birthdayDoremon.diff(date, 'hour') % 24;
  const dayLeft = birthdayDoremon.diff(date, 'days');

  doraemon.textContent = `ドラえもんが生まれるまで後${dayLeft}日${hourLeft}時間${minuteLeft}分${secondLeft}秒`;
};

count();

timer = setInterval('count()', 1000);
//ライブラリ使用しないバージョン
