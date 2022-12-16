let cout = 0;

document.getElementById('decrease').onclick = function(){
     cout-=1;
document.getElementById('countlabel').innerHTML = cout;
if(cout < 0){
    countlabel.style.color = 'red'
}
}

document.getElementById('reset').onclick = function(){
    cout=0;
document.getElementById('countlabel').innerHTML = cout;
if(cout <= 0){
    countlabel.style.color = 'pink'
}
}

document.getElementById('increase').onclick = function(){
    cout+=1;
document.getElementById('countlabel').innerHTML = cout;
if(cout > 0){
    countlabel.style.color = 'green'
}
}















