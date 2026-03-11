
let gridItems = document.querySelectorAll("#grid-item");



function gridItemMouseEnter(event){
    
    console.log("hover enter")

    event.target.querySelector(".item-title").classList.add("hide")
    event.target.querySelector(".item-desc").classList.add("hide")
    event.target.querySelector(".project-link").classList.remove("hide")
    event.target.querySelector(".project-image").classList.add("out-of-focus")

}

function gridItemMouseLeave(event){
      
    console.log("hover leave")
   
    event.target.querySelector(".item-title").classList.remove("hide")
    event.target.querySelector(".item-desc").classList.remove("hide")
    event.target.querySelector(".project-link").classList.add("hide")
    event.target.querySelector(".project-image").classList.remove("out-of-focus")
    


}

console.log(gridItems.length)

for(let i = 0; i < gridItems.length; i++)
{


  gridItems[i].addEventListener("mouseenter",gridItemMouseEnter);     
  gridItems[i].addEventListener("mouseleave",gridItemMouseLeave);

}