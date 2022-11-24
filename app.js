function calculer()
{
    let x = document.getElementById("output").value
    let y = eval(x)
    document.getElementById("output").value = y
}
function afficher(resultat)
{
    document.getElementById("output").value += resultat
}
function effacer()
{
    document.getElementById("output").value = ""
}