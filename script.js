let loadMore = document.getElementById("loadmore");
let currentItems = 3;
let cards = document.querySelectorAll(".card");

loadMore.onclick = ()=>{
    for (let i = 0; i < currentItems; i++) {
        cards[i].style.display = "block";
    }
    currentItems += 3;

    if (currentItems == 22) {
        loadMore.style.display = "none";
    }
}

let icon = document.getElementById("icon");
let header = document.querySelector(".background");

icon.onclick = ()=>{
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    } else {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
}
let menuIcon = document.getElementById("icon-toggle");
let menuBox = document.querySelector(".menu-box");
let listItems = document.querySelectorAll(".text")

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("fa-xmark");
    if (menuIcon.classList.contains("fa-xmark")) {
        menuBox.classList.add("active")
    } else{
        menuBox.classList.remove("active")
    }
}

listItems.forEach((e)=>{
    e.onclick = ()=>{
        menuIcon.classList.remove("fa-xmark")
        menuBox.classList.remove("active")
    }
})
