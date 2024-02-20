// setInterval(() => {
//     let date = new Date(),
//     h = date.getHours(),
//     m = date.getMinutes(),
//     s = date.getSeconds(),
//     ampm = "AM";

//     if(h >= 12){
//         h = h - 12;
//         ampm = "PM";
//     }

//     h = h == 0 ? h = 12 : h;
//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;

//     console.log(`${h}:${m}:${s} ${ampm}`);
//     currentTime.innerText = `${h}:${m}:${s} ${ampm}`;  // Output: 14:26:49
// }, 1000);

// function details_spes(){
//     let hidden_details = document.getElementById("hidden_details");
//     hidden_details.innerHTML = "<p>Pour savoir de quoi je suis capable</p>";
// }

function details_spes(){
    let name = document.getElementById("hidden_details");
    if (name.style.display == "none")  {
        name.style.display = "block";
    } else {
        name.style.display = "none"; 
    }
}

var change_mode = function() {
    const toggle = document.getElementById("toggleDark");
    const body = document.querySelector("body");
    toggle.classList.toggle("bi-moon");
    if (toggle.classList.toggle("bi-brightness-high-fill")){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        body.style.transition = "2s";
    } else {
        body.style.backgroundColor = "#2b2b2b";
        body.style.color = "white";
        body.style.transition = "2s";
    }
};

function account(){
    alert("Fonctionnalité non disponible pour le moment")
}