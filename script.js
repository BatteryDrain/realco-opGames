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

NAMES = ["Storebound",
"Long Drive North",
"Gas Station Manager",
"Beat Around The Bush",
"SAND",
"Space Engineers 2",
"DuneCrawl",
"Lost Skies",
"Nuclear Nightmare",
"REPO",
"Begone Beast",
"Outbound",
"Squirreled Away",
"Forever Skies",
"Jump Ship",
"StarRupture",
"PACS",
"over the hill",
"Dune Awakening"];

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

const games = document.getElementById("games");

for(i = 0; i < NAMES.length; i++){
    fig = document.createElement('figure');
    
    title = document.createElement('figcaption');
    title.innerHTML = NAMES[i];
    fig.appendChild(title)

    image = document.createElement('img');
    image.src = IMGS[i];
    image.alt = NAMES[i];
    fig.appendChild(image);

    but = document.createElement('button');
    but.innerHTML = "learn more";
    fig.appendChild(but);

    games.appendChild(fig);
}

b1.addEventListener("click", function(){
    console.log("b1 clicked");
    window.open("https://store.steampowered.com/app/3417410/Storebound/https://store.steampowered.com/app/3417410/Storebound/","_blank");
});
b2.addEventListener("click", function(){
    console.log("b2 clicked");
    window.open("https://store.steampowered.com/app/3179350/Long_Drive_North_CoOp_RV_Simulator/","_blank");
});
b3.addEventListener("click", function(){
    console.log("b3 clicked");
    window.open("https://store.steampowered.com/app/3044440/Gas_Station_Manager/","_blank");
});
b4.addEventListener("click", function(){
    console.log("b4 clicked");
    window.open("https://store.steampowered.com/app/3099730/Beat_Around_The_Bush/","_blank");
});
b5.addEventListener("click", function(){
    console.log("b5 clicked");
    window.open("https://store.steampowered.com/app/1431300/Sand/","_blank");
});
b6.addEventListener("click", function(){
    console.log("b6 clicked");
    window.open("https://store.steampowered.com/app/1133870/Space_Engineers_2/","_blank");
});
b7.addEventListener("click", function(){
    console.log("b7 clicked");
    window.open("https://store.steampowered.com/app/1833200/DuneCrawl/","_blank");
});
b8.addEventListener("click", function(){
    console.log("b8 clicked");
    window.open("https://store.steampowered.com/app/1931180/Lost_Skies/","_blank");
});
b9.addEventListener("click", function(){
    console.log("b9 clicked");
    window.open("https://store.steampowered.com/app/2909110/Nuclear_Nightmare/","_blank");
});
b10.addEventListener("click", function(){
    console.log("b10 clicked");
    window.open("https://store.steampowered.com/app/3241660/REPO/","_blank");
});
b11.addEventListener("click", function(){
    console.log("b11 clicked");
    window.open("https://store.steampowered.com/app/2192380/Begone_Beast/","_blank");
});
b12.addEventListener("click", function(){
    console.log("b12 clicked");
    window.open("https://store.steampowered.com/app/2681030/Outbound/","_blank");
});
b13.addEventListener("click", function(){
    console.log("b13 clicked");
    window.open("https://store.steampowered.com/app/2977620/Squirreled_Away/","_blank");
});
b14.addEventListener("click", function(){
    console.log("b14 clicked");
    window.open("https://store.steampowered.com/app/1641960/Forever_Skies/","_blank");
});
b15.addEventListener("click", function(){
    console.log("b15 clicked");
    window.open("https://store.steampowered.com/app/1757300/Jump_Ship/","_blank");
});
b16.addEventListener("click", function(){
    console.log("b16 clicked");
    window.open("https://store.steampowered.com/app/1631270/StarRupture/","_blank");
});
b17.addEventListener("click", function(){
    console.log("b17 clicked");
    window.open("https://store.steampowered.com/app/3079190/PACS__Post_Apocalypse_Courier_Service_Coop_Delivery_Simulator/","_blank");
});
b18.addEventListener("click", function(){
    console.log("b18 clicked");
    window.open("https://store.steampowered.com/app/2929250/over_the_hill/","_blank");
});
b19.addEventListener("click", function(){
    console.log("b19 clicked");
    window.open("https://store.steampowered.com/app/1172710/Dune_Awakening/","_blank");
});
