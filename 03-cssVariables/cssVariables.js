const inputs = document.querySelectorAll('.controls input'); //querySelectorAll은 해당되는 모든 것을 array에 담는다.

function handleUpdate(){
    const suffix = this.dataset.sizing || ''; //html에서 data-sizing으로 설정된 값의 단위, 여기서는 px
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //선택된(슬라이드된) 값을 스타일에 적용    
};

inputs.forEach(input => input.addEventListener('change', handleUpdate)); //값이 바뀌는 것을 이벤트로, 여기서는 슬라이드로 값이 바뀜
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //마우스 움직임을 이벤트로 