

// 問１
  // for (let i =1; i<=10; i++){
  // console.log(`${i}ループをマスターするぞ！！`);
  // }

// 問２
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let len = arr.length;
  
  // for (let i = len - 1; i >= 1 ; i--){
  //   // console.log(arr[i]);
  //   len[i] = i + 1;
  //   console.log(`${i}万円！`);
  // }

  // 別の人の回答
  // {
  //   for(let i=0; i<10; i++){
  //     console.log(`${10-i}万円！`);
  //   }
  // }
  // 別の人の回答
  // {
  //   for(let i=10; i>1; i++){
  //     console.log(`${i}万円！`);
  //   }
  // }

  // 問３
  //   for (let i = 100; i <= 120; i++) {
  //     if (i % 2 === 0 ) {
  //       console.log(`[${i}]`);
  //     } else {
  //       console.log(`(${i})`);
  //     }
  //   }

  // 問４　無回答

//  問5
  // for (let number = 1; number <= 30; number++) {
  //   // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  // if (number % 7 === 0) {
  //     console.log("-Sunday!");
  //   } else {
  //     console.log(number);
  //   }
  // }

  // 問６
  // [仕様]
  // - 1, 2, 4, 8, 16, ... と 2 倍になっていく数を 18 個表示してください。
  // - for文を使ってください。
  // - console.log()で表示してください。


  // for (j = 1; j < 2; j++) {
  //   for (i = 1; i < 3; i++) {
  //     console.log(j * i);
  //      }
  //     }

    // for (i = 1; i < 16; i++) {
    //   console.log(i*2);
    //    }
    // 　 実行結果→２
    //    　　　　４
    //    　　　　６
    //    　　　　８
    //    　　　　１０
    //    と２の掛け算となる

    //  for (i = 1; i < 16; i++) {
    //   console.log((i*i) *1 );
    //    }
    
    // ひこさんのおかげでみごと回答！！！！！！
    // for (let i = 0; i < 18; i++) {
    //  console.log((2)**i);
    //    }
    



    // 問7
    // [仕様]
    // - 4 年ごとに開かれるイベントが何回開催されるか調べましょう。
    // - 期間は 2020 年〜 2100 年までです。
    // - 開催年を列挙し、最後に回数を表示してください。
    // - console.log()で表示してください。


    // const number = [];
    // for (let i = 20; i < 100; i++) {
     
    //    nunber.splice()[4];
    // }


    // ひこさんから教えてもらった数式あてはめる

    // for (let i = 1; i < 20; i++) {
    //   console.log((i*4)+2020);
    // }

//    ------------------ 別の人の回答------------------------------------
// {
//     for(let i=2020; i<=2100; i++){
//       if(i%4===0){
//         console.log(i);
//       }
//       continue;
//     }
//     console.log(`全部で${(2100-2020)/4+1}回、開催されます。`);
  
//   }



//    問１０
//  [仕様]
// - 初年度に price 円の貯蓄を毎日したとします。
// - 翌年から n 年後まで、複利 r で投資したとします。
// - Year 0 から Year n までの結果を以下のように表示してください。
// - 1 年の日数は 365 日固定とします。
// - n は 1 以上の整数とします。
// - 計算結果は小数点以下切り捨てとしてください。
// - for文を使ってください。
// - console.log()で表示してください。

// [期待される結果: price = 418, r = 1.1, n = 10 の場合]
// Year 0: 152570
// Year 1: 167827
// Year 2: 184609
// Year 3: 203070
// Year 4: 223377
// Year 5: 245715
// Year 6: 270287
// Year 7: 297315
// Year 8: 327047
// Year 9: 359752
// Year 10: 395727

// [期待される結果: price = 418, r = 1.2, n = 10 の場合]
// Year 0: 152570
// Year 1: 183084
// Year 2: 219700
// Year 3: 263640
// Year 4: 316369
// Year 5: 379642
// Year 6: 455571
// Year 7: 546685
// Year 8: 656023
// Year 9: 787227
// Year 10: 944673

