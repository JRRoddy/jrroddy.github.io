
import { parseSkillViews } from "./SkillViewManagement.js";

const videos = document.getElementsByTagName("video"); 

const projectSkillItem = document.getElementsByClassName("project-skills-item")

const skillViews = document.getElementsByClassName("skills-view")

const skillViewExitButtons = document.getElementsByClassName("X-button-container")

let currentSkillViewId = ""


function skillViewExit(event)
{
    console.log(currentSkillViewId)
  
     
    skillViewMap.get(currentSkillViewId).classList.remove("skill-view-show")


}

for(let i = 0; i< skillViewExitButtons.length; i++)
{
 
     skillViewExitButtons[i].addEventListener("click",skillViewExit)
      

}


let skillViewSections = new Map
([
    ["technical-skills-view","Programming Languages"]

])
let skillViewNames = new Map
([
    ["technical-skills-view",["BluePrint","C++"]]

])

let skillViewMap = new Map();







for(let i = 0; i< skillViews.length;i++)
{
     console.log("adding skill view at" + i)
     let skillView = skillViews[i];
     
     skillViewMap.set(skillView.id,skillView); 
     


}


for(let i = 0; i < projectSkillItem.length;i++ )
{
   projectSkillItem[i].addEventListener("click",viewSkills); 
   


}

function viewSkills(event)
{
   currentSkillViewId = event.currentTarget.id
   console.log(event.currentTarget.id)
   if(skillViewMap.has(currentSkillViewId)){
        console.log("id found")
        
        skillViewMap.get(currentSkillViewId).classList.add("skill-view-show") 
        event.target.set 
        
        return;
   }
  
    console.log("id not found")

     


   




}




function clickFullScreen(event){
   
    event.target.requestFullscreen()
    
}


function fullScreenChange(event)
{
   
      if(document.fullscreenElement == null && event.target.className == "project-video" )
      {
            console.log("video was exiting full screen")

            event.target.pause();
      }
     
     

}


for( let i = 0; i < videos.length;i++ ){
   
    videos[i].addEventListener("click",clickFullScreen)
    videos[i].addEventListener("fullscreenchange",fullScreenChange)
    
}



