!function(){var t=document.querySelector("button[data-start"),e=document.querySelector("button[data-stop"),n=null;var o=function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};e.setAttribute("disabled",""),t.addEventListener("click",(function(){n=setInterval((function(){o()}),1e3),e.removeAttribute("disabled"),t.setAttribute("disabled","")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.e23ec948.js.map
