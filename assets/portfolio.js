$(document).ready(function(){


    //define the things to populate
    //define the functions to use populatePage, populateMenu, populateContent
    //

    var menuArray = [
        {
            level: 1,
            label: "About me",
            glyph: "fas fa-user-astronaut",
        },
        {
            level: 1,
            label: "Portfolio",
            glyph: "fas fa-folder",
        },
        {
            level: 1,
            label: "Contact Me",
            glyph: "fas fa-envelope",
        }


    ];

    var page = ["About", "Portfolio", "Contact"];

    var quotes = [
        {
            author: "Vincent Fitzgerald",
            quote: "Courage is the ability to stand your ground when feat tells you to run like hell.",
        },
        {
            author: "",
            quote: "",
        },
        {
            author: "",
            quote: "",
        },
        {
            author: "",
            quote: "",
        },
        {
            author: "",
            quote: "",
        },
        {
            author: "",
            quote: "",
        },
        {
            author: "",
            quote: "",
        }
    ];

    var accomplishments = [
        {

        }
    ];

    //a for loop that grabs each index from menuArray and creates a div with class "row"
    //creates
    function populateMenu(page){
        for (i=0; i< menuArray.length; i++) {
            var newRow = $("<div>");
        }

    }

    function populateContent(page){

    }

    function populatePage(page){
        populateMenu(page);
        populateContent(page);
    }

    populatePage();

});