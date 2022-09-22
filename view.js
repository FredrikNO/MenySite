chooseMenu()
// updateView()
// HovedElementene i viewet
function chooseMenu(menuChoise) {
    cartMenu = '';
    if (menuChoise == 'dinner') {
        viewMenu = menuDinners();
    }
    else if (menuChoise == 'appetizer') {
        viewMenu = menuAppetizers();
    }
    else if (menuChoise == 'dessert') {
        viewMenu = menuDessert();
    }
    else if (menuChoise == 'newDishes') {
        viewMenu = menuNewDishes();
    }
    else if (menuChoise == 'drinks') {
        viewMenu = menuDrinks();
    }
    else if (menuChoise == 'shoppingCart') {
        viewMenu = '';
        cartMenu = shopCart();
    }
    updateView();
}

function updateView() {
    let html = '';
    let popUp = popupWindow();
    html = `
    <div class="header">
        <h1>Resturante</h1>
        <div class="leftSide">
            <input type="text">Søk
            <img class="profile" src="" alt="Logg inn">
        </div>
    </div><hr><br>
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
            </div><br>
            <div class="btnLayout menuBorder ${selectedMenuItem('shoppingCart')}" onclick="changeMenu('shoppingCart')">
            <img class="menuImg" src="" alt="">
            <h2>Handlevogn</h2>
        </div>
    </div>

    <div class="${styleContent = viewMenu != '' ? 'items' : 'model-body cart-size'}">
        ${viewMenu || ''}
        ${cartMenu || ''}
        ${payed? paymentAccepted():''}
    </div> 
    <div>
    ${popUp}
    </div>
    `;
    document.getElementById('page').innerHTML = html;
}
// Sidene som blir valgt fra menyen
function menuDinners() {
    let tempView = ``;
    for (let i = 0; i < menu.dinner.length; i++) {
        tempView += `<div>
        ${menu.dinner[i].picture}<br>
        ${menu.dinner[i].dish}<br>
        ${menu.dinner[i].price} kr
        <button onclick="addToChart(${i})">Velg</button><input type="number" min="1" max="5" oninput="menu.dinner[${i}].amount=parseInt(this.value)">
        </div>`;
    }
    return tempView;
}

function menuAppetizers() {
    let tempView = ``;
    for (let i = 0; i < menu.appetizer.length; i++) {
        tempView += `<div>
        ${menu.appetizer[i].picture}<br>
        ${menu.appetizer[i].dish}<br>
        ${menu.appetizer[i].price} kr
        <button onclick="addToChart(${i})">Velg</button><input type="number" min="1" max="5" oninput="menu.appetizer[${i}].amount=parseInt(this.value)">
        </div>`;
    }
    return tempView;
}

function menuDessert() {
    let tempView = ``;
    for (let i = 0; i < menu.dessert.length; i++) {
        tempView += `<div>
        ${menu.dessert[i].picture}<br>
        ${menu.dessert[i].dish}<br>
        ${menu.dessert[i].price} kr
        <button onclick="addToChart(${i})">Velg</button><input type="number" min="1" max="5" oninput="menu.dessert[${i}].amount=parseInt(this.value)">
        </div>`;
    }
    return tempView;
}

function menuNewDishes() {
    let tempView = ``;
    for (let i = 0; i < menu.newDishes.length; i++) {
        tempView += `<div>
        ${menu.newDishes[i].picture}<br>
        ${menu.newDishes[i].dish}<br>
        ${menu.newDishes[i].price} kr
        <button onclick="addToChart(${i})">Velg</button><input type="number" min="1" max="5" oninput="menu.newDishes[${i}].amount=parseInt(this.value)">
        </div>`;
    }
    return tempView;
}
function menuDrinks() {
    let tempView = ``;
    for (let i = 0; i < menu.drinks.length; i++) {
        tempView += `<div>
        ${menu.drinks[i].picture}<br>
        ${menu.drinks[i].dish}<br>
        ${menu.drinks[i].price} kr
        <button onclick="addToChart(${i})">Velg</button><input type="number" min="1" max="5" oninput="menu.drinks[${i}].amount=parseInt(this.value)">
        </div>`;
    }
    return tempView;
}
function shopCart() {
    let tempView = ``;
    for (let i = 0; i < cart.length; i++) {
        tempView += `<div class="cart-descript">
        ${cartImg = cart[i].picture.replace('foodImg', 'menuImg')}
        </div>
        <div class="model-descript">
            <div>${cart[i].dish}</div>
            <div>${cart[i].price}
                 ${cart[i].amount}
            </div>
            <button onclick="removeFromCart(${i})">Fjern varen</button>
        </div>`;
    }
    if (cart.length == 0) {
        tempView = `Du har ikke valgt noen produkter`;
    }
    else {
        for (let i = 0; i < cart.length; i++) {
            sumprice+=cart[i].price*cart[i].amount;
        }
        tempView += `
        <div style="border-top: 1px solid black;">Summen å betale er:</div>
        <div style="border-top: 1px solid black;">${sumprice}</div>
    <button onclick="keepShopping()">Fortsett å handle</button><button onclick="payForCart()">Betal</button>
    `;
    sumprice=0;
    }

    return tempView;
}

function popupWindow() {
    let tempView = `
    <div class="modal ${displayModal}">
        <div class="modal-content">
            <div class="model-body">
                <div>${cartImg}</div>
                <div class="model-descript">
                    <div>${cartDescription}</div>
                    <div>pris pr. stk:${cartPrice}kr    antall:${cartAmount}</div>
                </div>
            </div>
            <button onclick="closeModle()">Fortsett å handle</button>
            <button onclick="openCart()">Gå til handlekurv</button>
        </div>
    </div>
    `;
    return tempView;
}
function paymentAccepted(){
    let tempView=`Takk for handelen`; 
    return tempView;
}