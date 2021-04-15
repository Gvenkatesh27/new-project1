// $(document).on("click",".btn",function(params){
//     alert("vesath*");
// });


// let img = document.querySelector('img');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     img.src = 'jewwllery.jpg';
// })

var myImage = document.getElementById('mainImage');
var imageArray = ["jewwllery.jpg", "boys.jpg"];
var imageIndex = 1;

function changeImage(){
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
}