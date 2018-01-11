function display() {
  document.getElementById("centre").style.display = "block";
  document.getElementById("bouton_central").style.display = "none";
}

function recherche() {
  var answerSearch = document.getElementById('answer').value;
  var url = "https://www.google.fr/#q=";
  url += answerSearch.replace(/ /g, "+");
  document.location.href = url;
}

setTimeout(function popup(){ alert("Tu veux trouver des filles chaudes de ta région ? Viens sur le site www.tropmoyendekensisi.com."); }, 10000);
