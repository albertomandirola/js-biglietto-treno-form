// 1 - recupero i pulsanti di reset e di calcolo
const button = document.getElementById('calc-price');
const reset_button = document.getElementById('reset'); 
// 2 - imposto i pulsanti in modo chen quando ci clicco facciano una determinata cosa
button.addEventListener('click', function(){
    // 3 - RECUPERO IL VALORE DELL'INPUT NOME E COGNOME
    let name = document.getElementById('name').value;

    //4 - RECUPERO IL VALORE DEI KM 
    let km = document.getElementById('km').value;

    //5 - RECUPERO IL VALORE DEL RANGE D'ETA'
    let age = document.getElementById('age').value ;
    // 6 - DICHIARO LA VARIABILE PRICE;
    let price;

    if(age == 1){
        price = 0.21 * km * 0.8;
    }
    else if(age == 3){
        price = 0.21 * km * 0.6;
    }
    else{
        price = 0.21 * km
    }

    document.getElementById('name-surname') . innerText = name;
    document.getElementById('km-inserted').innerText = km;
    document.getElementById('price').innerText = `${price.toFixed(2)}€`;
})
reset_button.addEventListener('click', function(){
    document.getElementById('name').value="";
    document. getElementById('km').value="";
    document.getElementById('age').value="";
    document.getElementById('name-surname').innerText = '';
    document.getElementById('km-inserted').innerText = '';
    document.getElementById('price').innerText = ``;
})