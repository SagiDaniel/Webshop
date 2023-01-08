'use strict';
function check(){
const check = document.getElementById("vasar").checked;
if(check==false)
{
    document.getElementById("vasar").disabled = true;
}
else
{
    document.getElementById("vasar").disabled = false;
}
}
function vasarlas()
{
    const vezeteknev =document.getElementById("validationCustom01").value;
    const keresztenv = document.getElementById("validationCustom02").value;
    const email = document.getElementById("email").value;
    const regio = document.getElementById("regio").value;
    const zip = document.getElementById("postakod").value;
    if(email!=""&&regio!="" && vezeteknev!="" && keresztenv!="" && zip!="")
    {
    alert("Sikeres vásárlás");
    }
    else{
        alert("Nincs kitöltve minden adat!");
    }
}
function kukac(){
  document.getElementById("email").value+="@";
}
function torles()
{
alert("A kosár tartalma mostantól üres");
for(const item of kosar){
    kosar.pop();
}
}

let kosar =[];
let processor =[];
let video=[];
let processorfetch = fetch("../db/processor.json").then(r=>r.json()).then(data => processor = data);
let videofetch = fetch("../db/video.json").then(r=>r.json()).then(data => processor = data);
Promise.all([processorfetch]).then(showCard);
function showCard(){
    const row = document.querySelector("fetchprocessor");
    for(const item of processor)
    {
        row.append(createCard(item.termeknev,item.ar,item.kep));
    }
}

function createCard(title,ar,kep){
    const col =document.createElement("div");
    col.classList.add("col-sm-12 col-md-6 col-lg-4");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src.add(kep);

    const card = document.createElement("div");
    card.classList.add("card","m-1","text-white");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent=`${title}`;

    const button = document.createElement("button");
    button.classList.add("btn btn-primary");
    button.textContent=`Hozzáad`;
    button.onclick.add("hozzad");

    const span = document.createElement("span");
    span.classList.add("badge text-bg-primary");
    span.textContent=`${ar}`;

    col.append(card);
    card.append(cardBody);
    cardBody.append(h5);
    cardBody.append(button);
    cardBody.append(span);
    return col;
}

Promise.all([videofetch]).then(showcard1);
function showCard1(){
    const row = document.querySelector("fetchvideo");
    for(const item of processor)
    {
        row.append(createCard1(item.termeknev,item.ar,item.kep));
    }
}

function createCard1(title,ar,kep){
    const col =document.createElement("div");
    col.classList.add("col-sm-12 col-md-6 col-lg-4");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src.add(kep);

    const card = document.createElement("div");
    card.classList.add("card","m-1","text-white");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent=`${title}`;

    const button = document.createElement("button");
    button.classList.add("btn btn-primary");
    button.textContent=`Hozzáad`;
    button.onclick.add("hozzad");

    const span = document.createElement("span");
    span.classList.add("badge text-bg-primary");
    span.textContent=`${ar}`;

    col.append(card);
    card.append(cardBody);
    cardBody.append(h5);
    cardBody.append(button);
    cardBody.append(span);
    return col;
}
function hozzad(title,ar,kep){
    kosar.add(title,ar,kep);
}
Promise.all([kosar]).then(showCard2);
function showCard2(){
    const row = document.querySelector("kosarfetch");
    for(const item of processor)
    {
        row.append(createCard2(item.termeknev,item.ar,item.kep));
    }
}

function createCard2(title,ar,kep){
    const col =document.createElement("div");
    col.classList.add("col-sm-12 col-md-6 col-lg-4");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src.add(kep);

    const card = document.createElement("div");
    card.classList.add("card","m-1","text-white");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent=`${title}`;

    const button = document.createElement("button");
    button.classList.add("btn btn-primary");
    button.textContent=`Hozzáad`;
    button.onclick.add("hozzad");

    const span = document.createElement("span");
    span.classList.add("badge text-bg-primary");
    span.textContent=`${ar}`;

    col.append(card);
    card.append(cardBody);
    cardBody.append(h5);
    cardBody.append(button);
    cardBody.append(span);
    return col;
}