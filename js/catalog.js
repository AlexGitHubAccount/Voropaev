(function renderCatalog() {
    let container = document.getElementById("catalog");
    let items = window.catalog.filter(function (elem) {
        return elem.category == "women" && elem.fashion == "Casual style";
    });
    items.sort(function (prev, next) {
        return new Date(prev.dateAdded) > new Date(next.dateAdded) ? -1 : 0;
    });
    let string = '<div class="catalog__sale-info"><h2 class="catalog__sale-info__heading">Last weekend <span class="catalog__sale-info__heading__mark">extra 50%</span> off on all reduced boots and shoulder bags</h2><p class="catalog__sale-info__text">This offer is valid in-store and online. Prices displayed reflect this additional discount. this offer ends at 11:59 GMT on March 1st 2019</p></div> ';
    for(let i = 0; i < items.length; i++) {
        if(items[i].discountedPrice&&items[i].discountedPrice!=items[i].price&&items[i].hasNew){
            let element = _.template('<div class="catalog__product__wrapper"><a href="item.html" class="catalog__product__image__wrapper"><img class="catalog__product__image" src=<%=thumbnail%> alt="<%=title%>" title="<%=title%>"> <span class="catalog__content__image__new">NEW</span> <img class="catalog__product__image--filter" src="img/catalog/filter.png" alt="<%=title%>" title="<%=title%>"></a><h3 class="catalog__content__title"><%=title%></h3> <p class="catalog__content__price"><span class="catalog__content__price__old">£<%=price%> <img class="catalog__content__price__old__strikeout" src="img/catalog/strikeout.png" alt="strikeout"></span>£<%=discountedPrice%></p></div>');
            string+=element(items[i]);
        }else if(items[i].discountedPrice&&items[i].discountedPrice!=items[i].price){
            let element = _.template('<div class="catalog__product__wrapper"><a href="item2.html" class="catalog__product__image__wrapper"><img class="catalog__product__image" src=<%=thumbnail%> alt="<%=title%>" title="<%=title%>"> <img class="catalog__product__image--filter" src="img/catalog/filter.png" alt="<%=title%>" title="<%=title%>"></a><h3 class="catalog__content__title"><%=title%></h3> <p class="catalog__content__price"><span class="catalog__content__price__old">£<%=price%> <img class="catalog__content__price__old__strikeout" src="img/catalog/strikeout.png" alt="strikeout"></span>£<%=discountedPrice%></p></div>');
            string+=element(items[i]);
        }else if(items[i].hasNew){
            let element = _.template('<div class="catalog__product__wrapper"><a href="item.html" class="catalog__product__image__wrapper"><img class="catalog__product__image" src=<%=thumbnail%> alt="<%=title%>" title="<%=title%>"> <span class="catalog__content__image__new">NEW</span> <img class="catalog__product__image--filter" src="img/catalog/filter.png" alt="<%=title%>" title="<%=title%>"></a><h3 class="catalog__content__title"><%=title%></h3> <p class="catalog__content__price">£<%=price%></p></div>');
            string+=element(items[i]);
        }else{
            let element = _.template('<div class="catalog__product__wrapper"><a href="item.html" class="catalog__product__image__wrapper"><img class="catalog__product__image" src=<%=thumbnail%> alt="<%=title%>" title="<%=title%>"> <img class="catalog__product__image--filter" src="img/catalog/filter.png" alt="<%=title%>" title="<%=title%>"></a><h3 class="catalog__content__title"><%=title%></h3> <p class="catalog__content__price">£<%=price%></p></div>');
            string+=element(items[i]);
        }
    }
    string+='<div class="catalog__button__wrapper"><button class="catalog____button">Show more</button></div>';
    container.innerHTML = string;
})();