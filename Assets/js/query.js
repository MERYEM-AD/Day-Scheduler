// Use Moment.js 
let today=moment();
let today_Date_Hour = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(today_Date_Hour);



const grandParent=$('.container');

for (let i=0;i<=10;i++){

    const StartDateWork = moment("08:00","hh:00");
    const dataHour = moment("8","h");


    let parentDiv= $('<div>');
    const childSpan =$('<span>');
    let childInput = $('<input>');
    let childButton =$('<button>');

    parentDiv.attr('class', 'input-group-append');

    childSpan.attr('class','input-group-text Hour');
    childSpan.attr('id','basic-addon2');


    childSpan.text(StartDateWork.add(i, 'hours').format('hh:00 A'));

    childInput.attr('type','text');
    childInput.attr('class','form-control');
    childInput.attr('placeholder','Task disponable');
    childInput.attr('aria-label','Task disponable');
    childInput.attr('aria-describedby','basic-addon2');
    childInput.attr('data-number',dataHour.add(i, 'hours').format('h'));

    childInput.attr('type','button');
    childButton.attr('class','btn btn-outline-secondary');
    childButton.attr('id','button-addon2');
    childButton.text('Save');

    parentDiv.append(childSpan);
    parentDiv.append(childInput);
    parentDiv.append(childButton);
    grandParent.append(parentDiv);

}

