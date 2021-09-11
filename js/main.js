

// 問１
  for (let i =1; i<=10; i++){
  console.log(`${i}ループをマスターするぞ！！`);
  }

// 問２
// [仕様]
// - 10万円！, 9万円！, ... 1万円！、となるように文字列を表示してください。
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let len = arr.length;
  
  // for (let i = len - 1; i >= 1 ; i--){
  //   // console.log(arr[i]);
  //   len[i] = i + 1;
  //   console.log(`${i}万円！`);
  // }

  // ーーーーーーーーー別の人の回答ーーーーーーーーーーーーーーーーーー
  {
    for(let i=0; i<10; i++){
      console.log(`${10-i}万円！`);
    }
  }
  // 別の人の回答
  {
    for(let i=10; i>1; i++){
      console.log(`${i}万円！`);
    }
  }

// 問３
  // 100以上、120未満の数値を表示してみましょう。ただし偶数は[]で、奇数は()で囲ってください。
    for (let i = 100; i <= 120; i++) {
      if (i % 2 === 0 ) {
        console.log(`[${i}]`);
      } else {
        console.log(`(${i})`);
      }
    }
    
    
    
// 問４　無回答
    //[仕様]
    // - Q1, Q2, Q3, Q4, Q1, Q2,...のパターンで n 個の値を表示してください。
    // - for文を使ってください。


  // ーーーーーーーーー別の人の回答ーーーーーーーーーーーーーーー
  { 
    const n = 16;
  
    for (let i = 0; i < n; i++) {
        console.log(`Q${i % 4 + 1}`);
    }
  }

  {
    const n = 16;
  
      for(let i = 1; i <= n; i++) {
        
        if(i >= 13) {
          console.log(`${i}:Q${i - 12}`);
        } else if (i >= 9) {
          console.log(`${i}:Q${i - 8}`);
        } else if (i >= 5) {
          console.log(`${i}:Q${i - 4}`);
          
        } else {
          console.log(`${i}:Q${i}`);
        }
      }
    
 問5
// [仕様]
// - 1から30までの数値を表示し、7の倍数のときだけ「 - Sunday!」とつけましょう。
// - for文を使ってください。
// - console.log()で表示してください
      {
        for (let number = 1; number <= 30; number++) {

          if (number % 7 === 0) {
          console.log("-Sunday!");
          } else {
          console.log(number);
        }
      }
      
  問６
  // [仕様]
  // - 1, 2, 4, 8, 16, ... と 2 倍になっていく数を 18 個表示してください。
  // - for文を使ってください。
  // - console.log()で表示してください。

 // ーーーひこさんのおかげでみごと回答！！！！！！ーーーーーー
  {
    for (let i = 0; i < 18; i++) {
     console.log((2)**i);
       }
  }
// ーーー色々やってみるがうまくいかずーーー
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

    問7
    // [仕様]
    // - 4 年ごとに開かれるイベントが何回開催されるか調べましょう。
    // - 期間は 2020 年〜 2100 年までです。
    // - 開催年を列挙し、最後に回数を表示してください。
    // - console.log()で表示してください。


    // const number = [];
    // for (let i = 20; i < 100; i++) {
    //nunber.splice()[4];
    // }


    // ーーーーひこさんから教えてもらった数式あてはめるーー

    {
      for (let i = 1; i < 20; i++) {
      console.log((i*4)+2020);
    }
    console.log(`全部で${(2100-2020)/4+1}回、開催されます。`);
  }

//    ==============別の人の回答=================
// {
//     for(let i=2020; i<=2100; i++){
//       if(i%4===0){
//         console.log(i);
//       }
//       continue;
//     }
//     console.log(`全部で${(2100-2020)/4+1}回、開催されます。`);
//   }
問８
// - 以下のように表示されるように結果を整形してください。
// - n は 2 以上の整数とします。
// - for文を使ってください。
// - console.log()で表示してください。

// [期待される結果: n = 25 の場合]
// n: 25
// Sum: 325
// Avg: 13
{
   const n = 25;
  　let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(`n: ${n}`);
  console.log(`Sum: ${sum}`);
  console.log(`Avg: ${sum/n}`);
  
}
問９
// [仕様]
// - 1st, 2nd, 3rd, 4th, .... 35th までを表示してください。
// - console.log()で表示してください。

// [期待される結果]
// 1st
// 2nd
// 3rd
// 4th
// 5th
// 6th
// 7th
// 8th
// 9th
// 10th
// 11th
{
  for (let i = 1; i <= 35; i ++) {
    if (i % 10 === 1 && i !== 11) {
      console.log(i + 'st');
    } else if (i % 10 === 2 && i !== 12) {
      console.log(i + 'nd');
    } else if (i % 10 === 3 && i !== 13) {
      console.log(i + 'rd');
    } else {
      console.log(i + 'th');
    }
    
  }
   
}



   問１０
//  [仕様]
// - 初年度に price 円の貯蓄を毎日したとします。
// - 翌年から n 年後まで、複利 r で投資したとします。
// - Year 0 から Year n までの結果を以下のように表示してください。
// - 1 年の日数は 365 日固定とします。
// - n は 1 以上の整数とします。
// - 計算結果は小数点以下切り捨てとしてください。
// - for文を使ってください。


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

// {
  
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
// このような結果がでる↓
// Year15270
// Year16797
// Year18476.700000000004
// Year20324.370000000006
// Year22356.807000000008
// Year24592.48770000001
// Year27051.736470000014
// Year29756.910117000018
// Year32732.601128700026
// Year36005.861241570026


// ーーーーーーー別の人の回答ーーーーーーーーーー
// const price = 418;
// const r= 1.1;
// const n=10;
// const firstAssets= 418*365;
// for(let i=0; i<=n; i++){
//   let assets =firstAssets*(r**i);
//   console.log(`Year ${i}: ${Math.floor(assets)}`);
// }

// ディスカッション機能にてMath.floor( )の　(　)の中に計算の式を入れたら私は表示できました！という情報もらう

問11
// [仕様]
// - 1 から 30 の整数を順番に表示していきますが、以下の条件で表示を変えてください。
// - 3 の倍数のときは「Fizz」、5 の倍数のときは「Buzz」、3 の倍数かつ 5 の倍数のときは「FizzBuzz」と表示します。
// - console.log()で表示してください。

for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz")
  } else if (i % 3 == 0) {
    console.log("Fizz")
  } else if (i % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}

問12
// [仕様]
// - 「Fizz!」「Buzz!」「FizzBuzz!」「もう一回!」の繰り返しを合計 n 回表示してください。
// - console.log()で表示してください。

// const name= [];

// name[0] ="Fizz!"
// name[1] ="Buzz!"
// name[2] ="Fizz!Buzz!"
// name[3] ="もう一回!"
// let i = 0
// for (let i = 0; i <= 6; i++) {
下記の結果ーーーーーー
  // Fizz!
  // Buzz!
  // Fizz!Buzz!
  // もう一回!
  // undefined
  // undefined
  // undefined

const name= [];
const n = 6;


name[0] ="Fizz!"
name[1] ="Buzz!"
name[2] ="Fizz!Buzz!"
name[3] ="もう一回!"

for (let i = 0; i <= n; i++) {
// const a = name.length
// if (a % 4 + 1) {
// }
   console.log(name[i%4]);
  }
   
  ーーーー他の人の回答ーーーーーーーーーーーーーーーー
  {
    const n = 10;
    const msgs = ['Fizz!', 'Buzz!', 'FizzBuzz!', 'もう一回!']
  
    for (let i = 0; i < n; i++) {
      console.log(msgs[i % msgs.length]);
    }
  }
問１３
[仕様]
// - 0 から n までをつなげて一つの文字列として表示してください。
// - それぞれの数値は 2 桁で表示し、 2 桁に満たない場合は 0 で埋めてください。
// - n は 1 以上、99 以下の整数です。
// - それぞれの数値は空白で区切ってください（末尾に空白があってもかまいません）。
{
const n = 15;
  let numbers =' ';
  for (let i = 1; i <=n; i++) {
    if(i <10) {
      numbers +=`0${i} `;
      }else{
      numbers +=`${i} `;
      }
    }
    console.log(numbers);
  }
問１４
  [仕様]
  // - 01 から 31 までを一つの文字列として表示してください。
  // - ただし、7 個ごとに改行をいれてください。
  // - それぞれの数値は空白で区切ってください（末尾に空白があってもかまいません）。
  // - 改行には \n を使いましょう。

  {
    const n = 31;
   let numbers ='';
   for (let i = 1; i <=n; i++) {
     if(i <10) {
       numbers +=`0${i} `;
     }else{
       numbers +=`${i} `;
     }if(i%7===0){
       numbers = numbers +'\n';
     }
   }
   console.log(numbers);
 }
問１５
 [仕様]
// - 01 から 31 までを表示します。
// - 7 日ごとに改行をいれてください。
// - 1 つの文字列として出力してください。
// - 数値は 2 桁で表示してください。
// - 数値のあとの () のなかに、第何周目かを W1 から W5 で表現し、そのあとに曜日を表す 3 文字も表示します。
{
const n = 31;
const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let output = '';

for (let i = 1; i <= n; i++) {
  let d = i.toString().padStart(2, '0');
  let weekNo = Math.floor((i-1)/7) + 1;
  let dayStr = `${d} (W${weekNo}${dayOfWeek[(i-1)%7]})`;
  output += dayStr + ' ';

  if (i % 7 === 0) {
    output += '\n';
  }
}

console.log(output);
}



問１６
// 1 から 6 の目がでるサイコロを 10,000 回ふったときに、1 がでる確率を求めるプログラムを書いてみましょう。

// const c = 1666.66 % 10000 カウントした数を出そうとする
// const c = 16.94 % 10000 

// 色々な数が出てわからなくなる
// const c = 16.94
// const n = [1,2,3,4,5,6];
// // console.logにて実際のサイコロができる
// const a = Math.floor(Math.random() * n.length +1);
// console.log(a);

「おみくじ」動画＃確率を操作してみよう　にて
 n が 0.05 より小さくはないけれど 0.2 よりは小さい場合、と書いてあげると 15% の確率になる

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
他の人の回答ーーーー
const n = 10000;
  
  // 1から6までの乱数を返す
  function rand6() {
    return Math.floor(Math.random()*6) + 1;
  }
  
  let cnt = 0;  // 1の目を数えるカウンタ
  for (let i=0; i<n; i++) {
    if (rand6() === 1) {
      cnt++;
    }
  }

  console.log(`1が出る確率は${(cnt/n*100).toFixed(2)}%です。`);

}
問１７
サイコロを作って１が出る確率をだそう
const n = 10000;
  // 1から6までの乱数を返す
