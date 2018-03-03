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
var toDoArea =document.getElementById('to-do-area')

addBtn.addEventListener('click',function(){
  var title = input.value;
  var content = textArea.value;
  var h2 = document.createElement('h2');
  var p = document.createElement('p');
  var li = document.createElement('li');
  h2.innerHTML = title;
  p.innerHTML = content;
  li.appendChild(h2);
  li.appendChild(p);

  toDoArea.appendChild(li);
});
