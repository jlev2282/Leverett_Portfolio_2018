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


    var pageContent = {
            About: {
                "message" : "Hello, My name is John Leverett and I'm new to web development. After working in sales for 10 years and not feeling fulfilled, I decided to go back to school to learn a new skill, web development. I like web development because I believe very much that technology and more specifically, the internet, is where the majority of business will be done in the future. Keeping that in mind, most of the jobs will be focused or dependent around the internet as well. I am a hard worker, and a great team mate. I was a 4 year collegiate athelete in football at Davidson College where I was both an All American and elected captain by my fellow teamates. These two traits show my ability to work hard towards a goal, and to gain the respect of my peers as a leader. I believe that I will be an invaluable asset to your organization, and look forward to speaking with you in the near future. Please take a moment to browse my portfolio, and if you have any questions, do not hesistate to hit the contact button to reach out to me. Thanks again for stopping by and let's face the future together!",
            }
        };

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
    function Button(){
        alert("Hey I was clicked");
        console.log(this);
    }


});

function growFont(object){
    object.style["font-size"] = "18px";
    object.style["font-weight"] = "bold";
    object.style["color"] = "#4286f4";

}

function shrinkFont(object){
    object.style["font-size"] = "";
    object.style["font-weight"] = "";
    object.style["color"] = "";
}


function testButton(object) {
    console.log(object);

}