"use strict";document.addEventListener("DOMContentLoaded",function(){function e(e){function t(){m=document.createElement("span"),m.classList.add("hint"),m.innerHTML=a}function n(){setTimeout(function(){$(".hint").remove()},4e3)}var o,i,a,r,c,m,u=[],o=/^[0-9]{4,10}$/i;i=/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/i,r=document.getElementById("phone"),c=document.getElementById("email"),u=document.getElementsByClassName("form-input"),event.preventDefault(),u=[].slice.call(u),u.forEach(function(e){0===e.value.length&&(a="field must not be empty",t(),e.parentNode.insertBefore(m,e)),"phone"===e.id&&(r.value.match(o)||(a="field must be numeric",t(),e.parentNode.insertBefore(m,e))),"email"===e.id?c.value.match(i)||(a="field is not correct",t(),e.parentNode.insertBefore(m,e)):$("#form").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}),!1})}),n()}var t;$(".up-button").click(function(){var e=$(document).scrollTop(),t=e/1.73;$("body,html").animate({scrollTop:0},t)}),t=document.getElementById("registration"),t.addEventListener("click",e)});