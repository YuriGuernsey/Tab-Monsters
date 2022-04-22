
function optionsSave(event) {
    event.preventDefault();
    var bckColor = document.getElementById("bckg-color").value;

    var petName = document.getElementById("petName").value;
    var vals = {
        "bckgColor": bckColor,
        "petName": petName
    }
    var json = JSON.stringify(vals);
    localStorage.setItem('details', json);
  }
  
  const form = document.getElementById('options');
  form.addEventListener('submit', optionsSave);


  function loadDetails(){
   

    var userDetails = localStorage.getItem('details');
    var obj = JSON.parse(userDetails);
    var bodyColor = obj['bckgColor'];
    var petName = obj['petName'];
    console.log(bodyColor)

    var bckColor = document.getElementById("bckg-color").value = bodyColor;

    var petName = document.getElementById("petName").value = petName;
}
document.addEventListener('DOMContentLoaded',loadDetails);