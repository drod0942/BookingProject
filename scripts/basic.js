const cellDivs = document.querySelectorAll('.grid-cell');
const bgO = document.querySelector('.bg-cont');
const popC = document.querySelector('.close');


for (const cellD of cellDivs) {

    //event for when a cell is clicked
    cellD.addEventListener('click', function(event){

    //   const classList = event.target.classList;
      
    //   console.log(classList);

    bgO.style.display = 'flex';

    })

    popC.addEventListener('click', function(){

        bgO.style.display = 'none';
    
        })


  }