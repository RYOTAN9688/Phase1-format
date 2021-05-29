//自分の手を選ぶ
//決定ボタンを押す
//乱数を生成
//生成した数によって相手の手を画面に表示
// 自分の手と生成した数を比較して勝敗を表示


// const cpHand = document.getElementById("cpHand");//cpHandのidを取得
// cpHand.textContent = "相手の手"

// const log = document.getElementById("log");
// log.textContent = "結果:"

// const gameStart = document.getElementById("gameStart");

// // 決定ボタンを押す
// gameStart.addEventListener("click", function () { //決定ボタンをおした時に
//     const myNum = document.getElementById("myHand").value;//myhand(自分の手)の値を取得する

//     // 相手の手を画面に表示

//     const cpNum = Math.floor(Math.random() * 3);//cpHandの乱数を作成
//     console.log(cpNum);


//     if (cpNum === 0) {
//         cpHand.textContent = "相手の手:グ―";
//     } else if (cpNum === 1) {
//         cpHand.textContent = "相手の手:チョキ";
//     } else {
//         cpHand.textContent = "相手の手:パー";
//     }

//     switch (myNum) {
//         case "0": {//自分の手がグーの場合
//             if (cpNum === 0) {//相手の手がグーならば
//                 log.textContent = "結果:引き分け";
//             } else if (cpNum === 1) {//相手の手がチョキなら
//                 log.textContent = "結果:勝ち";
//             } else {
//                 log.textContent = "結果:負け";
//             }
//             break;
//         }
//         case "1": {//自分の手がチョキの場合
//             if (cpNum === 0) {//相手の手がグーならば
//                 log.textContent = "結果:負け";
//             } else if (cpNum === 1) {//相手の手がチョキならば
//                 log.textContent = "結果:引き分け";
//             } else {//相手の手がパーならば
//                 log.textContent = "結果:勝ち";
//             }
//             break;
//         }
//         case "2": {//自分の手がパーならば
//             if (cpNum === 0) {//相手の手がグーならば
//                 log.textContent = "結果:勝ち";
//             } else if (cpNum === 1) {//相手の手がチョキならば
//                 log.textContent = "結果:負け";
//             } else {//相手の手がパーならば
//                 log.textContent = "結果:引き分け";
//             }
//             break;
//         }
//     }
// });

//player1の値を取得
//0~2の数を生成
//player1Handに値をセット
//player2の値を取得
//0~2の数を取得
//player2Handに値をセット
//ボタンをおして値を比較し画面に表示


const nowturn = document.getElementById("player");
const setHand = document.getElementById("setHand");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");



let turn = 0;
let player1Num;
let player2Num;

setHand.addEventListener("click", function () {//決定ボタンを押したとき、
    if (turn === 0) {
        player1Num = document.getElementById("playerHand").value;
        player1Hand.textContent = "player1: セット完了";
        // console.dir(document.getElementById("playerHand"));
        nowturn.textContent = "player2"
    } else if (turn === 1) {
        player2Num = document.getElementById("playerHand").value;
        player2Hand.textContent = "player2:セット完了";
        nowturn.textContent = "両者セット完了";
    }
    turn += 1;
});
const log = document.getElementById("log");
log.textContent = "結果:"
const gameStart = document.getElementById("gameStart");

gameStart.addEventListener("click", function () {//ゲームスタートを押したとき、
    console.log(turn);
    if (turn !== 2) {
        alert("２回以上押さないでください！");
        return;
    }
    console.log(player1Num)
    switch (player1Num) {
        case '0': {//グー
            if (player2Num === '0') {//グー
                log.textContent = "結果:引き分け";
            } else if (player2Num === '1') {//チョキ
                log.textContent = "結果:勝ち";
            } else if (player2Num === '2') {//パー
                log.textContent = "結果:負け";
            }
            console.log("グー");
            break;
        }
        case '1': {//チョキ
            if (player2Num === '0') {//グー
                log.textContent = "結果:負け";
            } else if (player2Num === '1') {//チョキ
                log.textContent = "結果:引き分け";
            } else if (player2Num === '2') {//パー
                log.textContent = "結果:勝ち";
            }
            break;
        }
        case '2': {//パー
            if (player2Num === '0') {//グー
                log.textContent = "結果:勝ち";
            } else if (player2Num === '1') {//チョキ
                log.textContent = "結果:負け";
            } else if (player2Num === '2') {//パー
                log.textContent = "結果:引き分け";
            }
            break;
        }
    }
    turn = 0;
    nowturn.textContent = "player1";
    player1Hand.textContent = 'player1:';
    player2Hand.textContent = 'player2:';


});