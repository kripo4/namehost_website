let login = document.getElementById(`login`)

login.addEventListener(`click`, function() {
    window.location.href = `./auth/index.html`
});

let uptime = document.getElementById(`uptime`)

uptime.addEventListener(`click`, function() {
    window.location.href = `https://vlez.lol/`
});

let copy = document.getElementById(`copyright`)

copy.addEventListener(`click`, function() {
    window.location.href = `https://t.me/crepero4ek`
});

let policy = document.getElementById(`policy`)

policy.addEventListener(`click`, function() {
    window.location.href = `https://t.me/crepero4ek`
});

let usage = document.getElementById(`usage`)

usage.addEventListener(`click`, function() {
    window.location.href = `https://t.me/crepero4ek`
});

let loginCard = document.getElementById('login');
let doorImg = document.getElementById('door');

loginCard.addEventListener('mouseenter', function () {
    doorImg.src = './assets/open.png';
});

loginCard.addEventListener('mouseleave', function () {
    doorImg.src = './assets/close.png';
});

let uptimeCard = document.getElementById('uptime');
let webImg = document.getElementById('web');

uptimeCard.addEventListener('mouseenter', function () {
    webImg.src = './assets/webW.png';
});

uptimeCard.addEventListener('mouseleave', function () {
    webImg.src = './assets/webB.png';
});

document.getElementById('favor-header').addEventListener('click', function () {
    document.getElementById('tariffs').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('favor-footer').addEventListener('click', function () {
    document.getElementById('tariffs').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('support-header').addEventListener('click', function () {
    document.getElementById('support').scrollIntoView({
        behavior: 'smooth'
    });
});
