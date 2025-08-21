


import headerHtml from "bundle-text:./fragment/header.html";
import heroHtml from "bundle-text:./heroS.html";
import fleetHtml from "bundle-text:./fragment/fleetD.html"
import yachtsHtml from "bundle-text:./yachtsS.html"
import activitiesHtml from "bundle-text:./activitiesD.html"
import bookingHtml from "bundle-text:./bookingT.html"
import reviewsHtml from "bundle-text:./reviewsT.html"
import footerHtml from "bundle-text:./footer.html"
console.log('Тип headerHtml:', typeof headerHtml);
console.log('Значення headerHtml:', headerHtml);
function insertHtmlFragment(targetId, htmlContent) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.innerHTML = htmlContent;
    } else {
        console.warn(`Елемент з ID "${targetId}" не знайдено.`);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    insertHtmlFragment('header-placeholder', headerHtml);
    insertHtmlFragment('hero-placeholder', heroHtml)
    insertHtmlFragment('fleet-placeholder', fleetHtml)
    insertHtmlFragment('yachts-placeholder', yachtsHtml)
    insertHtmlFragment('activities-placeholder', activitiesHtml)
    insertHtmlFragment('booking-placeholder', bookingHtml)
    insertHtmlFragment('reviews-placeholder', reviewsHtml)
    insertHtmlFragment('footer-placeholder', footerHtml)
});