// */

// {
  // 以下の定数を使ってここからプログラムを書いてください
  
  // const price = 418;
  // const r = 1.1;
  // const n = 10;
  
  // for (let i = 0; i < n; i++) {
  //     console.log(`Year${15270*(1.1)**i}`)
  //   }
  // for (let i = 1; i < 20; i++) {
    //   console.log((i*4)+2020);
    
    //  Math.floor どこに置いてよいかわからず

// }

// 別の人の回答
// const price = 418;
// const r= 1.1;
// const n=10;
// const firstAssets= 418*365;
// for(let i=0; i<=n; i++){
//   let assets =firstAssets*(r**i);
//   console.log(`Year ${i}: ${Math.floor(assets)}`);
// }

// 問11
// [仕様]
// - 1 から 30 の整数を順番に表示していきますが、以下の条件で表示を変えてください。
// - 3 の倍数のときは「Fizz」、5 の倍数のときは「Buzz」、3 の倍数かつ 5 の倍数のときは「FizzBuzz」と表示します。
// - console.log()で表示してください。

// for (let i = 1; i <= 30; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz")
//   } else if (i % 3 == 0) {
//     console.log("Fizz")
//   } else if (i % 5 == 0) {
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
// }



// 問12
// const name= [];

// name[0] ="Fizz!"
// name[1] ="Buzz!"
// name[2] ="Fizz!Buzz!"
// name[3] ="もう一回!"
// let i = 0
// for (let i = 0; i <= 6; i++) {

//   ↓このようなことをしようとしたら無限ループに陥った！！！
//     if ( i === name.length) {
//       i = 0
//     }
//     console.log(name[i]);
//   }
 
// 問１９
// {

//   const when = ['今','昔','明日','昨日','昭和時代に']; 
//   const who = ['自分と','犬が','猫が','背後霊に','あの人と']; 
//   const where = ['渋谷で','教会で','池で','カフェで','崖で']; 
//   const how = ['笑いながら','真似るように','考えながら','ぼーっと','困りながら']; 
//   const what = ['歩き回った','爆走した','ぴくついた','フリーズした','反芻した']; 

//  const a = []
//  a[0] = when;
//  a[1] = who;
//  a[2] = where;
//  a[3] = how;
//  a[4] = what;

// for (let i = 0; i < 5; i++) {
//  const n = Math.floor(Math.random() * a.length);
//  console.log(when[n],who[n],where[n],how[n],what[n]);
//  }

//  for (let i = 0; i < 5; i++) {
//  const n = Math.floor(Math.random() * who.length);
//  console.log(when[n],who[n]);
//  }
//  for (let i = 0; i < 5; i++) {
//  const n = Math.floor(Math.random() * where.length);
//  console.log(when[n],who[n],where[n]);
//  }
//  for (let i = 0; i < 5; i++) {
//  const n = Math.floor(Math.random() * how.length);
//  console.log(when[n],who[n],where[n],how[n]);
//  }
//  for (let i = 0; i < 5; i++) {
//  const n = Math.floor(Math.random() * what.length);
//  console.log(when[n],who[n],where[n],how[n],what[n]);
//  }




// 問１６
// 1 から 6 の目がでるサイコロを 10,000 回ふったときに、1 がでる確率を求めるプログラムを書いてみましょう。

// const c = 1666.66 % 10000 カウントした数を出そうとする
// const c = 16.94 % 10000 
// const c = なにかの計算で16.66 % がでる

// 色々な数が出てわからなくなる


// const c = 16.94
// const n = [1,2,3,4,5,6];
// // console.logにて実際のサイコロができる
// const a = Math.floor(Math.random() * n.length +1);
// console.log(a);

// 「おみくじ」動画＃確率を操作してみよう　にて
//  n が 0.05 より小さくはないけれど 0.2 よりは小さい場合、と書いてあげると 15% の確率になる

// あたりを参考するもどうあてはめていいかわからず

// const a = (Math.random() * n.length +1);
// if (n < c) {
// }
// console.log(a);



