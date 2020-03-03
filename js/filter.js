(function updateFilters() {
    //------------------desctop filters-------------
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
    //---------------mobile filters----------------
    let button = document.getElementById("filter__burger");
    let bar = document.getElementById("filters-bar")
    let filters = document.getElementById("filter-dropdown--mobile");
    bar.addEventListener("click", function () {
        if (filters.className.indexOf("visible") == -1) {
            filters.classList.add("filter-dropdown--visible");
            button.innerText = "×";
            button.classList.add("filter__burger--close");
        } else {
            filters.classList.remove("filter-dropdown--visible");
            button.innerText = "≡";
            button.classList.remove("filter__burger--close");
        }
    });
    filters.addEventListener("click", function (event) {
        if (event.target.className.indexOf("filter-dropdown__element") != -1 && event.target.className.indexOf("selected") == -1) {
            let text = event.target.innerText;
            let elements = event.target.parentNode.children;
            let type = event.target.parentNode.dataset.type;
            let str = document.getElementById("filters-bar__" + type.toLowerCase());
            if (text != "Not selected") {
                str.innerText = text;
                str.classList.add("filters-bar__element--highlighted");
            }else{
                str.classList.remove("filters-bar__element--highlighted");
                switch(type){
                    case "fashion":
                    str.innerText = "Fashion";
                    break;
                    case "type":
                    str.innerText = "Product type";
                    break;
                    case "color":
                    str.innerText = "Color";
                    break;
                    case "brand":
                    str.innerText = "Brand";
                    break;
                    case "size":
                    str.innerText = "Size";
                    break;
                    case "range":
                    str.innerText = "Price range";
                    break;
                }
            }
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("filter-dropdown__element--notselected");
                elements[i].classList.remove("filter-dropdown__element--selected");
            }
            if (text != "Not selected") {
                event.target.classList.add("filter-dropdown__element--selected");
            } else {
                event.target.classList.add("filter-dropdown__element--notselected")
            }
        }
    });
})();