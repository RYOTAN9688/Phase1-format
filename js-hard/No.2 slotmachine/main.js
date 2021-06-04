let testTimer1;
let testTimer2;
let testTimer3;

const nowTime1 = document.getElementById('nowTime');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');

let count1 = 0;
let count2 = 0;
let count3 = 0;

let leftCount = 3;

nowTime1.textContent = count1;
nowTime2.textContent = count2;
nowTime3.textContent = count3;

const setTime1 = document.getElementById('setTime1');
const setTime2 = document.getElementById('setTime2');
const setTime3 = document.getElementById('setTime3');
const startTimer = document.getElementById('startTimer');

startTimer.addEventListener('click', function() {
  setTime1.disabled = false;
  setTime2.disabled = false;
  setTime3.disabled = false;
  clearInterval(testTimer1);
  clearInterval(testTimer2);
  clearInterval(testTimer3);
  slotFunction();
  leftCount = 3;
});

const slotFunction = function() {
  testTimer1 = setInterval(function() {
    if (count1 === 0) {
      count1 = 0;
      nowTime1.textContent = count1;
      count1 += 1;
    } else if (count1 === 9) {
      nowTime1.textContent = count1;
      count1 = 0;
    } else {
      nowTime1.textContent = count1;
      count1 += 1;
    }
  }, 100);

  testTimer2 = setInterval(function() {
    if (count2 === 0) {
      count2 = 0;
      nowTime2.textContent = count2;
      count2 += 1;
    } else if (count2 === 9) {
      nowTime2.textContent = count2;
      count2 = 0;
    } else {
      nowTime2.textContent = count2;
      count2 += 1;
    }
  }, 100);

  testTimer3 = setInterval(function() {
    if (count3 === 0) {
      count3 = 0;
      nowTime3.textContent = count3;
      count3 += 1;
    } else if (count3 === 9) {
      nowTime3.textContent = count3;
      count3 = 0;
    } else {
      nowTime3.textContent = count3;
      count3 += 1;
    }
  }, 100);
};

setTime1.addEventListener('click', function() {
  setTime1.setAttribute('disabled', 'true');
  clearInterval(testTimer1);
  leftCount -= 1;
  checkCount();
});

setTime2.addEventListener('click', function() {
  setTime2.setAttribute('disabled', 'true');
  clearInterval(testTimer2);
  leftCount -= 1;
  checkCount();
});

setTime3.addEventListener('click', function() {
  setTime3.setAttribute('disabled', 'true');
  clearInterval(testTimer3);
  leftCount -= 1;
  checkCount();
});

const checkCount = function() {
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
