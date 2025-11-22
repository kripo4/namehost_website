let login = document.getElementById(`login`)
let uptime = document.getElementById(`uptime`)
let copy = document.getElementById(`copyright`)
let policy = document.getElementById(`policy`)
let usage = document.getElementById(`usage`)
let loginCard = document.getElementById('login');
let doorImg = document.getElementById('door');
let webImg = document.getElementById('web');
let buttonOrder = document.getElementById(`button`);

buttonOrder.addEventListener(`click`, function() {
    window.location.href = `./auth/index.html`
});


login.addEventListener(`click`, function() {
    window.location.href = `./auth/index.html`
});

uptime.addEventListener(`click`, function() {
    window.location.href = `https://vlez.lol/`
});

copy.addEventListener(`click`, function() {
    window.location.href = `https://t.me/crepero4ek`
});

policy.addEventListener(`click`, function() {
    window.location.href = `https://t.me/crepero4ek`
});

usage.addEventListener(`click`, function() {
    window.location.href = `https://t.me/crepero4ek`
});

loginCard.addEventListener('mouseenter', function () {
    doorImg.src = './assets/open.png';
});

loginCard.addEventListener('mouseleave', function () {
    doorImg.src = './assets/close.png';
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
