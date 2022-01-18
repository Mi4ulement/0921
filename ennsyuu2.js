   
function bodymas(){
    var taijuu=document.getElementById('input3').value;
    var shinnchou=document.getElementById('input4').value;
    alert(Number(taijuu)/Number(shinnchou)/Number(shinnchou)*Number(10000));
    if(Number(taijuu)/Number(shinnchou)/Number(shinnchou)*Number(10000)<18.5){alert('低体重');}
    if(Number(taijuu)/Number(shinnchou)/Number(shinnchou)*Number(10000)>=25){alert('肥満');}
    }