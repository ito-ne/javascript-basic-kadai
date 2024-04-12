// HTMLからbtnを取得し代入
const btn =document.getElementById('btn');

btn.addEventListener('click',()=>{
  // 文字列の取得
  const text = document.getElementById('text');

 
    text.textContent='ボタンをクリックしました'
  
});