M.AutoInit();
document.addEventListener('DOMContentLoaded', async function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:"right",draggable:true,preventScrolling:true,inDuration:600,outDuration:600});
    let nav = document.getElementById("navbar");
    let navitems = document.getElementById('nav-items');
    if(window.scrollY >100){
        nav.style.backgroundColor = "#000000";
        nav.classList.add("shadow");
    }
    document.onscroll = ()=>{
        if(window.scrollY >100){
            nav.style.backgroundColor = "#000000";
            nav.classList.add("shadow");
        }else{
            nav.style.backgroundColor = ""
        }
    }

    let professionEl = document.getElementById("profession-header");
    
    async function typeWriter(text,element,delay=100){
        const letters= text.split("");
        let i=0;
        while(i<letters.length){
            await delayFunction(delay);
            element.append(letters[i]);
            i++;
        }
        return;
    }

    async function deleteWriter(element,delay=100){
        const letters= element.innerHTML.split("");
        
        while(letters.length>0){
            await delayFunction(delay);
           letters.pop();
           element.innerHTML=letters.join("")
        }
    }

    function delayFunction(ms){
        return new Promise(resolve=>setTimeout(resolve, ms))
    }

    let professionRoots = ["DEVELOPER","DESIGNER"];
    let text = "DEVELOPER"
    await delayFunction(1000);
    await deleteWriter(professionEl,150);

    let count = 0;
    while(true){
        if(count>1){
            count=0;
        }
        await typeWriter(professionRoots[count],professionEl,200);
        await delayFunction(500);
        await deleteWriter(professionEl,150);
        await delayFunction(500)
        count++;
    }


   
});

window.onload=()=>{
    //Goitseone Kau-JS for sliding images
    const sliders = document.querySelectorAll(".projects-s>div.slide>.image");
    const btnLeft = document.getElementById("left");
    const btnRight = document.getElementById("right");
   
    let activeSlide = 0;
  //Function to slide images or set the acvtive image
    function setImageSlide(){
    sliders.forEach((slides)=>slides.classList.remove("active"));//get all related elements as a list/array and clear the active class
    sliders[activeSlide].classList.add("active");//get the specific element that needs to be shown from list and add active class
    }

    //Function to increase activeSlide and navigate to next image
    //untill it reaches last index and change activeSlide to first index, to transition to next first image
    function nextSlide(){
    activeSlide++;
    if(activeSlide>sliders.length-1){
        activeSlide=0;
    }
    }

    //Function to decrease activeSlide and navigate to previous image
    //untill it reaches first index and change activeSlide to last index, to transition to previous last image
    function prevSlide(){
    activeSlide--;
    if(activeSlide<0){
        activeSlide=sliders.length-1;
    }
    }

  //add onclick event for the right button
  //place nextSlide function-N.B must be before setImageSlide function to update the activeSlide vaariable for smooth transition
    btnRight.onclick = ()=>{
    nextSlide();
    setImageSlide();
    }

  //add onclick event for the left button
  //place prevSlide function-N.B must be before setImageSlide function to update the activeSlide vaariable for smooth transition
    btnLeft.onclick = ()=>{
    prevSlide();
    setImageSlide();
    }



    let image = document.querySelectorAll(".projects>div.slide>.image");
    let slide = document.querySelector(".slide");
    image.forEach((imgDiv)=>{
      imgDiv.addEventListener("click",()=>{
        if(slide.style.animationPlayState=="paused"){
          slide.style.animationPlayState = "running";
        }else{
          slide.style.animationPlayState= "paused";
        }
      });
      
    });

    if(window.innerWidth<=850){
      slide.style.animation
    }

  }