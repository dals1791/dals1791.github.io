# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|:----:|:---:|:---:|
|Day 1| Project Description | Complete|
|Day 1| Wireframes / Priority Matrix / Timeline | Complete|
|Day 1| Project Approval| Complete|
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes |Complete|
|Day 5| Final Touches | Complete|
|Until presentation| Create/polish projects| Complete|
|04Jan2021| Present | Complete|

## Project Description

This project will create my personal portfolio website which will be  used to showcase my work, my skills, and my passions. My portfolio will be built using HTML, CSS, and JavaScript/JQuery. My goal will be to provide a simple but responsive site with a relaxing visual themes. The design will be built to be mobile first but will provide same experience on any screen.  

## Google Sheet

[Portfolio Project Spreadsheet](https://docs.google.com/spreadsheets/d/1JQe3WnWfyv0d4VWgn05YJ9coxAwbORPnEsrYjcAJqgI/edit?usp=sharing) 

## Portfolio I want to Emulate

Link To Site  | One Thing I'd Like To Incorporate | 
|:-------------:|:-------------------------------:|
|[http://robertdiscipio.surge.sh/](http://robertdiscipio.surge.sh/) | Project/skills icons |
|[http://www.ryan-hanson.com/](http://www.ryan-hanson.com/)| Projects animations and layout|
| [http://eloise-ress-barrow.surge.sh/#writing](http://eloise-ress-barrow.surge.sh/#writing) | Simple but responsive nav bar
| [https://zanegriffin.github.io/portfolioSite/](https://zanegriffin.github.io/portfolioSite/)| Glow affect to titles and visuals. Potentially a dark mode instead of the main styling.
| [https://www.armadaskis.com/en-us](https://www.armadaskis.com/en-us)| Section transitions|
---
## Wireframes
 
- [Mobile](https://res.cloudinary.com/duzffhg65/image/upload/v1608510148/PXL_20201220_234648912_vk0hqd.jpg)

- [Mobile - Figma](https://www.figma.com/file/4ksplYXn12ZJ36s7ghLnTx/SD-Portfolio-Mobile?node-id=0%3A1)

- [Desktop](https://res.cloudinary.com/duzffhg65/image/upload/v1608510142/PXL_20201221_000914766_yygu5b.jpg)

## Time/Priority Matrix 
[Time and Prioirty Matrix](https://res.cloudinary.com/duzffhg65/image/upload/v1608528242/Screen_Shot_2020-12-20_at_11.23.42_PM_wg95ms.png)
 
#### MVP
- Layout/Structure - Responsive Design, Mobile First

	* Use CSS Grid, Flexbot

- Pulls project data from API
- Incorporates About section, Projects section, and Contact form.
- Hamburger Icon with JS dropdown functionality
- Projects and project cards

#### PostMVP 
- Different color schemes, dark mode capability
- Project Card transitions
- Create additional projects
- polish current projects

## Functional Components

#### MVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| NavBar - Mobile | H | 1hr | 3hr |
| Hamburger icon an drop down functionality | H | 3hr |  4hr |
| About me Section| H | 2hr | 0.5hr |  
| Skills Section | H | 1hr|  0.5hr | 
| Skills Icons | L |1 hr|0.5hr|
| Projects Section| H | 3hr | 2hr|
| Project cards | M | 3hr | 3hr|
| Contact section|H|3hr| 3hr|
| Working with API | H | 3hrs| 3hr| 
| Responsive | H | 5hr | 3hr | 
| Total | H | 25hrs| 21.5hrs |
#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Card Hover/animation | L | 3hr | 0 hr |
| dark mode | L | 3hr | 0hr |
| black jack game using JS/web components| M | 4hr | 10hr |
| Flexbox/Grid Project | M | 4hr | 0hr |
| Blog | L | 4hr | 0hr |
| Other CSS Framework - TBD | VL | 4hr | 0hr |
| Total | H | 22hrs| 10hrs |
## Additional Libraries

- Bootstrap

## Code Snippet
```
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
```
## Issues and Resolutions

- Issue: Bootstrap component JS not working
	* Resolution: Bootstrap v5.0 style and JS links did not match links provided on Bootstrap Website. BootStrap v5.0 still in Beta. 
- Issue: Github pages not importing js files. 
	* Resolution: Repo folder eas titled "JS" but index.HTML was trying to link through a folder "js". Removing the "JS" folder and pushing a new "js" folder to repo solved the issue. 
