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

//////////////////////////////////////////////////
//uses jquery to render projects information into Bootstrap Card on page
/////////////////////////////////////////////////

//Project1
    const $proj1Name = projects[0].name
    const $proj1Img  = projects[0].img
    const $proj1Description  = projects[0].description
    const $proj1Live  = projects[0].live
    const $proj1Github  = projects[0].github

    $("#project1-name").html($proj1Name)
    $("#project1-img").attr("src", $proj1Img)
    $("#project1-description").html($proj1Description)
    $("#project1-live").attr("href", $proj1Live)
    $("#project1-github").attr("href", $proj1Github)
//Project 2
    const $proj2Name = projects[1].name
    const $proj2Img  = projects[1].img
    const $proj2Description  = projects[1].description
    const $proj2Live  = projects[1].live
    const $proj2Github  = projects[1].github

    $("#project2-name").html($proj2Name)
    $("#project2-img").attr("src", $proj2Img)
    $("#project2-description").html($proj2Description)
    $("#project2-live").attr("href", $proj2Live)
    $("#project2-github").attr("href", $proj2Github)


})

///////////////////////////////
//Nav-bar hide on.click
//////////////////////////////
        


//////////////////////////////////////////////////






/////////////////////////////
//PULL DATA FROM BLOG FROM HEADLESS CSS
///////////////////////
