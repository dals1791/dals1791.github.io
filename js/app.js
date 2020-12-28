/////////////////////
//PULL DATA FROM GOOGLE SHEET
/////////////////////////

$. ajax("https://spreadsheets.google.com/feeds/list/1JQe3WnWfyv0d4VWgn05YJ9coxAwbORPnEsrYjcAJqgI/1/public/full?alt=json")
.then((data)=>{
    // console.log(data)

    ////put projects in a varaiable
    const rawProjects = data.feed.entry
    // console.log(rawProjects)

    //make the projects array cleaner to read
    const projects = rawProjects.map((project)=>{
        return {
            name: project.gsx$name.$t,
            img: project.gsx$img.$t,
            description: project.gsx$description.$t,
            live: project.gsx$live.$t,
            github: project.gsx$github.$t
        }
        
    })
    
    createCards(projects)
})

//END OF AJAX CALL
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////
//jquery to create project cards populated with AJAX data
/////////////////////////////////////////////////

//class to create a card populated with the applicable information
class Card {
    constructor (object){
        this.name = object.name
        this.img = object.img
        this.description = object.description
        this.live = object.live
        this.github = object.github
    }
    //method of class Card that will render the card layout in index.html with constructor info
    render() {
        //Created outer div layer for card, assigns bootstrap class card to div
        const $cardDiv = $("<div>")
        $cardDiv.addClass("card", "card-structure")
        // $cardDiv.css("width", "auto")
        
        //creates img and assigns bootstrap class card-img-top and soruces the ajax img data
        const $img = $("<img>")
        $img.addClass("card-img-top", "img-fluid")
        $img.attr("src", this.img)
        // $img.css("height", "50vh").css("object-fit", "cover")

        //creates the body of the card with bootstrap class card-body
        const $cardBodyDiv = $("<div>")
        $cardBodyDiv.addClass("card-body")

        //creates
        const $cardText = $("<h5>")
        $cardText.addClass("card-title", "text")
        $cardText.html(this.name)

        const $cardDescription = $("<p>")
        $cardDescription.addClass("card-text", "text")
        $cardDescription.html(this.description)

        //creates grid for project card buttons
        const row = $("<div>")
        row.addClass("row")
        const col1 = $("<div>")
        col1.addClass("col-6")
        const col2 = $("<div>")
        col2.addClass("col-6")
        
        
        const $liveLink = $("<a>")
        $liveLink.addClass("card-links", "d-flex", "text")
        $liveLink.html("App")
        $liveLink.attr("href", this.live)

        const $githubLink = $("<a>")
        $githubLink.addClass("card-links", "d-flex", "text")
        $githubLink.html("Code")
        $githubLink.attr("href", this.github)

        //Append items to html
        $cardDiv.append($img)
        $cardDiv.append($cardBodyDiv)
        $cardBodyDiv.append($cardText)
        $cardBodyDiv.append($cardDescription)
        $cardBodyDiv.append(row)
        row.append(col1)
        row.append(col2)
        col1.append($liveLink)
        col2.append($githubLink)
         
///js to create skill button - TBD 
        // const $skillButton = $("<button>")
        // $skillButton.addClass("card-links", "d-flex", "skills-link")
        // $skillButton.html("Skills")
        // $skillButton.attr("data-bs-toggle", "dropdown").attr("role", "button")

        // const $skillImage = $(<svg>)
       //HTML construct 
        // <div class="col-4 dropup">
        //         <button class="card-links d-flex skills-link " data-bs-toggle="dropdown" role="button"">
        //         Skills
        //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
        //         <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 11.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        //         </svg>
        //       </button>
        //         <!-- Skills DropUp -->
        //         <div class="container-fluid skills-dropup dropdown-menu text-center bg-info">
                 
        //           <p class="skills-dropup-txt">JS</p>
        //           <p class="skills-dropup-txt">JQUERY</p>
        //           <p class="skills-dropup-txt">HTML</p>
        //           <p class="skills-dropup-txt">CSS</p>
                
        //       </div>
        //       </div> 

        return $cardDiv;
    }
}



////Creates the project card using a class "Card" and the AJAX array of data then appends it to specific index.html section
function createCards(projects){
    const $projectSection = $(".project-cards")
    projects.forEach((object)=>{
        let card = new Card(object)
        
        $projectSection.append(card.render())
    })
}






///////////////////////////////
//NavMenu Items hide on.click
//////////////////////////////
function hideNavMenuItems(){
    const $navMenu__items = $(".navMenu__items").children()

    for (let i=0; i<$navMenu__items.length; i+=1){
        const $navLink = $navMenu__items;
        $navLink.on("click", (event) => {
            const $hamburgerIcon = $("#hamburger-icon")
            const $navMenu = $("#nav-menu")

            $hamburgerIcon.addClass("collapsed")
            $hamburgerIcon.attr("aria-expanded", "false")
            $navMenu.removeClass("show")
        })
    }
}
hideNavMenuItems()
//////////////////////////////////////////////////






/////////////////////////////
//PULL DATA FROM BLOG FROM HEADLESS CSS
///////////////////////
