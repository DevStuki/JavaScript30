const pressed = [];
const secretCode = 'devstuki';
window.addEventListener('keyup', (e) => {
    console.log(e);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); //이거 아직 이해가 안감
    if(pressed.join('').includes(secretCode)){ //입력받은 키를 합해서 secretCode와 비교하며 같으면
        console.log('Ding Ding!');
        cornify_add();
    }
    console.log(pressed);
});