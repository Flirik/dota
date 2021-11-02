let loserate, winrate, result, gameonday, start, end, i, need, needday, weekly, exp, err, a, b;
error = "Пожалуйста заполните все поля"
// document.getElementById('maxday').style.padding = '0px';

// function swap1(){
//     document.getElementById('maxday').style.padding = '0px';
//     document.getElementById('lvlherostart').style.padding = '5px';
//     document.getElementById('lvlheroend').style.padding = '5px';
//     document.getElementById('expiriancehero').style.padding = '5px';
//     document.getElementById('maxday').innerHTML = ''
//     document.getElementById('lvlherostart').innerHTML = '<label for="">Уровень персонажа</label><input type="number" id="start" min="0" max="30">'
//     document.getElementById('lvlheroend').innerHTML = '<label for="">Желаемый уровень персонажа</label><input type="number" id="end" min="0" max="30">'
//     document.getElementById('expiriancehero').innerHTML = '<label for="">Кол-во опыта</label><input type="number" id="experiance" min="0" max="3000" value="0">'
//     document.getElementById('but').innerHTML = '<input type="button" value="Посчитать дни" onclick="days()">'
//     document.getElementById('weekly').style.padding = '0px';
//     document.getElementById('weekly').innerHTML = ''
//     document.getElementById('error').innerHTML = ''
//     document.getElementById('answer').innerHTML = ''
// }

// function swap2(){
//     document.getElementById('lvlherostart').style.padding = '0px';
//     document.getElementById('lvlheroend').style.padding = '0px';
//     document.getElementById('maxday').style.padding = '5px';
//     document.getElementById('maxday').innerHTML = '<label for="">Кол-во дней</label><input type="number" id="days">'
//     document.getElementById('lvlherostart').innerHTML = ''
//     document.getElementById('lvlheroend').innerHTML = ''
//     document.getElementById('weekly').style.padding = '5px';
//     document.getElementById('weekly').innerHTML = '<label for="">Задания героя</label><input type="checkbox" id="weeklytwo">'
//     document.getElementById('but').innerHTML = '<input type="button" value="Посчитать опыт" onclick="experiance1()">'
//     document.getElementById('expiriancehero').style.padding = '0px';
//     document.getElementById('expiriancehero').innerHTML = ''
//     document.getElementById('error').innerHTML = ''
//     document.getElementById('answer').innerHTML = ''
// }

// function swap3(){
//     document.getElementById('maxday').style.padding = '0px';
//     document.getElementById('lvlherostart').style.padding = '5px';
//     document.getElementById('lvlheroend').style.padding = '5px';
//     document.getElementById('expiriancehero').style.padding = '5px';
//     document.getElementById('maxday').innerHTML = ''
//     document.getElementById('lvlherostart').innerHTML = '<label for="">Уровень персонажа</label><input type="number" id="start" min="0" max="30">'
//     document.getElementById('lvlheroend').innerHTML = '<label for="">Желаемый уровень персонажа</label><input type="number" id="end" min="0" max="30">'
//     document.getElementById('expiriancehero').innerHTML = '<label for="">Кол-во опыта</label><input type="number" id="experiance" min="0" max="3000" value="0">'
//     document.getElementById('but').innerHTML = '<input type="button" value="Посчитать игры/день" onclick="game()">'
//     document.getElementById('weekly').style.padding = '0px';
//     document.getElementById('weekly').innerHTML = ''
//     document.getElementById('error').innerHTML = ''
//     document.getElementById('answer').innerHTML = ''
// }

function experiance1(){
    a = 0
    b = 0
    winrate = document.getElementById('winrate2').value;
    gameonday = document.getElementById('gameonday2').value;
    sumday = document.getElementById('days2').value;
    sumday = Number(sumday);
    day1 = sumday;


    loserate = 100 - winrate;
            
    if(gameonday == "" || days2 == ""){
        document.getElementById('error2').innerHTML = error;
    }else{

        switch(winrate){
            case '10':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
            case '20':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
            case '30':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
            case '40':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
            case '50':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
            case '60':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
            case '70':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
            case '80':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
            case '90':
                a = gameonday * winrate/100
                b = gameonday * loserate/100
                result = Math.round(a)*100+Math.round(b)*50
                result = result * day1
                break;
        }

        if(document.getElementById('weeklytwo').checked){
            switch(sumday){
                case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:
                    result += 1500;
                    break;
                case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:
                    result += 3000;
                    break;
                case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:
                    result += 4500;
                    break;
                case 43:case 44:case 45:case 46:case 47:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:
                    result += 6000;
                    break;
                case 57:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 65:case 66:case 67:case 68:case 69:case 70:
                    result += 7500;
                    break;
                case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:
                    result += 9000;
                    break;
                case 85:case 86:case 87:case 88:case 89:case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:case 98:
                    result += 10500;
                    break;
                case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:
                    result += 12000;
                    break;
                default:
                    document.getElementById('answer').innerHTML = "Текущий максимум дней состовляет 112";
                    break
            }
            document.getElementById('answer2').innerHTML = "Количество заработанного опыта с заданиями героя составляет: " + result;
            document.getElementById('error2').innerHTML = '';
        }else{
            document.getElementById('answer2').innerHTML = "Количество заработанного опыта без заданий героя составляет: " + result;
            document.getElementById('error2').innerHTML = '';
        }
    }
}

