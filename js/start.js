function init() {
    let button = document.getElementById("header__burger"),
        menu = document.getElementById("header__menu"),
        searchButton = document.getElementById("header__menu__search__button"),
        search = document.getElementById("header__menu__search"),
        inp = document.getElementById("header__menu__search__input");

    button.addEventListener("click", function () {
        if (menu.className.indexOf("mobile") == -1) {
            menu.classList.add("header__menu--mobile");
        } else {
            menu.classList.remove("header__menu--mobile");
        }
    });
    searchButton.addEventListener("click", function () {
        if (search.className.indexOf("tablet") == -1) {
            search.classList.add("header__menu__search--tablet");
            inp.classList.add("header__menu__search__input--visible");
        } else {
            search.classList.remove("header__menu__search--tablet");
            inp.classList.remove("header__menu__search__input--visible");
        }
    });
    updateFilters();
    updateBag();
}
function updateFilters() {
    let fitlers = document.getElementsByClassName("filter__select");
    for (let i = 0; i < fitlers.length; i++) {
        fitlers[i].addEventListener("change", function (e) {
            if (e.target.value != "Not selected") {
                let elem = e.target.parentNode.parentNode.parentNode.getElementsByClassName("filter__value");
                elem.item(0).innerText = e.target.value;
                elem[0].parentNode.classList.add("filter__info--checked");
                elem[0].parentNode.getElementsByClassName("filter__title")[0].classList.add("filter__title--checked");
            } else {
                let elem = e.target.parentNode.parentNode.parentNode.getElementsByClassName("filter__value");
                elem.item(0).innerText = "";
                elem[0].parentNode.classList.remove("filter__info--checked");
                elem[0].parentNode.getElementsByClassName("filter__title")[0].classList.remove("filter__title--checked");
            }
        })
    }
}
function updateBag() {
    let button = document.getElementById("item__button");


    button.addEventListener("click", function () {
        let currentPrice = +document.getElementById("bag_totalPrice").innerText;
        let currentQuantity = +document.getElementById("bag_totalQuantity").innerText;
        let itemPrice = +document.getElementById("item__price").innerText.slice(1);
        console.log(itemPrice);
        document.getElementById("bag_totalPrice").innerText = (currentPrice + itemPrice).toFixed(2);
        document.getElementById("bag_totalQuantity").innerText = currentQuantity + 1;
    })
}
init();