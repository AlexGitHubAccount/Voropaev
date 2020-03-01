function emptyBag() {
    let button = document.getElementById("bag-total__clear");
    let chechout = document.getElementById("bag-total__checkout");
    let bag = document.getElementById("bag-content");

    button.addEventListener("click", function () {
        bag.innerHTML = '<h2 class="bag__heading">Your shopping bag is empty. Use Catalog to add new items</h2>';
        document.getElementById("bag_totalPrice").innerText = "";
        document.getElementById("bag_totalQuantity").innerText = "0";
        document.getElementById("bag-total__pricemark").innerText = "0";
        document.getElementById("bag-total__discount").classList.add("bag-total__discount--hidden");
    });
    chechout.addEventListener("click", function () {
        bag.innerHTML = '<h2 class="bag__heading">Thank you for your purchase</h2>';
        document.getElementById("bag_totalPrice").innerText = "";
        document.getElementById("bag_totalQuantity").innerText = "0";
        document.getElementById("bag-total__pricemark").innerText = "0";
        document.getElementById("bag-total__discount").classList.add("bag-total__discount--hidden");
    });
}
function updateItem() {
    let bag = document.getElementById("bag-content");
    bag.addEventListener("click", function (event) {
        if (event.target.className.indexOf("bag-content__remove") != -1) {
            event.target.parentNode.parentNode.remove();
            updateTotal();
        }
        if(event.target.className.indexOf("bag-content__icon--plus") != -1) {
            event.target.parentNode.getElementsByClassName("bag-content__quantity")[0].innerText++;
            updateTotal();
        }
        if(event.target.className.indexOf("bag-content__icon--minus") != -1) {
            if(+event.target.parentNode.getElementsByClassName("bag-content__quantity")[0].innerText>1){
                event.target.parentNode.getElementsByClassName("bag-content__quantity")[0].innerText--;
                updateTotal();
            }else{
                event.target.parentNode.parentNode.parentNode.parentNode.remove();
                updateTotal();
                if(bag.children.length==0){
                    bag.innerHTML = '<h2 class="bag__heading">Your shopping bag is empty. Use Catalog to add new items</h2>';
                }
            }
            
        }
    })
}
function updateTotal() {
    let items = document.getElementsByClassName("bag-content__title");
    let totalPrice = 0;
    let totalQuantity = 0;

    for (let j = 0; j < items.length; j++) {
        for (let i = 0; i < window.catalog.length; i++) {
            if (items[j].innerText == window.catalog[i].title) {
                totalPrice += window.catalog[i].discountedPrice * items[j].parentNode.getElementsByClassName("bag-content__quantity")[0].innerText;
                totalQuantity += 1*items[j].parentNode.getElementsByClassName("bag-content__quantity")[0].innerText;
            }
        }

    }
    document.getElementById("bag_totalPrice").innerText = "£"+ totalPrice;
    document.getElementById("bag_totalQuantity").innerText =  totalQuantity;
    document.getElementById("bag-total__pricemark").innerText = "£"+ totalPrice;
}
emptyBag();
updateItem();