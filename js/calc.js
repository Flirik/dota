let bronse = 1300;
let silver = 2400;
let gold = 3200;
let platin = 4000;
let master = 9700;
let result = 0;
let score = 0;
let meaning, quantity;
let dota = 0,
    win = 0
    battlecup = 0;
let zero, one, two, three, four, five, six, seven, eight;

zero = 1; //Каток для аппа
one = 1; //с 2 недельными заданиями

function f(){

    meaning = document.getElementById("list").value;
    quantity = document.getElementById("quantity").value;
    dota = document.getElementById("DotaPlus").checked;
    win = document.getElementById("Win").checked;
    battlecup = document.getElementById("battlecup").checked;

    if(battlecup == true){
        battlecup = 20000;
    }
    if(win == true){
        win = 500;
        alert(win)
    }
    if(dota == true){
        dota = 1000;
    }

    switch(meaning){
        case "bronse":
            score = 1300;
            break;
        case "silver":
            score = 2400;
            break;
    }

    if(meaning != "bronse"){
        check = true;
    }

 
    result = win + dota + score * quantity + battlecup;
    alert(result);



}