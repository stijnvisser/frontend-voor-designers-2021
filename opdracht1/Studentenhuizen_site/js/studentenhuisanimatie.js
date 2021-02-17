/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/*bron: https://www.youtube.com/watch?v=LB70WzwBCTo */

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {

    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById('navbar').style.top = "0";
    } else {
        document.getElementById('navbar').style.top = "-70px";
    }

    prevScrollpos = currentScrollpos;

};


/*bron: https://www.w3schools.com */

var openMenu1 = document.querySelector('#openbtn');
var closeMenu1 = document.querySelector('#closebtn');

var openMenu2 = document.querySelector('#openbtn');
var closeMenu2 = document.querySelector('#closebtn');

var openMenu3 = document.querySelector('#openbtn');
var closeMenu3 = document.querySelector('#closebtn');

var openMenu4 = document.querySelector('#openbtn');
var closeMenu4 = document.querySelector('#closebtn');

function openNav1() {
    document.getElementById("mySidenav1").style.width = "250px";
    document.querySelector(".main").style.marginRight = "250px";
    document.body.style.boxShadow = "rgba(0,0,0,0.4)";
}

function closeNav1() {
    document.getElementById("mySidenav1").style.width = "0";
    document.querySelector(".main").style.marginRight = "0";
    document.body.style.boxShadow = "white";
}

function openNav2() {
    document.getElementById("mySidenav2").style.width = "250px";
    document.querySelector(".main").style.marginRight = "250px";
    document.body.style.boxShadow = "rgba(0,0,0,0.4)";
}

function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
    document.querySelector(".main").style.marginRight = "0";
    document.body.style.boxShadow = "white";
}

function openNav3() {
    document.getElementById("mySidenav3").style.width = "250px";
    document.querySelector(".main").style.marginRight = "250px";
    document.body.style.boxShadow = "rgba(0,0,0,0.4)";
}

function closeNav3() {
    document.getElementById("mySidenav3").style.width = "0";
    document.querySelector(".main").style.marginRight = "0";
    document.body.style.boxShadow = "white";
}

function openNav4() {
    document.getElementById("mySidenav4").style.width = "250px";
    document.querySelector(".main").style.marginRight = "250px";
    document.body.style.boxShadow = "rgba(0,0,0,0.4)";
}

function closeNav4() {
    document.getElementById("mySidenav4").style.width = "0";
    document.querySelector(".main").style.marginRight = "0";
    document.body.style.boxShadow = "white";
}



openMenu1.addEventListener("click", openNav1);
closeMenu1.addEventListener("click", closeNav1);

openMenu2.addEventListener("click", openNav2);
closeMenu2.addEventListener("click", closeNav2);

openMenu3.addEventListener("click", openNav3);
closeMenu3.addEventListener("click", closeNav3);

openMenu4.addEventListener("click", openNav4);
closeMenu4.addEventListener("click", closeNav4);

