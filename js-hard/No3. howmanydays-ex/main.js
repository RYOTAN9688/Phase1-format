// チャレンジ問題

let timer3;

const startSearch = document.getElementById('dateSearch');

const diffTime = document.getElementById('diffTime');

startSearch.addEventListener('click', function() {
  timer3 = setInterval('count3()', 1000);
});

const count3 = function() {
  const date = moment();
  const setTime = document.getElementById('dateSet').value;
  const time = moment(setTime);
  const secondLeft = time.diff(date, 'second') % 60;
  const minuteLeft = time.diff(date, 'minute') % 60;
  const hourLeft = time.diff(date, 'hour') % 24;
  const dayLeft = time.diff(date, 'days');
  diffTime.textContent = `${setTime}まで後${dayLeft}日${hourLeft}時間${minuteLeft}分${secondLeft}秒`;
};