function days(){
    start = document.getElementById('start').value;
    end = document.getElementById('end').value;
    lvl = end;
    exp = document.getElementById('experiance').value;
    winrate = document.getElementById('winrate').value;
    gameonday = document.getElementById('gameonday').value;


    if(exp == "" || gameonday == "" || start == "" || end == ""){
        document.getElementById('error').innerHTML = error;
    }else{
        if(end>start){
            document.getElementById('error').innerHTML = "";
            a = 0
            b = 0
            result = 0
            i = 0
            
            switch(start){
                case '0':
                    start = 0;
                    break;
                case '1':
                    start = 50;
                    break;
                case '2':
                    start = 350;
                    break;
                case '3':
                    start = 750;
                    break;
                case '4':
                    start = 1250;
                    break;
                case '5':
                    start = 1850;
                    break;
                case '6':
                    start = 2750;
                    break;
                case '7':
                    start = 3750;
                    break;
                case '8':
                    start = 4850;
                    break;
                case '9':
                    start = 6050;
                    break;
                case '10':
                    start = 7350;
                    break;
                case '11':
                    start = 8750;
                    break;
                case '12':
                    start = 10450;
                    break;
                case '13':
                    start = 12250;
                    break;
                case '14':
                    start = 14150;
                    break;
                case '15':
                    start = 16150;
                    break;
                case '16':
                    start = 18250;
                    break;
                case '17':
                    start = 20450;
                    break;
                case '18':
                    start = 22950;
                    break;
                case '19':
                    start = 25550;
                    break;
                case '20':
                    start = 28250;
                    break;
                case '21':
                    start = 31050;
                    break;
                case '22':
                    start = 33950;
                    break;
                case '23':
                    start = 36950;
                    break;
                case '24':
                    start = 40050;
                    break;
                case '25':
                    start = 46850;
                    break;
                case '26':
                    start = 50850;
                    break;
                case '27':
                    start = 55050;
                    break;
                case '28':
                    start = 59450;
                    break;
                case '29':
                    start = 64050;
                    break;
                case '30':
                    start = 72050;
                    break;
            }

            switch(end){
                case '0':
                    end = 0;
                    break;
                case '1':
                    end = 50;
                    break;
                case '2':
                    end = 350;
                    break;
                case '3':
                    end = 750;
                    break;
                case '4':
                    end = 1250;
                    break;
                case '5':
                    end = 1850;
                    break;
                case '6':
                    end = 2750;
                    break;
                case '7':
                    end = 3750;
                    break;
                case '8':
                    end = 4850;
                    break;
                case '9':
                    end = 6050;
                    break;
                case '10':
                    end = 7350;
                    break;
                case '11':
                    end = 8750;
                    break;
                case '12':
                    end = 10450;
                    break;
                case '13':
                    end = 12250;
                    break;
                case '14':
                    end = 14150;
                    break;
                case '15':
                    end = 16150;
                    break;
                case '16':
                    end = 18250;
                    break;
                case '17':
                    end = 20450;
                    break;
                case '18':
                    end = 22950;
                    break;
                case '19':
                    end = 25550;
                    break;
                case '20':
                    end = 28250;
                    break;
                case '21':
                    end = 31050;
                    break;
                case '22':
                    end = 33950;
                    break;
                case '23':
                    end = 36950;
                    break;
                case '24':
                    end = 40050;
                    break;
                case '25':
                    end = 46850;
                    break;
                case '26':
                    end = 50850;
                    break;
                case '27':
                    end = 55050;
                    break;
                case '28':
                    end = 59450;
                    break;
                case '29':
                    end = 64050;
                    break;
                case '30':
                    end = 72050;
                    break;
            }
            
            loserate = 100 - winrate;
            

            // weekly = 1500 * Math.ceil(date/14)
            switch(winrate){
                case '10':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
                case '20':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
                case '30':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
                case '40':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
                case '50':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
                case '60':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
                case '70':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
                case '80':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
                case '90':
                    a = gameonday * winrate/100
                    b = gameonday * loserate/100
                    result = Math.round(a)*100+Math.round(b)*50
                    // alert(result)
                    break;
            }
            // result = lvl + weekly*week/14 + winrate ;
            need = end - start - exp;
            // i = weekly;
            needday = 0;
            while(i<need){
                i += result;
                needday += 1
                if(needday == 1 || needday == 15 || needday == 29 || needday == 43 || needday == 57 || needday == 71 || needday == 85 || needday == 99 || needday == 113 || needday == 127 || needday == 141){
                    i += 1500;
                }
            }

            document.getElementById('answer').innerHTML = 'Необходимое количество дней для поднятия '+ lvl + ' уровня: ' + needday;


        }else{
            alert('Начальный уровень не должен быть больше конечного')
        }
    }

}