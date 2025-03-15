

const container = document.getElementById("container"),
    scoreDisplay = document.getElementById("score"),
    goldItem = document.getElementById("leaf"),
    storeBtn = document.getElementById("store-icon"),
    shopOverlay = document.getElementById("shop-overlay"),
    alertOverlay = document.getElementById("alert-overlay"),
    store = document.getElementById('store'),
    alertContent = document.getElementById("alert"),
    addClick = document.querySelectorAll(".add-click"),
    autoClick = document.querySelectorAll(".auto-click");


let score = parseInt(localStorage.getItem('score')) || 0,
    clicksPerClick = parseInt(localStorage.getItem('clicksPerClick')) || 1,
    clicksPerSec = parseInt(localStorage.getItem('clicksPerSec')) || 0,
    abbScore = score;

goldItem.addEventListener("click", e => {
    score += clicksPerClick;

})
setInterval(() => {
    scoreDisplay.innerText = abbScore;
    localStorage.setItem('score', score);
    if (score < 1e3) {
        abbScore = score
    } else if (score >= 1e3 && score < 1e6) {
        abbScore = score
    } else if (score >= 1e6 && score < 1e9) {
        abbScore = (score / 1e6).toFixed(1) + "M"
    } else if (score >= 1e9 && score < 1e12) {
        abbScore = (score / 1e9).toFixed(1) + "B"
    } else if (score >= 1e12 && score < 1e15) {
        abbScore = (score / 1e12).toFixed(1) + "T"
    } else if (score >= 1e15 && score < 1e18) {
        abbScore = (score / 1e15).toFixed(1) + "q"
    } else if (score >= 1e18 && score < 1e21) {
        abbScore = (score / 1e18).toFixed(1) + "Q"
    } else if (score >= 1e21 && score < 1e24) {
        abbScore = (score / 1e21).toFixed(1) + "s"
    } else if (score >= 1e24 && score < 1e27) {
        abbScore = (score / 1e24).toFixed(1) + "S"
    } else if (score >= 1e27 && score < 1e30) {
        abbScore = (score / 1e27).toFixed(1) + "o"
    } else if (score >= 1e30 && score < 1e33) {
        abbScore = (score / 1e30).toFixed(1) + "n"
    } else if (score >= 1e33 && score < 1e36) {
        abbScore = (score / 1e33).toFixed(1) + "d"
    } else {
        abbScore = " You Broke The Game"
    }
}, 100)
setInterval(() => {
    score += clicksPerSec
}, 1000)

storeBtn.addEventListener("click", e => {
    store.classList.toggle("active")
    shopOverlay.classList.toggle("active")
})
shopOverlay.addEventListener("click", e => {
    store.classList.toggle("active")
    shopOverlay.classList.toggle("active")
})
addClick.forEach(product => {
    product.addEventListener("click", e => {
        if (score < Number(product.dataset.price)) {
            alertContent.classList.toggle("active")
            alertOverlay.classList.toggle("active")
        } else {
            clicksPerClick += Number(product.dataset.value)
            score -= Number(product.dataset.price)
            localStorage.setItem('clicksPerClick', clicksPerClick);

        }
    })
});
autoClick.forEach(product => {
    product.addEventListener("click", e => {
        if (score < Number(product.dataset.price)) {
            alertContent.classList.toggle("active")
            alertOverlay.classList.toggle("active")
        } else {
            clicksPerSec += Number(product.dataset.value)
            score -= Number(product.dataset.price)
            localStorage.setItem('clicksPerSec', clicksPerSec);
        }
    })
});
alertOverlay.addEventListener("click", e => {
    alertContent.classList.toggle("active")
    alertOverlay.classList.toggle("active")
})



function toggleRewardAd() {
    GamePix.rewardAd().then(function (res) {

        if(res.success){
            alert("hi");
        } else {
            alert("boooo");
        }
    })
}