function rand6() {
  return Math.floor(Math.random()*6) + 1;
}

let cnt = 0;  // 1の目を数えるカウンタ
for (let i=0; i<n; i++) {
  if (rand6() === 1 && rand6() === 1) {
    cnt++;
  }
}
console.log(`1が出る確率は${(cnt/n*100).toFixed(2)}%です。`);
}
// ―――別の人の回答ーーー
function rand(min, max) {
  return (Math.floor(Math.random() * (max - min +1) + min)); 
}

let zorome = 0
for(let i = 0; i < num; i++) {
  const diceNum1 = rand(1, 6);
  const diceNum2 = rand(1, 6);
  
  if(diceNum1 === 1 && diceNum2 === 1) {
    zorome++;
  }
}
let result2 = ((zorome / num) * 100).toFixed(2);
console.log(`1のゾロ目がでる確率は${result2}%です。`);
}
問１８
パスワードを生成しよう
// - a から z、A から Z、0 から 9 の英数字をランダムに組み合わせてください。
// - 同じ文字が重複してもかまいません。

const n = 8;
  const passChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const len = passChars.length;

  // 0からn-1までの乱数を返す
  function rand(n) {
    return Math.floor(Math.random()*n);
  }
  
  let pass = '';
  for (let i=0; i<n; i++) {
    pass += passChars[rand(len)];
  }

  console.log(pass);
  
}
問１９
小説ジェネレーターをつくろう
  const when = ['今','昔','明日','昨日','昭和時代に']; 
  const who = ['自分と','犬が','猫が','背後霊に','あの人と']; 
  const where = ['渋谷で','教会で','池で','カフェで','崖で']; 
  const how = ['笑いながら','真似るように','考えながら','ぼーっと','困りながら']; 
  const what = ['歩き回った','爆走した','ぴくついた','フリーズした','反芻した']; 
{
  const a = []
  a[0] = when;
  a[1] = who;
  a[2] = where;
  a[3] = how;
  a[4] = what;
 
 
  const n = Math.floor(Math.random() * a.length);
  console.log(when[n],who[n],where[n],how[n],what[n]);
  }
 
 
 ーーーー他の人の回答ーーーーーーーーーー
  function rnd(terms) {
   return terms[Math.floor(Math.random()*terms.length)];
 }
 console.log(`${rnd(when)}、${rnd(who)}、${rnd(where)}、${rnd(how)}、${rnd(what)}。`);
 }
 
