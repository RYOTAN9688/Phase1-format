//pタグを作成
//body内にpタグを追加
//1秒ごとに更新する



// const today = moment().format('MMMM Do YYYY, h:mm:ss a');//今日の日付
// console.log(today);



// const rute = document.createElement("p");
// document.body.appendChild(rute);

// function countDown() {


//     const diff = moment('2112-09-03').diff(moment());
//     const duration = moment.duration(diff);

//     const day = Math.floor(duration.asDays());
//     const hours = duration.hours();
//     const minutes = duration.minutes();
//     const seconds = duration.seconds();
//     rute.textContent = (`ドラえもんが生まれるまで${day}日${hours}時間${minutes}分${seconds}秒`);

// };




// countDown();
// setInterval(countDown, 100);





const textDate = document.getElementById("dateSet");
const button = document.getElementById("dateSearch");
const diffTime = document.getElementById("diffTime");


button.addEventListener("click", function () {//ボタンをクリックしたとき、テキスト内の値を表示し、一秒ごとに更新する
    countDown();
    setInterval(countDown, 100);
});


const countDown = function () {
    let date = textDate.value;//テキスト内の値を取得し、
    console.log(date);
    const diff = moment(date).diff(moment());
    const duration = moment.duration(diff);

    const day = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    diffTime.textContent = (`${date}まで後${day}日${hours}時間${minutes}分${seconds} 秒`);
};