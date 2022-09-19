updateView()
// HovedElementene i viewet
function updateView(){
    let html='';
    viewMenu=menuNyheter();
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
        <div class="${selectedMenuItem}">
            <h2>Nyheter</h2>
        </div><br>
        <div class="${selectedMenuItem}">
            <h2>Forrett</h2>
        </div>
        <div class="${selectedMenuItem}">
            <h2>Middag</h2>
        </div>
        <div class="${selectedMenuItem}">
            <h2>Dessert</h2>
        </div>
        <div class="${selectedMenuItem}">
            <h2>Drikke</h2>
        </div>
    </div>
    <div class="items">
        ${viewMenu}
    </div>
    </div>
    `;
    document.getElementById('page').innerHTML=html;
}
// Sidene som blir valgt fra menyen
function menuNyheter(){
    let temp=``;
    for (let i = 0; i < menu.length; i++) {
        temp+=`<div>
        ${menu[i].bilde}<br>
        ${menu[i].rett}<br>
        ${menu[i].pris} kr
        </div>`;
    }
    return temp;
}