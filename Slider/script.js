const csgo = document.getElementById("csgo");
const gp1 = document.getElementById("gp1");

csgo.addEventListener("click", () => {
    gp1.style.display = "block";
    gp2.style.display = "none";
    gp3.style.display = "none";
});



const pubg = document.getElementById("pubg");
const gp2 = document.getElementById("gp2");

pubg.addEventListener("click", () => {
    gp1.style.display = "none";
    gp2.style.display = "block";
    gp3.style.display = "none";
});



const rainbow = document.getElementById("rainbow");
const gp3 = document.getElementById("gp3");

rainbow.addEventListener("click", () => {
    gp1.style.display = "none";
    gp2.style.display = "none";
    gp3.style.display = "block";
});
