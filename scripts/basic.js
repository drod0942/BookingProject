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


let spots = { 'm1': '5', 'm2': '5', 'm3': '5', 'm4': '5', 'm5': '5', 'm6': '5'};

// Put the object into storage
window.localStorage.setItem('spots', JSON.stringify(spots));

// Retrieve the object from storage
let newObject = window.localStorage.getItem("spots");
newObject = JSON.parse(newObject);
console.log(newObject['m1']);


for (const cellD of cellDivs) {
    //event for when a cell is clicked
    cellD.addEventListener('click', function(event){

        const classList = event.target.classList;

        // //this gets the selected date
        // const input = document.querySelector('#dates')
        // input.onchange = (e) => {
        // console.log(e.target.value)
        // }
    
        if (classList[1] != 'void') {

            bgO.style.display = 'flex';
        }
    })
    

    popC.addEventListener('click', function(){

        bgO.style.display = 'none';
    
        })
  }
