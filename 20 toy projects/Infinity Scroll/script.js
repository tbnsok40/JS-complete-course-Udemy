//Javascript
let count = 0;
//스크롤 바닥 감지
window.onscroll = function (e) {

    //window height + window scrollY 값이 document height보다 클 경우,
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        count++;

        const addContent = document.createElement("div")
        addContent.className = "block"

        const addPhrase = document.createElement("p")
        addPhrase.innerText = `${count} 번째로 추가된 콘텐츠`

        addContent.appendChild(addPhrase)

        const article = document.querySelector("article");
        article.appendChild(addContent)
    }
};


// 다른 블로그 분이 제이쿼리로 짠 코드를 Vanilla javascript 로 옮겨보았다.
// ref: https://ojji.wayful.com/2015/04/HTML-DIV-tag-Scroll-Bar-Display-Hidden-Set-Overflow-auto-hidden-scroll-white-space-nowrap-overflow-x-overflow-y.html