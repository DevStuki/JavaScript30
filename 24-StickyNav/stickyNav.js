const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){
    //nav.offsetTop은 nav가 top으로부터 얼마나 떨어져있는지이다.  
    //window.scrollY의 값이 올라가다가(스크롤이 내려오면) 둘이 같은 값이 되면 
    //눈으로 볼때는 정확히 페이지의 top과 nav의 top이 같은 위치에 있게된다.
    //즉 nav가 페이지 최상단에 위치한다.    
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetTop + 'px'; //스크롤 중 갑자기 화면이 점프하는 것을 방지
        document.body.classList.add('fixed-nav');
    }else{
        document.body.style.paddingTop = 0; //스크롤 중 갑자기 화면이 점프하는 것을 방지
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav); //페이지에서 스크롤 할 때마다 fixNav 호출