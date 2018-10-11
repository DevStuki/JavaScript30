const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active'); 
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active'); 
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return; //클릭한 상태가 아니면 무시
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //속도    
    slider.scrollLeft = scrollLeft - walk; //원래 값에서 빼야 갑자기 점프하는 것을 방지

});
