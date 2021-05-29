
const input = document.getElementById("sampleForm");
const countNum = document.getElementById("textCounter");
const reset = document.getElementById("resetBtn");
const iniDel = document.getElementById("iniDel");
const endDel = document.getElementById("endDel");
const goalNum = 400;
let textarea;

countNum.textContent = `あと${goalNum - input.value.length}文字`;//400文字ーinputテキストボックス内の文字 value= 値を取得し、lenght=文字列を所得したもの　　   value = 値　length =文字列（文字数）の長さを取得

input.addEventListener("keyup", function () {
    countNum.textContent = `あと${goalNum - input.value.length}文字`;
    textarea = input.value;
});

reset.addEventListener("click", function () {
    countNum.textContent = `あと${goalNum}文字`;
    textarea = ""
});



iniDel.addEventListener("click", function () {
    textarea = textarea.slice(1);
    input.value = textarea;
    countNum.textContent = `あと${goalNum - input.value.length}文字`;
});

endDel.addEventListener("click", function () {
    textarea = textarea.slice(0, -1);
    input.value = textarea;
    countNum.textContent = `あと${goalNum - input.value.length}文字です`;
});

// max = 400;
// let count = null;
// lest = null;
//文字を入力するたびに押されましたと出力
// sampleForm.addEventListener("keyup", function () {
//     let length = sampleForm.value.length;
//     count = length;
//     lest = max - length;
//     textCounter.textContent = `あと${lest}文字`;
// });

// //リセットボタンを押すと。一括削除
// reset.addEventListener("click", function () {
//     lest = null;
//     textCounter.textContent = `あと400文字`;
// });
