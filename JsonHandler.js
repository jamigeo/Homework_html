var hour=0;
var min =0;
var second =0;
var countsec=0;
var stop; 

document.getElementById("start").onclick=seccount;
document.getElementById("pause").onclick=pause;
document.getElementById("reset").onclick=reset;

function sec()
{
    countsec+=1;
    document.getElementById("milli").innerHTML=":"+countsec;

    if(countsec ==10)
{
    countsec=0;
    second +=1;
    document.getElementById("sec").innerHTML=":"+second;

    if(second == 60)
{
    second =0;
    min +=1;
    document.getElementById("mainmin").innerHTML=":"+min;

    if(min == 60)
{
    min =0;
    hour +=1;
    document.getElementById("hour").innerHTML=hour;
}

}

}

}
function seccount()
{
    document.getElementById("pause").style.display="inline";
    document.getElementById("reset").style.display="inline";
    document.getElementById("start").style.display="none";
    stop= setInterval(sec,100);

}
function pause()
{
    document.getElementById("start").style.display="inline";
    document.getElementById("start").innerHTML="continue";
    document.getElementById("pause").style.display="none";
    clearInterval(stop);
}
 
function reset()
{
    document.getElementById("pause").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("start").style.display="inline";

clearInterval(stop);

hour=0;
min =0;
second =0;
countsec=0;

document.getElementById("start").innerHTML="start";
document.getElementById("milli").innerHTML=":"+countsec;
document.getElementById("sec").innerHTML=":"+second;
document.getElementById("mainmin").innerHTML=":"+min;
document.getElementById("hour").innerHTML=hour;

}