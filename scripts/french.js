var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var AvalD = document.querySelector("#dates");

AvalD.setAttribute("min", dateTomorrow);



// Code for opening the popup
const cellDivs = document.querySelectorAll('.grid-cell');
const bgO = document.querySelector('.bg-cont');
const popC = document.querySelector('.close');
const bookBtn = document.getElementById("sub-btn");
let option1 = document.querySelector('#opt1');
let option2 = document.querySelector('#opt2');
let option3 = document.querySelector('#opt3');
let option4 = document.querySelector('#opt4');
let option5 = document.querySelector('#opt5');
let option6 = document.querySelector('#opt6');
let selectTime = document.getElementById('time-selection');
let av = document.querySelectorAll('.aval-sp');



// localStorage.clear();
// console.log(localStorage);


//Sets the Availiable spots to what they are
let i = 1;
av.forEach(element => {
    let available = parseInt(localStorage.getItem("FAvaliableSpots" + i)) || 30;
    element.innerHTML = `${available}`;
    i += 1;
});


//Goes through each box and detects changes

for (const cellD of cellDivs) {
    //event for when a cell is clicked
    cellD.addEventListener('click', function(event){

        const classList = event.target.classList;
    
        if (classList[1] != 'void') {

            bgO.style.display = 'flex';
        }

        //this gets the selected date
        const input = document.querySelector('#dates');

        input.onchange = (e) => {

            switch (e.target.value) {
                case '2022-08-01':

                        if (localStorage.getItem('Fspot1') == null) //if it isnt existent
                        {
                            let Fspot1 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot1', JSON.stringify(Fspot1));
                            localStorage.setItem('FAvaliableSpots1', 30);
                            localStorage.setItem('FCIndex', 1);
                        }
        
                        // Retrieve the object from storage
                        let day1 = localStorage.getItem("Fspot1");
                        let index = parseInt(localStorage.getItem("FCIndex"));  
                        day1 = JSON.parse(day1);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName = document.querySelector('#name').value;
                        let CPhone = document.querySelector('#phone').value;

                        localStorage.setItem('FClient-Name' + index , CName);
                        localStorage.setItem('Client-Name' + index , CPhone);
                        localStorage.setItem('FCIndex', (index + 1));

                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');

                        option1.innerHTML = `10:00 - 10:30 (${day1['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day1['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day1['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day1['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day1['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day1['m6']})`;
                        selectTime = document.getElementById('time-selection');

                        selectTime.addEventListener('change', function handleChange(event) {

                            if (day1[event.target.value] >= 0) {

                                bookBtn.addEventListener("click", function() 
                                {
                                    day1[event.target.value] =  day1[event.target.value] - 1;
                                    localStorage.setItem('Fspot1', JSON.stringify(day1));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots1')) - 1;
                                    localStorage.setItem('FAvaliableSpots1', new_spots);

                                    let avals = document.querySelector('#bx1').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots1"));
                                    avals.innerHTML = `${avaliableS}`;


                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });

                            }
                          });
                        break;

                case '2022-08-02':
                    if (localStorage.getItem('Fspot2') == null) //if it isnt existent
                    {
                        let Fspot2 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot2', JSON.stringify(Fspot2));
                        localStorage.setItem('FAvaliableSpots2', 30);
                        localStorage.setItem('FCIndex2', 1);
                    }
    
                    // Retrieve the object from storage
                    let day2 = localStorage.getItem("Fspot2");
                    let index2 = parseInt(localStorage.getItem("FCIndex2"));  
                    day2 = JSON.parse(day2);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName2 = document.querySelector('#name').value;
                    let CPhone2 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name2' + index2 , CName2);
                    localStorage.setItem('FClient-Name2' + index2 , CPhone2);
                    localStorage.setItem('FCIndex2', (index2 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day2['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day2['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day2['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day2['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day2['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day2['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day2[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day2[event.target.value] =  day2[event.target.value] - 1;
                                localStorage.setItem('Fspot2', JSON.stringify(day2));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots2')) - 1;
                                localStorage.setItem('FAvaliableSpots2', new_spots);

                                let avals = document.querySelector('#bx2').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots2"));
                                avals.innerHTML = `${avaliableS}`;


                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                      console.log(localStorage);
                    break;
                case '2022-08-03':
                    if (localStorage.getItem('Fspot3') == null) //if it isnt existent
                    {
                        let Fspot3 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot3', JSON.stringify(Fspot3));
                        localStorage.setItem('FAvaliableSpots3', 30);
                        localStorage.setItem('FCIndex3', 1);
                    }
    
                    // Retrieve the object from storage
                    let day3 = localStorage.getItem("Fspot3");
                    let index3 = parseInt(localStorage.getItem("FCIndex3"));  
                    day3 = JSON.parse(day3);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName3 = document.querySelector('#name').value;
                    let CPhone3 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name3' + index3 , CName3);
                    localStorage.setItem('FClient-Name3' + index3 , CPhone3);
                    localStorage.setItem('FCIndex3', (index3 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day3['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day3['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day3['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day3['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day3['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day3['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day3[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day3[event.target.value] =  day3[event.target.value] - 1;
                                localStorage.setItem('Fspot3', JSON.stringify(day3));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots3')) - 1;
                                localStorage.setItem('FAvaliableSpots3', new_spots);

                                let avals = document.querySelector('#bx3').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots3"));
                                avals.innerHTML = `${avaliableS}`;


                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                    break;
                case '2022-08-04':
                    if (localStorage.getItem('Fspot4') == null) //if it isnt existent
                    {
                        let Fspot4 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot4', JSON.stringify(Fspot4));
                        localStorage.setItem('FAvaliableSpots4', 30);
                        localStorage.setItem('FCIndex4', 1);
                    }
    
                    // Retrieve the object from storage
                    let day4 = localStorage.getItem("Fspot4");
                    let index4 = parseInt(localStorage.getItem("FCIndex4"));  
                    day4 = JSON.parse(day4);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName4 = document.querySelector('#name').value;
                    let CPhone4 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name4' + index4 , CName4);
                    localStorage.setItem('FClient-Name4' + index4 , CPhone4);
                    localStorage.setItem('FCIndex4', (index4 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day4['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day4['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day4['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day4['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day4['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day4['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day4[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day4[event.target.value] =  day4[event.target.value] - 1;
                                localStorage.setItem('Fspot4', JSON.stringify(day4));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots4')) - 1;
                                localStorage.setItem('FAvaliableSpots4', new_spots);

                                let avals = document.querySelector('#bx4').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots4"));
                                avals.innerHTML = `${avaliableS}`;


                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                      console.log(localStorage);
                    break;
                case '2022-08-05':
                    if (localStorage.getItem('Fspot5') == null) //if it isnt existent
                    {
                        let Fspot5 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot5', JSON.stringify(Fspot5));
                        localStorage.setItem('FAvaliableSpots5', 30);
                        localStorage.setItem('FCIndex5', 1);
                    }
    
                    // Retrieve the object from storage
                    let day5 = localStorage.getItem("Fspot5");
                    let index5 = parseInt(localStorage.getItem("FCIndex5"));  
                    day5 = JSON.parse(day5);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName5 = document.querySelector('#name').value;
                    let CPhone5 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name5' + index5 , CName5);
                    localStorage.setItem('FClient-Name5' + index5 , CPhone5);
                    localStorage.setItem('FCIndex5', (index5 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day5['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day5['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day5['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day5['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day5['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day5['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day5[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day5[event.target.value] =  day5[event.target.value] - 1;
                                localStorage.setItem('Fspot5', JSON.stringify(day5));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots5')) - 1;
                                localStorage.setItem('FAvaliableSpots5', new_spots);

                                let avals = document.querySelector('#bx5').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots5"));
                                avals.innerHTML = `${avaliableS}`;


                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                      console.log(localStorage);
                    break;
                case '2022-08-06':
                    if (localStorage.getItem('Fspot6') == null) //if it isnt existent
                    {
                        let Fspot6 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot6', JSON.stringify(Fspot6));
                        localStorage.setItem('FAvaliableSpots6', 30);
                        localStorage.setItem('FCIndex6', 1);
                    }
    
                    // Retrieve the object from storage
                    let day6 = localStorage.getItem("Fspot6");
                    let index6 = parseInt(localStorage.getItem("FCIndex6"));  
                    day6 = JSON.parse(day6);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName6 = document.querySelector('#name').value;
                    let CPhone6 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name6' + index6 , CName6);
                    localStorage.setItem('FClient-Name6' + index6 , CPhone6);
                    localStorage.setItem('FCIndex6', (index6 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day6['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day6['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day6['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day6['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day6['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day6['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day6[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day6[event.target.value] =  day6[event.target.value] - 1;
                                localStorage.setItem('Fspot6', JSON.stringify(day6));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots6')) - 1;
                                localStorage.setItem('FAvaliableSpots6', new_spots);

                                let avals = document.querySelector('#bx6').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots6"));
                                avals.innerHTML = `${avaliableS}`;


                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                      break;
                case '2022-08-07':
                    if (localStorage.getItem('Fspot7') == null) //if it isnt existent
                    {
                        let Fspot7 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot7', JSON.stringify(Fspot7));
                        localStorage.setItem('FAvaliableSpots7', 30);
                        localStorage.setItem('FCIndex7', 1);
                    }
    
                    // Retrieve the object from storage
                    let day7 = localStorage.getItem("Fspot7");
                    let index7 = parseInt(localStorage.getItem("FCIndex7"));  
    
                    day7 = JSON.parse(day7);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName7 = document.querySelector('#name').value;
                    let CPhone7 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name7' + index7 , CName7);
                    localStorage.setItem('FClient-Name7' + index7 , CPhone7);
                    localStorage.setItem('FCIndex7', (index7 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day7['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day7['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day7['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day7['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day7['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day7['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day7[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day7[event.target.value] =  day7[event.target.value] - 1;
                                localStorage.setItem('Fspot7', JSON.stringify(day7));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots7')) - 1;
                                localStorage.setItem('FAvaliableSpots7', new_spots);

                                let avals = document.querySelector('#bx7').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots7"));
                                avals.innerHTML = `${avaliableS}`;


                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                      console.log(localStorage);
                    break;
                case '2022-08-08': 
                if (localStorage.getItem('Fspot8') == null) //if it isnt existent
                {
                    let Fspot8 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                    // Put the object into storage
                    localStorage.setItem('Fspot8', JSON.stringify(Fspot8));
                    localStorage.setItem('FAvaliableSpots8', 30);
                    localStorage.setItem('FCIndex8', 1);
                }

                // Retrieve the object from storage
                let day8 = localStorage.getItem("Fspot8");
                let index8 = parseInt(localStorage.getItem("FCIndex8"));  
                day8 = JSON.parse(day8);
                
                //Adding Name and Phone to Object in LocalStorage
                let CName8 = document.querySelector('#name').value;
                let CPhone8 = document.querySelector('#phone').value;

                localStorage.setItem('FClient-Name8' + index8 , CName8);
                localStorage.setItem('FClient-Name8' + index8 , CPhone8);
                localStorage.setItem('FCIndex8', (index8 + 1));

                option1 = document.querySelector('#opt1');
                option2 = document.querySelector('#opt2');
                option3 = document.querySelector('#opt3');
                option4 = document.querySelector('#opt4');
                option5 = document.querySelector('#opt5');
                option6 = document.querySelector('#opt6');

                option1.innerHTML = `10:00 - 10:30 (${day8['m1']})`;
                option2.innerHTML = `11:00 - 11:30 (${day8['m2']})`;
                option3.innerHTML = `11:45 - 12:15 (${day8['m3']})`;
                option4.innerHTML = `1:30 - 2:00 (${day8['m4']})`;
                option5.innerHTML = `2:15 - 2:45 (${day8['m5']})`;
                option6.innerHTML = `3:00 - 3:30 (${day8['m6']})`;
                selectTime = document.getElementById('time-selection');

                selectTime.addEventListener('change', function handleChange(event) {
                    console.log(event.target.value);

                    if (day8[event.target.value] >= 0) {

                        bookBtn.addEventListener("click", function() 
                        {
                            day8[event.target.value] =  day8[event.target.value] - 1;
                            localStorage.setItem('Fspot8', JSON.stringify(day8));
                            let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots8')) - 1;
                            localStorage.setItem('FAvaliableSpots8', new_spots);

                            let avals = document.querySelector('#bx8').querySelector('.aval-sp');
                            let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots8"));
                            avals.innerHTML = `${avaliableS}`;


                        });
                        
                    } else {
                        
                        bookBtn.addEventListener("click", function(event)
                        {
                            event.preventDefault();
                        });

                    }
                  });
                  console.log(localStorage);
                break;
                case '2022-08-09':
                    if (localStorage.getItem('FFspot9') == null) //if it isnt existent
                    {
                        let FFspot9 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('FFspot9', JSON.stringify(FFspot9));
                        localStorage.setItem('FAvaliableSpots9', 30);
                        localStorage.setItem('FCIndex9', 1);
                    }
    
                    // Retrieve the object from storage
                    let day9 = localStorage.getItem("FFspot9");
                    let index9 = parseInt(localStorage.getItem("FCIndex9"));  
                    day9 = JSON.parse(day9);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName9 = document.querySelector('#name').value;
                    let CPhone9 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name9' + index9 , CName9);
                    localStorage.setItem('FClient-Name9' + index9 , CPhone9);
                    localStorage.setItem('FCIndex9', (index9 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day9['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day9['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day9['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day9['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day9['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day9['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day9[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day9[event.target.value] =  day9[event.target.value] - 1;
                                localStorage.setItem('FFspot9', JSON.stringify(day9));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots9')) - 1;
                                localStorage.setItem('FAvaliableSpots9', new_spots);

                                let avals = document.querySelector('#bx9').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots9"));
                                avals.innerHTML = `${avaliableS}`;


                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                      console.log(localStorage);
                    break;
                case '2022-08-10':
                    if (localStorage.getItem('Fspot10') == null) //if it isnt existent
                    {
                        let Fspot10 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot10', JSON.stringify(Fspot10));
                        localStorage.setItem('FAvaliableSpots10', 30);
                        localStorage.setItem('FCIndex10', 1);
                    }
    
                    // Retrieve the object from storage
                    let day10 = localStorage.getItem("Fspot10");
                    let index10 = parseInt(localStorage.getItem("FCIndex10"));  
                    day10 = JSON.parse(day10);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName10 = document.querySelector('#name').value;
                    let CPhone10 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name10' + index10 , CName10);
                    localStorage.setItem('FClient-Name10' + index10 , CPhone10);
                    localStorage.setItem('FCIndex10', (index10 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day10['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day10['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day10['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day10['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day10['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day10['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day10[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day10[event.target.value] =  day10[event.target.value] - 1;
                                localStorage.setItem('Fspot10', JSON.stringify(day10));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots10')) - 1;
                                localStorage.setItem('FAvaliableSpots10', new_spots);

                                let avals = document.querySelector('#bx10').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots10"));
                                avals.innerHTML = `${avaliableS}`;

                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                      console.log(localStorage);
                    break;
                case '2022-08-11':
                    if (localStorage.getItem('Fspot11') == null) //if it isnt existent
                    {
                        let Fspot11 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot11', JSON.stringify(Fspot11));
                        localStorage.setItem('FAvaliableSpots11', 30);
                        localStorage.setItem('FCIndex11', 1);
                    }
    
                    // Retrieve the object from storage
                    let day11 = localStorage.getItem("Fspot11");
                    let index11 = parseInt(localStorage.getItem("FCIndex11"));  
                    day11 = JSON.parse(day11);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName11 = document.querySelector('#name').value;
                    let CPhone11 = document.querySelector('#phone').value;

                    localStorage.setItem('FClient-Name11' + index11 , CName11);
                    localStorage.setItem('FClient-Name11' + index11 , CPhone11);
                    localStorage.setItem('FCIndex11', (index11 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:30 (${day11['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day11['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day11['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day11['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day11['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day11['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day11[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day11[event.target.value] =  day11[event.target.value] - 1;
                                localStorage.setItem('Fspot11', JSON.stringify(day11));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots11')) - 1;
                                localStorage.setItem('FAvaliableSpots11', new_spots);

                                let avals = document.querySelector('#bx11').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots11"));
                                avals.innerHTML = `${avaliableS}`;


                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });

                        }
                      });
                      console.log(localStorage);
                    break;
                    case '2022-08-12':
                        if (localStorage.getItem('Fspot12') == null) //if it isnt existent
                        {
                            let Fspot12 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot12', JSON.stringify(Fspot12));
                            localStorage.setItem('FAvaliableSpots12', 30);
                            localStorage.setItem('FCIndex12', 1);
                        }
        
                        // Retrieve the object from storage
                        let day12 = localStorage.getItem("Fspot12");
                        let index12 = parseInt(localStorage.getItem("FCIndex12"));  
                        day12 = JSON.parse(day12);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName12 = document.querySelector('#name').value;
                        let CPhone12 = document.querySelector('#phone').value;
    
                        localStorage.setItem('FClient-Name12' + index12 , CName12);
                        localStorage.setItem('FClient-Name12' + index12 , CPhone12);
                        localStorage.setItem('FCIndex12', (index12 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:30 (${day12['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day12['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day12['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day12['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day12['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day12['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day12[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day12[event.target.value] =  day12[event.target.value] - 1;
                                    localStorage.setItem('Fspot12', JSON.stringify(day12));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots12')) - 1;
                                    localStorage.setItem('FAvaliableSpots12', new_spots);
    
                                    let avals = document.querySelector('#bx12').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots12"));
                                    avals.innerHTML = `${avaliableS}`;
    
    
                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });
    
                            }
                          });
                        break;
                    case '2022-08-13':
                        if (localStorage.getItem('Fspot13') == null) //if it isnt existent
                        {
                            let Fspot13 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot13', JSON.stringify(Fspot13));
                            localStorage.setItem('FAvaliableSpots13', 30);
                            localStorage.setItem('FCIndex13', 1);
                        }
        
                        // Retrieve the object from storage
                        let day13 = localStorage.getItem("Fspot13");
                        let index13 = parseInt(localStorage.getItem("FCIndex13"));  
                        day13 = JSON.parse(day13);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName13 = document.querySelector('#name').value;
                        let CPhone13 = document.querySelector('#phone').value;
    
                        localStorage.setItem('FClient-Name13' + index13 , CName13);
                        localStorage.setItem('FClient-Name13' + index13 , CPhone13);
                        localStorage.setItem('FCIndex13', (index13 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:30 (${day13['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day13['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day13['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day13['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day13['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day13['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day13[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day13[event.target.value] =  day13[event.target.value] - 1;
                                    localStorage.setItem('Fspot13', JSON.stringify(day13));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots13')) - 1;
                                    localStorage.setItem('FAvaliableSpots13', new_spots);
    
                                    let avals = document.querySelector('#bx13').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots13"));
                                    avals.innerHTML = `${avaliableS}`;
    
    
                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });
    
                            }
                          });
                        break;
                    case '2022-08-14':
                        if (localStorage.getItem('Fspot14') == null) //if it isnt existent
                        {
                            let Fspot14 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot14', JSON.stringify(Fspot14));
                            localStorage.setItem('FAvaliableSpots14', 30);
                            localStorage.setItem('FCIndex14', 1);
                        }
        
                        // Retrieve the object from storage
                        let day14 = localStorage.getItem("Fspot14");
                        let index14 = parseInt(localStorage.getItem("FCIndex14"));  
                        day14 = JSON.parse(day14);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName14 = document.querySelector('#name').value;
                        let CPhone14 = document.querySelector('#phone').value;
    
                        localStorage.setItem('FClient-Name14' + index14 , CName14);
                        localStorage.setItem('FClient-Name14' + index14 , CPhone14);
                        localStorage.setItem('FCIndex14', (index14+ 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:30 (${day14['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day14['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day14['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day14['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day14['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day14['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                                                        
                            if (day14[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day14[event.target.value] =  day14[event.target.value] - 1;
                                    localStorage.setItem('Fspot14', JSON.stringify(day14));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots14')) - 1;
                                    localStorage.setItem('FAvaliableSpots14', new_spots);
    
                                    let avals = document.querySelector('#bx14').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots14"));
                                    avals.innerHTML = `${avaliableS}`;
    
    
                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });
    
                            }
                          });
                          console.log(localStorage);
                        break;
                    case '2022-08-15':
                        if (localStorage.getItem('Fspot15') == null) //if it isnt existent
                        {
                            let Fspot15 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot15', JSON.stringify(Fspot15));
                            localStorage.setItem('FAvaliableSpots15', 30);
                            localStorage.setItem('FCIndex15', 1);
                        }
        
                        // Retrieve the object from storage
                        let day15 = localStorage.getItem("Fspot15");
                        let index15 = parseInt(localStorage.getItem("FCIndex15"));  
                        day15 = JSON.parse(day15);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName15 = document.querySelector('#name').value;
                        let CPhone15 = document.querySelector('#phone').value;
    
                        localStorage.setItem('FClient-Name15' + index15 , CName15);
                        localStorage.setItem('FClient-Name15' + index15 , CPhone15);
                        localStorage.setItem('FCIndex15', (index15 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:30 (${day15['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day15['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day15['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day15['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day15['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day15['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day15[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day15[event.target.value] =  day15[event.target.value] - 1;
                                    localStorage.setItem('Fspot15', JSON.stringify(day15));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots15')) - 1;
                                    localStorage.setItem('FAvaliableSpots15', new_spots);
    
                                    let avals = document.querySelector('#bx15').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots15"));
                                    avals.innerHTML = `${avaliableS}`;
    
    
                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });
    
                            }
                          });
                        break;
                    case '2022-08-16':
                        if (localStorage.getItem('Fspot16') == null) //if it isnt existent
                        {
                            let Fspot16 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot16', JSON.stringify(Fspot16));
                            localStorage.setItem('FAvaliableSpots16', 30);
                            localStorage.setItem('FCIndex16', 1);
                        }
        
                        // Retrieve the object from storage
                        let day16 = localStorage.getItem("Fspot16");
                        let index16 = parseInt(localStorage.getItem("FCIndex16"));  
                        day16 = JSON.parse(day16);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName16 = document.querySelector('#name').value;
                        let CPhone16 = document.querySelector('#phone').value;
    
                        localStorage.setItem('FClient-Name16' + index16 , CName16);
                        localStorage.setItem('FClient-Name16' + index16 , CPhone16);
                        localStorage.setItem('FCIndex16', (index16 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:30 (${day16['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day16['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day16['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day16['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day16['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day16['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day16[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day16[event.target.value] =  day16[event.target.value] - 1;
                                    localStorage.setItem('Fspot16', JSON.stringify(day16));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots16')) - 1;
                                    localStorage.setItem('FAvaliableSpots16', new_spots);
    
                                    let avals = document.querySelector('#bx16').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots16"));
                                    avals.innerHTML = `${avaliableS}`;
    
    
                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });
    
                            }
                          });
                        break;
                    case '2022-08-17': 
                    if (localStorage.getItem('Fspot17') == null) //if it isnt existent
                    {
                        let Fspot17 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Fspot17', JSON.stringify(Fspot17));
                        localStorage.setItem('FAvaliableSpots17', 30);
                        localStorage.setItem('FCIndex17', 1);
                    }
    
                    // Retrieve the object from storage
                    let day17 = localStorage.getItem("Fspot17");
                    let index17 = parseInt(localStorage.getItem("FCIndex17"));  
                    day17 = JSON.parse(day17);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName17 = document.querySelector('#name').value;
                    let CPhone17 = document.querySelector('#phone').value;
    
                    localStorage.setItem('FClient-Name17' + index17 , CName17);
                    localStorage.setItem('FClient-Name17' + index17 , CPhone17);
                    localStorage.setItem('FCIndex17', (index17 + 1));
    
                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');
    
                    option1.innerHTML = `10:00 - 10:30 (${day17['m1']})`;
                    option2.innerHTML = `11:00 - 11:30 (${day17['m2']})`;
                    option3.innerHTML = `11:45 - 12:15 (${day17['m3']})`;
                    option4.innerHTML = `1:30 - 2:00 (${day17['m4']})`;
                    option5.innerHTML = `2:15 - 2:45 (${day17['m5']})`;
                    option6.innerHTML = `3:00 - 3:30 (${day17['m6']})`;
                    selectTime = document.getElementById('time-selection');
    
                    selectTime.addEventListener('change', function handleChange(event) {
    
                        if (day17[event.target.value] >= 0) {
    
                            bookBtn.addEventListener("click", function() 
                            {
                                day17[event.target.value] =  day17[event.target.value] - 1;
                                localStorage.setItem('Fspot17', JSON.stringify(day17));
                                let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots17')) - 1;
                                localStorage.setItem('FAvaliableSpots17', new_spots);
    
                                let avals = document.querySelector('#bx17').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots17"));
                                avals.innerHTML = `${avaliableS}`;
    
                            });
                            
                        } else {
                            
                            bookBtn.addEventListener("click", function(event)
                            {
                                event.preventDefault();
                            });
    
                        }
                      });
                    break;
                    case '2022-08-18':
                        if (localStorage.getItem('Fspot18') == null) //if it isnt existent
                        {
                            let Fspot18 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot18', JSON.stringify(Fspot18));
                            localStorage.setItem('FAvaliableSpots18', 30);
                            localStorage.setItem('FCIndex18', 1);
                        }
        
                        // Retrieve the object from storage
                        let day18 = localStorage.getItem("Fspot18");
                        let index18 = parseInt(localStorage.getItem("FCIndex18"));  
                        day18 = JSON.parse(day18);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName18 = document.querySelector('#name').value;
                        let CPhone18 = document.querySelector('#phone').value;
    
                        localStorage.setItem('FClient-Name18' + index18 , CName18);
                        localStorage.setItem('FClient-Name18' + index18 , CPhone18);
                        localStorage.setItem('FCIndex18', (index18 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:30 (${day18['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day18['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day18['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day18['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day18['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day18['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day18[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day18[event.target.value] =  day18[event.target.value] - 1;
                                    localStorage.setItem('Fspot18', JSON.stringify(day18));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots18')) - 1;
                                    localStorage.setItem('FAvaliableSpots18', new_spots);
    
                                    let avals = document.querySelector('#bx18').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots18"));
                                    avals.innerHTML = `${avaliableS}`;
    
    
                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });
    
                            }
                          });
                          console.log(localStorage);
                        break;
                    case '2022-08-19':
                        if (localStorage.getItem('Fspot19') == null) //if it isnt existent
                        {
                            let Fspot19 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot19', JSON.stringify(Fspot19));
                            localStorage.setItem('FAvaliableSpots19', 30);
                            localStorage.setItem('FCIndex19', 1);
                        }
        
                        // Retrieve the object from storage
                        let day19 = localStorage.getItem("Fspot19");
                        let index19 = parseInt(localStorage.getItem("FCIndex19"));  
                        day19 = JSON.parse(day19);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName19 = document.querySelector('#name').value;
                        let CPhone19 = document.querySelector('#phone').value;
    
                        localStorage.setItem('FClient-Name19' + index19 , CName19);
                        localStorage.setItem('FClient-Name19' + index19 , CPhone19);
                        localStorage.setItem('FCIndex19', (index19 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:30 (${day19['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day19['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day19['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day19['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day19['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day19['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day19[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day19[event.target.value] =  day19[event.target.value] - 1;
                                    localStorage.setItem('Fspot19', JSON.stringify(day19));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots19')) - 1;
                                    localStorage.setItem('FAvaliableSpots19', new_spots);
    
                                    let avals = document.querySelector('#bx19').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots19"));
                                    avals.innerHTML = `${avaliableS}`;
    
    
                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });
    
                            }
                          });
                        break;
                    case '2022-08-20':
                        if (localStorage.getItem('Fspot20') == null) //if it isnt existent
                        {
                            let Fspot20 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Fspot20', JSON.stringify(Fspot20));
                            localStorage.setItem('FAvaliableSpots20', 30);
                            localStorage.setItem('FCIndex20', 1);
                        }
        
                        // Retrieve the object from storage
                        let day20 = localStorage.getItem("Fspot20");
                        let index20 = parseInt(localStorage.getItem("FCIndex20"));  
                        day20 = JSON.parse(day20);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName20 = document.querySelector('#name').value;
                        let CPhone20 = document.querySelector('#phone').value;
    
                        localStorage.setItem('FClient-Name20' + index20 , CName20);
                        localStorage.setItem('FClient-Name20' + index20 , CPhone20);
                        localStorage.setItem('FCIndex20', (index20 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:30 (${day20['m1']})`;
                        option2.innerHTML = `11:00 - 11:30 (${day20['m2']})`;
                        option3.innerHTML = `11:45 - 12:15 (${day20['m3']})`;
                        option4.innerHTML = `1:30 - 2:00 (${day20['m4']})`;
                        option5.innerHTML = `2:15 - 2:45 (${day20['m5']})`;
                        option6.innerHTML = `3:00 - 3:30 (${day20['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day20[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day20[event.target.value] =  day20[event.target.value] - 1;
                                    localStorage.setItem('Fspot20', JSON.stringify(day20));
                                    let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots20')) - 1;
                                    localStorage.setItem('FAvaliableSpots20', new_spots);
    
                                    let avals = document.querySelector('#bx20').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots20"));
                                    avals.innerHTML = `${avaliableS}`;
    
    
                                });
                                
                            } else {
                                
                                bookBtn.addEventListener("click", function(event)
                                {
                                    event.preventDefault();
                                });
    
                            }
                          });
                          console.log(localStorage);
                            break;
                    case '2022-08-21':
                            if (localStorage.getItem('Fspot21') == null) //if it isnt existent
                            {
                                let Fspot21 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot21', JSON.stringify(Fspot21));
                                localStorage.setItem('FAvaliableSpots21', 30);
                                localStorage.setItem('FCIndex21', 1);
                            }
            
                            // Retrieve the object from storage
                            let day21 = localStorage.getItem("Fspot21");
                            let index21 = parseInt(localStorage.getItem("FCIndex21"));  
                            day21 = JSON.parse(day21);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName21 = document.querySelector('#name').value;
                            let CPhone21 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name21' + index21 , CName21);
                            localStorage.setItem('FClient-Name21' + index21 , CPhone21);
                            localStorage.setItem('FCIndex21', (index21 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day21['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day21['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day21['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day21['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day21['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day21['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day21[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day21[event.target.value] =  day21[event.target.value] - 1;
                                        localStorage.setItem('Fspot21', JSON.stringify(day21));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots21')) - 1;
                                        localStorage.setItem('FAvaliableSpots21', new_spots);
        
                                        let avals = document.querySelector('#bx21').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots21"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                            break;                    
                    case '2022-08-22':
                            if (localStorage.getItem('Fspot22') == null) //if it isnt existent
                            {
                                let Fspot22 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot22', JSON.stringify(Fspot22));
                                localStorage.setItem('FAvaliableSpots22', 30);
                                localStorage.setItem('FCIndex22', 1);
                            }
            
                            // Retrieve the object from storage
                            let day22 = localStorage.getItem("Fspot22");
                            let index22 = parseInt(localStorage.getItem("FCIndex22"));  
                            day22 = JSON.parse(day22);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName22 = document.querySelector('#name').value;
                            let CPhone22 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name22' + index22 , CName22);
                            localStorage.setItem('FClient-Name22' + index22 , CPhone22);
                            localStorage.setItem('FCIndex22', (index22 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day22['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day22['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day22['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day22['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day22['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day22['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day22[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day22[event.target.value] =  day22[event.target.value] - 1;
                                        localStorage.setItem('Fspot22', JSON.stringify(day22));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots22')) - 1;
                                        localStorage.setItem('FAvaliableSpots22', new_spots);
        
                                        let avals = document.querySelector('#bx22').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots22"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                                break;                    
                    case '2022-08-23':
                            if (localStorage.getItem('Fspot23') == null) //if it isnt existent
                            {
                                let Fspot23 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot23', JSON.stringify(Fspot23));
                                localStorage.setItem('FAvaliableSpots23', 30);
                                localStorage.setItem('FCIndex23', 1);
                            }
            
                            // Retrieve the object from storage
                            let day23 = localStorage.getItem("Fspot23");
                            let index23 = parseInt(localStorage.getItem("FCIndex23"));  
                            day23 = JSON.parse(day23);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName23 = document.querySelector('#name').value;
                            let CPhone23 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name23' + index23 , CName23);
                            localStorage.setItem('FClient-Name23' + index23 , CPhone23);
                            localStorage.setItem('FCIndex23', (index23 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day23['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day23['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day23['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day23['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day23['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day23['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day23[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day23[event.target.value] =  day23[event.target.value] - 1;
                                        localStorage.setItem('Fspot23', JSON.stringify(day23));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots23')) - 1;
                                        localStorage.setItem('FAvaliableSpots23', new_spots);
        
                                        let avals = document.querySelector('#bx23').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots23"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                                break;                
                    case '2022-08-24':
                            if (localStorage.getItem('Fspot24') == null) //if it isnt existent
                            {
                                let Fspot24 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot24', JSON.stringify(Fspot24));
                                localStorage.setItem('FAvaliableSpots24', 30);
                                localStorage.setItem('FCIndex24', 1);
                            }
            
                            // Retrieve the object from storage
                            let day24 = localStorage.getItem("Fspot24");
                            let index24 = parseInt(localStorage.getItem("FCIndex24"));  
                            day24 = JSON.parse(day24);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName24 = document.querySelector('#name').value;
                            let CPhone24 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name24' + index24 , CName24);
                            localStorage.setItem('FClient-Name24' + index24 , CPhone24);
                            localStorage.setItem('FCIndex24', (index24 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day24['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day24['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day24['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day24['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day24['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day24['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day24[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day24[event.target.value] =  day24[event.target.value] - 1;
                                        localStorage.setItem('Fspot24', JSON.stringify(day24));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots24')) - 1;
                                        localStorage.setItem('FAvaliableSpots24', new_spots);
        
                                        let avals = document.querySelector('#bx24').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots24"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                            break;                   
                    case '2022-08-25':
                            if (localStorage.getItem('Fspot25') == null) //if it isnt existent
                            {
                                let Fspot25 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot25', JSON.stringify(Fspot25));
                                localStorage.setItem('FAvaliableSpots25', 30);
                                localStorage.setItem('FCIndex25', 1);
                            }
            
                            // Retrieve the object from storage
                            let day25 = localStorage.getItem("Fspot25");
                            let index25 = parseInt(localStorage.getItem("FCIndex25"));  
                            day25 = JSON.parse(day25);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName25 = document.querySelector('#name').value;
                            let CPhone25 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name25' + index25 , CName25);
                            localStorage.setItem('FClient-Name25' + index25 , CPhone25);
                            localStorage.setItem('FCIndex25', (index25 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day25['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day25['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day25['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day25['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day25['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day25['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day25[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day25[event.target.value] =  day25[event.target.value] - 1;
                                        localStorage.setItem('Fspot25', JSON.stringify(day25));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots25')) - 1;
                                        localStorage.setItem('FAvaliableSpots25', new_spots);
        
                                        let avals = document.querySelector('#bx25').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots25"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                                break;                    
                    case '2022-08-26':
                            if (localStorage.getItem('Fspot26') == null) //if it isnt existent
                            {
                                let Fspot26 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot26', JSON.stringify(Fspot26));
                                localStorage.setItem('FAvaliableSpots26', 30);
                                localStorage.setItem('FCIndex26', 1);
                            }
            
                            // Retrieve the object from storage
                            let day26 = localStorage.getItem("Fspot26");
                            let index26 = parseInt(localStorage.getItem("FCIndex26"));  
                            day26 = JSON.parse(day26);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName26 = document.querySelector('#name').value;
                            let CPhone26 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name26' + index26 , CName26);
                            localStorage.setItem('FClient-Name26' + index26 , CPhone26);
                            localStorage.setItem('FCIndex26', (index26 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day26['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day26['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day26['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day26['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day26['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day26['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day26[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day26[event.target.value] =  day26[event.target.value] - 1;
                                        localStorage.setItem('Fspot26', JSON.stringify(day26));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots26')) - 1;
                                        localStorage.setItem('FAvaliableSpots26', new_spots);
        
                                        let avals = document.querySelector('#bx26').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots26"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                                break;                    
                    case '2022-08-27':
                            if (localStorage.getItem('Fspot27') == null) //if it isnt existent
                            {
                                let Fspot27 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot27', JSON.stringify(Fspot27));
                                localStorage.setItem('FAvaliableSpots27', 30);
                                localStorage.setItem('FCIndex27', 1);
                            }
            
                            // Retrieve the object from storage
                            let day27 = localStorage.getItem("Fspot27");
                            let index27 = parseInt(localStorage.getItem("FCIndex27"));  
                            day27 = JSON.parse(day27);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName27 = document.querySelector('#name').value;
                            let CPhone27 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name27' + index27 , CName27);
                            localStorage.setItem('FClient-Name27' + index27 , CPhone27);
                            localStorage.setItem('FCIndex27', (index27 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day27['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day27['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day27['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day27['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day27['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day27['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day27[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day27[event.target.value] =  day27[event.target.value] - 1;
                                        localStorage.setItem('Fspot27', JSON.stringify(day27));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots27')) - 1;
                                        localStorage.setItem('FAvaliableSpots27', new_spots);
        
                                        let avals = document.querySelector('#bx27').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots27"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                                break;                    
                    case '2022-08-28':
                            if (localStorage.getItem('Fspot28') == null) //if it isnt existent
                            {
                                let Fspot28 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot28', JSON.stringify(Fspot28));
                                localStorage.setItem('FAvaliableSpots28', 30);
                                localStorage.setItem('FCIndex28', 1);
                            }
            
                            // Retrieve the object from storage
                            let day28 = localStorage.getItem("Fspot28");
                            let index28 = parseInt(localStorage.getItem("FCIndex28"));  
                            day28 = JSON.parse(day28);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName28 = document.querySelector('#name').value;
                            let CPhone28 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name28' + index28 , CName28);
                            localStorage.setItem('FClient-Name28' + index28 , CPhone28);
                            localStorage.setItem('FCIndex28', (index28 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day28['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day28['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day28['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day28['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day28['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day28['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day28[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day28[event.target.value] =  day28[event.target.value] - 1;
                                        localStorage.setItem('Fspot28', JSON.stringify(day28));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots28')) - 1;
                                        localStorage.setItem('FAvaliableSpots28', new_spots);
        
                                        let avals = document.querySelector('#bx28').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots28"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                                break;                    
                    case '2022-08-29':
                            if (localStorage.getItem('Fspot29') == null) //if it isnt existent
                            {
                                let Fspot29 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot29', JSON.stringify(Fspot29));
                                localStorage.setItem('FAvaliableSpots29', 30);
                                localStorage.setItem('FCIndex29', 1);
                            }
            
                            // Retrieve the object from storage
                            let day29 = localStorage.getItem("Fspot29");
                            let index29 = parseInt(localStorage.getItem("FCIndex29"));  
                            day29 = JSON.parse(day29);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName29 = document.querySelector('#name').value;
                            let CPhone29 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name29' + index29 , CName29);
                            localStorage.setItem('FClient-Name29' + index29 , CPhone29);
                            localStorage.setItem('FCIndex29', (index29 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day29['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day29['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day29['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day29['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day29['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day29['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day29[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day29[event.target.value] =  day29[event.target.value] - 1;
                                        localStorage.setItem('Fspot29', JSON.stringify(day29));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots29')) - 1;
                                        localStorage.setItem('FAvaliableSpots29', new_spots);
        
                                        let avals = document.querySelector('#bx29').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots29"));
                                        avals.innerHTML = `${avaliableS}`;
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                                break;                    
                    case '2022-08-30':
                            if (localStorage.getItem('Fspot30') == null) //if it isnt existent
                            {
                                let Fspot30 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot30', JSON.stringify(Fspot30));
                                localStorage.setItem('FAvaliableSpots30', 30);
                                localStorage.setItem('FCIndex30', 1);
                            }
            
                            // Retrieve the object from storage
                            let day30 = localStorage.getItem("Fspot30");
                            let index30 = parseInt(localStorage.getItem("FCIndex30"));  
                            day30 = JSON.parse(day30);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName30 = document.querySelector('#name').value;
                            let CPhone30 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name30' + index30 , CName30);
                            localStorage.setItem('FClient-Name30' + index30 , CPhone30);
                            localStorage.setItem('FCIndex30', (index30 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day30['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day30['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day30['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day30['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day30['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day30['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day30[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day30[event.target.value] =  day30[event.target.value] - 1;
                                        localStorage.setItem('Fspot30', JSON.stringify(day30));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots30')) - 1;
                                        localStorage.setItem('FAvaliableSpots30', new_spots);
        
                                        let avals = document.querySelector('#bx30').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots30"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                                break;                   
                    case '2022-08-31':
                            if (localStorage.getItem('Fspot31') == null) //if it isnt existent
                            {
                                let Fspot31 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Fspot31', JSON.stringify(Fspot31));
                                localStorage.setItem('FAvaliableSpots31', 30);
                                localStorage.setItem('FCIndex31', 1);
                            }
            
                            // Retrieve the object from storage
                            let day31 = localStorage.getItem("Fspot31");
                            let index31 = parseInt(localStorage.getItem("FCIndex31"));  
                            day31 = JSON.parse(day31);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName31 = document.querySelector('#name').value;
                            let CPhone31 = document.querySelector('#phone').value;
        
                            localStorage.setItem('FClient-Name31' + index31, CName31);
                            localStorage.setItem('FClient-Name31' + index31 , CPhone31);
                            localStorage.setItem('FCIndex31', (index31 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:30 (${day31['m1']})`;
                            option2.innerHTML = `11:00 - 11:30 (${day31['m2']})`;
                            option3.innerHTML = `11:45 - 12:15 (${day31['m3']})`;
                            option4.innerHTML = `1:30 - 2:00 (${day31['m4']})`;
                            option5.innerHTML = `2:15 - 2:45 (${day31['m5']})`;
                            option6.innerHTML = `3:00 - 3:30 (${day31['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day31[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day31[event.target.value] =  day31[event.target.value] - 1;
                                        localStorage.setItem('Fspot31', JSON.stringify(day31));
                                        let new_spots =  parseInt(localStorage.getItem('FAvaliableSpots31')) - 1;
                                        localStorage.setItem('FAvaliableSpots31', new_spots);
        
                                        let avals = document.querySelector('#bx31').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("FAvaliableSpots31"));
                                        avals.innerHTML = `${avaliableS}`;
        
        
                                    });
                                    
                                } else {
                                    
                                    bookBtn.addEventListener("click", function(event)
                                    {
                                        event.preventDefault();
                                    });
        
                                }
                              });
                              console.log(localStorage);
                            break;
                default:
                    break;
            }

        }



    })


    

    popC.addEventListener('click', function(){

        bgO.style.display = 'none';
    
        })
  }
