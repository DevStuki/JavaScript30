const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
    //the,an,a가 있으면 잘라낸다. 한칸 뛰는 것 주의, an이 앞에 와야 a와 an모두 커버
    return bandName.replace(/^(the |an |a )/i, '').trim(); 
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

console.log(sortedBands);

document.querySelector('#bands').innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join(''); //joun이 빠지면 ,가 생긴다.

