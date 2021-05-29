// // // 値

// // // 数値
// // console.log(100)
// // console.log(1.5)


// // // 文字列
// // console.log("hello")
// // console.log('ありがとう')

// // // 配列
// // console.log([1, 2, 3, 4, 5])

// // // 真偽値(しんぎち)
// // console.log(true)
// // console.log(false)

// // // オブジェクト
// // console.log({ one: 1, two: 2 })

// // 変数

// // const myName = 'Beppu'
// // // consst 名前＝値

// // console.log(myName)

// // 変数myNameに値'Beppu'を代入する

// // const number = 100

// // console.log(number)


// // const number = 100
// // const isValid = true
// // const userIds = [1, 3, 10]

// // console.log(number)
// // console.log(isValid)
// // console.log(userIds)
// // //constは必ず初期化する必要がある！
// // // letは初期化しなくてもOK!
// // let learning

// // // constは再代入ができない   原則はconstを使用すること！！
// // // letは再代入ができる
// // learning = 'Ruby'

// // console.log(learning)


// // 文字列処理
// // 'これは文字列です。'
// // "これも文字列です。"


// // "I'm Beppu Takemitsu."

// //文字列の結合


// const breakfast = "トースト"
// console.log("今日の朝ごはんは" + breakfast + "でした。\nとても美味しかった。")

// // 今日の朝ごはんはトーストでした。\nを使うことで改行される
// // とても美味しかった。


// // テンプレート文字列
// // テンプレート文字列を使用した場合は\nを使用しなくても改行される

// console.log(`今日の朝ごはんは${breakfast}でした。
// とても美味しかった。`)


// // 配列
// // []を配列を書く要素
// // ''を一つ一つの要素


// const days = ['日', '月', '火', '水', '木', '金', '土']

// console.log(days[3])   //[]の中にインデックスを指定して配列の要素を取得

// console.log(days.length)
// // length要素の個数を指定



// // 配列の操作

// const nengou = ['明治', '大正', '昭和', '平成']
// console.log(nengou)

// // 要素の追加
// nengou.push('令和')

// console.log(nengou)
// //["明治", "大正", "昭和", "平成", "令和"]

// nengou.splice(3, 1)  //splice（削除したい要素のインデックス, 削除したい要素の個数）


// console.log(nengou)
// //["明治", "大正", "昭和", "令和"]


// nengou[2] = 'showa'

// console.log(nengou)

// ``はshift+@で入力できる


// // 条件分岐

// const num = Math.random()  //Math.randam()　0～1の中からランダムな数を返してくれるプログラム

// if (num >= 0.5) {　　　　　 //numが0.5以上である場合
//     console.log('大きめ')
// } else {
//     console.log('小さめ')
// }

// console.log(`数: ${num}`)


// 真偽値

// const num = Math.random()

// // if文は原則、条件式がtrueの場合に実行される
// if (true) {
//     console.log("条件はtrueです")
// } else {
//     console.log("条件はfalseです")
// }


// if ("a") {
//     console.log('このプログラムは実行される！')
// }


// 条件式でfalseとみなされる値　　　　false,0, ""（空文字列）

// const a = 2
// const b = 3
// const c = 10
// const d = 10

// X === Y
// xとYが等しいとみなされる際にtrueになる

// // a >= b　左辺が右辺以上の際にtrue
// console.log(a === b) //false
// console.log(c === d) //true


// console.log(a === b && c === d)

// A && b
// AがtrueかつBがtrueの場合　trueになる

// console.log(a === b || c === d)

// // A || B
// // AがtrueまたはBがtrueの場合　trueになる

// console.log(!(a === b))



// for文

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// consoleに0から9までの値を表示する


// for (初期化処理; 継続条件; 更新処理) {
//     // 繰り返したい処理
// }

// 1.変数iに0を代入（初期化処理の実行）
// 2.i<10は満たしているか（継続条を評価）　満たしていない場合は終了
// 3.ブロック内の処理を実行
// 4.iに1可算代入する
// 5.2に戻る

// while文

// while（継続条件） [
//     繰り返したい処理
// ]
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }
// 関数

// // 関数（処理をまとめて名前をつけるもの）の定義
// function applyTax(price) {
//     // console.log(price * 1.1)//消費税込みの金額入力する
//     return price * 1.1
//     // return文を使用することで、任意の値を「戻り値」として指定できる
// }




// // function 関数名(仮引数)｛
// // 処理
// // return 戻り値
// // ｝
// // 実行（呼び出し）
// // 関数を実行する際は、関数名に（）をつける
// applyTax(1000)
// applyTax(580)
// // 上の結果を合計したい
// console.log(applyTax(1000) + applyTax(580))
// // 関数を使うと
// 好きな時に何度でも呼び出せる
// 引数を用いて、実行時に任意の値を渡せる
// 戻り値を指定して、関数内の任意の値を別の場所で使用することができる



// 関数式
const applyTax = function (price) {
    return price = 1.1
}

// // アロー関数
// const applyTax = (price) => {
//     return price = 1.1
// }

// 引数が一つの場合、()を省略できる
const applyTax = price => {
    return price = 1.1
}

// 処理が一行の場合、returnとブロック({})を省略できる
const applyTax = price => price * 1.1