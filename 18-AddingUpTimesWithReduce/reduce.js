const timeNodes = [...document.querySelectorAll('[data-time]')]; 
//array로 변환해주어야 한다.
//Array.from(document.querySelectorAll('[data-time]')); 이렇게 해도 되지만 위의 방식이 최신

const seconds = timeNodes
    .map(node => node.dataset.time) //time만 즉 3:36같은 시간만 
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':') //시간을 분과 초로 나눈다. 
            .map(parseFloat); //그리고 그것을 float으로 변환한다.
        return (mins * 60) + secs;  //전부 초로 환산해서 넣는다.        
    })
    .reduce((total, vidSeconds) => total + vidSeconds); //전체 초를 더해서 하나의 숫자로 만든다.

    let secondsLeft = seconds;
    
    const hours = Math.floor(secondsLeft / 3600); //시간으로 변환
    secondsLeft = secondsLeft % 3600; //시간으로 나눈 나머지 초
    
    
    const mins = Math.floor(secondsLeft / 60); //남은 초를 분으로 변환
    secondsLeft = secondsLeft % 60; //분으로 나눈 나머지 초

    console.log(hours, mins, secondsLeft); //남은 시간, 분, 초