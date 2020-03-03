(function slider(){
    let content = document.getElementsByClassName("bestOffer__content__wrapper");
    let prices = document.getElementsByClassName("bestOffer__content__price");
    let titles = document.getElementsByClassName("bestOffer__content__title");
    let firstCounter = 0;
    let firstImg = document.getElementById("bestOffer__content__image__wrapper--first");
    let firstItems = window.catalog.filter(function(elem){
        for(let i = 0;i<window.bestOffer.left.length;i++){
            if(elem.id == window.bestOffer.left[i]){
                return true;
            }
        }
    });
    let secondCounter = 1;
    let secondImg = document.getElementById("bestOffer__content__image__wrapper--second");
    let secondItems = window.catalog.filter(function(elem){
        for(let i = 0;i<window.bestOffer.left.length;i++){
            if(elem.id == window.bestOffer.right[i]){
                return true;
            }
        }
    });
    let oldPrice = document.getElementById("bestOffer__content__total__old");
    let newPrice = document.getElementById("bestOffer__content__total__new");
    let buttons = [document.getElementById("bestOffer__content__total__bag-button"), document.getElementById("bestOffer__bag-button")];
    for(let i = 0;i<content.length;i++){
        content[i].addEventListener("click", function(event){
            if(event.target.className.indexOf("angle-up")!=-1){
                if(event.target.parentNode.className.indexOf("first")!=-1){
                    if(firstCounter>0){
                        firstCounter--;                        
                    }else{
                        firstCounter=firstItems.length-1;
                    }
                    firstImg.style.backgroundImage = "url(../"+firstItems[firstCounter].thumbnail+")";
                        let price = firstItems[firstCounter].discountedPrice?firstItems[firstCounter].discountedPrice:firstItems[firstCounter].price;
                        prices[0].innerText = "£"+price.toFixed(2);
                        titles[0].innerText = firstItems[firstCounter].title;
                }else{
                    if(secondCounter>0){
                        secondCounter--;                        
                    }else{
                        secondCounter=secondItems.length-1;
                    }
                    secondImg.style.backgroundImage = "url(../"+secondItems[secondCounter].thumbnail+")";
                        let price = secondItems[secondCounter].discountedPrice?secondItems[secondCounter].discountedPrice:secondItems[secondCounter].price;
                        prices[1].innerText = "£"+price.toFixed(2);
                        titles[1].innerText = secondItems[secondCounter].title;
                }
            }else if(event.target.className.indexOf("angle-down")!=-1){
                if(event.target.parentNode.className.indexOf("first")!=-1){
                    if(firstCounter<firstItems.length-1){
                        firstCounter++;                        
                    }else{
                        firstCounter=0;
                    }
                    firstImg.style.backgroundImage = "url(../"+firstItems[firstCounter].thumbnail+")";
                        let price = firstItems[firstCounter].discountedPrice?firstItems[firstCounter].discountedPrice:firstItems[firstCounter].price;
                        prices[0].innerText = "£"+price.toFixed(2);
                        titles[0].innerText = firstItems[firstCounter].title;
                }else{
                    if(secondCounter<secondItems.length-1){
                        secondCounter++;                        
                    }else{
                        secondCounter=0;
                    }
                    secondImg.style.backgroundImage = "url(../"+secondItems[secondCounter].thumbnail+")";
                        let price = secondItems[secondCounter].discountedPrice?secondItems[secondCounter].discountedPrice:secondItems[secondCounter].price;
                        prices[1].innerText = "£"+price.toFixed(2);
                        titles[1].innerText = secondItems[secondCounter].title;
                }
            }
            let total = ((secondItems[secondCounter].discountedPrice?secondItems[secondCounter].discountedPrice:secondItems[secondCounter].price )+(firstItems[firstCounter].discountedPrice?firstItems[firstCounter].discountedPrice:firstItems[firstCounter].price)).toFixed(2);
            oldPrice.innerHTML = '£'+ total + ' <img class="bestOffer__content__total__old__strikeout" src="img/start/1300/strikeout.png" alt="strikeout">';
            newPrice.innerText = "£" +(total-window.bestOffer.discount).toFixed(2);
        });
    }
    buttons[0].addEventListener("click", function(){addToBag(firstItems,firstCounter,secondItems,secondCounter)});
    buttons[1].addEventListener("click", function(){addToBag(firstItems,firstCounter,secondItems,secondCounter)});
    localStorage.removeItem("bestOffer");
})();
function addToBag(firstItems,firstCounter,secondItems,secondCounter){
    let items = [firstItems[firstCounter],secondItems[secondCounter]];
    localStorage.setItem("bestOffer",JSON.stringify(items));
}