// htmlからbtn要素を取得→代入
const btn = document.getElementById('btn');

// イベント処理
btn.addEventListener('click',()=>{
  const text = document.getElementById('text');
  setTimeout(() => {
    // 2msec後、テキストの内容を変える
    text.textContent='ボタンをクリックしました';
    
  }, 2000);
})