function licznik(){

let liczbaOdwiedzin = localStorage.getItem("liczbaOdwiedzin");
let wynik = document.getElementById('wynik');


if(liczbaOdwiedzin === null) {
    liczbaOdwiedzin = 1;
}else {
    liczbaOdwiedzin = parseInt(liczbaOdwiedzin, 10) + 1
}

localStorage.setItem("liczbaOdwiedzin", liczbaOdwiedzin);

wynik.innerHTML = liczbaOdwiedzin;
}
