var remarks="";
var marks=0;
function myFunction(event){
event.preventDefault();

  var marks=0;
  const q1 = document.getElementsByName('mcq1');
  const q2 = document.getElementsByName('mcq2');
  const q3 = document.getElementsByName('mcq3');
  const q4 = document.getElementsByName('mcq4');
  const q5 = document.getElementsByName('mcq5');
  var form = document.getElementById("form");
 
for (let i of q1 ){
  if(i.checked && i.value=='correct'){
    marks=marks+20
  }}

  for (let i of q2 ){
    if(i.checked && i.value=="correct"){
      marks=marks+20
}}
for (let i of q3 ){
  if(i.checked && i.value=="correct"){
    marks=marks+20
}}
for (let i of q4 ){
    if(i.checked && i.value=="correct"){
      marks=marks+20
}}
for (let i of q5 ){
    if(i.checked && i.value=="correct"){
      marks=marks+20};
        }
localStorage.setItem("marks",marks);
FeedBack(marks)  ;
document.getElementById('marks').innerHTML = marks;

}

form.addEventListener('submit', myFunction);
event.preventDefault();

function FeedBack(){
if (marks =>80){
remarks= "Excellent"
}
else if (marks=>60 && marks<80){
remarks="Good"
}
else
remarks="poor"
}
document.getElementById('remarks').innerHTML = remarks;

}
