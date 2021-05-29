let cntPerson = 0;
const cntUp = function () {
    cntPerson += 1;
    console.log(cntPerson);
};

const reply = function () {
    const action = Array(1 * cntPerson + 1).join('どうぞどうぞ');
    alert(action);
    cntPerson = 0;
};

const cntDown = function () {
    cntPerson -= 1;
    console.log(cntPerson);
    if (cntPerson < 0) {
        alert('もう誰もいない、、、');
        cntPerson = 0;
    }
}
