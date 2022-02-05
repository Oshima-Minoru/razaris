function menuClick(x) {
    x.classList.toggle('menu-open');
    var menu = document.getElementsByClassName('menu')
    var submenu = menu[0].firstElementChild.lastElementChild;
    if (x.classList.contains('menu-open')) {
        menu[0].classList.add('menu-main-open');
    } else {
        menu[0].classList.remove('menu-main-open')
        submenu.style.height = null;
    }
}

function menuClose() {
    var menuBtn = document.getElementsByClassName('menu-btn');
    var menu = document.getElementsByClassName('menu')
    var submenu = menu[0].firstElementChild.lastElementChild;
    if (menuBtn[0].classList.contains('menu-open')) {
        menuBtn[0].classList.remove('menu-open')
        menu[0].classList.remove('menu-main-open');
        submenu.style.height = null;
    }
}


$( ".faq-q" ).click(function() {
    $(this).parents().eq(0).find(".faq-a").slideToggle();

    if($(this).parents().eq(0).hasClass("faq-show"))
        $(this).parents().eq(0).removeClass("faq-show");
    else
        $(this).parents().eq(0).addClass("faq-show");
});