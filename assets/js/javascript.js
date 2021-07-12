// nav share button 
const BTN = document.getElementById("closeBtn")
const nav = document.getElementById('nav');
// add click on btn and call function
BTN.addEventListener("click", Notification)

function Notification() {
    const Notification = document.getElementById("notifiHIDE")
    Notification.style.display = "none"
}

window.addEventListener('scroll', () =>{
   if(window.pageYOffset >= 85){
       nav.classList.add('animatedNav')
   }
   else{
    nav.classList.remove('animatedNav')

   }
})

// nav share button