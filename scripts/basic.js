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
    let available = parseInt(localStorage.getItem("AvaliableSpots" + i)) || 30;
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
        const input = document.querySelector('#dates');;

        input.onchange = (e) => {

            switch (e.target.value) {
                case '2022-08-01':

                        if (localStorage.getItem('spot1') == null) //if it isnt existent
                        {
                            let spot1 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot1', JSON.stringify(spot1));
                            localStorage.setItem('AvaliableSpots1', 30);
                            localStorage.setItem('CIndex', 1);
                        }
        
                        // Retrieve the object from storage
                        let day1 = localStorage.getItem("spot1");
                        let index = parseInt(localStorage.getItem("CIndex"));  
                        console.log(index);
                        day1 = JSON.parse(day1);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName = document.querySelector('#name').value;
                        let CPhone = document.querySelector('#phone').value;

                        localStorage.setItem('Client-Name' + index , CName);
                        localStorage.setItem('Client-Phone' + index , CPhone);
                        localStorage.setItem('CIndex', (index + 1));

                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');

                        option1.innerHTML = `10:00 - 10:15 (${day1['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day1['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day1['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day1['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day1['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day1['m6']})`;
                        selectTime = document.getElementById('time-selection');

                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);

                            if (day1[event.target.value] >= 0) {

                                bookBtn.addEventListener("click", function() 
                                {
                                    day1[event.target.value] =  day1[event.target.value] - 1;
                                    localStorage.setItem('spot1', JSON.stringify(day1));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots1')) - 1;
                                    localStorage.setItem('AvaliableSpots1', new_spots);

                                    let avals = document.querySelector('#bx1').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots1"));
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

                case '2022-08-02':
                    if (localStorage.getItem('spot2') == null) //if it isnt existent
                    {
                        let spot2 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot2', JSON.stringify(spot2));
                        localStorage.setItem('AvaliableSpots2', 30);
                        localStorage.setItem('CIndex2', 1);
                    }
    
                    // Retrieve the object from storage
                    let day2 = localStorage.getItem("spot2");
                    let index2 = parseInt(localStorage.getItem("CIndex2"));  
                    day2 = JSON.parse(day2);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName2 = document.querySelector('#name').value;
                    let CPhone2 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name2' + index2 , CName2);
                    localStorage.setItem('Client-Phone2' + index2 , CPhone2);
                    localStorage.setItem('CIndex2', (index2 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day2['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day2['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day2['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day2['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day2['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day2['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day2[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day2[event.target.value] =  day2[event.target.value] - 1;
                                localStorage.setItem('spot2', JSON.stringify(day2));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots2')) - 1;
                                localStorage.setItem('AvaliableSpots2', new_spots);

                                let avals = document.querySelector('#bx2').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots2"));
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
                    if (localStorage.getItem('spot3') == null) //if it isnt existent
                    {
                        let spot3 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot3', JSON.stringify(spot3));
                        localStorage.setItem('AvaliableSpots3', 30);
                        localStorage.setItem('CIndex3', 1);
                    }
    
                    // Retrieve the object from storage
                    let day3 = localStorage.getItem("spot3");
                    let index3 = parseInt(localStorage.getItem("CIndex3"));  
                    day3 = JSON.parse(day3);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName3 = document.querySelector('#name').value;
                    let CPhone3 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name3' + index3 , CName3);
                    localStorage.setItem('Client-Phone3' + index3 , CPhone3);
                    localStorage.setItem('CIndex3', (index3 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day3['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day3['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day3['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day3['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day3['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day3['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day3[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day3[event.target.value] =  day3[event.target.value] - 1;
                                localStorage.setItem('spot3', JSON.stringify(day3));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots3')) - 1;
                                localStorage.setItem('AvaliableSpots3', new_spots);

                                let avals = document.querySelector('#bx3').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots3"));
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
                case '2022-08-04':
                    if (localStorage.getItem('spot4') == null) //if it isnt existent
                    {
                        let spot4 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot4', JSON.stringify(spot4));
                        localStorage.setItem('AvaliableSpots4', 30);
                        localStorage.setItem('CIndex4', 1);
                    }
    
                    // Retrieve the object from storage
                    let day4 = localStorage.getItem("spot4");
                    let index4 = parseInt(localStorage.getItem("CIndex4"));  
                    console.log(index);
                    day4 = JSON.parse(day4);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName4 = document.querySelector('#name').value;
                    let CPhone4 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name4' + index4 , CName4);
                    localStorage.setItem('Client-Phone4' + index4 , CPhone4);
                    localStorage.setItem('CIndex4', (index4 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day4['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day4['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day4['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day4['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day4['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day4['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day4[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day4[event.target.value] =  day4[event.target.value] - 1;
                                localStorage.setItem('spot4', JSON.stringify(day4));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots4')) - 1;
                                localStorage.setItem('AvaliableSpots4', new_spots);

                                let avals = document.querySelector('#bx4').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots4"));
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
                    if (localStorage.getItem('spot5') == null) //if it isnt existent
                    {
                        let spot5 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot5', JSON.stringify(spot5));
                        localStorage.setItem('AvaliableSpots5', 30);
                        localStorage.setItem('CIndex5', 1);
                    }
    
                    // Retrieve the object from storage
                    let day5 = localStorage.getItem("spot5");
                    let index5 = parseInt(localStorage.getItem("CIndex5"));  
                    day5 = JSON.parse(day5);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName5 = document.querySelector('#name').value;
                    let CPhone5 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name5' + index5 , CName5);
                    localStorage.setItem('Client-Phone5' + index5 , CPhone5);
                    localStorage.setItem('CIndex5', (index5 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day5['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day5['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day5['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day5['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day5['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day5['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day5[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day5[event.target.value] =  day5[event.target.value] - 1;
                                localStorage.setItem('spot5', JSON.stringify(day5));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots5')) - 1;
                                localStorage.setItem('AvaliableSpots5', new_spots);

                                let avals = document.querySelector('#bx5').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots5"));
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
                    if (localStorage.getItem('spot6') == null) //if it isnt existent
                    {
                        let spot6 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot6', JSON.stringify(spot6));
                        localStorage.setItem('AvaliableSpots6', 30);
                        localStorage.setItem('CIndex6', 1);
                    }
    
                    // Retrieve the object from storage
                    let day6 = localStorage.getItem("spot6");
                    let index6 = parseInt(localStorage.getItem("CIndex6"));  
                    day6 = JSON.parse(day6);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName6 = document.querySelector('#name').value;
                    let CPhone6 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name6' + index6 , CName6);
                    localStorage.setItem('Client-Phone6' + index6 , CPhone6);
                    localStorage.setItem('CIndex6', (index6 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day6['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day6['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day6['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day6['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day6['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day6['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day6[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day6[event.target.value] =  day6[event.target.value] - 1;
                                localStorage.setItem('spot6', JSON.stringify(day6));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots6')) - 1;
                                localStorage.setItem('AvaliableSpots6', new_spots);

                                let avals = document.querySelector('#bx6').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots6"));
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
                case '2022-08-07':
                    if (localStorage.getItem('spot7') == null) //if it isnt existent
                    {
                        let spot7 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot7', JSON.stringify(spot7));
                        localStorage.setItem('AvaliableSpots7', 30);
                        localStorage.setItem('CIndex7', 1);
                    }
    
                    // Retrieve the object from storage
                    let day7 = localStorage.getItem("spot7");
                    let index7 = parseInt(localStorage.getItem("CIndex7"));  
    
                    day7 = JSON.parse(day7);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName7 = document.querySelector('#name').value;
                    let CPhone7 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name7' + index7 , CName7);
                    localStorage.setItem('Client-Phone7' + index7 , CPhone7);
                    localStorage.setItem('CIndex7', (index7 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day7['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day7['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day7['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day7['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day7['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day7['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day7[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day7[event.target.value] =  day7[event.target.value] - 1;
                                localStorage.setItem('spot7', JSON.stringify(day7));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots7')) - 1;
                                localStorage.setItem('AvaliableSpots7', new_spots);

                                let avals = document.querySelector('#bx7').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots7"));
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
                if (localStorage.getItem('spot8') == null) //if it isnt existent
                {
                    let spot8 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                    // Put the object into storage
                    localStorage.setItem('spot8', JSON.stringify(spot8));
                    localStorage.setItem('AvaliableSpots8', 30);
                    localStorage.setItem('CIndex8', 1);
                }

                // Retrieve the object from storage
                let day8 = localStorage.getItem("spot8");
                let index8 = parseInt(localStorage.getItem("CIndex8"));  
                day8 = JSON.parse(day8);
                
                //Adding Name and Phone to Object in LocalStorage
                let CName8 = document.querySelector('#name').value;
                let CPhone8 = document.querySelector('#phone').value;

                localStorage.setItem('Client-Name8' + index8 , CName8);
                localStorage.setItem('Client-Phone8' + index8 , CPhone8);
                localStorage.setItem('CIndex8', (index8 + 1));

                option1 = document.querySelector('#opt1');
                option2 = document.querySelector('#opt2');
                option3 = document.querySelector('#opt3');
                option4 = document.querySelector('#opt4');
                option5 = document.querySelector('#opt5');
                option6 = document.querySelector('#opt6');

                option1.innerHTML = `10:00 - 10:15 (${day8['m1']})`;
                option2.innerHTML = `10:30 - 10:45 (${day8['m2']})`;
                option3.innerHTML = `11:00 - 11:15 (${day8['m3']})`;
                option4.innerHTML = `11:30 - 11:45 (${day8['m4']})`;
                option5.innerHTML = `1:00 - 1:15 (${day8['m5']})`;
                option6.innerHTML = `1:30 - 1:45 (${day8['m6']})`;
                selectTime = document.getElementById('time-selection');

                selectTime.addEventListener('change', function handleChange(event) {
                    console.log(event.target.value);

                    if (day8[event.target.value] >= 0) {

                        bookBtn.addEventListener("click", function() 
                        {
                            day8[event.target.value] =  day8[event.target.value] - 1;
                            localStorage.setItem('spot8', JSON.stringify(day8));
                            let new_spots =  parseInt(localStorage.getItem('AvaliableSpots8')) - 1;
                            localStorage.setItem('AvaliableSpots8', new_spots);

                            let avals = document.querySelector('#bx8').querySelector('.aval-sp');
                            let avaliableS = parseInt(localStorage.getItem("AvaliableSpots8"));
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
                    if (localStorage.getItem('spot9') == null) //if it isnt existent
                    {
                        let spot9 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot9', JSON.stringify(spot9));
                        localStorage.setItem('AvaliableSpots9', 30);
                        localStorage.setItem('CIndex9', 1);
                    }
    
                    // Retrieve the object from storage
                    let day9 = localStorage.getItem("spot9");
                    let index9 = parseInt(localStorage.getItem("CIndex9"));  
                    day9 = JSON.parse(day9);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName9 = document.querySelector('#name').value;
                    let CPhone9 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name9' + index9 , CName9);
                    localStorage.setItem('Client-Phone9' + index9 , CPhone9);
                    localStorage.setItem('CIndex9', (index9 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day9['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day9['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day9['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day9['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day9['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day9['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day9[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day9[event.target.value] =  day9[event.target.value] - 1;
                                localStorage.setItem('spot9', JSON.stringify(day9));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots9')) - 1;
                                localStorage.setItem('AvaliableSpots9', new_spots);

                                let avals = document.querySelector('#bx9').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots9"));
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
                    if (localStorage.getItem('spot10') == null) //if it isnt existent
                    {
                        let spot10 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot10', JSON.stringify(spot10));
                        localStorage.setItem('AvaliableSpots10', 30);
                        localStorage.setItem('CIndex10', 1);
                    }
    
                    // Retrieve the object from storage
                    let day10 = localStorage.getItem("spot10");
                    let index10 = parseInt(localStorage.getItem("CIndex10"));  
                    day10 = JSON.parse(day10);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName10 = document.querySelector('#name').value;
                    let CPhone10 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name10' + index10 , CName10);
                    localStorage.setItem('Client-Phone10' + index10 , CPhone10);
                    localStorage.setItem('CIndex10', (index10 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day10['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day10['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day10['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day10['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day10['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day10['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day10[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day10[event.target.value] =  day10[event.target.value] - 1;
                                localStorage.setItem('spot10', JSON.stringify(day10));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots10')) - 1;
                                localStorage.setItem('AvaliableSpots10', new_spots);

                                let avals = document.querySelector('#bx10').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots10"));
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
                    if (localStorage.getItem('spot11') == null) //if it isnt existent
                    {
                        let spot11 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot11', JSON.stringify(spot11));
                        localStorage.setItem('AvaliableSpots11', 30);
                        localStorage.setItem('CIndex11', 1);
                    }
    
                    // Retrieve the object from storage
                    let day11 = localStorage.getItem("spot11");
                    let index11 = parseInt(localStorage.getItem("CIndex11"));  
                    day11 = JSON.parse(day11);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName11 = document.querySelector('#name').value;
                    let CPhone11 = document.querySelector('#phone').value;

                    localStorage.setItem('Client-Name11' + index11 , CName11);
                    localStorage.setItem('Client-Phone11' + index11 , CPhone11);
                    localStorage.setItem('CIndex11', (index11 + 1));

                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');

                    option1.innerHTML = `10:00 - 10:15 (${day11['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day11['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day11['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day11['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day11['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day11['m6']})`;
                    selectTime = document.getElementById('time-selection');

                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);

                        if (day11[event.target.value] >= 0) {

                            bookBtn.addEventListener("click", function() 
                            {
                                day11[event.target.value] =  day11[event.target.value] - 1;
                                localStorage.setItem('spot11', JSON.stringify(day11));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots11')) - 1;
                                localStorage.setItem('AvaliableSpots11', new_spots);

                                let avals = document.querySelector('#bx11').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots11"));
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
                        if (localStorage.getItem('spot12') == null) //if it isnt existent
                        {
                            let spot12 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot12', JSON.stringify(spot12));
                            localStorage.setItem('AvaliableSpots12', 30);
                            localStorage.setItem('CIndex12', 1);
                        }
        
                        // Retrieve the object from storage
                        let day12 = localStorage.getItem("spot12");
                        let index12 = parseInt(localStorage.getItem("CIndex12"));  
                        day12 = JSON.parse(day12);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName12 = document.querySelector('#name').value;
                        let CPhone12 = document.querySelector('#phone').value;
    
                        localStorage.setItem('Client-Name12' + index12 , CName12);
                        localStorage.setItem('Client-Phone12' + index12 , CPhone12);
                        localStorage.setItem('CIndex12', (index12 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:15 (${day12['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day12['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day12['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day12['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day12['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day12['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day12[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day12[event.target.value] =  day12[event.target.value] - 1;
                                    localStorage.setItem('spot12', JSON.stringify(day12));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots12')) - 1;
                                    localStorage.setItem('AvaliableSpots12', new_spots);
    
                                    let avals = document.querySelector('#bx12').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots12"));
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
                    case '2022-08-13':
                        if (localStorage.getItem('spot13') == null) //if it isnt existent
                        {
                            let spot13 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot13', JSON.stringify(spot13));
                            localStorage.setItem('AvaliableSpots13', 30);
                            localStorage.setItem('CIndex13', 1);
                        }
        
                        // Retrieve the object from storage
                        let day13 = localStorage.getItem("spot13");
                        let index13 = parseInt(localStorage.getItem("CIndex13"));  
                        day13 = JSON.parse(day13);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName13 = document.querySelector('#name').value;
                        let CPhone13 = document.querySelector('#phone').value;
    
                        localStorage.setItem('Client-Name13' + index13 , CName13);
                        localStorage.setItem('Client-Phone13' + index13 , CPhone13);
                        localStorage.setItem('CIndex13', (index13 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:15 (${day13['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day13['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day13['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day13['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day13['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day13['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day13[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day13[event.target.value] =  day13[event.target.value] - 1;
                                    localStorage.setItem('spot13', JSON.stringify(day13));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots13')) - 1;
                                    localStorage.setItem('AvaliableSpots13', new_spots);
    
                                    let avals = document.querySelector('#bx13').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots13"));
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
                    case '2022-08-14':
                        if (localStorage.getItem('spot14') == null) //if it isnt existent
                        {
                            let spot14 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot14', JSON.stringify(spot14));
                            localStorage.setItem('AvaliableSpots14', 30);
                            localStorage.setItem('CIndex14', 1);
                        }
        
                        // Retrieve the object from storage
                        let day14 = localStorage.getItem("spot14");
                        let index14 = parseInt(localStorage.getItem("CIndex14"));  
                        day14 = JSON.parse(day14);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName14 = document.querySelector('#name').value;
                        let CPhone14 = document.querySelector('#phone').value;
    
                        localStorage.setItem('Client-Name14' + index14 , CName14);
                        localStorage.setItem('Client-Phone14' + index14 , CPhone14);
                        localStorage.setItem('CIndex14', (index14+ 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:15 (${day14['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day14['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day14['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day14['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day14['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day14['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day14[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day14[event.target.value] =  day14[event.target.value] - 1;
                                    localStorage.setItem('spot14', JSON.stringify(day14));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots14')) - 1;
                                    localStorage.setItem('AvaliableSpots14', new_spots);
    
                                    let avals = document.querySelector('#bx14').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots14"));
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
                        if (localStorage.getItem('spot15') == null) //if it isnt existent
                        {
                            let spot15 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot15', JSON.stringify(spot15));
                            localStorage.setItem('AvaliableSpots15', 30);
                            localStorage.setItem('CIndex15', 1);
                        }
        
                        // Retrieve the object from storage
                        let day15 = localStorage.getItem("spot15");
                        let index15 = parseInt(localStorage.getItem("CIndex15"));  
                        day15 = JSON.parse(day15);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName15 = document.querySelector('#name').value;
                        let CPhone15 = document.querySelector('#phone').value;
    
                        localStorage.setItem('Client-Name15' + index15 , CName15);
                        localStorage.setItem('Client-Phone15' + index15 , CPhone15);
                        localStorage.setItem('CIndex15', (index15 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:15 (${day15['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day15['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day15['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day15['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day15['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day15['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
    
                            if (day15[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day15[event.target.value] =  day15[event.target.value] - 1;
                                    localStorage.setItem('spot15', JSON.stringify(day15));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots15')) - 1;
                                    localStorage.setItem('AvaliableSpots15', new_spots);
    
                                    let avals = document.querySelector('#bx15').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots15"));
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
                        if (localStorage.getItem('spot16') == null) //if it isnt existent
                        {
                            let spot16 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot16', JSON.stringify(spot16));
                            localStorage.setItem('AvaliableSpots16', 30);
                            localStorage.setItem('CIndex16', 1);
                        }
        
                        // Retrieve the object from storage
                        let day16 = localStorage.getItem("spot16");
                        let index16 = parseInt(localStorage.getItem("CIndex16"));  
                        day16 = JSON.parse(day16);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName16 = document.querySelector('#name').value;
                        let CPhone16 = document.querySelector('#phone').value;
    
                        localStorage.setItem('Client-Name16' + index16 , CName16);
                        localStorage.setItem('Client-Phone16' + index16 , CPhone16);
                        localStorage.setItem('CIndex16', (index16 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:15 (${day16['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day16['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day16['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day16['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day16['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day16['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day16[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day16[event.target.value] =  day16[event.target.value] - 1;
                                    localStorage.setItem('spot16', JSON.stringify(day16));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots16')) - 1;
                                    localStorage.setItem('AvaliableSpots16', new_spots);
    
                                    let avals = document.querySelector('#bx16').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots16"));
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
                    case '2022-08-17': 
                    if (localStorage.getItem('spot17') == null) //if it isnt existent
                    {
                        let spot17 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                        // Put the object into storage
                        localStorage.setItem('spot17', JSON.stringify(spot17));
                        localStorage.setItem('AvaliableSpots17', 30);
                        localStorage.setItem('CIndex17', 1);
                    }
    
                    // Retrieve the object from storage
                    let day17 = localStorage.getItem("spot17");
                    let index17 = parseInt(localStorage.getItem("CIndex17"));  
                    day17 = JSON.parse(day17);
                    
                    //Adding Name and Phone to Object in LocalStorage
                    let CName17 = document.querySelector('#name').value;
                    let CPhone17 = document.querySelector('#phone').value;
    
                    localStorage.setItem('Client-Name17' + index17 , CName17);
                    localStorage.setItem('Client-Phone17' + index17 , CPhone17);
                    localStorage.setItem('CIndex17', (index17 + 1));
    
                    option1 = document.querySelector('#opt1');
                    option2 = document.querySelector('#opt2');
                    option3 = document.querySelector('#opt3');
                    option4 = document.querySelector('#opt4');
                    option5 = document.querySelector('#opt5');
                    option6 = document.querySelector('#opt6');
    
                    option1.innerHTML = `10:00 - 10:15 (${day17['m1']})`;
                    option2.innerHTML = `10:30 - 10:45 (${day17['m2']})`;
                    option3.innerHTML = `11:00 - 11:15 (${day17['m3']})`;
                    option4.innerHTML = `11:30 - 11:45 (${day17['m4']})`;
                    option5.innerHTML = `1:00 - 1:15 (${day17['m5']})`;
                    option6.innerHTML = `1:30 - 1:45 (${day17['m6']})`;
                    selectTime = document.getElementById('time-selection');
    
                    selectTime.addEventListener('change', function handleChange(event) {
                        console.log(event.target.value);
    
                        if (day17[event.target.value] >= 0) {
    
                            bookBtn.addEventListener("click", function() 
                            {
                                day17[event.target.value] =  day17[event.target.value] - 1;
                                localStorage.setItem('spot17', JSON.stringify(day17));
                                let new_spots =  parseInt(localStorage.getItem('AvaliableSpots17')) - 1;
                                localStorage.setItem('AvaliableSpots17', new_spots);
    
                                let avals = document.querySelector('#bx17').querySelector('.aval-sp');
                                let avaliableS = parseInt(localStorage.getItem("AvaliableSpots17"));
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
                    case '2022-08-18':
                        if (localStorage.getItem('spot18') == null) //if it isnt existent
                        {
                            let spot18 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot18', JSON.stringify(spot18));
                            localStorage.setItem('AvaliableSpots18', 30);
                            localStorage.setItem('CIndex18', 1);
                        }
        
                        // Retrieve the object from storage
                        let day18 = localStorage.getItem("spot18");
                        let index18 = parseInt(localStorage.getItem("CIndex18"));  
                        day18 = JSON.parse(day18);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName18 = document.querySelector('#name').value;
                        let CPhone18 = document.querySelector('#phone').value;
    
                        localStorage.setItem('Client-Name18' + index18 , CName18);
                        localStorage.setItem('Client-Phone18' + index18 , CPhone18);
                        localStorage.setItem('CIndex18', (index18 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:15 (${day18['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day18['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day18['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day18['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day18['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day18['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day18[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day18[event.target.value] =  day18[event.target.value] - 1;
                                    localStorage.setItem('spot18', JSON.stringify(day18));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots18')) - 1;
                                    localStorage.setItem('AvaliableSpots18', new_spots);
    
                                    let avals = document.querySelector('#bx18').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots18"));
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
                        if (localStorage.getItem('spot19') == null) //if it isnt existent
                        {
                            let spot19 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot19', JSON.stringify(spot19));
                            localStorage.setItem('AvaliableSpots19', 30);
                            localStorage.setItem('CIndex19', 1);
                        }
        
                        // Retrieve the object from storage
                        let day19 = localStorage.getItem("spot19");
                        let index19 = parseInt(localStorage.getItem("CIndex19"));  
                        day19 = JSON.parse(day19);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName19 = document.querySelector('#name').value;
                        let CPhone19 = document.querySelector('#phone').value;
    
                        localStorage.setItem('Client-Name19' + index19 , CName19);
                        localStorage.setItem('Client-Phone19' + index19 , CPhone19);
                        localStorage.setItem('CIndex19', (index19 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:15 (${day19['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day19['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day19['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day19['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day19['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day19['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day19[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day19[event.target.value] =  day19[event.target.value] - 1;
                                    localStorage.setItem('spot19', JSON.stringify(day19));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots19')) - 1;
                                    localStorage.setItem('AvaliableSpots19', new_spots);
    
                                    let avals = document.querySelector('#bx19').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots19"));
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
                    case '2022-08-20':
                        if (localStorage.getItem('spot20') == null) //if it isnt existent
                        {
                            let spot20 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                            // Put the object into storage
                            localStorage.setItem('spot20', JSON.stringify(spot20));
                            localStorage.setItem('AvaliableSpots20', 30);
                            localStorage.setItem('CIndex20', 1);
                        }
        
                        // Retrieve the object from storage
                        let day20 = localStorage.getItem("spot20");
                        let index20 = parseInt(localStorage.getItem("CIndex20"));  
                        console.log(index20);
                        day20 = JSON.parse(day20);
                        
                        //Adding Name and Phone to Object in LocalStorage
                        let CName20 = document.querySelector('#name').value;
                        let CPhone20 = document.querySelector('#phone').value;
    
                        localStorage.setItem('Client-Name20' + index20 , CName20);
                        localStorage.setItem('Client-Phone20' + index20 , CPhone20);
                        localStorage.setItem('CIndex20', (index20 + 1));
    
                        option1 = document.querySelector('#opt1');
                        option2 = document.querySelector('#opt2');
                        option3 = document.querySelector('#opt3');
                        option4 = document.querySelector('#opt4');
                        option5 = document.querySelector('#opt5');
                        option6 = document.querySelector('#opt6');
    
                        option1.innerHTML = `10:00 - 10:15 (${day20['m1']})`;
                        option2.innerHTML = `10:30 - 10:45 (${day20['m2']})`;
                        option3.innerHTML = `11:00 - 11:15 (${day20['m3']})`;
                        option4.innerHTML = `11:30 - 11:45 (${day20['m4']})`;
                        option5.innerHTML = `1:00 - 1:15 (${day20['m5']})`;
                        option6.innerHTML = `1:30 - 1:45 (${day20['m6']})`;
                        selectTime = document.getElementById('time-selection');
    
                        selectTime.addEventListener('change', function handleChange(event) {
                            console.log(event.target.value);
    
                            if (day20[event.target.value] >= 0) {
    
                                bookBtn.addEventListener("click", function() 
                                {
                                    day20[event.target.value] =  day20[event.target.value] - 1;
                                    localStorage.setItem('spot20', JSON.stringify(day20));
                                    let new_spots =  parseInt(localStorage.getItem('AvaliableSpots20')) - 1;
                                    localStorage.setItem('AvaliableSpots20', new_spots);
    
                                    let avals = document.querySelector('#bx20').querySelector('.aval-sp');
                                    let avaliableS = parseInt(localStorage.getItem("AvaliableSpots20"));
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
                            if (localStorage.getItem('spot21') == null) //if it isnt existent
                            {
                                let spot21 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot21', JSON.stringify(spot21));
                                localStorage.setItem('AvaliableSpots21', 30);
                                localStorage.setItem('CIndex21', 1);
                            }
            
                            // Retrieve the object from storage
                            let day21 = localStorage.getItem("spot21");
                            let index21 = parseInt(localStorage.getItem("CIndex21"));  
                            day21 = JSON.parse(day21);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName21 = document.querySelector('#name').value;
                            let CPhone21 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name21' + index21 , CName21);
                            localStorage.setItem('Client-Phone21' + index21 , CPhone21);
                            localStorage.setItem('CIndex21', (index21 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day21['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day21['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day21['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day21['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day21['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day21['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day21[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day21[event.target.value] =  day21[event.target.value] - 1;
                                        localStorage.setItem('spot21', JSON.stringify(day21));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots21')) - 1;
                                        localStorage.setItem('AvaliableSpots21', new_spots);
        
                                        let avals = document.querySelector('#bx21').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots21"));
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
                            if (localStorage.getItem('spot22') == null) //if it isnt existent
                            {
                                let spot22 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot22', JSON.stringify(spot22));
                                localStorage.setItem('AvaliableSpots22', 30);
                                localStorage.setItem('CIndex22', 1);
                            }
            
                            // Retrieve the object from storage
                            let day22 = localStorage.getItem("spot22");
                            let index22 = parseInt(localStorage.getItem("CIndex22"));  
                            day22 = JSON.parse(day22);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName22 = document.querySelector('#name').value;
                            let CPhone22 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name22' + index22 , CName22);
                            localStorage.setItem('Client-Phone22' + index22 , CPhone22);
                            localStorage.setItem('CIndex22', (index22 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day22['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day22['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day22['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day22['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day22['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day22['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day22[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day22[event.target.value] =  day22[event.target.value] - 1;
                                        localStorage.setItem('spot22', JSON.stringify(day22));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots22')) - 1;
                                        localStorage.setItem('AvaliableSpots22', new_spots);
        
                                        let avals = document.querySelector('#bx22').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots22"));
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
                            if (localStorage.getItem('spot1') == null) //if it isnt existent
                            {
                                let spot23 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot23', JSON.stringify(spot23));
                                localStorage.setItem('AvaliableSpots23', 30);
                                localStorage.setItem('CIndex23', 1);
                            }
            
                            // Retrieve the object from storage
                            let day23 = localStorage.getItem("spot23");
                            let index23 = parseInt(localStorage.getItem("CIndex23"));  
                            day23 = JSON.parse(day23);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName23 = document.querySelector('#name').value;
                            let CPhone23 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name23' + index23 , CName23);
                            localStorage.setItem('Client-Phone23' + index23 , CPhone23);
                            localStorage.setItem('CIndex23', (index23 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day23['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day23['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day23['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day23['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day23['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day23['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day23[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day23[event.target.value] =  day23[event.target.value] - 1;
                                        localStorage.setItem('spot23', JSON.stringify(day23));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots23')) - 1;
                                        localStorage.setItem('AvaliableSpots23', new_spots);
        
                                        let avals = document.querySelector('#bx23').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots23"));
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
                            if (localStorage.getItem('spot24') == null) //if it isnt existent
                            {
                                let spot24 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot24', JSON.stringify(spot24));
                                localStorage.setItem('AvaliableSpots24', 30);
                                localStorage.setItem('CIndex24', 1);
                            }
            
                            // Retrieve the object from storage
                            let day24 = localStorage.getItem("spot24");
                            let index24 = parseInt(localStorage.getItem("CIndex24"));  
                            day24 = JSON.parse(day24);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName24 = document.querySelector('#name').value;
                            let CPhone24 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name24' + index24 , CName24);
                            localStorage.setItem('Client-Phone24' + index24 , CPhone24);
                            localStorage.setItem('CIndex24', (index24 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day24['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day24['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day24['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day24['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day24['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day24['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day24[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day24[event.target.value] =  day24[event.target.value] - 1;
                                        localStorage.setItem('spot24', JSON.stringify(day24));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots24')) - 1;
                                        localStorage.setItem('AvaliableSpots24', new_spots);
        
                                        let avals = document.querySelector('#bx24').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots24"));
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
                            if (localStorage.getItem('spot25') == null) //if it isnt existent
                            {
                                let spot25 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot25', JSON.stringify(spot25));
                                localStorage.setItem('AvaliableSpots25', 30);
                                localStorage.setItem('CIndex25', 1);
                            }
            
                            // Retrieve the object from storage
                            let day25 = localStorage.getItem("spot25");
                            let index25 = parseInt(localStorage.getItem("CIndex25"));  
                            day25 = JSON.parse(day25);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName25 = document.querySelector('#name').value;
                            let CPhone25 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name25' + index25 , CName25);
                            localStorage.setItem('Client-Phone25' + index25 , CPhone25);
                            localStorage.setItem('CIndex25', (index25 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day25['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day25['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day25['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day25['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day25['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day25['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day25[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day25[event.target.value] =  day25[event.target.value] - 1;
                                        localStorage.setItem('spot25', JSON.stringify(day25));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots25')) - 1;
                                        localStorage.setItem('AvaliableSpots25', new_spots);
        
                                        let avals = document.querySelector('#bx25').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots25"));
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
                            if (localStorage.getItem('spot26') == null) //if it isnt existent
                            {
                                let spot26 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot26', JSON.stringify(spot26));
                                localStorage.setItem('AvaliableSpots26', 30);
                                localStorage.setItem('CIndex26', 1);
                            }
            
                            // Retrieve the object from storage
                            let day26 = localStorage.getItem("spot26");
                            let index26 = parseInt(localStorage.getItem("CIndex26"));  
                            day26 = JSON.parse(day26);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName26 = document.querySelector('#name').value;
                            let CPhone26 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name26' + index26 , CName26);
                            localStorage.setItem('Client-Phone26' + index26 , CPhone26);
                            localStorage.setItem('CIndex26', (index26 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day26['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day26['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day26['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day26['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day26['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day26['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day26[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day26[event.target.value] =  day26[event.target.value] - 1;
                                        localStorage.setItem('spot26', JSON.stringify(day26));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots26')) - 1;
                                        localStorage.setItem('AvaliableSpots26', new_spots);
        
                                        let avals = document.querySelector('#bx26').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots26"));
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
                            if (localStorage.getItem('spot27') == null) //if it isnt existent
                            {
                                let spot27 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot27', JSON.stringify(spot27));
                                localStorage.setItem('AvaliableSpots27', 30);
                                localStorage.setItem('CIndex27', 1);
                            }
            
                            // Retrieve the object from storage
                            let day27 = localStorage.getItem("spot27");
                            let index27 = parseInt(localStorage.getItem("CIndex27"));  
                            day27 = JSON.parse(day27);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName27 = document.querySelector('#name').value;
                            let CPhone27 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name27' + index27 , CName27);
                            localStorage.setItem('Client-Phone27' + index27 , CPhone27);
                            localStorage.setItem('CIndex27', (index27 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day27['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day27['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day27['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day27['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day27['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day27['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day27[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day27[event.target.value] =  day27[event.target.value] - 1;
                                        localStorage.setItem('spot27', JSON.stringify(day27));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots27')) - 1;
                                        localStorage.setItem('AvaliableSpots27', new_spots);
        
                                        let avals = document.querySelector('#bx27').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots27"));
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
                            if (localStorage.getItem('spot28') == null) //if it isnt existent
                            {
                                let spot28 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot28', JSON.stringify(spot28));
                                localStorage.setItem('AvaliableSpots28', 30);
                                localStorage.setItem('CIndex28', 1);
                            }
            
                            // Retrieve the object from storage
                            let day28 = localStorage.getItem("spot28");
                            let index28 = parseInt(localStorage.getItem("CIndex28"));  
                            day28 = JSON.parse(day28);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName28 = document.querySelector('#name').value;
                            let CPhone28 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name28' + index28 , CName28);
                            localStorage.setItem('Client-Phone28' + index28 , CPhone28);
                            localStorage.setItem('CIndex28', (index28 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day28['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day28['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day28['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day28['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day28['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day28['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day28[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day28[event.target.value] =  day28[event.target.value] - 1;
                                        localStorage.setItem('spot28', JSON.stringify(day28));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots28')) - 1;
                                        localStorage.setItem('AvaliableSpots28', new_spots);
        
                                        let avals = document.querySelector('#bx28').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots28"));
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
                            if (localStorage.getItem('spot29') == null) //if it isnt existent
                            {
                                let spot29 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot29', JSON.stringify(spot29));
                                localStorage.setItem('AvaliableSpots29', 30);
                                localStorage.setItem('CIndex29', 1);
                            }
            
                            // Retrieve the object from storage
                            let day29 = localStorage.getItem("spot29");
                            let index29 = parseInt(localStorage.getItem("CIndex29"));  
                            day29 = JSON.parse(day29);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName29 = document.querySelector('#name').value;
                            let CPhone29 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name29' + index29 , CName29);
                            localStorage.setItem('Client-Phone29' + index29 , CPhone29);
                            localStorage.setItem('CIndex29', (index29 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day29['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day29['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day29['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day29['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day29['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day29['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day29[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day29[event.target.value] =  day29[event.target.value] - 1;
                                        localStorage.setItem('spot29', JSON.stringify(day29));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots29')) - 1;
                                        localStorage.setItem('AvaliableSpots29', new_spots);
        
                                        let avals = document.querySelector('#bx29').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots29"));
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
                            if (localStorage.getItem('spot30') == null) //if it isnt existent
                            {
                                let spot30 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot30', JSON.stringify(spot30));
                                localStorage.setItem('AvaliableSpots30', 30);
                                localStorage.setItem('CIndex30', 1);
                            }
            
                            // Retrieve the object from storage
                            let day30 = localStorage.getItem("spot30");
                            let index30 = parseInt(localStorage.getItem("CIndex30"));  
                            day30 = JSON.parse(day30);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName30 = document.querySelector('#name').value;
                            let CPhone30 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name30' + index30 , CName30);
                            localStorage.setItem('Client-Phone30' + index30 , CPhone30);
                            localStorage.setItem('CIndex30', (index30 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day30['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day30['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day30['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day30['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day30['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day30['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day30[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day30[event.target.value] =  day30[event.target.value] - 1;
                                        localStorage.setItem('spot30', JSON.stringify(day30));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots30')) - 1;
                                        localStorage.setItem('AvaliableSpots30', new_spots);
        
                                        let avals = document.querySelector('#bx30').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots30"));
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
                            if (localStorage.getItem('spot31') == null) //if it isnt existent
                            {
                                let spot31 = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};
                                // Put the object into storage
                                localStorage.setItem('spot31', JSON.stringify(spot31));
                                localStorage.setItem('AvaliableSpots31', 30);
                                localStorage.setItem('CIndex31', 1);
                            }
            
                            // Retrieve the object from storage
                            let day31 = localStorage.getItem("spot1");
                            let index31 = parseInt(localStorage.getItem("CIndex31"));  
                            day31 = JSON.parse(day31);
                            
                            //Adding Name and Phone to Object in LocalStorage
                            let CName31 = document.querySelector('#name').value;
                            let CPhone31 = document.querySelector('#phone').value;
        
                            localStorage.setItem('Client-Name31' + index31, CName31);
                            localStorage.setItem('Client-Phone31' + index31 , CPhone31);
                            localStorage.setItem('CIndex31', (index31 + 1));
        
                            option1 = document.querySelector('#opt1');
                            option2 = document.querySelector('#opt2');
                            option3 = document.querySelector('#opt3');
                            option4 = document.querySelector('#opt4');
                            option5 = document.querySelector('#opt5');
                            option6 = document.querySelector('#opt6');
        
                            option1.innerHTML = `10:00 - 10:15 (${day31['m1']})`;
                            option2.innerHTML = `10:30 - 10:45 (${day31['m2']})`;
                            option3.innerHTML = `11:00 - 11:15 (${day31['m3']})`;
                            option4.innerHTML = `11:30 - 11:45 (${day31['m4']})`;
                            option5.innerHTML = `1:00 - 1:15 (${day31['m5']})`;
                            option6.innerHTML = `1:30 - 1:45 (${day31['m6']})`;
                            selectTime = document.getElementById('time-selection');
        
                            selectTime.addEventListener('change', function handleChange(event) {
                                console.log(event.target.value);
        
                                if (day31[event.target.value] >= 0) {
        
                                    bookBtn.addEventListener("click", function() 
                                    {
                                        day31[event.target.value] =  day31[event.target.value] - 1;
                                        localStorage.setItem('spot31', JSON.stringify(day31));
                                        let new_spots =  parseInt(localStorage.getItem('AvaliableSpots31')) - 1;
                                        localStorage.setItem('AvaliableSpots1', new_spots);
        
                                        let avals = document.querySelector('#bx31').querySelector('.aval-sp');
                                        let avaliableS = parseInt(localStorage.getItem("AvaliableSpots31"));
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
