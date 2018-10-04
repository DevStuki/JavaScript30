function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //눌린 키코드를 적용한 오디오 클래스
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //눌린 키코드를 적용한 키 클래스
    if(!audio) return; //만약 오디오가 null이면 함수 종료
    audio.currentTime = 0; //반복해서 눌렀을 때를 위해 오디오 시간을 0으로 초기화
    audio.play(); //오디오 실행
    key.classList.add('playing'); //키 클래스에 playing을 붙인다. css를 통해 모양이 변한다.
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // transform이 끝난 것인지 체크, 아니라면 무시
    this.classList.remove('playing'); //클래스 이름에서 playing을 제거
}

const keys = document.querySelectorAll('.key'); //querySelectorAll은 해당되는 모든 것을 array에 담는다.
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //이벤트에서 transition이 end된 것을 찾으면 removeTransition 호출
window.addEventListener('keydown', playSound); //키를 누르면 이벤트를 받아 playSound 호출