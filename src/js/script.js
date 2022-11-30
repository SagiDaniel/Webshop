const check = document.getElementById("exampleCheck1").checked;
if(check==false)
{
    document.getElementById("vasarlas").disabled = true;
}
else
{
    document.getElementById("vasarlas").disabled = false;
}


function torles()
{
alert("A kosár tartalma mostantól üres")
}
function vasarlas()
{
    alert("Sikeres vásárlás")
}