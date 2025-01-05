let input = document.querySelector(".date");
let button = document.querySelector(".button");
let result = document.querySelector(".result");

input.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let DOB = new Date(input.value);
    let y1 = DOB.getFullYear();
    let m1 = DOB.getMonth() + 1;
    let d1 = DOB.getDate();

    let todaydate = new Date();
    let y2 = todaydate.getFullYear();
    let m2 = todaydate.getMonth() + 1;
    let d2 = todaydate.getDate();

    let y3 = y2 - y1;

    if(m2 >= m1){
       var m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1; 
    }
    if(d2 >= d1){
        var d3 = d2 - d1; 
    }
    else{
        m3--;
        d3 = setdate(y1,m1) + d2 - d1;
    }
    if (m3 < 0){
        m3 = 11;
        y3--;
    }
     result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`
}
function setdate(Year,Month){
    return new Date(Year,Month,0).getDate();
 }
