/*global $*/
$(document).ready(function () {
    "use strict";
    
    $(".carousel").carousel({
        interval: 3000
    });
});
var cog = document.querySelector(".tool-box i"),
    
    colorBox = document.querySelector(".tool-box .color-box");

cog.onclick = function () {
    "use strict";
    
    colorBox.classList.toggle("hidden");
};

// nice scroll

$("html").niceScroll();

// change the color theme

var siteColor = document.getElementById("site"),
    myColor = document.querySelectorAll(".tool-box ul li");

myColor[0].onclick = function () {
    
    "use strict";
    
    siteColor.href = "css/default-color.css";
};
myColor[1].onclick = function () {
    
    "use strict";
    
    siteColor.href = "css/green-color.css";
};
myColor[2].onclick = function () {
    
    "use strict";
    
    siteColor.href = "css/red-color.css";
};
myColor[3].onclick = function () {
    
    "use strict";
    
    siteColor.href = "css/heavenly-color.css";
};

// remove the loading 

var sectionLoading = document.querySelector(".loading");

window.onload = function () {
    
    "use strict";
    
    $(".loading .loader").fadeOut(1000, function () {
        
        sectionLoading.parentElement.style.overflow = "auto";
        
        $(this).parent().fadeOut(1000, function () {
                        
            sectionLoading.remove();
        });
        
    });
};

// section button scroll To Top

window.onscroll = function () {
    
    "use strict";
    
    var myButton = document.querySelector(".scroll-top-button");
    
    if (window.scrollY >= 600) {
    
        myButton.style.display = "block";
        
        myButton.onclick = function () {
                
            window.scrollTo(0, 0);
        };
    
    } else {
        
        document.querySelector(".scroll-top-button").style.display = "none";
    }
};