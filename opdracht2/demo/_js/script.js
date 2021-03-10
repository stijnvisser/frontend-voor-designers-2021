/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('bladeren js');

    var fadeIn = document.getElementById('fadeIn1')

function fadeOut() {
    fadeIn.style.opacity = '1';
    
}
    fadeIn.addEventListener("click", fadeOut);