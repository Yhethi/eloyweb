"use strict";

let span1 = document.getElementById('span1');
let reflejo = document.getElementById('reflejo');

setTimeout(() => {
    span1.click();
        empezar();
}, 1000);
function empezar(e) {
    setTimeout(() => {
        span1.textContent = "Gian";
        reflejo.textContent = "Gian";
        setTimeout(() => {
            span1.textContent = "Y";
            reflejo.textContent = "Y";
            setTimeout(() => {
                span1.textContent = "Deiby";
                reflejo.textContent = "Deiby";
                setTimeout(() => {
                    span1.textContent = "Hola";
                    reflejo.textContent = "Hola";
                    empezar(e);
                }, 1000);
            }, 1000);
        }, 300);
    }, 1000);
}
