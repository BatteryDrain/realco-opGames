LINKS = ["https://store.steampowered.com/app/3417410/Storebound/https://store.steampowered.com/app/3417410/Storebound/",
    "https://store.steampowered.com/app/3179350/Long_Drive_North_CoOp_RV_Simulator/",
    "https://store.steampowered.com/app/3044440/Gas_Station_Manager/",
    "https://store.steampowered.com/app/3099730/Beat_Around_The_Bush/",
    "https://store.steampowered.com/app/1431300/Sand/",
    "https://store.steampowered.com/app/1133870/Space_Engineers_2/",
    "https://store.steampowered.com/app/1833200/DuneCrawl/",
    "https://store.steampowered.com/app/1931180/Lost_Skies/",
    "https://store.steampowered.com/app/2909110/Nuclear_Nightmare/",
    "https://store.steampowered.com/app/3241660/REPO/",
    "https://store.steampowered.com/app/2192380/Begone_Beast/",
    "https://store.steampowered.com/app/2681030/Outbound/",
    "https://store.steampowered.com/app/2977620/Squirreled_Away/",
    "https://store.steampowered.com/app/1641960/Forever_Skies/",
    "https://store.steampowered.com/app/1757300/Jump_Ship/",
    "https://store.steampowered.com/app/1631270/StarRupture/",
    "https://store.steampowered.com/app/3079190/PACS__Post_Apocalypse_Courier_Service_Coop_Delivery_Simulator/",
    "https://store.steampowered.com/app/2929250/over_the_hill/",
    "https://store.steampowered.com/app/1172710/Dune_Awakening/"];

NAMES = [
    ["Storebound", 1, 0, 0],
    ["Long Drive North", 1, 0, 0],
    ["Gas Station Manager", 1, 1, 0],
    ["Beat Around The Bush", 1, 0, 0],
    ["SAND", 1, 0, 0],
    ["Space Engineers 2", 1, 0, 0],
    ["DuneCrawl", 1, 0, 0],
    ["Lost Skies", 1, 0, 0],
    ["Nuclear Nightmare", 1, 0, 0],
    ["REPO", 1, 0, 0],
    ["Begone Beast", 1, 0, 0],
    ["Outbound", 1, 0, 0],
    ["Squirreled Away", 1, 0, 0],
    ["Forever Skies", 1, 0, 0],
    ["Jump Ship", 1, 0, 0],
    ["StarRupture", 1, 0, 0],
    ["PACS", 1, 0, 0],
    ["over the hill", 1, 0, 0],
    ["Dune Awakening", 1, 0, 0]]; // name, windows, apple, linux

IMGS = ["assets/storebound.jpg",
    "assets/longdriven.jpg",
    "assets/gasstation.jpg",
    "assets/beatthebush.jpg",
    "assets/sand.jpg",
    "assets/space.jpg",
    "assets/DuneCrawl.jpg",
    "assets/lostskys.jpg",
    "assets/nnightmare.jpg",
    "assets/repo.jpg",
    "assets/beast.jpg",
    "assets/outbound.jpg",
    "assets/Squirreled.jpg",
    "assets/ForeverSkies.jpg",
    "assets/JumpShip.jpg",
    "assets/starrapture.jpg",
    "assets/pacs.jpg",
    "assets/overthehill.jpg",
    "assets/Duneawakening .jpg"
    ];
STATUS = ["coming",
    "coming ex",
    "demo",
    "full",
    "coming ex",
    "ex",
    "coming",
    "demo",
    "ex",
    "ex",
    "ex",
    "coming",
    "demo",
    "ex",
    "coming ex",
    "coming ex",
    "coming ex",
    "none",
    "ex"
    ];
ICONS = ["assets/Windows.svg.png","assets/Apple_white.svg.png","assets/Linux.svg.png"];
SYSTEM = "all";
let FIGURES = [];
let FILTER = "all";

const games = document.getElementById("games");

for (let i = 0; i < NAMES.length; i++) {
    setTimeout((index) => figBuilder(index), i * 100, i);
}

function figBuilder(i){
    fig = document.createElement('figure');
    fig.setAttribute("data-stat", STATUS[i]);
    fig.setAttribute("data-windows", NAMES[i][1]);
    fig.setAttribute("data-apple", NAMES[i][2]);
    fig.setAttribute("data-linux", NAMES[i][3]);
    
    title = document.createElement('figcaption');
    title.innerHTML = NAMES[i][0];
    fig.appendChild(title)

    image = document.createElement('img');
    image.src = IMGS[i];
    image.alt = NAMES[i][1] + " gameplay";
    fig.appendChild(image);

    but = document.createElement('button');
    but.innerHTML = "learn more";
    but.setAttribute("onclick", "goToLink(" + i + ")");
    fig.appendChild(but);

    div = document.createElement('div');
    div.classList.add("icon-container");
    for(j = 1; j < 4; j++){
        if(NAMES[i][j] === 1){
            supimg = document.createElement('img');
            supimg.src = ICONS[j - 1];
            supimg.alt = "Platform Icon";
            div.classList.add("icon");
            div.appendChild(supimg);
        }
    }
    fig.appendChild(div);

    games.appendChild(fig);

    if((i + 1) == NAMES.length){
        setFigures();
    }
}

function goToLink(number){
    console.log("button " + number + " clicked");
    window.open(LINKS[number],"_blank");
}

function setFigures(){
    FIGURES = document.querySelectorAll("figure");
    console.log(FIGURES);
}
const filter = document.getElementById("filter");

filter.addEventListener("change", () => {
    FILTER = filter.value;
    console.log(FILTER);

    for(i = 0; i < FIGURES.length; i++){
        if(FIGURES[i].classList.contains("hide")){
            FIGURES[i].classList.toggle("hide");
        }
    }
    if(FILTER == "none"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.stat != FILTER){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "coming ex"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.stat != FILTER){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "demo"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.stat != FILTER){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "ex"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.stat != FILTER){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "coming"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.stat != FILTER){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
    if(FILTER == "full"){
        for(i = 0; i < FIGURES.length; i++){
            if(FIGURES[i].dataset.stat != FILTER){
                FIGURES[i].classList.toggle("hide");
            }
        }
    }
});

