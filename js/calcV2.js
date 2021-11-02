let loserate, winrate, result, gameonday, start, end, i, need, needday, weekly, exp, err, a, b;
error = "Пожалуйста заполните все поля"

function f(){
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
            // let now = new Date();
            // let day = now.getDate();
            // let month = now.getMonth()+1;
            // let year = now.getFullYear();
            // let abc = year + "-" + month + "-" + day
            // let date = document.getElementById("date").value
            // alert(date)
            // alert(abc - date)

            // gameonday = document.getElementById('gameonday').value;
            // winrate = 10;
            // loserate = 90;
            // a = gameonday * winrate/100
            // b = gameonday * loserate/100

            // result = Math.round(a)*100+Math.round(b)*50
            // alert(result)

            
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
                case '100':
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
            // alert(i)
            document.getElementById('answer').innerHTML = 'Необходимое количество дней для поднятия '+ lvl + ' уровня: ' + needday;
            // alert(needday + ' дней')

        }else{
            alert('Начальный уровень не должен быть больше конечного')
        }
    }

}