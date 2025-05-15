class Offer {
    constructor(logo, url, duration, interest) {
        this.logo = logo;
        this.url = url;
        this.duration = duration;
        this.interest = interest;
    }
}

const moneySymbols = ["💵", "💰", "💸", "💳", "💶", "💷"];

// Динамически загружаем только те оферы, которые есть в массиве offerIdsArray
const offersData = {
    58: new Offer(logo="/images/banks/Fiesta-Credito-logo.png.svg", url="{offer}&offer_id=58", duration="150000$", interest="0.1%"),
    59: new Offer(logo="/images/banks/Fidea.svg", url="{offer}&offer_id=59", duration="100000$", interest="0.01%"),
    60: new Offer(logo="/images/banks/Clicredito.svg", url="{offer}&offer_id=60", duration="8000$", interest="1.1%"),
    61: new Offer(logo="/images/banks/holadinerologo.svg", url="{offer}&offer_id=61", duration="45000$", interest="0.01%"),
    62: new Offer(logo="/images/banks/creditozen_logo_8aa1f63718.webp.svg", url="{offer}&offer_id=62", duration="45000$", interest="0.1%"),
    65: new Offer(logo="/images/banks/Fiesta_cps.png.svg", url="{offer}&offer_id=65", duration="150000$", interest="0.1%"),
    66: new Offer(logo="/images/banks/Fidea.svg", url="{offer}&offer_id=66", duration="100000$", interest="0.01%"),
    67: new Offer(logo="/images/banks/Clicredito.svg", url="{offer}&offer_id=67", duration="8000$", interest="0.1%"),
    68: new Offer(logo="/images/banks/solcreditoMx.svg", url="{offer}&offer_id=68", duration="12000$", interest="0.1%"),

    69: new Offer(logo="/images/banks/dineromonMx.svg", url="{offer}&offer_id=69", duration="12000$", interest="0.01%"),
    70: new Offer(logo="/images/banks/kreditweb.png.svg", url="{offer}&offer_id=70", duration="450000$", interest="0.01%"),
    71: new Offer(logo="/images/banks/dineria_new_logo.svg", url="{offer}&offer_id=71", duration="12000$", interest="0.1%"),
};

document.addEventListener("DOMContentLoaded", function() {
    // Получаем список оферов из URL
    const urlParams = new URLSearchParams(window.location.search);
    var offersIds = urlParams.get("offers_ids");  // например, "zaimerkz,moneymankz,onecreditkz"
    if (!offersIds) {
        offersIds="58 59 60 61 62 65 66 67 68 69 70 71";
    }

    const offerIdsArray = offersIds.split(' ');
    const offersWrapper = document.querySelector("#offers_list");
    var idx = 0;
    offerIdsArray.forEach(offerId => {
        const offerData = offersData[offerId];
        if (offerData) {
            randomSymbol = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];

            if(idx == 0 || idx == 1) {
                labelDiv = `<div class="label red">Lo mejor para ti</div>`;
            } else if(idx == 2) {
                labelDiv = `<div class="label yellow">Entrega rápida</div>`;
            } else {
                labelDiv = '';
            }

            if(idx == 0) {
                color="#b8d8be"
            } else {
                color="#e5e5e5"
            }

            const offerElement = document.createElement("div");
            offerElement.setAttribute("id", `offer-${offerId}`);
            offerElement.classList.add("offer", "offer-block-new");
            offerElement.style.backgroundColor = color;
            offerElement.innerHTML = `
            <div class="offer-key" style="display: none;">${offerId}</div>
            ${labelDiv}
            <a class="body-card-logo" href="${offerData.url}" onclick="return goUrl(this, '${offerId}');" target="_blank">
                <img src="${offerData.logo}" class="offer-logo" alt="${offerId}">
            </a>
            <ul class="offer-info">
                <li>
                <span class="text">Plazo hasta:</span>
                <span class="bold">${offerData.duration}</span>
                </li>
                <li>
                <span class="text">Tasa de interés:</span>
                <span class="bold colored">${offerData.interest}</span>
                </li>
            </ul>
            <div class="general_button_wrapper">
                <div class="button">
                <a class="btn-main" target="_blank" href="${offerData.url}" onclick="return goUrl(this, '${offerId}');">
                    Obtener ${randomSymbol}
                </a>
                </div>
            </div>
            `;
            offersWrapper.appendChild(offerElement);
            
            idx++;
        }
    });
});