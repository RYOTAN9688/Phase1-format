//3桁の数字をランダムに作成
//テキスト内の値を取得
//3桁以下、以上の場合はアラート
//同じ数字を2回以上使っている場合は、アラート
//ランダムに作成した数字とテキスト内の数字を比較し、桁があっている場合は、EATとアラート
//数字はあっているが、桁が違っている場合は、BITEとアラート
//繰り返す
//桁も数字もすべてあっている場合、終了



const answerNum = document.getElementById("answerNum");
const checkBtn = document.getElementById("numCheck");
const remainTurn = document.getElementById("remainTurn");

// ランダムの3桁の数字


const number = [];
number[0] = Math.floor(Math.random() * 10);
do {
    number[1] = Math.floor(Math.random() * 10);
} while (number[0] === number[1]);
do {
    number[2] = Math.floor(Math.random() * 10);

} while (number[0] === number[2] || number[1] === number[2])

console.log(number);


let timer = 10;
let timerNum = number.join("");
console.log(timerNum);
remainTurn.textContent = `あと残り${timer}回です`;


//type of　型を調べる


checkBtn.addEventListener("click", function () {

    let text = answerNum.value;//テキストボックス内の数字（文字列）の値を取得
    console.log(text);

    const checkNum2 = text.split("").map(Number);//その値を文字列として区切り、配列にする
    console.log(checkNum2); //splitはStringオブジェクトとして用意されている

    if (text.length == 3) {//もしテキストボックス内の値が3桁の場合、
        const check = /(.)\1/;//同じ数字が2個あった場合の定数を宣言
        let result = check.test(text);//checkNumの数字を確認する
        // console.log(result);
        // console.log(text);
        if (result) {
            //同じ数字が2個あった場合は、
            alert("同じ数字は2回以上は使えません");
            answerNum.value = "";
            return;
        }

    } else {
        alert("3桁の数字を入力してください");
        answerNum.value = "";
        return;
    } answerNum.value = "";

    console.log(text);

    //ランダムに作成した数字とテキスト内の数字を比較し、桁があっている場合は、EATとアラート
    //数字はあっているが、桁が違っている場合は、BITEとアラート
    let eat = 0;
    let bite = 0;

    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (number[i] == text[j]) {　//桁数が同じで
                if (i === j) { //数字もあっている場合
                    eat = eat + 1;
                } else {
                    bite = bite + 1;
                }

            }
        }


    }

    console.log(`eat${eat},bite${bite}`);
    alert(`eat${eat},bite${bite}`);
    timer = timer - 1;
    remainTurn.textContent = `あと残り${timer}回です`;
    if (timer == 0) {
        remainTurn.textContent = `終了です。答えは${timerNum}でした。`;
    }






    if (eat === 3) {
        alert("成功です！おめでとうございます！");


    }



});
