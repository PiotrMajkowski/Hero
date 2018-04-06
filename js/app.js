console.log('hejka');

var heroesList = [
    {
        name: "Thor",
        price: 225,
        img: "thor.jpg",
        desc: "opis produktu",

    },

    {
        name: "Batman",
        price: 1225,
        img: "batman.jpg",
        desc: "opis produktu",

    },

    {
        name: "Hulk",
        price: 2225,
        img: "hulk.jpg",
        desc: "opis produktu",

    },

    {
        name: "Ironman",
        price: 4225,
        img: "ironman.jpg",
        desc: "opis produktu",

    },

    {
        name: "Superman",
        price: 5225,
        img: "superman.jpg",
        desc: "opis produktu",

    },

    {
        name: "Potter",
        price: 3225,
        img: "potter.jpg",
        desc: "opis produktu",

    },

];

var heroesListRegion = document.getElementById('heroesList-region');

heroesList.forEach(function (hero) {
    var element = document.createElement('div');

    var template =''+
        '<div class="hero-item">' +
        '   <div>' +
        '       <img src="images/heroes/'+hero.img+'" alt="'+hero.name+'"">' +
        '   </div>' +
        '   <div>' +
        '       <span>'+hero.name+'</span>' +
        '       <span>'+hero.price+' zł/h</span>' +
        '   </div>' +
        '</div>';
    element.innerHTML = template;



    heroesListRegion.appendChild(element);
});





