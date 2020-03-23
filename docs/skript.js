function posalji() {
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var mejl = document.getElementById("mejl").value;
    var poruka = document.getElementById('poruka').value;
    
    try {
        if(ime =='' || prezime == '' || mejl =='' || poruka == '') throw "Niste popunili sva polja";
    }
    catch(error) {
         alert(error);
    }
}

function adresa(){
    var adress = '{ "ulica":"Mačkova", "broj":"9", "telefon":"021/123-4567", "vet":"Trenutno nedostupan"}';
    var myObj = JSON.parse(adress);
    document.getElementById("adresa").innerHTML = "Ulica: " + myObj.ulica;
    document.getElementById("adresa1").innerHTML = "Broj: " + myObj.broj;
    document.getElementById("adresa2").innerHTML = "Telefon: " + myObj.telefon;
    document.getElementById("adresa3").innerHTML = "Veterinar: " + myObj.vet;
}

var informacije = {
    porucivanje: "Naručivanje trenutno nije moguće",
    vet: "Veterinari se otvaraju za 2 meseca",
    veterinar: "Najbolji veterinar je Zika veterinar"
}
function info(){
    alert("Naručivanje: " + informacije.porucivanje);
    alert("Veterinar: " + informacije.vet);
    alert("Preporuka: " + informacije.veterinar);
}

var today = new Date();

var expiry = new Date(today.getTime() + 5 * 24 * 3600 * 1000);

function setCookie(name, value){
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
    console.log(document.cookie);
}

function storeValues(form){
    setCookie("mejl", form.mejl.value);
    return true;
}
function displayCookieValue(name) {
    var value = getCookie(name);
    document.forma.mejl.value = value;

}
function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

function sacuvaj(){
    storeValues(forma);
}
function ispisi(){
    displayCookieValue(mejl);
}

function vrh(){
    document.documentElement.scrollTop = 0;
}

window.onload = function() {
  var naslov = document.getElementById('naslov')
  naslov.style.opacity = "1";
  naslov.style.marginLeft = "0px";
};