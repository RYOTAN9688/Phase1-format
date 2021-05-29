const confirmTime = document.getElementById("confirmTime");
const startTimer = document.getElementById("startTimer");
const now_time = document.getElementById("now_time");
let timer;
let sec = 0;


confirmTime.addEventListener("click", function () {
    if (sec === 20) {//20秒でクリックしたら
        alert('成功です');//成功ですのアラート
    } else if (sec < 20) {//20秒以下でクリックしたら
        alert(`まだ${sec}秒、、、　再スタートだ`);//再スタートのアラート
    } else {//20秒を超えてクリックしたら
        alert(`もう${sec}秒だ、、、再挑戦せよ`);//再挑戦せよのアラート
    }
    clearInterval(timer);//タイマーを解除する
    sec = 0;//時間をゼロに戻す
});

startTimer.addEventListener('click', function () {
    clearInterval(timer);//タイマーを解除し
    timer = setInterval('countUp()', 1000);//1秒をカウント後、
})

const countUp = function () {
    sec += 1;//一秒ずつカウントし
    if (sec === 40) {//40秒を超えたら
        clearInterval(timer)//タイマーを解除し
        alert('終了、また挑戦せよ');//終了のアラート
        sec = 0;//時間をゼロに戻す
    }
};

const confirmTime2 = document.getElementById("confirmTime2");
const startTimer2 = document.getElementById("startTimer2");

let startTime;
let nowTime;
let diffTime;//difftime 2つの時間の差を算出

confirmTime2.addEventListener('click', function () {//確認ボタンを押したとき
    nowTime = new Date();//now Timeを現在の時刻にする
    if (diffTime === null) {　//時間差の値が存在しないとき
        diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000); //日付と時刻を経過ミリ秒の値として取得する(getTime) //
    }//現在時刻から開始時刻をマイナスし、1000で割ると、経過秒数が習得する
    if (diffTime === 20) {     //{時間差が20秒の時
        alert("大正解");
    } else if (diffTime < 20) {//時間差が20秒以下の時
        alert(`まだ${diffTime}秒、、、再スタートだ`);
    } else {//時間差が20秒以上の時
        alert(`もう${diffTime}秒、、、再挑戦せよ`);
    }
});

startTimer2.addEventListener('click', function () {//スタートボタンを押したとき
    nowTime = new Date();//現在の時刻を取得
    diffTime = null;//時間差をなしとし
    diffTime = setInterval("countUp2()", 1000);//時間差を1秒カウントする
})

const countUp2 = function () {
    let checkTime = new Date();//現在の時刻を取得し
    let diffTime = Math.floor(checkTime.getTime() - startTime.getTime() / 1000);
    if (diffTime === 40) {
        alert("終了、また挑戦せよ")
    }

};
