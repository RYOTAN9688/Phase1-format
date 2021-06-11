
//2 枚のカードをクリックする
//数字が一致したら画面から削除 / しなかったら裏返す

//Fisher-Yates Shuffleを用いて1から9の数字を生成し、シャッフル
const num = [1, 1, 2, 2, 3, 3, 4, 4]

for (let i = num.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let tmp = num[i];
    num[i] = num[j];
    num[j] = tmp;
}
console.log(typeof num)

//カードを作成する

let card = []; //カードを入れる配列を作成
console.log(card);
let panel = document.getElementById("panel")//HTML内からpane1のidを取得する

for (i = 0; i < 8; i++) {//カードを八枚生成し
    let div = document.createElement("div");//div要素を新たに作成し、
    div.className = "card back";//divにclassnameをつける
    div.innerHTML = "";//divのテキストは空にする
    div.index = i;//divに番号をつける
    div.onclick = click;//div要素（カード）がクリックされた時にclickの関数を実行
    card.push(div);//配列にdiv要素を入れる
    panel.appendChild(div)//panelの親要素にdivの子要素を追加する
    console.log(div);
}






const nextPlayer = document.getElementById("nextPlayer");
const player1 = document.getElementById("player1Point");
const player2 = document.getElementById("player2Point");


let first;//一枚目に押されたカードを定義する
let firstNum;





let player1Point = 0;
let player2Point = 0;



//クリックするとnumに切り替わる
function click(e) {//クリックの関数
    let div = e.target; //event.targetはイベントの呼び出し元のオブジェクトを取得するのでonclickのオブジェクトdivを取得する
    div.className = "card";//クリックされた時のdiv要素のclassnameにcardを入れる
    div.innerHTML = num[div.index];//div要素のテキストには、シャッフルした数字を入れる div.indexはi番目の数字を入れる

    console.log(first);
    if (first === undefined) {//一枚目の処理を行う
        first = div;
        firstNum = first.innerHTML;
        console.log(firstNum);
    }
    else {//二枚目の処理を行う
        if (firstNum === div.innerHTML) {
            //一枚目と二枚目の数字が同じならば、
            setTimeout(function () {
                div.className = "card finish";//カードを
                div.innerHTML = "";
                first.className = "card finish";
                first.innerHTML = "";
                first = undefined;
            }, 500);
            if (player1) {//2つのカードが同じ数字ならばplayer1に1(point)を追加
                player1Point += 1;
            } else if (player2) { //2つのカードが同じ数字ならばplayer2に1(point)を追加
                player2Point += 1;
            }


        } else {//数字が違った場合
            setTimeout(function () {
                div.className = "card back";
                div.innerHTML = "";
                first.className = "card back"
                first.innerHTML = "";
                first = undefined;
            }, 500);

            //違う数字ならばplayer2に移る　次はplayer2の番です
            //違う数字ならばplayer1に移る
        }
    }


};


//player1とplayer2を設定
player1.textContent = `player1 ${player1Point}: `
player2.textContent = `player2 ${player2Point}: `
let turn = 0;

if (turn === 0) {
    nextPlayer.textContent = nextPlayer.textContent = `次はplayer1の番です`;
} else {
    next.textContent = nextPlayer.textContent = `次はplayer2の番です`;
    turn += 1;
}