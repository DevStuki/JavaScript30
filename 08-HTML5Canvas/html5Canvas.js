const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; //캔버스를 창의 사이즈로 
canvas.height = window.innerHeight; //캔버스를 창의 사이즈로 
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
ctx.globalCompositeOperation = 'overlay'; //블랜드 모드를 설정할 수 있음, 포토샵과 거의 비슷함. 아래의 링크 참고
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //hsl은 hue를 360도로 회전시키며 색상을 바꿀 수 있다. 그것을 이용해서 색이 계속 변하도록 했다.
    ctx.beginPath();    

    //start from
    ctx.moveTo(lastX, lastY);
    
    //goto
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    hue++; //mousedown에서 계속 hue가 증가한다.

    if(hue >= 360){ //한바퀴 돌면 처음으로 돌아간다.
        hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){ //라인의 폭이 100을 넘거나 1보다 낮으면 방향을 바꾼다.
        direction = !direction;
    }

    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
    
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);