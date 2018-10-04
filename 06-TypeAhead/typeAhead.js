const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//데이터를 담아서

const cities = []; //let으로 변수를 만들수도 있지만 변하기 싫어서 아래에서 push로 데이터를 넣음

fetch(endpoint)
    .then(blob => blob.json()) //json으로 변환
    .then(data => cities.push(...data)); //원래 있는 것 뒤에 push하는 방식

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //population에 ,붙이기, 정규식인듯. 어렵다 ㅠㅠ 
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities); 
    //console.log(matchArray);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi'); //입력값을 받아 
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); //하이라이트 태그 추가(형광펜 같은 느낌)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); //위와 같지만 state
        return `
            <li>
                <span class = "name">${cityName}, ${stateName}</span>
                <span class = "population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join(' ');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); //인풋 안에가 변경되면 적용
searchInput.addEventListener('keyup', displayMatches); //쓰기만해도 적용됨 (키가 눌려졌다가 올라오면!)