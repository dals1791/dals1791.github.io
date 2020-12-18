console.log("hello world");

/////////////////////
//PULL AND RENDER DATA FROM GOOGLE SHEET
/////////////////////////

$. ajax("https://spreadsheets.google.com/feeds/list/1JQe3WnWfyv0d4VWgn05YJ9coxAwbORPnEsrYjcAJqgI/1/public/full?alt=json")
.then((data)=>{
    console.log(data)

    ////put projects in a varaiable
    const rawProjects = data.feed.entry
    console.log(rawProjects)

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
console.log(projects)
//////////////////////////////////////////////////
//use jquery to render projects to page
/////////////////////////////////////////////////


        //code goes here


//////////////////////////////////////////////////

})




/////////////////////////////
//PULL DATA FROM BLOG FROM HEADLESS CSS
///////////////////////
