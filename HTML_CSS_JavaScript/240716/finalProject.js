(function(){
    const spanEl = document.querySelector('main div h2 span');
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");

    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random()*300));
        }else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    writeTxt();

    function deleteTxt(){
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random()*300));
        }else {
            index = (index + 1) % txtArr.length;
            currentTxt =txtArr[index].split("");
            setTimeout(writeTxt, Math.floor(Math.random()*1000));
        }
    }
})(); //(function(){내용})(); 즉시 실행 함수 형태로 코드를 감싸주면 조금 더 정리 가능

const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browerScrollY = window.pageYOffset;
    if(browerScrollY > 0 ){
        headerEl.classList.add("active");
        const test = this.document.querySelector('header');
    }else{
        headerEl.classList.remove("active");
    }
});

const animationMove = function(selectior){
    const targetEl = document.querySelector(selectior);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth'});
};
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}