// {
// const n = Math.random();
// if (n < 0.04) {
//   btn.textContent = '凶'; // 5%
// } else if (n < 0.4) {
//   btn.textContent = '大吉'; // 15%
// } else {
//   btn.textContent = '中吉'; // 80%
//   }
// }


//  問２５
// const n=38.47;

// for (let i = 0; i < n; i++) {
//  console.log(2+1);
   
 
    // for (let i = 0; i < 42; i++) {
    //  console.log((2)**i);
    //    }

{

          const a = 1000;

          const n = Math.random();
          if (n < 0.2) {
            console.log('大吉');  ; // 20%
          } else if (n < 0.7) {
            console.log('中吉'); ; // 70%
          } else {
            console.log('凶');; // 10%
          }
          console.log()
        }

// ーーここからクラスメイトaitomakoさんのコード真似ながら書くーーーー
 {    // 1から6までの乱数を返す
          function rand3() {
            return Math.floor(Math.random()*3) + 1;
          }

          let cnt = 0;  // 「大吉」を数えるカウンタ
          for (let i=0; i<a; i++) {
            if ( Math.random() === 20 / 100) {
              cnt++;
            }
          }
          console.log(`大吉が出る確率は${cnt}%です`);

        }
// ーーここからクラスメイトkiwiさんのコード真似ながら書くーーーー

        //0～配列の個数の数字の中から、ランダムな数を取り出し、取り出した数番目の要素を返す関数
function wordChoice(word){
  const randomNumber = Math.floor(Math.random()*word.length);
  // console.log(randomNumber);コンソールじゃなくリターンを返す
  return word[randomNumber];
}

//各要素を取り出して、1つの文字列に代入
const sentence =`${wordChoice(when)}${wordChoice(who)}${wordChoice(where)}${wordChoice(how)}${wordChoice(what)}`; 

console.log(sentence);
      
{
  // 以下の定数を使ってここからプログラムを書いてください
  
  const n =15;
  let numbers='';
  for(let i=0; i<=n; i++){
    if(i<10){
      numbers +=`0${i} `;
    }else{
      numbers +=`${i} `;
    }
  }
  console.log(numbers);
}

// ーーー問２１　おみくじ ーーーーーーーーーー
/* 

[仕様]
- 「大吉」「中吉」「凶」の 3 つのみが出るおみくじを作ってください。
- ただしそれぞれが出る確率を、「大吉=20%」「中吉=70%」「凶=10%」にしてください。
- そのおみくじのプログラムを 10,000 回実行し、「大吉」が出た率を表示してください。
- フォーマットは以下を参考にしてください。
- console.log()で表示してください。

[期待される結果: 実行するたびに変わります]
「大吉」が出た率は20.45%です。
*/

