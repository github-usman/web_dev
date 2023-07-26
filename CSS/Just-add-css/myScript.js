
// function addCSS(){
//     alert("hello fun check");
// }


let cnt = 0;

function addCSS(){
    cnt++
    if(cnt&1){
        document.getElementById("head").innerHTML = ' <title>Example of HTML & CSS</title> \n  <link rel="stylesheet" href="./style.css">'
      
    }else{
        document.getElementById("head").innerHTML = '<title>Example of HTML & CSS</title> '
    }
}


// let counter = 0
// function addCSS() {
//     counter++
//     if (counter % 2 !== 0) {
//     document.getElementById("head").innerHTML = ' <title>Example HTML Website</title> \n <link rel="stylesheet" href="./style.css">'
//     } else {

//     document.getElementById("head").innerHTML = '  <title>Example HTML Website</title> '

//     }
// }