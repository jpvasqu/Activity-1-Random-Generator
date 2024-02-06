let dogImage = document.getElementById('dogImage');
let btn = document.getElementById('new_dog_btn');

btn.addEventListener('click', randomDogImage);
const url="https://dog.ceo/api/breeds/image/random";
document.getElementById("dogImage").innerHTML=randomDogImage();
function randomDogImage() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        dogImage.innerHTML = `<img src ="${data.message}"/>`;
        console.log(data.message);
        
    })
}