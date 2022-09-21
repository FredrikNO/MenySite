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
    if (selectedMenuchoise == 'dinner') {
        cart.push(menu.dinner[index]);
        openModle(menu.dinner,index);
        resetDinnerArray();
    }
    else if(selectedMenuchoise == 'appetizer') {
        cart.push(menu.appetizer[index]);
        openModle(menu.appetizer,index);
        resetAppetizerArray();
    }
    else if(selectedMenuchoise == 'dessert') {
        cart.push(menu.dessert[index]);
        openModle(menu.dessert,index);
        resetDessertArray();
    }
    else if(selectedMenuchoise == 'drinks') {
        cart.push(menu.drinks[index]);
        openModle(menu.drinks,index);
        resetDrinksArray();
    }
    else if(selectedMenuchoise == 'newDishes') {
        cart.push(menu.newDishes[index]);
        openModle(menu.newDishes,index);
        resetNewDishesArra();
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
// Resetting functions
function resetDinnerArray(){
    menu.dinner=[
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: 'Tomatsuppe med kokt egg',
            price: 70,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: 'Spekeskinke med sommerkål',
            price: 80,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: 'Hamburger',
            price: 100,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: 'Grillet torsk i folie',
            price: 110,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: 'Cæsarsalat med grillet kylling',
            price: 120,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: 'Grillspyd med breiflabb',
            price: 150,
            amount:1
        }
    ]
}
function resetAppetizerArray(){
    menu.appetizer=[
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        }
    ]
}
function resetDessertArray(){
    menu.dessert=[
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        }
    ]
}
function resetDrinksArray(){
    menu.drinks=[
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        }
    ]
}
function resetNewDishesArra(){
    [
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        },
        {
            picture: '<img class="foodImg" src="" alt="">',
            dish: '',
            price: 0,
            amount:1
        }
    ]
}