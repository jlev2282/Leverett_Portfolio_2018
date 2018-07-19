$(document).ready(function(){


    //define the things to populate
    //define the functions to use populatePage, populateMenu, populateContent
    //


    var mainOptions = [
        {
            level: "main-options",
            label: "About me",
            glyph: "fas fa-user-astronaut",
            href: "About"
        },
        {
            level: "main-options",
            label: "Portfolio",
            glyph: "fas fa-folder",
            href: "Portfolio"

        },
        {
            level: "main-options",
            label: "Contact Me",
            glyph: "fas fa-envelope",
            href: "Contact"

        }
    ];

    var portfolioOptions = [];

    var menuArrays = [ mainOptions, portfolioOptions];


    var pageContent = [];

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
    ];

    //a for loop that grabs each index from menuArray and creates a div with class "row"
    //creates
    function populateMenu(array){

        for (i=0; i< array.length; i++) {
            //creates menu options
            if (array[i] == mainOptions) {
                // example of what you are creating here
                // <li>
                // <p><a href="#"><i class="fas fa-folder"> </i></a>My Portfolio</p>
                // </li>
                var $newlist = $("<li>");
                menuOptions = array[i];
                console.log(menuOptions);
                for (j =0; j < menuOptions.length; j++) {
                    var listItemP = $("<p>");
                    var listItemA = $("<a>");
                    var listItemI = $("<span>");

                    listItemI.attr("class", menuOptions[j]['glyph']);
                    listItemA.prepend(listItemI);
                    console.log(listItemA);
                    document.getElementById("main-options").innerHTML = "<li>Click"+listItemA[0]+"</li>";
                    // listItemA.text(listItemI+""+menuOptions[j]['label']);
                    // listItemA.html(listItemI);
                    // listItemA.attr("href", menuOptions[j]['href']);
                    // listItemP.html(listItemA+menuOptions[j]['label']);
                    // listItem.html(listItemP);
                    // $newlist.html(listItem);
                    // $("#main-options").append($newlist);

                }


            }
        }

    }

    function populateContent(content){
        return true;
    }

    function populatePage(array, content){
        populateMenu(array);
        populateContent(content);
    }

    //on click event that refreshes content section with specified content
    $(".refresh").click(function(){
        console.log("I'm connected here sir");
    });
    // populatePage(menuArrays, pageContent);


});