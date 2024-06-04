function toggle() {
    
    let showMoreBtn = document.getElementsByClassName("button")[0]
    let showMoreText = document.getElementById("extra")

   if(showMoreText.style.display == 'none'){
    showMoreText.style.display = "block"
    showMoreBtn.textContent = "Less"
   }else{
    showMoreText.style.display = 'none'
    showMoreBtn.textContent = "More"
   }    
}