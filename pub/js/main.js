"use strict"; //Länk till webbtjänstens alla sidor för studier, arbete samt projekt

var urlStudies = 'http://studenter.miun.se/~reho0301/dt173g/cvprojekt/cv-webservice/studies.php';
var urlWork = 'http://studenter.miun.se/~reho0301/dt173g/cvprojekt/cv-webservice/work.php';
var urlProject = 'http://studenter.miun.se/~reho0301/dt173g/cvprojekt/cv-webservice/projects.php'; //Funktioner för JSON
//Hämta utbildning/kurser, metod GET

function getStudies() {
  fetch(urlStudies) //Hämtar länk från webbtjänsten studies.php
  .then(function (res) {
    return res.json();
  }).then(function (data) {
    var outputS = ""; //Variabel för div klassen "output"
    //Loop för utskrift i tabellformat för utbildning/kurser, samt skapar knappar för uppdatera och radera (skickar med id)

    data.forEach(function (studies) {
      outputS += "\n        <div class=\"mainText\">\n        </br><div class=\"row\"><img src=\"./images/studieslogo.png\"/><h4>".concat(studies.university, "</h4><br/></div>\n        </br><div class=\"row\"><img src=\"./images/studyTitle.png\"/><h4>").concat(studies.studyName, "</h4><br/></div>\n        </br><div class=\"row\"><img src=\"./images/calenderlogo.png\"/><h4>").concat(studies.studyDate, "</h4><br/></div>\n        </div>\n        ");
    });
    document.getElementById('outputS').innerHTML = outputS;
  });
}

getStudies(); //Kalla på funktionen hämta utbildning/kurser
//Hämta arbeten, metod GET

function getWork() {
  fetch(urlWork) //Hämtar länk från webbtjänsten work.php
  .then(function (res) {
    return res.json();
  }).then(function (data) {
    var outputW = ""; //Variabel för div klassen "output"
    //Loop för utskrift i tabellformat för arbeten, samt skapar knappar för uppdatera och radera (skickar med id)

    data.forEach(function (work) {
      outputW += "\n        <div class=\"mainText\">\n        </br><div class=\"row\"><img src=\"./images/worklogo.png\"/><h4>".concat(work.workTitle, "</h4><br/></div>\n        </br><div class=\"row\"><img src=\"./images/workPlacelogo.png\"/><h4>").concat(work.workPlace, "</h4><br/></div>\n        </br><div class=\"row\"><img src=\"./images/calenderlogo.png\"/><h4>").concat(work.workDate, "</h4><br/></div>\n        </div>");
    });
    document.getElementById('outputW').innerHTML = outputW;
  });
}

getWork(); //Kalla på funktionen hämta arbeten
//Hämta projekt, metod GET

function getProject() {
  fetch(urlProject) //Hämtar länk från webbtjänsten projects.php
  .then(function (res) {
    return res.json();
  }).then(function (data) {
    var outputP = ""; //Variabel för div klassen "output"
    //Loop för utskrift i tabellformat för projekt, samt skapar knappar för uppdatera och radera (skickar med id)

    data.forEach(function (project) {
      outputP += "\n        <div class=\"projectText\">\n        <img src=\"./images/".concat(project.projectTitle, ".png\"/><br/>\n        </br><div class=\"row\"><img class='projectlogo' src='./images/project.png'/><h4>").concat(project.projectTitle, "</h4><br/></div>\n        </br><div class=\"row\"><img class='urlLogo' src='./images/link.png'/><a href='").concat(project.url, "'target=\"_blank\">L\xE4nk till webbplatsen</a><br/></div>\n        </br><div class=\"row\"><h4>").concat(project.description, "</h4><br/></div>\n        </div>\n        ");
    });
    document.getElementById('outputP').innerHTML = outputP;
  });
}

