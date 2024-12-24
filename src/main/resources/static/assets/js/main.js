const imageBox = document.querySelector('.image-box');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');
const iframe = document.getElementById('popup-doggi');
const popupContent = document.querySelector('.popup-content');

imageBox.addEventListener('click', function() {
    popup.style.display = 'flex';

    iframe.onload = function () {
        const iframeHeight = iframe.contentWindow.document.body.scrollHeight;
        popupContent.style.height = iframeHeight + 'px';
    }
});

// 팝업창 닫기 버튼
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    iframe.src = 'http://localhost:8081/doggimain/index.jsp';
});

// 팝업창 외부 클릭 시 팝업 닫기
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
        iframe.src = 'http://localhost:8081/doggimain/index.jsp';
    }

});