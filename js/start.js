function init(){
    let button = document.getElementById("header__burger"),
    menu = document.getElementById("header__menu"),
    searchButton = document.getElementById("header__menu__search__button"),
    search = document.getElementById("header__menu__search"),
    inp = document.getElementById("header__menu__search__input");
    button.addEventListener("click", function(){
        if(menu.className.indexOf("mobile")==-1){
            menu.classList.add("header__menu--mobile");
        }else{
            menu.classList.remove("header__menu--mobile");
        }
    });
    searchButton.addEventListener("click", function(){
        if(search.className.indexOf("tablet")==-1){
            search.classList.add("header__menu__search--tablet");
            inp.classList.add("header__menu__search__input--visible");
        }else{
            search.classList.remove("header__menu__search--tablet");
            inp.classList.remove("header__menu__search__input--visible");
        }
    });
}
init();