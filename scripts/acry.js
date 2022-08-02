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
    let available = parseInt(localStorage.getItem("AAvaliableSpots" + i)) || 30;
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

                        if (localStorage.getItem('Aspot1') == null) //if it isnt existent
                        {
                            let Aspot1 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot1', JSON.stringify(Aspot1));
                            localStorage.setItem('AAvaliableSpots1', 30);
                            localStorage.setItem('ACIndex', 1);
                        }
        
                        // Retrieve the object from storage
                        let day1 = localStorage.getItem("Aspot1");
                        let index = parseInt(localStorage.getItem("ACIndex"));  
                        day1 = JSON.parse(day1);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName = document.querySelector('#name').value;
                        let CPhone = document.querySelector('#phone').value;

                        localStorage.setItem('AClient-Name' + index , CName);
                        localStorage.setItem('Client-Name' + index , CPhone);
                        localStorage.setItem('ACIndex', (index + 1));

                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');

                        option1.innerHTML = `10:00 - 11:00 (${day1['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day1['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day1['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day1['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day1['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day1['m6']})`;
                        selectTime = document.getElementById('time-selection');

                        selectTime.addEventListener('change', function handleChange(event) {

                            if (day1[event.target.value] >= 0) {

                                bookBtn.addEventListener("click", function() 
                                {
                                    day1[event.target.value] =  day1[event.target.value] - 1;
                                    localStorage.setItem('Aspot1', JSON.stringify(day1));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots1')) - 1;
                                    localStorage.setItem('AAvaliableSpots1', new_spots);

                                    let avals = document.querySelector('#bx1').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots1"));
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
                    if (localStorage.getItem('Aspot2') == null) //if it isnt existent
                    {
                        let Aspot2 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot2', JSON.stringify(Aspot2));
                        localStorage.setItem('AAvaliableSpots2', 30);
                        localStorage.setItem('ACIndex2', 1);
                    }
    
                    // Retrieve the object from storage
                    let day2 = localStorage.getItem("Aspot2");
                    let index2 = parseInt(localStorage.getItem("ACIndex2"));  
                    day2 = JSON.parse(day2);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName2 = document.querySelector('#name').value;
                    let CPhone2 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name2' + index2 , CName2);
                    localStorage.setItem('AClient-Name2' + index2 , CPhone2);
                    localStorage.setItem('ACIndex2', (index2 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day2['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day2['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day2['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day2['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day2['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day2['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day2[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day2[event.target.value] =  day2[event.target.value] - 1;
                                localStorage.setItem('Aspot2', JSON.stringify(day2));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots2')) - 1;
                                localStorage.setItem('AAvaliableSpots2', new_spots);

                                let avals = document.querySelector('#bx2').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots2"));
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
                    if (localStorage.getItem('Aspot3') == null) //if it isnt existent
                    {
                        let Aspot3 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot3', JSON.stringify(Aspot3));
                        localStorage.setItem('AAvaliableSpots3', 30);
                        localStorage.setItem('ACIndex3', 1);
                    }
    
                    // Retrieve the object from storage
                    let day3 = localStorage.getItem("Aspot3");
                    let index3 = parseInt(localStorage.getItem("ACIndex3"));  
                    day3 = JSON.parse(day3);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName3 = document.querySelector('#name').value;
                    let CPhone3 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name3' + index3 , CName3);
                    localStorage.setItem('AClient-Name3' + index3 , CPhone3);
                    localStorage.setItem('ACIndex3', (index3 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day3['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day3['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day3['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day3['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day3['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day3['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day3[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day3[event.target.value] =  day3[event.target.value] - 1;
                                localStorage.setItem('Aspot3', JSON.stringify(day3));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots3')) - 1;
                                localStorage.setItem('AAvaliableSpots3', new_spots);

                                let avals = document.querySelector('#bx3').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots3"));
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
                    if (localStorage.getItem('Aspot4') == null) //if it isnt existent
                    {
                        let Aspot4 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot4', JSON.stringify(Aspot4));
                        localStorage.setItem('AAvaliableSpots4', 30);
                        localStorage.setItem('ACIndex4', 1);
                    }
    
                    // Retrieve the object from storage
                    let day4 = localStorage.getItem("Aspot4");
                    let index4 = parseInt(localStorage.getItem("ACIndex4"));  
                    day4 = JSON.parse(day4);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName4 = document.querySelector('#name').value;
                    let CPhone4 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name4' + index4 , CName4);
                    localStorage.setItem('AClient-Name4' + index4 , CPhone4);
                    localStorage.setItem('ACIndex4', (index4 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day4['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day4['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day4['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day4['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day4['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day4['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day4[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day4[event.target.value] =  day4[event.target.value] - 1;
                                localStorage.setItem('Aspot4', JSON.stringify(day4));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots4')) - 1;
                                localStorage.setItem('AAvaliableSpots4', new_spots);

                                let avals = document.querySelector('#bx4').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots4"));
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
                    if (localStorage.getItem('Aspot5') == null) //if it isnt existent
                    {
                        let Aspot5 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot5', JSON.stringify(Aspot5));
                        localStorage.setItem('AAvaliableSpots5', 30);
                        localStorage.setItem('ACIndex5', 1);
                    }
    
                    // Retrieve the object from storage
                    let day5 = localStorage.getItem("Aspot5");
                    let index5 = parseInt(localStorage.getItem("ACIndex5"));  
                    day5 = JSON.parse(day5);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName5 = document.querySelector('#name').value;
                    let CPhone5 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name5' + index5 , CName5);
                    localStorage.setItem('AClient-Name5' + index5 , CPhone5);
                    localStorage.setItem('ACIndex5', (index5 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day5['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day5['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day5['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day5['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day5['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day5['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day5[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day5[event.target.value] =  day5[event.target.value] - 1;
                                localStorage.setItem('Aspot5', JSON.stringify(day5));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots5')) - 1;
                                localStorage.setItem('AAvaliableSpots5', new_spots);

                                let avals = document.querySelector('#bx5').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots5"));
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
                    if (localStorage.getItem('Aspot6') == null) //if it isnt existent
                    {
                        let Aspot6 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot6', JSON.stringify(Aspot6));
                        localStorage.setItem('AAvaliableSpots6', 30);
                        localStorage.setItem('ACIndex6', 1);
                    }
    
                    // Retrieve the object from storage
                    let day6 = localStorage.getItem("Aspot6");
                    let index6 = parseInt(localStorage.getItem("ACIndex6"));  
                    day6 = JSON.parse(day6);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName6 = document.querySelector('#name').value;
                    let CPhone6 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name6' + index6 , CName6);
                    localStorage.setItem('AClient-Name6' + index6 , CPhone6);
                    localStorage.setItem('ACIndex6', (index6 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day6['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day6['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day6['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day6['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day6['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day6['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day6[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day6[event.target.value] =  day6[event.target.value] - 1;
                                localStorage.setItem('Aspot6', JSON.stringify(day6));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots6')) - 1;
                                localStorage.setItem('AAvaliableSpots6', new_spots);

                                let avals = document.querySelector('#bx6').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots6"));
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
                    if (localStorage.getItem('Aspot7') == null) //if it isnt existent
                    {
                        let Aspot7 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot7', JSON.stringify(Aspot7));
                        localStorage.setItem('AAvaliableSpots7', 30);
                        localStorage.setItem('ACIndex7', 1);
                    }
    
                    // Retrieve the object from storage
                    let day7 = localStorage.getItem("Aspot7");
                    let index7 = parseInt(localStorage.getItem("ACIndex7"));  
    
                    day7 = JSON.parse(day7);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName7 = document.querySelector('#name').value;
                    let CPhone7 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name7' + index7 , CName7);
                    localStorage.setItem('AClient-Name7' + index7 , CPhone7);
                    localStorage.setItem('ACIndex7', (index7 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day7['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day7['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day7['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day7['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day7['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day7['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day7[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day7[event.target.value] =  day7[event.target.value] - 1;
                                localStorage.setItem('Aspot7', JSON.stringify(day7));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots7')) - 1;
                                localStorage.setItem('AAvaliableSpots7', new_spots);

                                let avals = document.querySelector('#bx7').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots7"));
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
                if (localStorage.getItem('Aspot8') == null) //if it isnt existent
                {
                    let Aspot8 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                    // Put the object into storage
                    localStorage.setItem('Aspot8', JSON.stringify(Aspot8));
                    localStorage.setItem('AAvaliableSpots8', 30);
                    localStorage.setItem('ACIndex8', 1);
                }

                // Retrieve the object from storage
                let day8 = localStorage.getItem("Aspot8");
                let index8 = parseInt(localStorage.getItem("ACIndex8"));  
                day8 = JSON.parse(day8);
                
                //Adding Name and Phone to Object in LocalStorage
                let CName8 = document.querySelector('#name').value;
                let CPhone8 = document.querySelector('#phone').value;

                localStorage.setItem('AClient-Name8' + index8 , CName8);
                localStorage.setItem('AClient-Name8' + index8 , CPhone8);
                localStorage.setItem('ACIndex8', (index8 + 1));

                option1 = document.querySelector('#opt1');
                option2 = document.querySelector('#opt2');
                option3 = document.querySelector('#opt3');
                option4 = document.querySelector('#opt4');
                option5 = document.querySelector('#opt5');
                option6 = document.querySelector('#opt6');

                option1.innerHTML = `10:00 - 11:00 (${day8['m1']})`;
                option2.innerHTML = `11:30 - 12:30 (${day8['m2']})`;
                option3.innerHTML = `2:00 - 3:00 (${day8['m3']})`;
                option4.innerHTML = `3:30 - 4:30 (${day8['m4']})`;
                option5.innerHTML = `5:00 - 6:00 (${day8['m5']})`;
                option6.innerHTML = `6:30 - 7:30 (${day8['m6']})`;
                selectTime = document.getElementById('time-selection');

                selectTime.addEventListener('change', function handleChange(event) {
                    console.log(event.target.value);

                    if (day8[event.target.value] >= 0) {

                        bookBtn.addEventListener("click", function() 
                        {
                            day8[event.target.value] =  day8[event.target.value] - 1;
                            localStorage.setItem('Aspot8', JSON.stringify(day8));
                            let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots8')) - 1;
                            localStorage.setItem('AAvaliableSpots8', new_spots);

                            let avals = document.querySelector('#bx8').querySelector('.aval-sp');
                            let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots8"));
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
                    if (localStorage.getItem('Aspot9') == null) //if it isnt existent
                    {
                        let Aspot9 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot9', JSON.stringify(Aspot9));
                        localStorage.setItem('AAvaliableSpots9', 30);
                        localStorage.setItem('ACIndex9', 1);
                    }
    
                    // Retrieve the object from storage
                    let day9 = localStorage.getItem("Aspot9");
                    let index9 = parseInt(localStorage.getItem("ACIndex9"));  
                    day9 = JSON.parse(day9);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName9 = document.querySelector('#name').value;
                    let CPhone9 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name9' + index9 , CName9);
                    localStorage.setItem('AClient-Name9' + index9 , CPhone9);
                    localStorage.setItem('ACIndex9', (index9 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day9['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day9['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day9['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day9['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day9['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day9['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day9[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day9[event.target.value] =  day9[event.target.value] - 1;
                                localStorage.setItem('Aspot9', JSON.stringify(day9));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots9')) - 1;
                                localStorage.setItem('AAvaliableSpots9', new_spots);

                                let avals = document.querySelector('#bx9').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots9"));
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
                    if (localStorage.getItem('Aspot10') == null) //if it isnt existent
                    {
                        let Aspot10 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot10', JSON.stringify(Aspot10));
                        localStorage.setItem('AAvaliableSpots10', 30);
                        localStorage.setItem('ACIndex10', 1);
                    }
    
                    // Retrieve the object from storage
                    let day10 = localStorage.getItem("Aspot10");
                    let index10 = parseInt(localStorage.getItem("ACIndex10"));  
                    day10 = JSON.parse(day10);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName10 = document.querySelector('#name').value;
                    let CPhone10 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name10' + index10 , CName10);
                    localStorage.setItem('AClient-Name10' + index10 , CPhone10);
                    localStorage.setItem('ACIndex10', (index10 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day10['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day10['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day10['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day10['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day10['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day10['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day10[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day10[event.target.value] =  day10[event.target.value] - 1;
                                localStorage.setItem('Aspot10', JSON.stringify(day10));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots10')) - 1;
                                localStorage.setItem('AAvaliableSpots10', new_spots);

                                let avals = document.querySelector('#bx10').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots10"));
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
                    if (localStorage.getItem('Aspot11') == null) //if it isnt existent
                    {
                        let Aspot11 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot11', JSON.stringify(Aspot11));
                        localStorage.setItem('AAvaliableSpots11', 30);
                        localStorage.setItem('ACIndex11', 1);
                    }
    
                    // Retrieve the object from storage
                    let day11 = localStorage.getItem("Aspot11");
                    let index11 = parseInt(localStorage.getItem("ACIndex11"));  
                    day11 = JSON.parse(day11);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName11 = document.querySelector('#name').value;
                    let CPhone11 = document.querySelector('#phone').value;

                    localStorage.setItem('AClient-Name11' + index11 , CName11);
                    localStorage.setItem('AClient-Name11' + index11 , CPhone11);
                    localStorage.setItem('ACIndex11', (index11 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 11:00 (${day11['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day11['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day11['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day11['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day11['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day11['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {

                        if (day11[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day11[event.target.value] =  day11[event.target.value] - 1;
                                localStorage.setItem('Aspot11', JSON.stringify(day11));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots11')) - 1;
                                localStorage.setItem('AAvaliableSpots11', new_spots);

                                let avals = document.querySelector('#bx11').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots11"));
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
                        if (localStorage.getItem('Aspot12') == null) //if it isnt existent
                        {
                            let Aspot12 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot12', JSON.stringify(Aspot12));
                            localStorage.setItem('AAvaliableSpots12', 30);
                            localStorage.setItem('ACIndex12', 1);
                        }
        
                        // Retrieve the object from storage
                        let day12 = localStorage.getItem("Aspot12");
                        let index12 = parseInt(localStorage.getItem("ACIndex12"));  
                        day12 = JSON.parse(day12);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName12 = document.querySelector('#name').value;
                        let CPhone12 = document.querySelector('#phone').value;
    
                        localStorage.setItem('AClient-Name12' + index12 , CName12);
                        localStorage.setItem('AClient-Name12' + index12 , CPhone12);
                        localStorage.setItem('ACIndex12', (index12 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 11:00 (${day12['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day12['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day12['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day12['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day12['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day12['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day12[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day12[event.target.value] =  day12[event.target.value] - 1;
                                    localStorage.setItem('Aspot12', JSON.stringify(day12));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots12')) - 1;
                                    localStorage.setItem('AAvaliableSpots12', new_spots);
    
                                    let avals = document.querySelector('#bx12').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots12"));
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
                        if (localStorage.getItem('Aspot13') == null) //if it isnt existent
                        {
                            let Aspot13 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot13', JSON.stringify(Aspot13));
                            localStorage.setItem('AAvaliableSpots13', 30);
                            localStorage.setItem('ACIndex13', 1);
                        }
        
                        // Retrieve the object from storage
                        let day13 = localStorage.getItem("Aspot13");
                        let index13 = parseInt(localStorage.getItem("ACIndex13"));  
                        day13 = JSON.parse(day13);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName13 = document.querySelector('#name').value;
                        let CPhone13 = document.querySelector('#phone').value;
    
                        localStorage.setItem('AClient-Name13' + index13 , CName13);
                        localStorage.setItem('AClient-Name13' + index13 , CPhone13);
                        localStorage.setItem('ACIndex13', (index13 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 11:00 (${day13['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day13['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day13['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day13['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day13['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day13['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day13[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day13[event.target.value] =  day13[event.target.value] - 1;
                                    localStorage.setItem('Aspot13', JSON.stringify(day13));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots13')) - 1;
                                    localStorage.setItem('AAvaliableSpots13', new_spots);
    
                                    let avals = document.querySelector('#bx13').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots13"));
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
                        if (localStorage.getItem('Aspot14') == null) //if it isnt existent
                        {
                            let Aspot14 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot14', JSON.stringify(Aspot14));
                            localStorage.setItem('AAvaliableSpots14', 30);
                            localStorage.setItem('ACIndex14', 1);
                        }
        
                        // Retrieve the object from storage
                        let day14 = localStorage.getItem("Aspot14");
                        let index14 = parseInt(localStorage.getItem("ACIndex14"));  
                        day14 = JSON.parse(day14);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName14 = document.querySelector('#name').value;
                        let CPhone14 = document.querySelector('#phone').value;
    
                        localStorage.setItem('AClient-Name14' + index14 , CName14);
                        localStorage.setItem('AClient-Name14' + index14 , CPhone14);
                        localStorage.setItem('ACIndex14', (index14+ 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 11:00 (${day14['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day14['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day14['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day14['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day14['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day14['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                                                        
                            if (day14[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day14[event.target.value] =  day14[event.target.value] - 1;
                                    localStorage.setItem('Aspot14', JSON.stringify(day14));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots14')) - 1;
                                    localStorage.setItem('AAvaliableSpots14', new_spots);
    
                                    let avals = document.querySelector('#bx14').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots14"));
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
                        if (localStorage.getItem('Aspot15') == null) //if it isnt existent
                        {
                            let Aspot15 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot15', JSON.stringify(Aspot15));
                            localStorage.setItem('AAvaliableSpots15', 30);
                            localStorage.setItem('ACIndex15', 1);
                        }
        
                        // Retrieve the object from storage
                        let day15 = localStorage.getItem("Aspot15");
                        let index15 = parseInt(localStorage.getItem("ACIndex15"));  
                        day15 = JSON.parse(day15);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName15 = document.querySelector('#name').value;
                        let CPhone15 = document.querySelector('#phone').value;
    
                        localStorage.setItem('AClient-Name15' + index15 , CName15);
                        localStorage.setItem('AClient-Name15' + index15 , CPhone15);
                        localStorage.setItem('ACIndex15', (index15 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 11:00 (${day15['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day15['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day15['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day15['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day15['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day15['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day15[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day15[event.target.value] =  day15[event.target.value] - 1;
                                    localStorage.setItem('Aspot15', JSON.stringify(day15));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots15')) - 1;
                                    localStorage.setItem('AAvaliableSpots15', new_spots);
    
                                    let avals = document.querySelector('#bx15').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots15"));
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
                        if (localStorage.getItem('Aspot16') == null) //if it isnt existent
                        {
                            let Aspot16 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot16', JSON.stringify(Aspot16));
                            localStorage.setItem('AAvaliableSpots16', 30);
                            localStorage.setItem('ACIndex16', 1);
                        }
        
                        // Retrieve the object from storage
                        let day16 = localStorage.getItem("Aspot16");
                        let index16 = parseInt(localStorage.getItem("ACIndex16"));  
                        day16 = JSON.parse(day16);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName16 = document.querySelector('#name').value;
                        let CPhone16 = document.querySelector('#phone').value;
    
                        localStorage.setItem('AClient-Name16' + index16 , CName16);
                        localStorage.setItem('AClient-Name16' + index16 , CPhone16);
                        localStorage.setItem('ACIndex16', (index16 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 11:00 (${day16['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day16['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day16['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day16['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day16['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day16['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day16[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day16[event.target.value] =  day16[event.target.value] - 1;
                                    localStorage.setItem('Aspot16', JSON.stringify(day16));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots16')) - 1;
                                    localStorage.setItem('AAvaliableSpots16', new_spots);
    
                                    let avals = document.querySelector('#bx16').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots16"));
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
                    if (localStorage.getItem('Aspot17') == null) //if it isnt existent
                    {
                        let Aspot17 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('Aspot17', JSON.stringify(Aspot17));
                        localStorage.setItem('AAvaliableSpots17', 30);
                        localStorage.setItem('ACIndex17', 1);
                    }
    
                    // Retrieve the object from storage
                    let day17 = localStorage.getItem("Aspot17");
                    let index17 = parseInt(localStorage.getItem("ACIndex17"));  
                    day17 = JSON.parse(day17);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName17 = document.querySelector('#name').value;
                    let CPhone17 = document.querySelector('#phone').value;
    
                    localStorage.setItem('AClient-Name17' + index17 , CName17);
                    localStorage.setItem('AClient-Name17' + index17 , CPhone17);
                    localStorage.setItem('ACIndex17', (index17 + 1));
    
                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');
    
                    option1.innerHTML = `10:00 - 11:00 (${day17['m1']})`;
                    option2.innerHTML = `11:30 - 12:30 (${day17['m2']})`;
                    option3.innerHTML = `2:00 - 3:00 (${day17['m3']})`;
                    option4.innerHTML = `3:30 - 4:30 (${day17['m4']})`;
                    option5.innerHTML = `5:00 - 6:00 (${day17['m5']})`;
                    option6.innerHTML = `6:30 - 7:30 (${day17['m6']})`;
                    selectTime = document.getElementById('time-selection');
    
                    selectTime.addEventListener('change', function handleChange(event) {
    
                        if (day17[event.target.value] >= 0) {
    
                            bookBtn.addEventListener("click", function() 
                            {
                                day17[event.target.value] =  day17[event.target.value] - 1;
                                localStorage.setItem('Aspot17', JSON.stringify(day17));
                                let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots17')) - 1;
                                localStorage.setItem('AAvaliableSpots17', new_spots);
    
                                let avals = document.querySelector('#bx17').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots17"));
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
                        if (localStorage.getItem('Aspot18') == null) //if it isnt existent
                        {
                            let Aspot18 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot18', JSON.stringify(Aspot18));
                            localStorage.setItem('AAvaliableSpots18', 30);
                            localStorage.setItem('ACIndex18', 1);
                        }
        
                        // Retrieve the object from storage
                        let day18 = localStorage.getItem("Aspot18");
                        let index18 = parseInt(localStorage.getItem("ACIndex18"));  
                        day18 = JSON.parse(day18);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName18 = document.querySelector('#name').value;
                        let CPhone18 = document.querySelector('#phone').value;
    
                        localStorage.setItem('AClient-Name18' + index18 , CName18);
                        localStorage.setItem('AClient-Name18' + index18 , CPhone18);
                        localStorage.setItem('ACIndex18', (index18 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 11:00 (${day18['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day18['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day18['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day18['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day18['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day18['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day18[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day18[event.target.value] =  day18[event.target.value] - 1;
                                    localStorage.setItem('Aspot18', JSON.stringify(day18));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots18')) - 1;
                                    localStorage.setItem('AAvaliableSpots18', new_spots);
    
                                    let avals = document.querySelector('#bx18').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots18"));
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
                        if (localStorage.getItem('Aspot19') == null) //if it isnt existent
                        {
                            let Aspot19 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot19', JSON.stringify(Aspot19));
                            localStorage.setItem('AAvaliableSpots19', 30);
                            localStorage.setItem('ACIndex19', 1);
                        }
        
                        // Retrieve the object from storage
                        let day19 = localStorage.getItem("Aspot19");
                        let index19 = parseInt(localStorage.getItem("ACIndex19"));  
                        day19 = JSON.parse(day19);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName19 = document.querySelector('#name').value;
                        let CPhone19 = document.querySelector('#phone').value;
    
                        localStorage.setItem('AClient-Name19' + index19 , CName19);
                        localStorage.setItem('AClient-Name19' + index19 , CPhone19);
                        localStorage.setItem('ACIndex19', (index19 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 11:00 (${day19['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day19['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day19['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day19['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day19['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day19['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day19[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day19[event.target.value] =  day19[event.target.value] - 1;
                                    localStorage.setItem('Aspot19', JSON.stringify(day19));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots19')) - 1;
                                    localStorage.setItem('AAvaliableSpots19', new_spots);
    
                                    let avals = document.querySelector('#bx19').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots19"));
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
                        if (localStorage.getItem('Aspot20') == null) //if it isnt existent
                        {
                            let Aspot20 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('Aspot20', JSON.stringify(Aspot20));
                            localStorage.setItem('AAvaliableSpots20', 30);
                            localStorage.setItem('ACIndex20', 1);
                        }
        
                        // Retrieve the object from storage
                        let day20 = localStorage.getItem("Aspot20");
                        let index20 = parseInt(localStorage.getItem("ACIndex20"));  
                        day20 = JSON.parse(day20);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName20 = document.querySelector('#name').value;
                        let CPhone20 = document.querySelector('#phone').value;
    
                        localStorage.setItem('AClient-Name20' + index20 , CName20);
                        localStorage.setItem('AClient-Name20' + index20 , CPhone20);
                        localStorage.setItem('ACIndex20', (index20 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 11:00 (${day20['m1']})`;
                        option2.innerHTML = `11:30 - 12:30 (${day20['m2']})`;
                        option3.innerHTML = `2:00 - 3:00 (${day20['m3']})`;
                        option4.innerHTML = `3:30 - 4:30 (${day20['m4']})`;
                        option5.innerHTML = `5:00 - 6:00 (${day20['m5']})`;
                        option6.innerHTML = `6:30 - 7:30 (${day20['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day20[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day20[event.target.value] =  day20[event.target.value] - 1;
                                    localStorage.setItem('Aspot20', JSON.stringify(day20));
                                    let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots20')) - 1;
                                    localStorage.setItem('AAvaliableSpots20', new_spots);
    
                                    let avals = document.querySelector('#bx20').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots20"));
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
                            if (localStorage.getItem('Aspot21') == null) //if it isnt existent
                            {
                                let Aspot21 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot21', JSON.stringify(Aspot21));
                                localStorage.setItem('AAvaliableSpots21', 30);
                                localStorage.setItem('ACIndex21', 1);
                            }
            
                            // Retrieve the object from storage
                            let day21 = localStorage.getItem("Aspot21");
                            let index21 = parseInt(localStorage.getItem("ACIndex21"));  
                            day21 = JSON.parse(day21);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName21 = document.querySelector('#name').value;
                            let CPhone21 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name21' + index21 , CName21);
                            localStorage.setItem('AClient-Name21' + index21 , CPhone21);
                            localStorage.setItem('ACIndex21', (index21 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day21['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day21['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day21['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day21['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day21['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day21['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day21[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day21[event.target.value] =  day21[event.target.value] - 1;
                                        localStorage.setItem('Aspot21', JSON.stringify(day21));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots21')) - 1;
                                        localStorage.setItem('AAvaliableSpots21', new_spots);
        
                                        let avals = document.querySelector('#bx21').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots21"));
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
                            if (localStorage.getItem('Aspot22') == null) //if it isnt existent
                            {
                                let Aspot22 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot22', JSON.stringify(Aspot22));
                                localStorage.setItem('AAvaliableSpots22', 30);
                                localStorage.setItem('ACIndex22', 1);
                            }
            
                            // Retrieve the object from storage
                            let day22 = localStorage.getItem("Aspot22");
                            let index22 = parseInt(localStorage.getItem("ACIndex22"));  
                            day22 = JSON.parse(day22);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName22 = document.querySelector('#name').value;
                            let CPhone22 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name22' + index22 , CName22);
                            localStorage.setItem('AClient-Name22' + index22 , CPhone22);
                            localStorage.setItem('ACIndex22', (index22 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day22['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day22['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day22['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day22['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day22['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day22['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day22[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day22[event.target.value] =  day22[event.target.value] - 1;
                                        localStorage.setItem('Aspot22', JSON.stringify(day22));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots22')) - 1;
                                        localStorage.setItem('AAvaliableSpots22', new_spots);
        
                                        let avals = document.querySelector('#bx22').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots22"));
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
                            if (localStorage.getItem('Aspot23') == null) //if it isnt existent
                            {
                                let Aspot23 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot23', JSON.stringify(Aspot23));
                                localStorage.setItem('AAvaliableSpots23', 30);
                                localStorage.setItem('ACIndex23', 1);
                            }
            
                            // Retrieve the object from storage
                            let day23 = localStorage.getItem("Aspot23");
                            let index23 = parseInt(localStorage.getItem("ACIndex23"));  
                            day23 = JSON.parse(day23);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName23 = document.querySelector('#name').value;
                            let CPhone23 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name23' + index23 , CName23);
                            localStorage.setItem('AClient-Name23' + index23 , CPhone23);
                            localStorage.setItem('ACIndex23', (index23 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day23['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day23['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day23['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day23['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day23['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day23['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day23[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day23[event.target.value] =  day23[event.target.value] - 1;
                                        localStorage.setItem('Aspot23', JSON.stringify(day23));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots23')) - 1;
                                        localStorage.setItem('AAvaliableSpots23', new_spots);
        
                                        let avals = document.querySelector('#bx23').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots23"));
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
                            if (localStorage.getItem('Aspot24') == null) //if it isnt existent
                            {
                                let Aspot24 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot24', JSON.stringify(Aspot24));
                                localStorage.setItem('AAvaliableSpots24', 30);
                                localStorage.setItem('ACIndex24', 1);
                            }
            
                            // Retrieve the object from storage
                            let day24 = localStorage.getItem("Aspot24");
                            let index24 = parseInt(localStorage.getItem("ACIndex24"));  
                            day24 = JSON.parse(day24);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName24 = document.querySelector('#name').value;
                            let CPhone24 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name24' + index24 , CName24);
                            localStorage.setItem('AClient-Name24' + index24 , CPhone24);
                            localStorage.setItem('ACIndex24', (index24 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day24['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day24['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day24['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day24['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day24['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day24['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day24[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day24[event.target.value] =  day24[event.target.value] - 1;
                                        localStorage.setItem('Aspot24', JSON.stringify(day24));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots24')) - 1;
                                        localStorage.setItem('AAvaliableSpots24', new_spots);
        
                                        let avals = document.querySelector('#bx24').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots24"));
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
                            if (localStorage.getItem('Aspot25') == null) //if it isnt existent
                            {
                                let Aspot25 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot25', JSON.stringify(Aspot25));
                                localStorage.setItem('AAvaliableSpots25', 30);
                                localStorage.setItem('ACIndex25', 1);
                            }
            
                            // Retrieve the object from storage
                            let day25 = localStorage.getItem("Aspot25");
                            let index25 = parseInt(localStorage.getItem("ACIndex25"));  
                            day25 = JSON.parse(day25);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName25 = document.querySelector('#name').value;
                            let CPhone25 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name25' + index25 , CName25);
                            localStorage.setItem('AClient-Name25' + index25 , CPhone25);
                            localStorage.setItem('ACIndex25', (index25 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day25['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day25['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day25['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day25['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day25['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day25['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day25[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day25[event.target.value] =  day25[event.target.value] - 1;
                                        localStorage.setItem('Aspot25', JSON.stringify(day25));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots25')) - 1;
                                        localStorage.setItem('AAvaliableSpots25', new_spots);
        
                                        let avals = document.querySelector('#bx25').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots25"));
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
                            if (localStorage.getItem('Aspot26') == null) //if it isnt existent
                            {
                                let Aspot26 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot26', JSON.stringify(Aspot26));
                                localStorage.setItem('AAvaliableSpots26', 30);
                                localStorage.setItem('ACIndex26', 1);
                            }
            
                            // Retrieve the object from storage
                            let day26 = localStorage.getItem("Aspot26");
                            let index26 = parseInt(localStorage.getItem("ACIndex26"));  
                            day26 = JSON.parse(day26);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName26 = document.querySelector('#name').value;
                            let CPhone26 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name26' + index26 , CName26);
                            localStorage.setItem('AClient-Name26' + index26 , CPhone26);
                            localStorage.setItem('ACIndex26', (index26 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day26['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day26['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day26['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day26['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day26['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day26['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day26[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day26[event.target.value] =  day26[event.target.value] - 1;
                                        localStorage.setItem('Aspot26', JSON.stringify(day26));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots26')) - 1;
                                        localStorage.setItem('AAvaliableSpots26', new_spots);
        
                                        let avals = document.querySelector('#bx26').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots26"));
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
                            if (localStorage.getItem('Aspot27') == null) //if it isnt existent
                            {
                                let Aspot27 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot27', JSON.stringify(Aspot27));
                                localStorage.setItem('AAvaliableSpots27', 30);
                                localStorage.setItem('ACIndex27', 1);
                            }
            
                            // Retrieve the object from storage
                            let day27 = localStorage.getItem("Aspot27");
                            let index27 = parseInt(localStorage.getItem("ACIndex27"));  
                            day27 = JSON.parse(day27);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName27 = document.querySelector('#name').value;
                            let CPhone27 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name27' + index27 , CName27);
                            localStorage.setItem('AClient-Name27' + index27 , CPhone27);
                            localStorage.setItem('ACIndex27', (index27 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day27['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day27['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day27['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day27['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day27['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day27['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day27[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day27[event.target.value] =  day27[event.target.value] - 1;
                                        localStorage.setItem('Aspot27', JSON.stringify(day27));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots27')) - 1;
                                        localStorage.setItem('AAvaliableSpots27', new_spots);
        
                                        let avals = document.querySelector('#bx27').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots27"));
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
                            if (localStorage.getItem('Aspot28') == null) //if it isnt existent
                            {
                                let Aspot28 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot28', JSON.stringify(Aspot28));
                                localStorage.setItem('AAvaliableSpots28', 30);
                                localStorage.setItem('ACIndex28', 1);
                            }
            
                            // Retrieve the object from storage
                            let day28 = localStorage.getItem("Aspot28");
                            let index28 = parseInt(localStorage.getItem("ACIndex28"));  
                            day28 = JSON.parse(day28);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName28 = document.querySelector('#name').value;
                            let CPhone28 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name28' + index28 , CName28);
                            localStorage.setItem('AClient-Name28' + index28 , CPhone28);
                            localStorage.setItem('ACIndex28', (index28 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day28['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day28['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day28['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day28['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day28['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day28['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day28[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day28[event.target.value] =  day28[event.target.value] - 1;
                                        localStorage.setItem('Aspot28', JSON.stringify(day28));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots28')) - 1;
                                        localStorage.setItem('AAvaliableSpots28', new_spots);
        
                                        let avals = document.querySelector('#bx28').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots28"));
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
                            if (localStorage.getItem('Aspot29') == null) //if it isnt existent
                            {
                                let Aspot29 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot29', JSON.stringify(Aspot29));
                                localStorage.setItem('AAvaliableSpots29', 30);
                                localStorage.setItem('ACIndex29', 1);
                            }
            
                            // Retrieve the object from storage
                            let day29 = localStorage.getItem("Aspot29");
                            let index29 = parseInt(localStorage.getItem("ACIndex29"));  
                            day29 = JSON.parse(day29);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName29 = document.querySelector('#name').value;
                            let CPhone29 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name29' + index29 , CName29);
                            localStorage.setItem('AClient-Name29' + index29 , CPhone29);
                            localStorage.setItem('ACIndex29', (index29 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day29['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day29['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day29['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day29['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day29['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day29['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day29[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day29[event.target.value] =  day29[event.target.value] - 1;
                                        localStorage.setItem('Aspot29', JSON.stringify(day29));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots29')) - 1;
                                        localStorage.setItem('AAvaliableSpots29', new_spots);
        
                                        let avals = document.querySelector('#bx29').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots29"));
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
                            if (localStorage.getItem('Aspot30') == null) //if it isnt existent
                            {
                                let Aspot30 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot30', JSON.stringify(Aspot30));
                                localStorage.setItem('AAvaliableSpots30', 30);
                                localStorage.setItem('ACIndex30', 1);
                            }
            
                            // Retrieve the object from storage
                            let day30 = localStorage.getItem("Aspot30");
                            let index30 = parseInt(localStorage.getItem("ACIndex30"));  
                            day30 = JSON.parse(day30);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName30 = document.querySelector('#name').value;
                            let CPhone30 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name30' + index30 , CName30);
                            localStorage.setItem('AClient-Name30' + index30 , CPhone30);
                            localStorage.setItem('ACIndex30', (index30 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day30['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day30['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day30['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day30['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day30['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day30['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day30[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day30[event.target.value] =  day30[event.target.value] - 1;
                                        localStorage.setItem('Aspot30', JSON.stringify(day30));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots30')) - 1;
                                        localStorage.setItem('AAvaliableSpots30', new_spots);
        
                                        let avals = document.querySelector('#bx30').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots30"));
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
                            if (localStorage.getItem('Aspot31') == null) //if it isnt existent
                            {
                                let Aspot31 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('Aspot31', JSON.stringify(Aspot31));
                                localStorage.setItem('AAvaliableSpots31', 30);
                                localStorage.setItem('ACIndex31', 1);
                            }
            
                            // Retrieve the object from storage
                            let day31 = localStorage.getItem("Aspot31");
                            let index31 = parseInt(localStorage.getItem("ACIndex31"));  
                            day31 = JSON.parse(day31);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName31 = document.querySelector('#name').value;
                            let CPhone31 = document.querySelector('#phone').value;
        
                            localStorage.setItem('AClient-Name31' + index31, CName31);
                            localStorage.setItem('AClient-Name31' + index31 , CPhone31);
                            localStorage.setItem('ACIndex31', (index31 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 11:00 (${day31['m1']})`;
                            option2.innerHTML = `11:30 - 12:30 (${day31['m2']})`;
                            option3.innerHTML = `2:00 - 3:00 (${day31['m3']})`;
                            option4.innerHTML = `3:30 - 4:30 (${day31['m4']})`;
                            option5.innerHTML = `5:00 - 6:00 (${day31['m5']})`;
                            option6.innerHTML = `6:30 - 7:30 (${day31['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
        
                                if (day31[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day31[event.target.value] =  day31[event.target.value] - 1;
                                        localStorage.setItem('Aspot31', JSON.stringify(day31));
                                        let new_spots =  parseInt(localStorage.getItem('AAvaliableSpots31')) - 1;
                                        localStorage.setItem('AAvaliableSpots31', new_spots);
        
                                        let avals = document.querySelector('#bx31').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AAvaliableSpots31"));
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
