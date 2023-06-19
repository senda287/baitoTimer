var salarySum=0;
var salary=0;
var startYear;
var startMonth;
var startDay;
var startHour;
var startMinute;
var start;
var finishYear;
var finishMonth;
var finishDay;
var finishHour;
var finishMinute;
var finish;
var nowTime;
var intervalID;
var flg=true;
let wall = document.getElementById('wall');
let finishMessage = document.getElementById('finish');
let errorMessage = document.getElementById('error');
var windowWidth = window.innerWidth;
var windowSm = 767;

function displayBtn(){
  getStartTime();
  getFinishTime();
  calcSalary();
  if(flg){
    wall.style.height = 0;
    intervalID = setInterval(displaySalary,1000);
  }
}

function getStartTime(){
  //入力内容の取得
  const startDate = document.getElementById("inputStartDate").value; //YYYY-MM-DD
  const startTime = document.getElementById("inputStartTime").value; //HH-MM-SS
  
  //開始時間を取得
  startYear = Number(startDate.substr(0,4));
  startMonth = Number(startDate.substr(5,2));
  startDay = Number(startDate.substr(8,2));
  startHour = Number(startTime.substr(0,2));
  startMinute = Number(startTime.substr(3,2));
  start = new Date(startYear,startMonth-1,startDay,startHour,startMinute);
}

function getFinishTime(){
  //入力内容の取得
  const finishDate = document.getElementById("inputFinishDate").value; //YYYY-MM-DD
  const finishTime = document.getElementById("inputFinishTime").value; //HH-MM-SS
  
  //終了時間を取得
  finishYear = Number(finishDate.substr(0,4));
  finishMonth = Number(finishDate.substr(5,2));
  finishDay = Number(finishDate.substr(8,2));
  finishHour = Number(finishTime.substr(0,2));
  finishMinute = Number(finishTime.substr(3,2));
  finish = new Date(finishYear,finishMonth-1,finishDay,finishHour,finishMinute);
}

function calcSalary(){
  salary = Number(document.getElementById("inputSalary").value);
  salary = Math.round((salary/3600) * 100) / 100;
}

function displaySalary(){
  const nowTime = new Date(); //現在時間の取得
  const diffkeika =  nowTime.getTime() - start.getTime(); // 経過時間を取得（ミリ秒）
  const diffnokori =  finish.getTime() - nowTime.getTime(); // 残り時間を取得（ミリ秒）

  if(diffnokori<1000){
    if(diffnokori>0){
      if(windowWidth<=windowSm){
        wall.style.height = 130+"px";
      }else{
        wall.style.height = 240+"px";
      }
      finishMessage.style.display = "block";
      clearInterval(intervalID);
      flg=false;
    }else{
      if(windowWidth<=windowSm){
        wall.style.height = 130+"px";
      }else{
        wall.style.height = 240+"px";
      }
      errorMessage.style.display = "block";
      clearInterval(intervalID);
      flg=false;
    }
  }

  // ミリ秒を修正（経過時間）
  const sec = Math.floor(diffkeika / 1000);

  // ミリ秒を修正（残り時間）
  const calcMin = Math.floor(diffnokori / 1000 / 60);
  var calcSec = Math.floor(diffnokori / 1000) % 60;
  calcSec = ('00' + calcSec).slice(-2);

  document.getElementById("outputMin").textContent = calcMin;
  document.getElementById("outputSec").textContent = calcSec;
  if(sec%10==0){
    if(sec<0){
      document.getElementById("outputSalary").textContent = 0;  //開始時間までは0円で表示
    }else{
      document.getElementById("outputSalary").textContent = Math.trunc(sec * salary);
    }
  }
}
