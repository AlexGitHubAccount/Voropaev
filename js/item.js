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