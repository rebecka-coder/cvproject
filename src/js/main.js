"use strict";
//Länk till webbtjänstens alla sidor för studier, arbete samt projekt
const urlStudies = 'http://studenter.miun.se/~reho0301/dt173g/cvprojekt/cv-webservice/studies.php';
const urlWork = 'http://studenter.miun.se/~reho0301/dt173g/cvprojekt/cv-webservice/work.php';
const urlProject = 'http://studenter.miun.se/~reho0301/dt173g/cvprojekt/cv-webservice/projects.php';


//Funktioner för JSON

//Hämta utbildning/kurser, metod GET
function getStudies(){
  fetch(urlStudies) //Hämtar länk från webbtjänsten studies.php
  .then((res) => res.json())
  .then((data) => {
      let outputS = ""; //Variabel för div klassen "output"
      //Loop för utskrift i tabellformat för utbildning/kurser, samt skapar knappar för uppdatera och radera (skickar med id)
      data.forEach(function(studies){
        outputS += `
        <div class="mainText">
        </br><div class="row"><img src="./images/studieslogo.png"/><h4>${studies.university}</h4><br/></div>
        </br><div class="row"><img src="./images/studyTitle.png"/><h4>${studies.studyName}</h4><br/></div>
        </br><div class="row"><img src="./images/calenderlogo.png"/><h4>${studies.studyDate}</h4><br/></div>
        </div>
        `;
      });
      document.getElementById('outputS').innerHTML = outputS;
    })
}
getStudies();//Kalla på funktionen hämta utbildning/kurser

//Hämta arbeten, metod GET
function getWork(){
  fetch(urlWork) //Hämtar länk från webbtjänsten work.php
  .then((res) => res.json())
  .then((data) => {
      let outputW = "";  //Variabel för div klassen "output"
      //Loop för utskrift i tabellformat för arbeten, samt skapar knappar för uppdatera och radera (skickar med id)
      data.forEach(function(work){ 
        outputW += `
        <div class="mainText">
        </br><div class="row"><img src="./images/worklogo.png"/><h4>${work.workTitle}</h4><br/></div>
        </br><div class="row"><img src="./images/workPlacelogo.png"/><h4>${work.workPlace}</h4><br/></div>
        </br><div class="row"><img src="./images/calenderlogo.png"/><h4>${work.workDate}</h4><br/></div>
        </div>`;
      });
      document.getElementById('outputW').innerHTML = outputW;
    })
}
getWork(); //Kalla på funktionen hämta arbeten

//Hämta projekt, metod GET
function getProject(){
  fetch(urlProject) //Hämtar länk från webbtjänsten projects.php
  .then((res) => res.json())
  .then((data) => {
      let outputP = ""; //Variabel för div klassen "output"
      //Loop för utskrift i tabellformat för projekt, samt skapar knappar för uppdatera och radera (skickar med id)
      data.forEach(function(project){
        outputP += `
        <div class="projectText">
        <img src="./images/${project.projectTitle}.png"/><br/>
        </br><div class="row"><img class='projectlogo' src='./images/project.png'/><h4>${project.projectTitle}</h4><br/></div>
        </br><div class="row"><img class='urlLogo' src='./images/link.png'/><a href='${project.url}'target="_blank">Länk till webbplatsen</a><br/></div>
        </br><div class="row"><h4>${project.description}</h4><br/></div>
        </div>
        `;
      });
      document.getElementById('outputP').innerHTML = outputP;
    })
}
getProject(); //Kallar på funktionen för projekt

