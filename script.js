//Déclaration de la fonction age
function displayAge(){
  var reg = /^[\d\.\,]+/;
var age = document.getElementById('age').value;

// on compare l'age : s'il est superieur ou egal à 18 ans, alors le visiteur est majeur
if (reg.test(age));
{
  if(age >= 18){
    alert('vous êtes majeur');
}
else{
  alert('vous êtes mineur');
}
}
}