問２０
コンピュータにじゃんけんをさせてみよう
{
  const n = 20;
  const poi = ["ぐー", "ちょき", "ぱー"];
  const cntTable = [  // カウンターのインデックスをテーブル化
    [2, 0, 1],
    [1, 2, 0],
    [0, 1, 2]
  ];
  const judge = ["P1の勝ち", "P2の勝ち", "あいこ"];

  // カウンターの配列 0:P1 1:P2 2:あいこ
  let counters = [0, 0, 0];

  for (let i=0; i<n; i++) {
    let p1 = Math.floor(Math.random()*3);
    let p2 = Math.floor(Math.random()*3);
    counters[cntTable[p1][p2]]++;
    console.log(`P1:${poi[p1]} P2:${poi[p2]} → ${judge[cntTable[p1][p2]]}！`);
  }

  console.log(`P1の勝ち: ${counters[0]}回、P2の勝ち: ${counters[1]}回、あいこ: ${counters[2]}回`);
  
}
ーーー別の人の回答ーーーーー
const n = 20;
const ITEM = ['ぐー', 'ちょき', 'ぱー'];

let drawCount = 0;
let P1winCount = 0;
let P2winCount = 0;

for (let i = 1; i <= 20; i++) {
  let r1 = Math.floor(Math.random() * ITEM.length);
  let r2 = Math.floor(Math.random() * ITEM.length);
  let result = ''
  
  if (r1 === r2) {
    result = ('あいこ！');
    drawCount = drawCount + 1;
  } else if (r1 === 0 && r2 === 1){
    result =('P1の勝ち！');
    P1winCount = P1winCount + 1;
  } else if (r1 === 0 && r2 === 2) {
    result =('P2の勝ち！');
    P2winCount = P2winCount + 1;
  } else if (r1 === 1 && r2 === 0) {
    result =('P2の勝ち！');
    P2winCount = P2winCount + 1;
  } else if (r1 === 1 && r2 === 2) {
    result =('P1の勝ち！');
    P1winCount = P1winCount + 1;
  } else if (r1 === 2 && r2 === 0) {
    result =('P1の勝ち！');
    P1winCount = P1winCount + 1;
  } else if (r1 === 2 && r2 === 1) {
    result =('P2の勝ち！');
    P2winCount = P2winCount + 1;
  }
  
  console.log(`P1:${ITEM[r1]} ` + `P2:${ITEM[r2]} ` + `→ ${result}`);
}
console.log(`P1の勝ち: ${P1winCount}回、` + ` P2の勝ち: ${P2winCount}回、` +` あいこ: ${drawCount}回 `);
}
問２１
// - 「大吉」「中吉」「凶」の 3 つのみが出るおみくじを作ってください。
// - ただしそれぞれが出る確率を、「大吉=20%」「中吉=70%」「凶=10%」にしてください。
// - そのおみくじのプログラムを 10,000 回実行し、「大吉」が出た率を表示してください。
// [期待される結果: 実行するたびに変わります]
// 「大吉」が出た率は20.45%です。

