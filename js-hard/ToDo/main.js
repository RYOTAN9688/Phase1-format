//テキストボックス内の文字を取得
//追加ボタンを押すと、リストに追加(liを追加していく)
//完了ボタンを押すと、リストから削除(liを削除)


const addBtn = document.getElementsByClassName("add-btn"); console.log(addBtn[0]);　//add=btnのclassを取得
const todo = document.getElementById("todo-app");
const list = document.querySelector(".lists");
console.log(list)



//追加ボタンを押したとき、textAreaを取得
addBtn[0].addEventListener("click", function () {
    const textArea = document.getElementById("add-area");//テキストボックス内のIDがついたタグのオブジェクトを取得
    console.log(textArea);

    let newlist = document.createElement("li");//li要素を作成
    console.log(newlist);
    const listBtn = document.createElement("button");//buttonを作成
    console.log(listBtn);
    listBtn.textContent = "完了";
    newlist.textContent = textArea.value; //liタグのテキストコンテントにテキストareaの値を入れる
    list.appendChild(newlist);
    newlist.appendChild(listBtn);

    if (textArea.value === "") {//textAreaの値が空だった場合、
        alert("空です!");
        newlist.remove();//newlistを削除する
    }
    textArea.value = ""; //textAreaを空にする

    listBtn.addEventListener("click", function () {
        newlist.remove();

    });
});