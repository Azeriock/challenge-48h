var input = document.getElementsById("save");
localStorage.setItem("prenom", input.val());
var storedValue = localStorage.getItem("prenom");