おみくじ作る
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

問２２　
// ーーおみくじで大吉が出るまで何回かかる？ ーーーーーーーーーー
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
問２３
２つのサイコロで1のゾロ目がでるまで何回かかる？
{
  const DICE = ['1', '2', '3', '4', '5', '6'];
  let doubleCount = 0;
  
  for (let i = 1; i >= 0; i++) {
    let dice1 = Math.floor(Math.random() * DICE.length);
    let dice2 = Math.floor(Math.random() * DICE.length);
    console.log(`${i}回目: ${DICE[dice1]} ${DICE[dice2]}`);
    doubleCount = doubleCount + 1;
    if (dice1 === 0 && dice2 === 0) {
      break;
    }
  }
  console.log(`1のゾロ目がでるまでに${doubleCount}回かかりました。`);
}

問２４
P2がじゃんけんで10回勝つまでに何回かかる？
{
  // ここからプログラムを書いてください。
  const maxn = 10000000;  // ループ回数最大値(保険)
  const poi = ["ぐー", "ちょき", "ぱー"];
  const cntTable = [  // カウンターのインデックスをテーブル化
    [2, 0, 1],
    [1, 2, 0],
    [0, 1, 2]
  ];
  const judge = ["P1の勝ち", "P2の勝ち", "あいこ"];

  // カウンターの配列 0:P1 1:P2 2:あいこ
  let counters = [0, 0, 0];

  for (let i=1; i<=maxn; i++) {
    let p1 = Math.floor(Math.random()*3);
    let p2 = Math.floor(Math.random()*3);
    counters[cntTable[p1][p2]]++;
    console.log(`${i}回目: P1:${poi[p1]} P2:${poi[p2]} → ${judge[cntTable[p1][p2]]}！`);
    if (counters[1] >= 10) {
      console.log(`P1の勝ち: ${counters[0]}回、P2の勝ち: ${counters[1]}回、あいこ: ${counters[2]}回`);
      console.log(`P2が10回勝つまで${i}回かかりました`);
      break;
    }
  }

  
 問２５
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


問２６
// ーーー　九九の表を生成しよう ーーーーーーーーーー
// [仕様]
// - 以下のように結果を整形し、一つの文字列として表示してください。
// - それぞれの数値は空白で区切ってください（末尾に空白があってもかまいません）。
// - 改行には \n を使いましょう。
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
            c = c + 　'\n';　//bが9の時が9の時''に加えて改行もする
          }
            }
              }
    console.log(c);
    //出力する箇所をループの外側に移動するというアドバイスを受ける。そしてそのようにしてうまくいく
  
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

