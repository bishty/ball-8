function TakeName()
{
  let imp=document.getElementById("name1").value;
  localStorage.setItem('name',imp);
  if(imp!="")
  { 
    document.getElementById("main2min2").innerHTML=`Hello,${imp}!`;
    document.getElementById("main1min3").innerHTML="";
     let ibm=document.getElementById("name1");
     ibm.value="";
     ibm.placeholder="Again Enter the Name";
     
    let button = document.getElementById("btn23");
    console.log(button);
    button.style.display ="block";
  }
  else{
    document.getElementById("main1min3").innerHTML="Hello Almighty, It will be easy for me if you will enter your name.";
    document.getElementById("main2min2").innerHTML="";
    let ibm=document.getElementById("name1");
     ibm.value="";
     ibm.placeholder="Again Enter the Name";
    let button = document.getElementById("btn23")
    console.log(button);
    button.style.display ="none";
  }
}
function findInput()
{   document.getElementById("para").innerHTML="";
  let imps=document.getElementById("name1").value;
  if(imps=="")
  {
   document.getElementById("main2min23").innerHTML=`Please enter the Question`;
   let ibm=document.getElementById("name1");
   ibm.value="";
   ibm.placeholder="Again Enter the Name";
  }
  else{
    
    let ibm=document.getElementById("name1");
    ibm.value="";
    ibm.placeholder="Again Enter the Name"

let ball=document.getElementById("ball");
ball.classList.add("shake");

setTimeout(function()
{ 
  ball.classList.remove("shake"); 
},1500);
setTimeout(function()
{
  checkrandom();
},2000);

}

function checkrandom()
{
  let c_randomNumber = Math.floor(Math.random() * 8);

  switch (c_randomNumber) {
  case 0:  eightBall = 'It is certain';
           break;
  case 1:  eightBall = 'It is decidedly so';
           break;
  case 2:  eightBall = 'Reply hazy try again';
           break;
  case 3:  eightBall = 'Cannot predict now';
           break;
  case 4:  eightBall = 'Do not count on it';
           break;
  case 5:  eightBall = 'My sources say no';
           break;
  case 6:  eightBall = 'Outlook not so good'
           break;
  case 7:  eightBall = 'Signs point to yes';
           break;
  default: eightBall = 'OOPS!';
           
  }
  console.log(eightBall);
  document.getElementById("main2min3").innerHTML="";
  document.getElementById("para").innerHTML=eightBall;
    }
}



function loding()
{
  document.getElementById("main1min1").innerHTML="Enter Your Question Mr." + localStorage.getItem('name');
}




