// const hamburgerBtn = document.getElementById('hamburgerBtn');
//         const menuOverlay = document.getElementById('menuOverlay');
//         const mainPage = document.getElementById('mainPage');

//         function openMenu() {
//             hamburgerBtn.classList.add('active');
//             menuOverlay.classList.add('active');
            
//             mainPage.style.filter = 'blur(2px)';
//         }

//         function closeMenu() {
//             hamburgerBtn.classList.remove('active');
//             menuOverlay.classList.remove('active');
            
//             mainPage.style.filter = 'none';
//         }

    
//         document.addEventListener('click', (e) => {
//             if (menuOverlay.classList.contains('active') &&
//                 !e.target.closest('.menu-overlay') &&
//                 !e.target.closest('.hamburger-btn')) {
//                 closeMenu();
//             }
//         });
// window.openMenu = openMenu;
// window.closeMenu = closeMenu;


import headerHtml from "bundle-text:./fragment/header.html";
import fleetHtml from "bundle-text:./fragment/fleetD.html"
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
   insertHtmlFragment('fleet-placeholder', fleetHtml)
});
