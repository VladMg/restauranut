

                                                                                                                        /*open popup when click ontable*/
document.addEventListener('click',function (event) {
    if(event.target.className === 'tables') {                                                   /*open menuMain*/
        document.querySelector('#menuMain').style.display = 'block';
    }
    else if (event.target.id === 'menuDrinkImg') {                                              /*open menuDrink*/
        document.querySelector('#menuDrink').style.display = 'block';
    }
});

                                                                                                                        /* close popup when click on X*/
document.addEventListener("click", function (event) {
    if(event.target.className === 'closeInn'){
    let id =event.target.parentElement.parentElement.id;

    document.querySelector('#'+id).style.display = 'none'}
});


                                                                             /*close  X on hover chang border*/



let closeInn = document.querySelector('.closeInn');


closeInn.onmouseover=closeInn.onmouseout = hoverBorder;


function hoverBorder(e) {
    let close1 = document.querySelector('.close1'),
        close2 = document.querySelector('.close2'),
        border = '0.64rem solid red';

    if (e.type === 'mouseover') {
        close1.style.border = border;
        close2.style.border = border
    }
    else {
        close1.style.border = 'none';
        close2.style.border = 'none'
    }
}







/**************************************************/

const TableConstructor = function () {
    
}