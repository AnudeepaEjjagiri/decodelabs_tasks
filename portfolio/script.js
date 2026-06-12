// Welcome Message
window.onload = function () {
    console.log("Portfolio Loaded Successfully");
};

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

});

// Live Clock
const clock = document.getElementById("clock");

function updateClock(){
    const now = new Date();
    clock.innerHTML = now.toLocaleString();
}

setInterval(updateClock,1000);

updateClock();

// Contact Form
document.querySelector("form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Submitted Successfully!");

});