getProject(); //Kallar på funktionen för projekt
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsidXJsU3R1ZGllcyIsInVybFdvcmsiLCJ1cmxQcm9qZWN0IiwiZ2V0U3R1ZGllcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib3V0cHV0UyIsImZvckVhY2giLCJzdHVkaWVzIiwidW5pdmVyc2l0eSIsInN0dWR5TmFtZSIsInN0dWR5RGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJnZXRXb3JrIiwib3V0cHV0VyIsIndvcmsiLCJ3b3JrVGl0bGUiLCJ3b3JrUGxhY2UiLCJ3b3JrRGF0ZSIsImdldFByb2plY3QiLCJvdXRwdXRQIiwicHJvamVjdCIsInByb2plY3RUaXRsZSIsInVybCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLCtFQUFuQjtBQUNBLElBQU1DLE9BQU8sR0FBRyw0RUFBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsZ0ZBQW5CLEMsQ0FHQTtBQUVBOztBQUNBLFNBQVNDLFVBQVQsR0FBcUI7QUFDbkJDLEVBQUFBLEtBQUssQ0FBQ0osVUFBRCxDQUFMLENBQWtCO0FBQWxCLEdBQ0NLLElBREQsQ0FDTSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQUROLEVBRUNGLElBRkQsQ0FFTSxVQUFDRyxJQUFELEVBQVU7QUFDWixRQUFJQyxPQUFPLEdBQUcsRUFBZCxDQURZLENBQ007QUFDbEI7O0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQVNDLE9BQVQsRUFBaUI7QUFDNUJGLE1BQUFBLE9BQU8sNkhBRTBERSxPQUFPLENBQUNDLFVBRmxFLHlHQUd5REQsT0FBTyxDQUFDRSxTQUhqRSwyR0FJMkRGLE9BQU8sQ0FBQ0csU0FKbkUsK0NBQVA7QUFPRCxLQVJEO0FBU0FDLElBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsU0FBbkMsR0FBK0NSLE9BQS9DO0FBQ0QsR0FmSDtBQWdCRDs7QUFDRE4sVUFBVSxHLENBQUc7QUFFYjs7QUFDQSxTQUFTZSxPQUFULEdBQWtCO0FBQ2hCZCxFQUFBQSxLQUFLLENBQUNILE9BQUQsQ0FBTCxDQUFlO0FBQWYsR0FDQ0ksSUFERCxDQUNNLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEdBRE4sRUFFQ0YsSUFGRCxDQUVNLFVBQUNHLElBQUQsRUFBVTtBQUNaLFFBQUlXLE9BQU8sR0FBRyxFQUFkLENBRFksQ0FDTztBQUNuQjs7QUFDQVgsSUFBQUEsSUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBU1UsSUFBVCxFQUFjO0FBQ3pCRCxNQUFBQSxPQUFPLDBIQUV1REMsSUFBSSxDQUFDQyxTQUY1RCw0R0FHNERELElBQUksQ0FBQ0UsU0FIakUsMkdBSTJERixJQUFJLENBQUNHLFFBSmhFLHFDQUFQO0FBTUQsS0FQRDtBQVFBUixJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLFNBQW5DLEdBQStDRSxPQUEvQztBQUNELEdBZEg7QUFlRDs7QUFDREQsT0FBTyxHLENBQUk7QUFFWDs7QUFDQSxTQUFTTSxVQUFULEdBQXFCO0FBQ25CcEIsRUFBQUEsS0FBSyxDQUFDRixVQUFELENBQUwsQ0FBa0I7QUFBbEIsR0FDQ0csSUFERCxDQUNNLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEdBRE4sRUFFQ0YsSUFGRCxDQUVNLFVBQUNHLElBQUQsRUFBVTtBQUNaLFFBQUlpQixPQUFPLEdBQUcsRUFBZCxDQURZLENBQ007QUFDbEI7O0FBQ0FqQixJQUFBQSxJQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFTZ0IsT0FBVCxFQUFpQjtBQUM1QkQsTUFBQUEsT0FBTyxpRkFFY0MsT0FBTyxDQUFDQyxZQUZ0QixxSEFHMEVELE9BQU8sQ0FBQ0MsWUFIbEYsc0hBSXdFRCxPQUFPLENBQUNFLEdBSmhGLDZHQUtxQkYsT0FBTyxDQUFDRyxXQUw3QiwrQ0FBUDtBQVFELEtBVEQ7QUFVQWQsSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxTQUFuQyxHQUErQ1EsT0FBL0M7QUFDRCxHQWhCSDtBQWlCRDs7QUFDREQsVUFBVSxHLENBQUkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy9Mw6RuayB0aWxsIHdlYmJ0asOkbnN0ZW5zIGFsbGEgc2lkb3IgZsO2ciBzdHVkaWVyLCBhcmJldGUgc2FtdCBwcm9qZWt0XG5jb25zdCB1cmxTdHVkaWVzID0gJ2h0dHA6Ly9zdHVkZW50ZXIubWl1bi5zZS9+cmVobzAzMDEvZHQxNzNnL2N2cHJvamVrdC9jdi13ZWJzZXJ2aWNlL3N0dWRpZXMucGhwJztcbmNvbnN0IHVybFdvcmsgPSAnaHR0cDovL3N0dWRlbnRlci5taXVuLnNlL35yZWhvMDMwMS9kdDE3M2cvY3Zwcm9qZWt0L2N2LXdlYnNlcnZpY2Uvd29yay5waHAnO1xuY29uc3QgdXJsUHJvamVjdCA9ICdodHRwOi8vc3R1ZGVudGVyLm1pdW4uc2UvfnJlaG8wMzAxL2R0MTczZy9jdnByb2pla3QvY3Ytd2Vic2VydmljZS9wcm9qZWN0cy5waHAnO1xuXG5cbi8vRnVua3Rpb25lciBmw7ZyIEpTT05cblxuLy9Iw6RtdGEgdXRiaWxkbmluZy9rdXJzZXIsIG1ldG9kIEdFVFxuZnVuY3Rpb24gZ2V0U3R1ZGllcygpe1xuICBmZXRjaCh1cmxTdHVkaWVzKSAvL0jDpG10YXIgbMOkbmsgZnLDpW4gd2ViYnRqw6Ruc3RlbiBzdHVkaWVzLnBocFxuICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgbGV0IG91dHB1dFMgPSBcIlwiOyAvL1ZhcmlhYmVsIGbDtnIgZGl2IGtsYXNzZW4gXCJvdXRwdXRcIlxuICAgICAgLy9Mb29wIGbDtnIgdXRza3JpZnQgaSB0YWJlbGxmb3JtYXQgZsO2ciB1dGJpbGRuaW5nL2t1cnNlciwgc2FtdCBza2FwYXIga25hcHBhciBmw7ZyIHVwcGRhdGVyYSBvY2ggcmFkZXJhIChza2lja2FyIG1lZCBpZClcbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihzdHVkaWVzKXtcbiAgICAgICAgb3V0cHV0UyArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluVGV4dFwiPlxuICAgICAgICA8L2JyPjxkaXYgY2xhc3M9XCJyb3dcIj48aW1nIHNyYz1cIi4vaW1hZ2VzL3N0dWRpZXNsb2dvLnBuZ1wiLz48aDQ+JHtzdHVkaWVzLnVuaXZlcnNpdHl9PC9oND48YnIvPjwvZGl2PlxuICAgICAgICA8L2JyPjxkaXYgY2xhc3M9XCJyb3dcIj48aW1nIHNyYz1cIi4vaW1hZ2VzL3N0dWR5VGl0bGUucG5nXCIvPjxoND4ke3N0dWRpZXMuc3R1ZHlOYW1lfTwvaDQ+PGJyLz48L2Rpdj5cbiAgICAgICAgPC9icj48ZGl2IGNsYXNzPVwicm93XCI+PGltZyBzcmM9XCIuL2ltYWdlcy9jYWxlbmRlcmxvZ28ucG5nXCIvPjxoND4ke3N0dWRpZXMuc3R1ZHlEYXRlfTwvaDQ+PGJyLz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXRTJykuaW5uZXJIVE1MID0gb3V0cHV0UztcbiAgICB9KVxufVxuZ2V0U3R1ZGllcygpOy8vS2FsbGEgcMOlIGZ1bmt0aW9uZW4gaMOkbXRhIHV0YmlsZG5pbmcva3Vyc2VyXG5cbi8vSMOkbXRhIGFyYmV0ZW4sIG1ldG9kIEdFVFxuZnVuY3Rpb24gZ2V0V29yaygpe1xuICBmZXRjaCh1cmxXb3JrKSAvL0jDpG10YXIgbMOkbmsgZnLDpW4gd2ViYnRqw6Ruc3RlbiB3b3JrLnBocFxuICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgbGV0IG91dHB1dFcgPSBcIlwiOyAgLy9WYXJpYWJlbCBmw7ZyIGRpdiBrbGFzc2VuIFwib3V0cHV0XCJcbiAgICAgIC8vTG9vcCBmw7ZyIHV0c2tyaWZ0IGkgdGFiZWxsZm9ybWF0IGbDtnIgYXJiZXRlbiwgc2FtdCBza2FwYXIga25hcHBhciBmw7ZyIHVwcGRhdGVyYSBvY2ggcmFkZXJhIChza2lja2FyIG1lZCBpZClcbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbih3b3JrKXsgXG4gICAgICAgIG91dHB1dFcgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblRleHRcIj5cbiAgICAgICAgPC9icj48ZGl2IGNsYXNzPVwicm93XCI+PGltZyBzcmM9XCIuL2ltYWdlcy93b3JrbG9nby5wbmdcIi8+PGg0PiR7d29yay53b3JrVGl0bGV9PC9oND48YnIvPjwvZGl2PlxuICAgICAgICA8L2JyPjxkaXYgY2xhc3M9XCJyb3dcIj48aW1nIHNyYz1cIi4vaW1hZ2VzL3dvcmtQbGFjZWxvZ28ucG5nXCIvPjxoND4ke3dvcmsud29ya1BsYWNlfTwvaDQ+PGJyLz48L2Rpdj5cbiAgICAgICAgPC9icj48ZGl2IGNsYXNzPVwicm93XCI+PGltZyBzcmM9XCIuL2ltYWdlcy9jYWxlbmRlcmxvZ28ucG5nXCIvPjxoND4ke3dvcmsud29ya0RhdGV9PC9oND48YnIvPjwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0VycpLmlubmVySFRNTCA9IG91dHB1dFc7XG4gICAgfSlcbn1cbmdldFdvcmsoKTsgLy9LYWxsYSBww6UgZnVua3Rpb25lbiBow6RtdGEgYXJiZXRlblxuXG4vL0jDpG10YSBwcm9qZWt0LCBtZXRvZCBHRVRcbmZ1bmN0aW9uIGdldFByb2plY3QoKXtcbiAgZmV0Y2godXJsUHJvamVjdCkgLy9Iw6RtdGFyIGzDpG5rIGZyw6VuIHdlYmJ0asOkbnN0ZW4gcHJvamVjdHMucGhwXG4gIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBsZXQgb3V0cHV0UCA9IFwiXCI7IC8vVmFyaWFiZWwgZsO2ciBkaXYga2xhc3NlbiBcIm91dHB1dFwiXG4gICAgICAvL0xvb3AgZsO2ciB1dHNrcmlmdCBpIHRhYmVsbGZvcm1hdCBmw7ZyIHByb2pla3QsIHNhbXQgc2thcGFyIGtuYXBwYXIgZsO2ciB1cHBkYXRlcmEgb2NoIHJhZGVyYSAoc2tpY2thciBtZWQgaWQpXG4gICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCl7XG4gICAgICAgIG91dHB1dFAgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFRleHRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy8ke3Byb2plY3QucHJvamVjdFRpdGxlfS5wbmdcIi8+PGJyLz5cbiAgICAgICAgPC9icj48ZGl2IGNsYXNzPVwicm93XCI+PGltZyBjbGFzcz0ncHJvamVjdGxvZ28nIHNyYz0nLi9pbWFnZXMvcHJvamVjdC5wbmcnLz48aDQ+JHtwcm9qZWN0LnByb2plY3RUaXRsZX08L2g0Pjxici8+PC9kaXY+XG4gICAgICAgIDwvYnI+PGRpdiBjbGFzcz1cInJvd1wiPjxpbWcgY2xhc3M9J3VybExvZ28nIHNyYz0nLi9pbWFnZXMvbGluay5wbmcnLz48YSBocmVmPScke3Byb2plY3QudXJsfSd0YXJnZXQ9XCJfYmxhbmtcIj5Mw6RuayB0aWxsIHdlYmJwbGF0c2VuPC9hPjxici8+PC9kaXY+XG4gICAgICAgIDwvYnI+PGRpdiBjbGFzcz1cInJvd1wiPjxoND4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9oND48YnIvPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dFAnKS5pbm5lckhUTUwgPSBvdXRwdXRQO1xuICAgIH0pXG59XG5nZXRQcm9qZWN0KCk7IC8vS2FsbGFyIHDDpSBmdW5rdGlvbmVuIGbDtnIgcHJvamVrdFxuXG4iXX0=
