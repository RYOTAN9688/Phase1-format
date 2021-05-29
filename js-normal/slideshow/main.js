const spring = { img: "./img/slide1.png", text: "春へ" };
const summer = { img: "./img/slide2.png", text: "夏へ" };
const autumn = { img: "./img/slide3.png", text: "秋へ" };
const winter = { img: "./img/slide4.png", text: "冬へ" };
const data = [
    { img: "./img/slide1.png", text: "春へ" },
    { img: "./img/slide2.png", text: "夏へ" },
    { img: "./img/slide3.png", text: "秋へ" },
    { img: "./img/slide4.png", text: "冬へ" },
];
console.log(data[0])//7行目がコンソールされる
console.log(data[2].text);//秋へ
console.log(data[0].img)

// ボタンを押すと
const pushBtn = document.getElementById("pushBtn");//pushBtnのidを取得
const imgSection = document.getElementById("viewImg");//viewImgのidを取得
let imgNum = 0;
pushBtn.textContent = data[imgNum].text;
imgSection.setAttribute("src", data[imgNum].img);

pushBtn.addEventListener("click", function () {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }


    imgSection.setAttribute("src", data[imgNum].img);//ボタンを押すと、
    pushBtn.textContent = data[imgNum].text;//ボタンを押すと、ボタン内の文字を出力
});
const seasonNum = document.getElementById("seasonNum");
const skipBtn = document.getElementById("skipBtn");
skipBtn.addEventListener("click", function () {
    imgNum = seasonNum.value;
    imgNum = parseInt(imgNum);
    imgSection.setAttribute("src", data[imgNum].img);
    pushBtn.textContent = data[imgNum].text;

})