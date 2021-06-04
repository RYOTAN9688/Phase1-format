//実行
//000をslotNumに表示させる
//スタートを押すと、slotNumの1～9の数字が実行
//ストップボタンを押すと、数字が停止
//数字が3つ止まった時、そろっていたら成功とアラート
//違っていた場合、再挑戦とアラート

//slot middle-slot
const firstTime = document.getElementById("nowTime") //左に数字を入れるidがついたタグのオブジェクトを取得
firstTime.textContent = 0; //0を入れる
const secoundTime = document.getElementById("nowTime2")//真ん中に数字を入れるidがついたタグのオブジェクトを取得
secoundTime.textContent = 0;//0を入れる
const thirdTime = document.getElementById("nowTime3")//右に数字を入れるidがついたオブジェクトを取得
thirdTime.textContent = 0;//0を入れる

//sloy upper-slot
const forthTime = document.getElementById("nowTime4");//左上
forthTime.textContent = 9;
const fiveTime = document.getElementById("nowTime5");//真ん中上
fiveTime.textContent = 9;
const sixTime = document.getElementById("nowTime6");//右上
sixTime.textContent = 9;


//slot downer-slot
const sevenTime = document.getElementById("nowTime7");//左下
sevenTime.textContent = 1;
const eightTime = document.getElementById("nowTime8");//真ん中下
eightTime.textContent = 1;
const nineTime = document.getElementById("nowTime9");//右下
nineTime.textContent = 1;

//button
const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");
const startTimer = document.getElementById("startTimer");



let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let timer6;
let timer7;
let timer8;
let timer9;

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;
let num9 = 0;


//スタートボタンを押すと、1～9の数字が実行
startTimer.addEventListener("click", function () {
    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    clearInterval(timer4);
    clearInterval(timer5);
    clearInterval(timer6);
    clearInterval(timer7);
    clearInterval(timer8);
    clearInterval(timer9);
    timer1 = setInterval(firstSlot, 100);
    timer2 = setInterval(secoundSlot, 120);
    timer3 = setInterval(thirdSlot, 140);
    timer4 = setInterval(forthSlot, 110);
    timer5 = setInterval(fiveSlot, 130);
    timer6 = setInterval(sixSlot, 150);
    timer7 = setInterval(sevenSlot, 160);
    timer8 = setInterval(eightSlot, 170);
    timer9 = setInterval(nineSlot, 180);


});
const firstSlot = function () {
    // num1 += 1;
    // firstTime.textContent = num1;
    // console.log(num1);
    if (num1 === 9) {
        num1 = 0;
        firstTime.textContent = num1;
    } else {
        num1 += 1;
        firstTime.textContent = num1;
    }
}
const secoundSlot = function () {
    // num2 += 1;
    // secoundTime.textContent = num2;
    // console.log(num2);
    if (num2 === 9) {
        num2 = 0;
        secoundTime.textContent = num2;
    } else {
        num2 += 1;
        secoundTime.textContent = num2;
    }
};

const thirdSlot = function () {
    // num3 += 1;
    // thirdTime.textContent = num3;
    // console.log(num3);
    if (num3 === 9) {
        num3 = 0;
        thirdTime.textContent = num3;
    } else {
        num3 += 1;
        thirdTime.textContent = num3;
    }
}

const forthSlot = function () {
    // num4 += 1;
    // fourthTime.textContent = num4;
    // console.log(num4);
    if (num4 === 9) {
        num4 = 0;
        forthTime.textContent = num4;
        console.log(num4);
    } else {
        num4 += 1;
        forthTime.textContent = num4;
    }
}

const fiveSlot = function () {
    // num5 += 1;
    // fiveTime.textContent = num5;
    // console.log(num5);
    if (num5 === 9) {
        num5 = 0;
        fiveTime.textContent = num5;
    } else {
        num5 += 1;
        fiveTime.textContent = num5;
    }
}

const sixSlot = function () {
    // num6 += 1;
    // sixTime.textContent = num6;
    // console.log(num6);
    if (num6 === 9) {
        num6 = 0;
        sixTime.textContent = num6;
    } else {
        num6 += 1;
        sixTime.textContent = num6;
    }
}

const sevenSlot = function () {
    // num7 += 1;
    // sevenTime.textContent = num7;
    // console.log(num7);
    if (num7 === 9) {
        num7 = 0;
        sevenTime.textContent = num7;
    } else {
        num7 += 1;
        sevenTime.textContent = num7;
    }
}

const eightSlot = function () {
    // num8 += 1;
    // eightTime.textContent = num8;
    // console.log(num8);
    if (num8 === 9) {
        num8 = 0;
        eightTime.textContent = num8;
    } else {
        num8 += 1;
        eightTime.textContent = num8;
    }
}
const nineSlot = function () {
    // num9 += 1;
    // nineTime.textContent = num9;
    // console.log(num9);
    if (num9 === 9) {
        num9 = 0;
        nineTime.textContent = num9;
    } else {
        num9 += 1;
        nineTime.textContent = num9;
    }
}


//左のストップボタンを押すと、左の数字が止まる

setTime1.addEventListener("click", function () {
    clearInterval(timer1);
    clearInterval(timer4);
    clearInterval(timer7);
    firstTime.textContent = num1;
    setTime1.disabled = true;
    if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
        if (firstTime === secoundTime && firstTime === thirdTime) {
            alert("成功");
        } else {
            alert("再挑戦");
        }

    }


});

//真ん中のストップボタンを押すと、真ん中の数字が止まる

setTime2.addEventListener("click", function () {
    clearInterval(timer2);
    clearInterval(timer5);
    clearInterval(timer8);
    secoundTime.textContent = num2;
    setTime2.disabled = true;

    if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
        if (firstTime === secoundTime && firstTime === thirdTime) {
            alert("成功");
        } else {
            alert("再挑戦");
        }

    }

});

//右のストップボタンを押すと、右の数字が止まる
setTime3.addEventListener("click", function () {
    clearInterval(timer3);
    clearInterval(timer6);
    clearInterval(timer9);
    thirdTime.textContent = num3;
    setTime3.disabled = true;

    if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
        if (firstTime === secoundTime && firstTime === thirdTime) {
            alert("成功");
        } else {
            alert("再挑戦");
        }


    }

});


