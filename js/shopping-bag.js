
(function renderBag(){
    let container = document.getElementById("bag-content");
    let discount = document.getElementById("bag-total__discount");
    let bestOffer = JSON.parse(localStorage.getItem("bestOffer"));
    let bag = JSON.parse(localStorage.getItem("bag"));
    let bagList = [];
    if(bag){
    bagList = bagList.concat(bag);
    }
    if(bestOffer){
    bagList = bagList.concat(bestOffer)
    }
    if(!bestOffer){
        discount.classList.add("bag-total__discount--hidden")
    }
    bagList.filter(function(elem, index){
        let tmp = 1;
        for(let i = index+1;i<bagList.length;i++){
            if(elem.id===bagList[i].id&&elem.colors[0]===bagList[i].colors[0]&&elem.sizes[0]===bagList[i].sizes[0]){
                tmp++;
                bagList.splice(i,1);
                i--;
            }
        }  
        elem.quantity = tmp;  
    });
    let string = '';
    console.log(bagList);
    for(let i = 0; i < bagList.length; i++) {
        if(bagList[i].discountedPrice&&bagList[i].hasNew){
            let element = _.template(' <div class="bag-content__item"><div class="bag-content__wrapper bag-content__wrapper--image"><img class="bag-content__image" src=<%=thumbnail%> alt="<%=title%>" title="<%=title%>"> <span class="bag-content__new">NEW</span> <img class="bag-content__filter" src="img/catalog/filteredit.png" alt="<%=title%>" title="<%=title%>"></div><div class="bag-content__wrapper"><h3 class="bag-content__title"><%=title%></h3><p class="bag-content__price">£<%=discountedPrice%></p><div class="bag-content__wrap"><p class="bag-content__text">Color: <%=colors[0]%></p><p class="bag-content__text">Size: <%=sizes[0]%></p> <p class="bag-content__text">Quantity: <span class="bag-content__icon bag-content__icon--minus">-</span><span class="bag-content__quantity"><%=quantity%></span><span class="bag-content__icon bag-content__icon--plus">+</span></p></div><button class="bag-content__remove">Remove item</button></div></div>');
            string+=element(bagList[i]);
        }else if(bagList[i].discountedPrice){
            let element = _.template('<div class="bag-content__item"><div class="bag-content__wrapper bag-content__wrapper--image"><img class="bag-content__image" src=<%=thumbnail%> alt="<%=title%>" title="<%=title%>"><img class="bag-content__filter" src="img/catalog/filteredit.png" alt="<%=title%>" title="<%=title%>"></div><div class="bag-content__wrapper"><h3 class="bag-content__title"><%=title%></h3><p class="bag-content__price">£<%=discountedPrice%></p><div class="bag-content__wrap"><p class="bag-content__text">Color: <%=colors[0]%></p><p class="bag-content__text">Size: <%=sizes[0]%></p> <p class="bag-content__text">Quantity: <span class="bag-content__icon bag-content__icon--minus">-</span><span class="bag-content__quantity"><%=quantity%></span><span class="bag-content__icon bag-content__icon--plus">+</span></p></div><button class="bag-content__remove">Remove item</button></div></div>');
            string+=element(bagList[i]);
        }else if(bagList[i].hasNew){
            let element = _.template(' <div class="bag-content__item"><div class="bag-content__wrapper bag-content__wrapper--image"><img class="bag-content__image" src=<%=thumbnail%> alt="<%=title%>" title="<%=title%>"> <span class="bag-content__new">NEW</span> <img class="bag-content__filter" src="img/catalog/filteredit.png" alt="<%=title%>" title="<%=title%>"></div><div class="bag-content__wrapper"><h3 class="bag-content__title"><%=title%></h3><p class="bag-content__price">£<%=price%></p><div class="bag-content__wrap"><p class="bag-content__text">Color: <%=colors[0]%></p><p class="bag-content__text">Size: <%=sizes[0]%></p> <p class="bag-content__text">Quantity: <span class="bag-content__icon bag-content__icon--minus">-</span><span class="bag-content__quantity"><%=quantity%></span><span class="bag-content__icon bag-content__icon--plus">+</span></p></div><button class="bag-content__remove">Remove item</button></div></div>');
            string+=element(bagList[i]);
        }else{
            let element = _.template('<div class="bag-content__item"><div class="bag-content__wrapper bag-content__wrapper--image"><img class="bag-content__image" src=<%=thumbnail%> alt="<%=title%>" title="<%=title%>"><img class="bag-content__filter" src="img/catalog/filteredit.png" alt="<%=title%>" title="<%=title%>"></div><div class="bag-content__wrapper"><h3 class="bag-content__title"><%=title%></h3><p class="bag-content__price">£<%=price%></p><div class="bag-content__wrap"><p class="bag-content__text">Color: <%=colors[0]%></p><p class="bag-content__text">Size: <%=sizes[0]%></p> <p class="bag-content__text">Quantity: <span class="bag-content__icon bag-content__icon--minus">-</span><span class="bag-content__quantity"><%=quantity%></span><span class="bag-content__icon bag-content__icon--plus">+</span></p></div><button class="bag-content__remove">Remove item</button></div></div>');
            string+=element(bagList[i]);
        }
    }
    container.innerHTML = string;
    updateTotal();
})();
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
        localStorage.removeItem("bag");
        localStorage.removeItem("bestOffer");
    });
    chechout.addEventListener("click", function () {
        bag.innerHTML = '<h2 class="bag__heading">Thank you for your purchase</h2>';
        document.getElementById("bag_totalPrice").innerText = "";
        document.getElementById("bag_totalQuantity").innerText = "0";
        document.getElementById("bag-total__pricemark").innerText = "0";
        document.getElementById("bag-total__discount").classList.add("bag-total__discount--hidden");
        localStorage.removeItem("bag");
        localStorage.removeItem("bestOffer");
    });
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
    document.getElementById("bag_totalPrice").innerText = "£"+ totalPrice.toFixed(2);
    localStorage.setItem("price", totalPrice.toFixed(2));
    document.getElementById("bag_totalQuantity").innerText =  totalQuantity;
    document.getElementById("bag-total__pricemark").innerText = "£"+ totalPrice.toFixed(2);
    localStorage.setItem("quantity", totalQuantity);
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

emptyBag();
updateItem();