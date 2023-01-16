const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"
,"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i"
,"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1"
, "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&"
,"*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"
,"/"];

const letter=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
,"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n"
,"o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

/*************TOGGLE THEME **************/
let isclicked=false
document.getElementById('switch').addEventListener('click',()=>{
    isclicked=!isclicked
    console.log('clicked')
    document.getElementById('project').classList.toggle('dark')
   isclicked ? document.getElementById('switch').innerText= 'toggle_off' :document.getElementById('switch').innerText= 'toggle_on'
})

/*********GENERATE PASSWORD*********/
function generateRandom(generate){
    return generate[Math.floor(Math.random()*generate.length)] 
}
function generatePassword(generate){
    document.getElementById('1st').innerHTML=''
     document.getElementById('2nd').innerHTML=''
    let pass=''
    let password=''
 for(let i=0;i<10;i++){
 pass+=`${generateRandom(generate)}`
 password+=`${generateRandom(generate)}`
    }
    
       return    document.getElementById('1st').innerText=pass ,  document.getElementById('2nd').innerText=password
}
/*************COPPY TO CLIP BOARD************ */

function copyToClipboard(id,btn) {
    let textBox = document.getElementById(id).innerText;
  navigator.clipboard.writeText(textBox)

  document.getElementById(btn).innerText = "COPIED!";
    // reset the text on copy button after one second
    setTimeout(() => (document.getElementById(btn).innerText = "COPY"), 1000);
    console.log(textBox)
} 
 