//進化するボタンを押す
//0~9の乱数を生成
//写真を入れる親要素の中身を削除
//画像1を入れる
// 4 / 10 の確率で1枚の画像　40％
// 3 / 10 の確率で2枚の画像　30％
// 2 / 10 の確率で3枚の画像　20％
// 1 / 10 の確率で4枚の画像　10％
// 4以上で画像2を出力
// 7以上で画像3を出力
// 9以上で画像全てを出力


const setBtn = document.getElementById("setBtn");//setBtn（進化する。。。ボタン）のidを取得
const resetBtn = document.getElementById("resetBtn");//reset（リセットボタン）のidを取得
const showImg = document.getElementById("showImg");//showImg(画像表示）のidを取得

setBtn.addEventListener("click", function () {   //setBtnをクリックしたとき
    showImg.innerHTML = ""; showImg               //画像表示の要素を空にし、
    const num = Math.floor(Math.random() * 10); //0~9の乱数を作成し、定数numとする


    const first = document.createElement("div");//画像表示のオブジェクトにdivの要素を作成し、定数firstとする
    first.innerHTML = "<img src ='./img/evolution1.png ' alt=原人 />";//firstに原人の画像を入れ、表示 
    showImg.appendChild(first); //showImg の子要素にfirstを追加
    const firstWord = document.createElement("p");
    firstWord.innerHTML = "原人";
    first.appendChild(firstWord);



    if (num >= 4) {      //もしnumが4以上であれば
        const secound = document.createElement("div");//画像表示のオブジェクトにdivの要素を作成し、定数secoundsとする
        secound.innerHTML = "<img src ='./img/evolution2.png ' alt=旧人 />";//secoundsに旧人の画像を入れ、表示
        showImg.appendChild(secound); //showImg の子要素にsecoundsを追加
        const secoundWord = document.createElement("p");
        secoundWord.innerHTML = "旧人";
        secound.appendChild(secoundWord);

    }

    if (num >= 7) {
        const third = document.createElement("div");//画像表示のオブジェクトにdivの要素を作成し、定数firstとする
        third.innerHTML = "<img src ='./img/evolution3.png ' alt=新人 />";//thirdに新人の画像を入れ、表示
        showImg.appendChild(third); //showImg の子要素にthirdを追加
        const thirdWord = document.createElement("p");
        thirdWord.innerHTML = "新人";
        third.appendChild(thirdWord);
    }
    if (num >= 9) {
        const fourth = document.createElement("div");//画像表示のオブジェクトにdivの要素を作成し、定数fourthとする
        fourth.innerHTML = "<img src ='./img/evolution4.png ' alt=現代人 />";//fourthに現代人の画像を入れ、表示
        showImg.appendChild(fourth); //showImg の子要素にfourthを追加
        const fourthWord = document.createElement("p");
        fourthWord.innerHTML = "現代人";
        fourth.appendChild(fourthWord);
    }
});
resetBtn.addEventListener("click", function () {
    showImg.innerHTML = "";
})




