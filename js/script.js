let fullImgBox =document.getElementById("fullImgBox");
let fullImg =document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display = "none";
}

// copy right

const year = new Date().getFullYear();
const yearText = document.querySelector('.year');
yearText.innerHTML = year;

// end of copy right