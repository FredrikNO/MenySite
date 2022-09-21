
let menu = {
    dinner: [
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
    ],
    appetizer: [
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
    ],
    dessert: [
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
    ],
    newDishes: [
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
    ],
    drinks: [
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
};
let viewMenu;
let cart=[];
let sumprice=0;
let selectedMenuchoise='';
let clickedButton='';
// popup display
let displayModal='modal-display';
// popup chart display values
let cartImg='';
let cartDescription='';
let cartPrice='';
let cartAmount='';
let cartMenu='';
let styleContent='';
let amount=0;

