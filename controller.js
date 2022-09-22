function changeMenu(menuChoise) {
    selectedMenuchoise = menuChoise;
    chooseMenu(menuChoise);
}
function selectedMenuItem(menuChoise) {
    if (selectedMenuchoise == menuChoise) {
        return 'selectedBtn'
    }
    else return ''
}
function addToChart(index) {
    let tempobject={};
    if (selectedMenuchoise == 'dinner') {
        tempobject= fillTempObject(tempobject,menu.dinner,index);
        cart.push(tempobject);
        openModle(menu.dinner,index);
    }
    else if(selectedMenuchoise == 'appetizer') {
        tempobject= fillTempObject(tempobject,menu.appetizer,index);
        cart.push(tempobject);
        openModle(menu.appetizer,index);
    }
    else if(selectedMenuchoise == 'dessert') {
        tempobject= fillTempObject(tempobject,menu.dessert,index);
        cart.push(tempobject);
        openModle(menu.dessert,index);
    }
    else if(selectedMenuchoise == 'drinks') {
        tempobject= fillTempObject(tempobject,menu.drinks,index);
        cart.push(tempobject);
        openModle(menu.drinks,index);
    }
    else if(selectedMenuchoise == 'newDishes') {
        tempobject= fillTempObject(tempobject,menu.newDishes,index);
        cart.push(tempobject);
        openModle(menu.newDishes,index);
    }
}
function openModle(menuArray,index) {
    displayModal = '';
    cartImg=menuArray[index].picture
    cartImg=cartImg.replace('foodImg','menuImg') 
    cartDescription=menuArray[index].dish;
    cartPrice=menuArray[index].price;
    cartAmount=menuArray[index].amount;
    updateView();
}
function closeModle() {
    displayModal = 'modal-display';
    updateView();
}
function fillTempObject(tempObject,originalObject,index){
    tempObject={picture: originalObject[index].picture,
        dish:originalObject[index].dish,
        price:originalObject[index].price,
        amount:originalObject[index].amount};
    return tempObject;
}
function removeFromCart(index){
    cart.splice(index,1);
    chooseMenu('shoppingCart');
}
function openCart(){
    displayModal = 'modal-display';
    chooseMenu('shoppingCart');
}
function keepShopping(){
    chooseMenu('newDishes')
}
function payForCart(){
    payed=true;
    cart=[];
    viewMenu='';
    cartMenu='';
    updateView();
    payed=false;
}