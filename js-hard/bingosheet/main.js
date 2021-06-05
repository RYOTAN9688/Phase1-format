//毎回ランダムで生成(重複ナシ)
//B の列には 1~15, I の列は 16~30, N の列には 31~45, G の列は 46~60, O の列には 61~75
//真ん中は free にする
//２次元配列にて生成する

const table = document.getElementById("view");
const heads = ["B", "I", "N", "G", "O"]
const hitNum = document.createElement("hit-num")
hitNum.textContent = "free";

//1~15を作成
let b_randoms = [];
let min = 1, max = 15;
for (i = min; i <= max; i++) {
    while (true) {
        let tmp = intRandom(min, max);
        if (!b_randoms.includes(tmp)) {
            b_randoms.push(tmp);
            break;
        }
    }
}
function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(b_randoms);

//16~30まで作成
let i_randoms = [];
min = 16, max = 30;
for (i = min; i <= max; i++) {
    while (true) {
        let tmp = intRandom(min, max);
        if (!i_randoms.includes(tmp)) {
            i_randoms.push(tmp);
            break;
        }
    }
}
function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(i_randoms);

//31~45までを作成
let n_randoms = [];
min = 31, max = 45;
for (i = min; i <= max; i++) {
    while (true) {
        let tmp = intRandom(min, max);
        if (!n_randoms.includes(tmp)) {
            n_randoms.push(tmp);
            break;
        }
    }
}
function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(n_randoms);

//46~60まで作成
let g_randoms = [];
min = 46, max = 60;
for (i = min; i <= max; i++) {
    while (true) {
        let tmp = intRandom(min, max);
        if (!g_randoms.includes(tmp)) {
            g_randoms.push(tmp);
            break;
        }
    }
}
function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(g_randoms);

//61~75まで作成
let o_randoms = [];
min = 61, max = 75;
for (i = min; i <= max; i++) {
    while (true) {
        let tmp = intRandom(min, max);
        if (!o_randoms.includes(tmp)) {
            o_randoms.push(tmp);
            break;
        }
    }
}
function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(o_randoms);




for (let y = 0; y < 6; y++) {
    const tr = table.insertRow(); //tr（横方向の行数）を追加


    console.log(tr);
    for (let x = 0; x < 5; x++) {
        const td = tr.insertCell()//td（縦方向の行数）を追加
        if (y === 0) {//横が一行目の時に
            td.textContent = heads[x];//縦１行目にheadを代入する。
        }
        if (x === 0 && y <= 5 && y > 0) {
            td.textContent = b_randoms[y];
        }
        console.log(td);
    }
}
console.log(typeof table);










