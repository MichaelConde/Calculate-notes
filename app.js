const username = document.getElementById('nombre');
const note1 = document.getElementById('nota1');
const note2 = document.getElementById('nota2');
const note3 = document.getElementById('nota3');
const calculate = document.getElementById('calcular');
const prediction = document.getElementById('predecir');
const relut = document.getElementById('resultado');

prediction.addEventListener('click', pred);
calculate.addEventListener('click', calculater);


function pred() {
    let date1 = parseFloat(note1.value);
    let date2 = parseFloat(note2.value);
    if (date1 < 1.0 || date2 < 1.0) {
        note3.placeholder = "Ingrese notas mayores a 1";
        return; // salir de la función temprano
    } else if (date1 > 5.0 || date2 > 5.0) {
        note3.placeholder = "Ingrese notas menor a 5";
        return; // salir de la funció ntemprano 
    } else {
        let datemin = parseFloat((3.5 - (date1 * 0.3 + date2 * 0.3)) / 0.4).toFixed(2);
        note3.placeholder = "La nota minima para pasar debe ser de " + datemin;
    }
}

function calculater(event) {
    event.preventDefault();
    let name = username.value;
    let date1 = parseFloat(note1.value) * 0.3;
    let date2 = parseFloat(note2.value) * 0.3;
    let date3 = parseFloat(note3.value) * 0.4;
    let finnote = (date1 + date2 + date3).toFixed(2);

    if (date1 > 5.0 || date2 > 5.0 || date3 > 5.0) {
        relut.textContent = "Ingrese una nota igual o menor a 5";
        return;
    } else if (date1 < 1 || date2 < 1 || date3 < 1) {
        relut.textContent = "Ingrese una nota igual o mayor a 1";
        return; 
    } else{
    if(finnote<3.5){
        relut.style.color='black'
        relut.textContent = " Hola "+name+" su nota es "+finnote+"  Usted perdio la materia";
    }else if(finnote>3.5 && finnote<4.5){
        relut.style.color='orange'
        relut.textContent = " Hola "+name+" su nota es "+finnote+"  Usted gano la materia";
    }else if(finnote>4.5){
        relut.style.color='green'
        relut.textContent = " Hola "+name+" su nota es "+finnote+"  Usted gano la materia con una nota sobresaliente";
    }
}
    
   
}
