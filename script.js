// var text = document.getElementById('text');
// var copyBtn = document.getElementById('copy-btn');
// // var resultText = document.getElementById('result-text');
// var resultArea =document.getElementById('result-area');
// // console.dir(text);
//
//
// // copyBtn.addEventListener('click',function(){
// //   var sampleText= text.innerHTML;
// //   var p = document.createElement('p');
// //   p.innerHTML = sampleText;
// //   console.log(sampleText);
// //   resultText.innerHTML = sampleText + 'コピーしたよ';
// // });
// copyBtn.addEventListener('click',function(){
//   var sampleText= text.innerHTML;
//   var p = document.createElement('p');
//   p.innerHTML = sampleText;
//   resultArea.appendChild(p);
// });

var input = document.getElementById('title');
var textArea = document.getElementById('content');
var addBtn = document.getElementById('add-btn');
var toDoArea = document.getElementById('to-do-area')
var toDoItems = [];

addBtn.addEventListener('click',function(){
  var title = input.value;
  var content = textArea.value;
  var toDoItem ={
    title:title,
    content:content,
  };
  toDoItems.push(toDoItem);

  displayToDo(title,content);

  var data = JSON.stringify(toDoItems);
  localStorage.setItem('todo', data);
});

//todoの表示
function displayToDo(ttl,cnt){
  var h2 = document.createElement('h2');
  var p = document.createElement('p');
  var li = document.createElement('li');
  h2.innerHTML = ttl;
  p.innerHTML = cnt;
  li.appendChild(h2);
  li.appendChild(p);
  toDoArea.appendChild(li);
}
