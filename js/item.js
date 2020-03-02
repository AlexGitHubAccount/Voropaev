(function updateBag() {
    let button = document.getElementById("item__button");
    

    button.addEventListener("click", function () {
        let currentItem = document.getElementById("item__heading").innerText;
        let currentPrice = +document.getElementById("bag_totalPrice").innerText;
        let currentQuantity = +document.getElementById("bag_totalQuantity").innerText;
        let itemPrice;
        for(let i = 0;i<window.catalog.length;i++){
            if(window.catalog[i].title.indexOf(currentItem)!=-1){
                itemPrice = window.catalog[i].discountedPrice;
            }
        }
        document.getElementById("bag_totalPrice").innerText = (currentPrice + itemPrice).toFixed(2);
        document.getElementById("bag_totalQuantity").innerText = currentQuantity + 1;
    })
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