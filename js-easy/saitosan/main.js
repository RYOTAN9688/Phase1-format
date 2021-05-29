// ボタンを押す
//0～9までの乱数を作る
//0~4までの数字が出たら「ぺっぺっぺー」をアラートする
//5~9までの数字が出たら「斎藤さんだぞ」をアラートする
const word1 = "ぺっぺっぺー"
const word2 = "斎藤さんだぞ"
const setBtn = function () {
    const random = Math.floor(Math.random() * 10);
    if (random < 5) {
        const result = confirm(word1);
        if (result) {
            alert(word1);
        } else {
            alert(word2);
        }
    } else {
        const result = confirm(word2);
        if (result) {
            alert(word2);
        } else {
            alert(word1);
        }
    }
};