const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    const y = e.pageY - this.offsetTop; //이 요소가 문서 최상단에서 얼마나 떨어져있는지. 그곳을 빼고 계산하면 위치가 나옴
    const percent = y / this.offsetHeight; //높이에서 y를 나누어 비율로 변환
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%'; //%로 변환
    const playbackRate = percent * (max - min) + min; //바에 숫자를 표시하기 위한 정보
    bar.style.height = height; //스타일에서 높이를 지정
    bar.textContent = playbackRate.toFixed(2) + 'x'; //바에 숫자를 표시, toFixed(2)는 소수점 2번째 자리까지만 표시
    video.playbackRate = playbackRate; //재생 속도에 할당
}

speed.addEventListener('mousemove', handleMove);