// おみくじ作るところまでは自力でできる
// けれどここからどうしていいかわからず
{
  let count = 0;

  const n = Math.random();
  if (n < 0.2) {
    console.log('大吉');  ; // 20%
  } else if (n < 0.7) {
    console.log('中吉'); ; // 70%
  } else {
    console.log('凶');; // 10%
  }
  console.log()
}
上記を10000回繰り返したいのでfor文の中入れる
{　　
  let count = 0;

        for(let i = 1; i <= 10000; i++){
          const n = Math.random();
        if(n < 0.1) {
          // console.log('凶');
        }else if(n < 0.3){
          count = count + 1;
          // console.log('大吉');
        }else {
          // console.log('中吉');
        } 
        }
        console.log(`大吉がでた率は${(count/10000 * 100).toFixed(2)}％です。`);
  }
  配列を使った人の回答
  {
    const FORTUNE = ['大吉', '大吉', '中吉', '中吉', '中吉', '中吉', '中吉', '中吉', '中吉', '凶'];
    let excellentLuckCount = 0;
  
    for (let i = 1; i <= 10000; i++ ){
      let result = Math.floor(Math.random() * FORTUNE.length);
      if (FORTUNE[result] === '大吉') {
        excellentLuckCount = excellentLuckCount + 1;
      }
    }
    console.log(`「大吉」が出た率は${(excellentLuckCount/10000*100).toFixed(2)}%です。`);
  }
  // ーー問２２　おみくじで大吉が出るまで何回かかる？ ーーーーーーーーーー
  // [仕様]
  // - 「大吉」「中吉」「凶」の 3 つのみが出るおみくじを作ってください。
  // - ただしそれぞれが出る確率を、「大吉=10%」「中吉=80%」「凶=10%」にしてください。
  // - そのおみくじのプログラムを「大吉」が出るまで繰り返し実行し、それぞれの結果と、「大吉」が出てくるまでにかかった回数を表示してください。
  // - フォーマットは以下を参考にしてください。
  // - console.log()で表示してください。

  {
    const FORTUNE = ['大吉', '中吉','中吉','中吉','中吉','中吉','中吉','中吉','中吉', '凶'];
    let excellentLuckCount = 0;
  
    for (let i = 1; i >= 0; i++ ){
      let result = Math.floor(Math.random() * FORTUNE.length);
      console.log(`${i}回目: ${FORTUNE[result]}`);
      excellentLuckCount = excellentLuckCount + 1;
      if (FORTUNE[result] === '大吉'){
        break;
      }
    }
    console.log(`大吉が出るまで${excellentLuckCount}回かかりました`);
  }
  for文を使った人の回答
  {
      let dice = 0;
      let cnt = 0;
      
      for (let i = 1; i <= 100; i++) {
        
        dice = Math.floor(Math.random() * 10) + 1;
        
        if (dice === 1) {
            cnt++;
            console.log(`${cnt}回目: 大吉`);
            break;
        }
        if (dice === 2) {
            cnt++;
            console.log(`${cnt}回目: 凶`);
        } else {
            cnt++;
            console.log(`${cnt}回目: 中吉`);
        }
        
      }
      console.log(`大吉が出るまで${cnt}回かかりました`);
    }

// ーーー問２６　九九の表を生成しよう ーーーーーーーーーー
// [仕様]
// - 以下のように結果を整形し、一つの文字列として表示してください。
// - それぞれの数値は空白で区切ってください（末尾に空白があってもかまいません）。
// - 改行には \n を使いましょう。
// - for文を使ってください。
// - console.log()で表示してください。

{

  let a = 0;
  let b = 0;
  let c ='';
  
  for (let a = 1; a < 10; a++) {
      
    for (let b = 1; b < 10; b++) {
      if (a*b <= 9){
          c = c + `0${a*b} `;//0から9に満たない数は0つける
          } else {
          c = c + `${a*b} `;
          }
          if 
          (b === 9){
            c = c + '\n';//bが9の時が9の時''に加えて改行もする
          }
            }
              }
    console.log(c);//出力する箇所をループの外側に移動するというアドバイスを受ける。そしてそのようにしてうまくいく
  
  }
  // ーーーーーークラスメイトsaoimitoさんのコードーーーーーーーーーーーーーーーーーーーー
    let a = '';
    
    for (let i = 1; i < 10; i++) {
      for(let j = 1; j < 10; j++) {
        if (i * j < 10) {
          a = a + `0${i * j} `
        } else {
          a = a + `${i * j} `;
        }
        if (j === 9) {
          a = a + '\n';
        }
      }
    }
    console.log(a);

// ーーー問３３奇数の合計を求めてみよう ーーーーーーーーーー
//     [仕様]
// - 奇数だけ取り出し、合計を求めてください。
// - フォーマットは以下のとおりです。
// - console.log()で表示してください。

// [期待される結果]
// 31



{
  // 次に定数を使い、ここからプログラムを書いてください。

  const nums = [3, 8, 2, 5, 1, 7, 15, 12];
  const oddNumbers = nums.filter(nums => nums % 2 === 1);
  let lesult = 0
  
   oddNumbers.forEach(nums => {
    lesult += nums;
  });
console.log(lesult);
} 


  
  