// 変数の宣言
let num;

// 変数numに整数をランダムで設定
num = Math.floor(Math.random()*20);

// 変数numを確認のため出力
console.log(num);

// 条件分岐_3と5の倍数、3の倍数、5の倍数、それ以外
if (num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}
else if(num % 3 === 0){
  console.log('3の倍数です');
}

else if (num % 5 === 0){
  console.log('5の倍数です');
}

else {
  console.log(num);
}
