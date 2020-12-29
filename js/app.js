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
.catch((data)=>{
console.log("error")

});
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
        
        
        //creates img and assigns bootstrap class card-img-top and soruces the ajax img data
        const $img = $("<img>")
        $img.addClass("card-img-top", "img-fluid")
        $img.attr("src", this.img)
        console.log(this.img)
        

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
        col1.addClass("col")
        const col2 = $("<div>")
        col2.addClass("col")
        
        
        const $liveLink = $("<a>")
        $liveLink.addClass("card-links", "d-flex", "text")
        $liveLink.html("App")
        $liveLink.attr("href", this.live).attr("target", "_blank")

        const $githubLink = $("<a>")
        $githubLink.addClass("card-links", "d-flex", "text")
        $githubLink.html("Code")
        $githubLink.attr("href", this.github).attr("target", "_blank")

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
