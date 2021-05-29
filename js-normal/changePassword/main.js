//現在のパスワードを取得
//新しいパスワードを取得
//現在のパスワードとテキストに入力したパスワードが一致しているか
//現在のパスワードと新しいパスワードが異なっているか
//上の二つをみなしたらパスワードを変更
//それ以外は引っかかる点をアラートする

const nowPw = document.getElementById("nowPassword");//現在のパスワードを表示するidを取得
let PasswordValue = "aaaaa";// 現在のパスワードをaaaaaとする
nowPw.textContent = `現在のパスワードは${PasswordValue}です。`; //パスワードaaaaaを表示する



const setPs = document.getElementById("setPassword");//ボタンのidを所得する
setPs.addEventListener("click", function () {　//ボタンを押したとき、

    const confirmPs = document.getElementById("confirmPassword").value;//現在の打ち込んだパスワードの値を取得し、
    const newPs = document.getElementById("newPassword").value;//新しく打ち込んだパスワードの値を取得する

    if (PasswordValue === confirmPs) {//現在のパスワードと現在打ち込んだパスワードが一致しているなら

        if (PasswordValue !== newPs) {//現在のパスワードと新しく打ち込んだパスワードが異なっているなら
            // if (8 <= newPs.length) { //新しく打ち込んだパスワードがが８文字以上であれば、
            //     PasswordValue = newPs;//新しく打ち込んだパスワードを現在のパスワードに代入し、
            //     nowPs.textContent = `現在のパスワードは${PasswordValue}です。`;//現在のパスワードとして出力し
            //     alert(`新しいパスワードは、${PasswordValue}です。`);//新しいパスワードとしてアラート

            // } else {//パスワードが８文字以下であれば、
            //     alert("パスワードは８文字以上にしてください");
            // }

            // let result = newPs.match(/^\d{3}-?\d{4}$/g);//新しく打ち込んだパスワードを郵便番号形式としてresultとする。
            // if (!result) {//郵便番号形式でない場合は
            //     alert("xxx-yyyyの形式で表示してください");
            // } else {//郵便番号形式になっている場合は、
            //     PasswordValue = newPs;//新しく打ち込んだパスワードを現在のパスワードに代入し、
            //     nowPw.textContent = `現在のパスワードは${PasswordValue}です`;
            //     alert(`新しいパスワードは${PasswordValue}です`);
            // }

            // const check = /(.)\1/;
            // let result = check.test(newPs);

            // if (!result) {
            //     PasswordValue = newPs;
            //     nowPs.textContent = `現在のパスワードは${PasswordValue}`;
            //     alert(`現在のパスワードは${PasswordValue}`);
            // } else {
            //     alert("同じ文字を連続して使うことはできません");
            // }

            const reserch = /abc/g;
            let result = newPs.search(reserch);
            console.log(result);
            if (result < 0) {
                PasswordValue = newPs;
                nowPw.textContent = `現在のパスワードは${PasswordValue}です`;
                alert(`現在のパスワードは${PasswordValue}です`);
            } else {
                alert(`abcの文字は使用できません`);
            }


        } else {//現在のパスワードと新しく打ち込んだパスワードが一緒ならば、
            alert("同じパスワードは使えません");
        }

    } else {       //現在のパスワードと現在打ち込んだパスワードが一致していない場合
        alert("古いパスワードが間違っています。");　//古いパスワードが間違っているとアラート
    }
});