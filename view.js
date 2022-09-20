chooseMenu()
// updateView()
// HovedElementene i viewet
function chooseMenu(menuChoise){
    if(menuChoise=='dinner'){
        viewMenu=menuDinners();
    }
    else if(menuChoise=='appetizer'){
        viewMenu=menuAppetizers();
    }
    else if(menuChoise=='dessert'){
        viewMenu=menuDessert();
    }
    else if(menuChoise=='newDishes'){
        viewMenu=menuNewDishes();
    }
    else if(menuChoise=='drinks'){
        viewMenu=menuDrinks();
    }
    updateView()
}

function updateView(){
    let html='';
    html=`
    <div class="header">
        <h1>Resturante</h1>
        <div class="leftSide">
            <input type="text">Søk
            <img class="profile" src="" alt="Logg inn">
        </div>
    </div><br>
    <div class="site">
    <div class="menu">
        <div class="btnLayout menuBorder ${selectedMenuItem('newDishes')}" onclick="changeMenu('newDishes')">
            <img class="menuImg" src="" alt="">
            <h2>Nyheter</h2>
        </div><br>
        <div class="menuBorder">
            <div class="btnLayout ${selectedMenuItem('appetizer')}" onclick="changeMenu('appetizer')">
                <img class="menuImg" src="" alt="">
                <h2>Forrett</h2>
            </div><br>
            <div class="btnLayout ${selectedMenuItem('dinner')}" onclick="changeMenu('dinner')">
                <img class="menuImg" src="" alt="">    
                <h2>Middag</h2>
            </div><br>
            <div class="btnLayout ${selectedMenuItem('dessert')}" onclick="changeMenu('dessert')">
                <img class="menuImg" src="" alt="">    
                <h2>Dessert</h2>
            </div><br>
            <div class="btnLayout ${selectedMenuItem('drinks')}" onclick="changeMenu('drinks')">
                <img class="menuImg" src="" alt="">    
                <h2>Drikke</h2>
            </div>
        </div>
    </div>
    <div class="items">
        ${viewMenu||''}
    </div>
    </div>
    `;
    document.getElementById('page').innerHTML=html;
}
// Sidene som blir valgt fra menyen
function menuDinners(){
    let tempView=``;
    for (let i = 0; i < menu.dinner.length; i++) {
        tempView+=`<div>
        ${menu.dinner[i].picture}<br>
        ${menu.dinner[i].dish}<br>
        ${menu.dinner[i].price} kr
        <button onclick="addToChart(${i})">Velg</button><input type="number" min="1" max="5" oninput="menu.dinner[${i}].amount=parseInt(this.value)">
        </div>`;
    }
    return tempView;
}

function menuAppetizers(){
    let tempView=``;
    for (let i = 0; i < menu.appetizer.length; i++) {
        tempView+=`<div>
        ${menu.appetizer[i].picture}<br>
        ${menu.appetizer[i].dish}<br>
        ${menu.appetizer[i].price} kr
        </div>`;
    }
    return tempView;
}

function menuDessert(){
    let tempView=``;
    for (let i = 0; i < menu.dessert.length; i++) {
        tempView+=`<div>
        ${menu.dessert[i].picture}<br>
        ${menu.dessert[i].dish}<br>
        ${menu.dessert[i].price} kr
        </div>`;
    }
    return tempView;
}

function menuNewDishes(){
    let tempView=``;
    for (let i = 0; i < menu.newDishes.length; i++) {
        tempView+=`<div>
        ${menu.newDishes[i].picture}<br>
        ${menu.newDishes[i].dish}<br>
        ${menu.newDishes[i].price} kr
        </div>`;
    }
    return tempView;
}
function menuDrinks(){
    let tempView=``;
    for (let i = 0; i < menu.drinks.length; i++) {
        tempView+=`<div>
        ${menu.drinks[i].picture}<br>
        ${menu.drinks[i].dish}<br>
        ${menu.drinks[i].price} kr
        </div>`;
    }
    return tempView;
}