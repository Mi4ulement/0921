function ennsyuu3(){var seireki=document.getElementById('ennsyuu').value;
//if(seireki%100==0&&seireki%400!=0){alert(seireki+'年は、平年です。');}
//else if(seireki<400&&seireki%4==0){alert(seireki+'年は、閏年です。');}
//else{alert(seireki+'年は、閏年です。');}
if(seireki%100==0&&seireki%400!=0){alert(seireki+'年は、平年です。');}
else if(seireki%4==0||seireki%400==0){alert(seireki+'年は、閏年です。');}
else{alert(seireki+'年は、平年です。');}
}