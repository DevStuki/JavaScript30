const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; //마지막에 체크된 것

function handleCheck(e){

    //처음 체크와 쉬프트 마지막 체크 사이의 것들이 있는지
    let inBetween = false;
    //쉬프트 키가 눌렸고 해당 이벤트가 체크된 상태일 경우에
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => { //array전체를 돌며 확인
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){ //이번것 또는 마지막 체크일 경우 
                inBetween = !inBetween; //시작할 때 true가 되었다가 마지막에 다시 false가 된다.
                console.log('Starting to check them inbetween!');
            }

            if(inBetween){
                checkbox.checked = true; //사이에 있는 거라면 체크된다.
            }
        });
    } 

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));