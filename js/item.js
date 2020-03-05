(function updateBag() {
    let button = document.getElementById("item__button");
    button.addEventListener("click", function () {
        let currentBag = JSON.parse(localStorage.getItem("bag")) || [];
        let currentItem = document.getElementById("item__heading").innerText;
        let currentPrice = +document.getElementById("bag_totalPrice").innerText;
        let currentQuantity = +document.getElementById("bag_totalQuantity").innerText;
        let size = document.querySelector("input[name=item__size]:checked + label").innerText;
        let color = document.querySelector("input[name=item__color]:checked + label").innerText;
        let itemPrice;
        for(let i = 0;i<window.catalog.length;i++){
            if(window.catalog[i].title.indexOf(currentItem)!=-1){
                itemPrice = window.catalog[i].discountedPrice;
                let current = JSON.parse(JSON.stringify(window.catalog[i]));
                current.colors = [color];
                current.sizes = [size];
                currentBag.push(current);
                localStorage.setItem("bag", JSON.stringify(currentBag));
            }
        }
        document.getElementById("bag_totalPrice").innerText = (currentPrice + itemPrice).toFixed(2);
        document.getElementById("bag_totalQuantity").innerText = currentQuantity + 1;
        localStorage.setItem("price",(currentPrice + itemPrice).toFixed(2));
        localStorage.setItem("quantity", currentQuantity + 1);
    });
})();
(function switchPhoto(){
    let thumbs = document.getElementsByClassName("item__thumb");
    let fullImages = document.getElementsByClassName("item__content__img");
    for(let i = 0; i<thumbs.length; i++){
        thumbs[i].addEventListener("click",function(){
            for(let j = 0;j<thumbs.length;j++){
                if(thumbs[j].children[1].className.valueOf("item__content__selected--visible")!=0){
                    thumbs[j].children[1].classList.remove("item__content__selected--visible");
                    fullImages[j].classList.remove("item__content__img--visible");
                }
            }
            thumbs[i].children[1].classList.add("item__content__selected--visible");
            fullImages[i].classList.add("item__content__img--visible");
        })
    }
})();