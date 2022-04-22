var randFNames = ["Dunkin", "Cheesebro", "Choo Choo", "Empress", "Farrah","Fiona", "Monsieur Le Colonel", "Tango", "The Other", "Yeti"];
var randLNames = ["Butterbeans", "Bro", "Boo Boo", "Tzu Tzu", "Pickles", "Moustache", "Mango", "Dude", "Sphaghetti"];
var randomColors = [];
function loadDetails(){
    if(localStorage.getItem("details") === null){

        var fname = randFNames[Math.floor(Math.random() * randFNames.length)];
        var lname = randLNames[Math.floor(Math.random() * randLNames.length)];
        var petNewName = fname + ' ' + lname;

        var newbckColor = "#eee"
        var vals = {
            "bckgColor": newbckColor,
            "petName": petNewName
        }
        var json = JSON.stringify(vals);
        localStorage.setItem('details', json);
        document.getElementById("petName").innerText = petNewName;
        document.body.style.backgroundColor = newbckColor;
        document.body.style.color = newbckColor;
    }else{
    var visits = localStorage.getItem('Visits');
    var visitData = visits ? parseInt(visits) + 1 : 0;
    localStorage.setItem('Visits', visitData);

    var userDetails = localStorage.getItem('details');
    var obj = JSON.parse(userDetails);
    var bodyColor = obj['bckgColor'];
    var petName = obj['petName'];
    console.log(bodyColor)

    document.getElementById("petName").innerText = petName;
    document.body.style.backgroundColor = bodyColor;
    document.body.style.color = bodyColor;
    }
}
document.addEventListener('DOMContentLoaded',loadDetails);