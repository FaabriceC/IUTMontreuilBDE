const navButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector(".navBarre")

navButton.addEventListener("click", toggleNav)

function toggleNav(){
    navButton.classList.toggle("active")
    navigation.classList.toggle("active")
}