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
                    console.log(index2);
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
                            console.log(event.target.value);
    
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
                          console.log(localStorage);
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
                    case '2022-08-19':
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
                    case '2022-08-20':
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
                    case '2022-08-21':
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
                    case '2022-08-22':
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
                    case '2022-08-23':
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
                    case '2022-08-24':
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
                    case '2022-08-25':
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
                    case '2022-08-26':
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
                    case '2022-08-27':
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
                    case '2022-08-28':
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
                    case '2022-08-29':
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
                    case '2022-08-30':
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
                    case '2022-08-31':
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
                default:
                    break;
            }

        }



    })


    

    popC.addEventListener('click', function(){

        bgO.style.display = 'none';
    
        })
  }