問２７
グラフを書こう
// 5:  *****-----
// 8:  ********--
// 2:  **--------
// 4:  ****------
// 3:  ***-------
{
  const nums = [5, 8, 2, 4, 3];
  for (let i = 0; i < nums.length; i++) {
    let a = '*'.repeat(nums[i]);
    let b = '-'.repeat(10-nums[i]);
    
    console.log(`${nums[i]}:  ${a}${b}`);
  }  
}

    問２８
// ーーー短形を描画してみよう ーーーーーーーーーー
//     o***o
//     *****
//     o***o
// 　
    const w = 5;
    const h = 3;
    
    let outstr = '';
    for (let i=1; i<=h; i++) {
      for (let j=1; j<=w; j++) {
        let c = '*';
        if (i === 1 && j === 1) c = 'o';
        if (i === 1 && j === w) c = 'o';
        if (i === h && j === 1) c = 'o';
        if (i === h && j === w) c = 'o';
        outstr += c;
      }
      outstr += '\n';
    }
    console.log(outstr);
  }
  問２９
  仲間はずれを探そう
//   [期待される結果]
// 3 が仲間外れです...。
// 8 が仲間外れです...。
// 7 が仲間外れです...。
  {
    const nums = [3, 8, 1, 3, 5, 4, 3, 5, 4, 1, 7];
    
    let outstr = '';
    while (nums.length > 0) {
      let first = nums.shift(); // 先頭を配列から除く
      let found = nums.indexOf(first);
      if (found < 0) {
        // 見つからなければ、仲間はずれ
        outstr += `${first} が仲間外れです...。` + '\n';
      } else {
        // 見つかった場合は、配列から削除する
        nums.splice(found, 1);
      }
  
    }
    console.log(outstr);
  
  }
  別の方法ーーーー
  const nums = [3, 8, 1, 3, 5, 4, 3, 5, 4, 1, 7];
  
  const counters = {};
  nums.forEach(val => {
    let key = val.toString();
    if (key in counters) {
      counters[key]++;
    } else {
      counters[key] = 1;
    }
  });
  
  //console.log(counters);
  
  let outstr = '';
  Object.keys(counters).forEach(key => {
    if (counters[key] % 2 === 1) {
      outstr += `${key} が仲間外れです...。` + '\n';
    }
  });
  console.log(outstr);

}

  問３０
  対戦表を作ろう
  {
    // 以下の定数を使って、ここからプログラムを書いてください  
    
    const teams = ['Eagles', 'Giants', 'Dreamers', 'Wings'];
    let result = '';
    // console.log(`${teams[0]} - ${teams[2]}`);
    // console.log(`${teams[0]} - ${teams[3]}`);
    // console.log(`${teams[1]} - ${teams[2]}`);
    // console.log(`${teams[1]} - ${teams[3]}`);
    // console.log(`${teams[2]} - ${teams[3]}`);
    // console.log(`-------------------------------`);
    
    for(let i = 0; i < teams.length; i++) {
      for(let j = 1; j < teams.length; j++) {
        if(i >= j) {
          continue;
        }
        result += `${teams[i]} - ${teams[j]}\n`;
      }
    }
    console.log(result);
  
  }
  問３１
  問３２


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
}}