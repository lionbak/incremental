document.addEventListener('DOMContentLoaded', function() {
    const imageBoxes = document.querySelectorAll('.image-box');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close');
    const codePopup = document.getElementById('code-popup4');
    const codeButtons = document.querySelectorAll('.code-button');
    const codeCloseButtons = document.querySelectorAll('.code-close');

    //메인 팝업 열기
    imageBoxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            const targetUrl = box.getAttribute('data-url');
            const correspondingPopup = popups[index];
            const iframe = correspondingPopup.querySelector('.iframe');

            // iframe 화면에 띄우기
            iframe.src = targetUrl;
            correspondingPopup.style.display = 'flex';

            // iframe contents 크기 조절
            iframe.onload = function () {
                const iframeHeight = iframe.contentWindow.document.body.scrollHeight;
                correspondingPopup.querySelector('.popup-content').style.height = iframeHeight + 'px';
            }
        });
    });

    //메인 팝업 닫기
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popupToClose = button.closest('.popup');
            if(popupToClose){
                popupToClose.style.display = 'none';
            }
        });
    });

    //코드 팝업 열기
    codeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const codePopup = document.getElementById(popupId);
            if (codePopup) {
                codePopup.style.display = 'flex';
            }
        });
    });

    //코드팝업 닫기 버튼 클릭시 닫음
    codeCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codePopupToClose = button.closest('.code-popup');
            if(codePopupToClose){
                codePopupToClose.style.display = 'none';
            }
        });
    });

    //외부 클릭시 화면 닫음
    window.addEventListener('click', function(event) {
        popups.forEach(popup => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });

        const codePopups = document.querySelectorAll('.code-popup');
        codePopups.forEach(codePopup => {
            if (event.target === codePopup) {
                codePopup.style.display = 'none';
            }
        });
    });
});

// const imageBoxes = document.querySelectorAll('.image-box');
// const popup = document.querySelector('.popup');
// const closeBtn = document.querySelectorAll('.close');
// const iframe = document.querySelector('.iframe');
// const popupContent = document.querySelector('.popup-content');
// const codeBtn = document.querySelector('.code-button');
// const codeClose = document.querySelector('.code-close');
// const codePopup = document.querySelector('.code-popup');
//
//
// // 팝업창 열기
// imageBoxes.forEach(box => {
//     box.addEventListener('click', function() {
//         const targetUrl = box.getAttribute('data-url');
//         iframe.src = targetUrl;
//         popup.style.display = 'flex';
//
//         iframe.onload = function () {
//             const iframeHeight = iframe.contentWindow.document.body.scrollHeight;
//             popupContent.style.height = iframeHeight + 'px';
//         }
//     });
// });
//
// // 팝업창 닫기 버튼
// closeBtn.forEach(button => {
//     button.addEventListener('click', function() {
//         const popupToClose = button.closest('.popup');
//         if(popupToClose){
//             popupToClose.style.display = 'none';
//         }
//     });
// });
//
// // 팝업창 외부 클릭 시 팝업 닫기
// window.addEventListener('click', function(event) {
//     if (event.target === popup) {
//         popup.style.display = 'none';
//     }
// });
//
// // 코드설명 팝업 열기
// codeBtn.addEventListener('click', function () {
//     codePopup.style.display = 'flex';
//
// });
//
//
// // 코드설명 팝업 닫기
// codeClose.addEventListener('click', function () {
//     codePopup.style.display = 'none';
// });
//
// // 팝업 외부 클릭 시 닫기
// window.addEventListener('click', function (event) {
//     if (event.target === codePopup) {
//         codePopup.style.display = 'none';
//     }
// });