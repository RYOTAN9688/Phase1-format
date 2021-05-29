
const btn = document.getElementById("btn");  //btn要素を取得する
const body = document.querySelector("body");　//HTML内のbody要素を取得
const dice = document.createElement("img");  // img要素を新たに作成する

let diceNum = "./img/saikoro1.png"; //画像を定義する
dice.setAttribute("src", diceNum);//setAttributeは指定した要素に属性を追加する、または既存の属性を変更します。 setAttribute('属性の名前', '新しい属性')という形式で使用します。
body.appendChild(dice); //body内にdiceを追加

const random = function () {
    diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;//画像をランダムに実行させる
    dice.setAttribute("src", diceNum);

};


let timer;

btn.addEventListener("click", function () {
    clearInterval(timer); //timerをリセットする
    timer = setInterval("random()", 100); //0.1秒ごとに画像を表示させる

    setTimeout(function () {
        clearInterval(timer);//3秒後にタイマーがストップする
    }, 3000);
});





// const player1Btn = document.getElementById("player1Btn");
// const player2Btn = document.getElementById("player2Btn");
// const setPlayer1dice = document.getElementById("setPlayer1dice");
// const setPlayer2dice = document.getElementById("setPlayer2dice");
// const result = document.getElementById("result");

// let player1Timer;
// let player2Timer;
// let player1Num = 1;
// let player2Num = 1;
// let turn = 2;

// let player1Dice = `./img/saikoro${player1Num}.png`;
// setPlayer1dice.setAttribute("src", player1Dice);
// let player2Dice = `./img/saikoro${player2Num}.png`;
// setPlayer2dice.setAttribute("src", player2Dice);
// //プレイヤーのダイスの番号を決めて画像のパスを返す
// const createPlayerDice = (player) => {
//     const playerNum = Math.floor(Math.random() * 6 + 1);
//     if (player === 1) {
//         player1Num = playerNum;
//     } else if (player === 2) {
//         player2Num = playerNum;
//     }
//     const playerDice = `./img/saikoro${playerNum}.png`;
//     return playerDice;
// };
// // サイコロを振る
// const playerRandom = function (player) {
//     playerDice = createPlayerDice(player);
//     if (player === 1) {
//         setPlayer1dice.setAttribute("src", playerDice);
//     } else if (player === 2) {
//         setPlayer2dice.setAttribute("src", playerDice);
//     }
// };
// // ボタン
// const player1 = 1;
// const player2 = 2;
// player1Btn.addEventListener("click", function () {
//     clearInterval(player1Timer);
//     player1Timer = setInterval(() => playerRandom(player1), 100);
//     player1Btn.disabled = true;
//     asyncFunc(player1);
// });
// player2Btn.addEventListener("click", function () {
//     clearInterval(player2Timer);
//     player2Timer = setInterval(() => playerRandom(player2), 100);
//     player2Btn.disabled = true;
//     asyncFunc(player2);
// });
// const check = () => {
//     if (turn !== 0) {
//         return;
//     }
//     if (player1Num > player2Num) {
//         result.textContent = "player1の勝利";
//     } else if (player1Num === player2Num) {
//         result.textContent = "引き分け";
//     } else {
//         result.textContent = "player2の勝利";
//     }
//     player1Btn.disabled = false;
//     player2Btn.disabled = false;
//     turn = 2;
// };
// const asyncFunc = async (player) => {
//     const random = async () => {
//         await new Promise((resolve) => {
//             result.textContent = "???";
//             setTimeout(() => {
//                 resolve();
//                 if (player === 1) {
//                     clearInterval(player1Timer);
//                 } else if (player === 2) {
//                     clearInterval(player2Timer);
//                 }
//             }, 3000);
//         });
//     };
//     await random();
//     turn -= 1;
//     check();
// };