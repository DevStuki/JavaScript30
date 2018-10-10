const triggers = document.querySelectorAll('a'); //모든 a를 저장
const highlight = document.createElement('span'); //span 생성
highlight.classList.add('highlight'); //span에 highlight클래스 지정
document.body.append(highlight); //body 맨 아래에 첨부

function highlightLink(){
    const linkCoords = this.getBoundingClientRect(); //요소의 박스크기를 리턴
    console.log(linkCoords);
    const coords = { //linkCoords의 위치가 scrollY나 scrollX에 영향을 받기 때문에 그것을 적용해주어야 한다.
        width: linkCoords.width,    
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }

    highlight.style.width = `${coords.width}px`; //하이라이트 크기를 요소의 박스 크기에 맞춘다.
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`; //위치를 해당 요소로 옮긴다.
    //css의 트렌지션 설정에 따라 위의 변화들이 적용된다.
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));