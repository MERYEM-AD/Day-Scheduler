// Use Moment.js 
let today=moment();
let today_Date_Hour = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(today_Date_Hour);

const grandParent=$('.container');


/*Create Timesblock  with data-number*/
function createTimeBlock(){
for (let i=0;i<12;i++){

    const StartDateWork = moment("08:00","hh:00");
    const dataHour = moment("8","h");
  

  let f =  dataHour.add(i, 'hours').format('h');


    const parentDiv= $('<div>');
    const childSpan =$('<span>');
    const childInput = $('<input>');
    const childButton =$('<button>');

    parentDiv.attr('class', 'input-group-append');
    parentDiv.attr('data-number',f);

    childSpan.attr('class','input-group-text');

    childSpan.attr('id','basic-addon2');
    childSpan.text(StartDateWork.add(i, 'hours').format('hh:00 A'));
    childSpan.addClass('s'+f);
    

    childInput.attr('type','text');
    //.addClass();
    childInput.attr('class','form-control');

    childInput.attr('id','f'+f);
    f++;
    //childInput.attr('placeholder','Task disponable');
    childInput.attr('aria-label','Task disponable');
    childInput.attr('aria-describedby','basic-addon2');


    childButton.attr('type','button');
    childButton.attr('class','btn btn-outline-secondary');
    childButton.addClass("btn"+f);
    childButton.attr('id','button-addon2');
    childButton.text('Save');

    parentDiv.append(childSpan);
    parentDiv.append(childInput);
    parentDiv.append(childButton);
    grandParent.append(parentDiv);


}
}
createTimeBlock();



/** Compaarison of Time */


function IntervalTime(){


    const currentHour = moment().startOf('hour');


    for (let i=0;i<12;i++){

          const dataHour = moment("8","h");

          let  f =  dataHour.add(i, 'hours').format('h');
     


          let strTime = $(".s"+f).text();
          let timeMoment = moment(strTime,'hh:00 A');



              if (currentHour.isAfter(timeMoment)) {

        
              $('#f'+f).css({"background-color": "gray", "font-size": "200%","color":"white"});
              
          }

              else if (currentHour.isBefore(timeMoment)) {
      
              $('#f'+f).css({ 'background-color': 'yellow', "font-size": "200%","color":"white"});
          }


              else if (currentHour.isSame(timeMoment)) {

            $('#f'+f).css({ 'background-color': 'green',  "font-size": "200%","color":"white"}); 
        
              }




    let hourTitle =moment.unix(timeMoment/1000).format("hh:00 A");


    console.log("-------moment () = "+currentHour+" and moment (text)------->"+timeMoment);
    console.log("********************"+moment.unix(currentHour/1000).format("hh:00 A")+" ..........."+hourTitle+" ///////////////// "); 
    console.log("-------AFTER------->"+currentHour.isAfter(timeMoment));

    console.log("--------BEFOR------>"+currentHour.isBefore(timeMoment));  

    console.log("--------SAME------>"+currentHour.isSame(timeMoment));  




    
    }

  }



IntervalTime();


function RetreiveAllTasks(){


 // getItem
  
  let allTasksInput = localStorage.getItem("newTask");

  if(allTasksInput === null){
      allTasksInput = [];
  }else{
    allTasksInput = JSON.parse(allTasksInput);
   
  
    for (let i = 0; i < allTasksInput.length; i++) {
  
    $("#f"+allTasksInput[i].parent).val(allTasksInput[i].textInput);
  
  
    }
  
  
  
  }

  return allTasksInput;
  }



let tab =RetreiveAllTasks();



/** Storage DATA */

$('.btn').on('click',function(event){

  event.preventDefault();

  let inputTask = $(this).siblings(".form-control").val();
  let directParent = $(this).parent().data("number");

  if (inputTask === "") {
        
    console.log("Empty input");
    return 0;

} else {

  console.log("input= "+inputTask+" Parent"+directParent);


//create data Object
let dataTask={ 
  
  
  textInput: inputTask,
  parent: directParent

};

//setItem 

SetTasks(tab,dataTask);

}


});

function SetTasks(tab,dataTask){

  let allTasks = tab;

allTasks.push(dataTask);

let newTask = JSON.stringify(allTasks);
// set array of object to the locaStorage
localStorage.setItem("newTask", newTask);
location.reload();
}