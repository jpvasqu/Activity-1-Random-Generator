function fetchCatImage(){
    
    let image = document.getElementById("cat-image");
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp=>resp.json())
    .then(json=>image.src=json[0].url)
  

}
function btnClick(){
    
    let button=document.getElementById("new_cat_btn");
    button.addEventListener('click', fetchCatImage);
    console.log("Working");
}

document.addEventListener("DOMContentLoaded",()=>{
    fetchCatImage();
    btnClick();
})