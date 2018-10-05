const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular 늘쓰던 그놈
console.log('regular');

// Interpolated 
console.log('Hello I am a %s string!', 'happy'); //%s에 ,뒤의 string이 들어간다.

// Styled
console.log('%c I am some great text', 'font-size:50px; background: red; text-shadow: 10px 10px 0 blue'); //%c가 포함된 string에 ,뒤의 스타일이 적용된다.

// warning!
console.warn('OH NOOO');

// Error :|
console.error('ERROR!!!')

// Info, 그냥 정보 제공
console.info('Winners never quit, Quitters never win');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!'); // p안에 'ouch'가 있으면 아무 변화가 없고 없으면 , 뒤의 문장이 에러메시지로 출력된다.

// clearing
console.clear(); //전부 지움

// Viewing DOM Elements
console.log(p); //저장된 p의 내용만 보여줌
console.dir(p); //저장된 p의 내용을 드롭다운으로 많은 정보를 포함하여 보여줌

console.clear();

// Grouping together 그루핑을 해서 보여줌. 콘솔에서 직접 확인
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    // console.groupCollapsed(`${dog.name}`); //이렇게 하면 그룹이 접힌체로 나타난다.
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} years old`); //이렇게 변화를 주어 출력도 가능
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Dev');
console.count('Dev');
console.count('Dev');
console.count('Stuki');
console.count('Stuki');
console.count('Dev');
console.count('Stuki');
console.count('Stuki');
console.count('Dev');
console.count('Stuki');

// timing
console.time('fetching data');
fetch('http://api.github.com/users/devstuki')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });
