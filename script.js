let checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", topFive);

function topFive() {
    let rows = document.querySelectorAll("tbody tr");
    if (checkbox.checked) {
        for(let i = 6; i<rows.length;i++){
            rows[i].style.display="none";
        }
    } else {
        for(let i = 0; i<rows.length;i++){
            rows[i].style.display="";
        }
    }
}
// }
// let a = [];
// function pointcounter(){
//     let team = document.getElementById("filterbypoints");
//     let rows = document.querySelectorAll("tbody tr");
//       dofilter(rows,4);
   
// }
// function dofilter(rows,colindex){

// for(i=6;i<rows.length;i++){
// let td =rows[i].getElementsByTagName("td")[colindex];
// //while(i>!rows.length){}

// let textValue = td.innerText;
// rows[i].style.display="none";
// a.push(td);

// }}
/*
//a.sort((d,b)=> {
    return d.getElementsByTagName("td")[4]-b.getElementsByTagName("td")[4];
    console.log(a)

})
}//a.sort((a,b)=> {
   // return a.getElementsByTagName("td")[4]-b.getElementsByTagName("td")[4];
}//)
console.log(a)
/*while(i=rows.length-2){

  
  
    

}
while(i.length=6){

for(x;x<=i;x++){   

if(x==5||6){
    rows[x].style.display="none";
}else{ rows[x].style.display="";

    }
}}
}
*/

function sort5(z){

    switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = parseInt(rows[i].getElementsByTagName("td")[1].innerHTML);
                y = parseInt(rows[i + 1].getElementsByTagName("td")[1].innerHTML);
                if (x < y) {
                    shouldSwitch = true;
                    break;
                }}}
            
   
   
   
    /* if (z[0].getElementsByTagName("td")[4] <z[1].getElementsByTagName("td")[4]){
      switcher(x,y);{

        if(x<y){
            x = parseInt(rows[i].getElementsByTagName("td")[4].innerHTML);
            y = parseInt(rows[i + 1].getElementsByTagName("td")[4].innerHTML);
        }
      }

    }*/


}
/*function dynamicSort(property) {
    return function (a, b) {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    };
    
      
}*/