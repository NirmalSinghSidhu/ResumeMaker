// alert("text"); 

function addNewWEField(){
    // console.log("Adding new Field");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",2) ;
    newNode.setAttribute('placeholder','Enter Here');
    let weOb = document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButton);
}


function addNewSkills(){
  let newNode = document.createElement('input');
  newNode.classList.add('form-control');
  newNode.classList.add('skillsField');
  newNode.classList.add('mt-2');
  newNode.setAttribute("type","text") ;
  newNode.setAttribute('placeholder','Enter Here');
  let skillOb = document.getElementById("skills");
  let weAddButton = document.getElementById("skillAddButton");

  skillOb.insertBefore(newNode,weAddButton);
}

function addNewAQField(){
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('aqField');
  newNode.classList.add('mt-2');

  newNode.setAttribute("rows",2) ;
  newNode.setAttribute('placeholder','Enter Here');


  let aqOb = document.getElementById('aq');
  let aqAddButton = document.getElementById('aqAddButton');

  aqOb.insertBefore(newNode,aqAddButton);

}

//generating cv

function generateCV(){

  let nameField = document.getElementById('nameField').value;
  let nameT1 = document.getElementById('nameT1');
  nameT1.innerHTML = nameField;
  
  let fatherNameField = document.getElementById('FatherNameField').value;
  nameT1.innerHTML = nameField + ' S/o '+fatherNameField;
  
  //direct method
  document.getElementById('nameT2').innerHTML  = nameField;

  //Contact
  document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

  //Email
  document.getElementById('emailT').innerHTML = document.getElementById("emailField").value;
  
  //Address
  document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;

  //github
  document.getElementById('ghT').innerHTML = document.getElementById("githubField").value;

  //Instagram
  document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;

  //LinkedIn
  document.getElementById('linkedT').innerHTML= document.getElementById("LinkedField").value;


  //objective
  document.getElementById('objectiveT').innerHTML= document.getElementById("objectiveField").value;

  //objective
  document.getElementById('refer').innerHTML= document.getElementById("referField").value;

  

  //work Experience

  let weList = document.getElementsByClassName('weField');

  let str =  "";

  for(let e of weList){
    str =  str + `<li> ${e.value}</li>`;
  }

  document.getElementById('weT').innerHTML = str;



  let skillsList = document.getElementsByClassName('skillsField');

  let str1 =  "";

  for(let e of skillsList){
    str1 =  str1 + `<li> ${e.value}</li>`;
  }

  document.getElementById('skillsT').innerHTML = str1;
  
  let aqList = document.getElementsByClassName('aqField');

  let str2 =  "";

  for(let e of aqList){
    str2 += `<li> ${e.value}</li>`;
  }

  document.getElementById('aqT').innerHTML = str2;

  //adding the image or profile
  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);
  console.log(reader.result);

  reader.onloadend = function(){
     document.getElementById("imgT").src = reader.result;
  };

  //disappering the input screen
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV(){
  document.getElementById('print').innerHTML = "";
  window.print();
}

