// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];



// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

console.table(fifteen); //테이블로 array를 보여준다!



// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);



// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

//   const ordered = inventors.sort((firstPerson, secondPerson) => {
//     if(firstPerson.year > secondPerson.year){
//         return 1;
//     } else {
//         return -1;
//     }
//   });
//이런 방식인데 아래와 같이 짧게 표현이 가능하다!!  
const ordered = inventors.sort((firstPerson, secondPersion) => firstPerson.year > secondPersion.year ? 1 : -1);

console.table(ordered);



// Array.prototype.reduce()
// 4. How many years did all the inventors live?

//   var totalYears = 0;

//   for(var i = 0; i < inventors.length; i++){
//       totalYears += inventors[i].year
//   }
//이런 구조를 아래와 같이 표현할 수 있다.
const totalYears = inventors.reduce((total, inventor) => {
return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);



// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
const lastGuy = a.passed - a.year;
const nextGuy = b.passed - b.year;
return  lastGuy > nextGuy ? -1 : 1;          
});
console.table(oldest);



// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* 위의 링크에 직접 입력한 것이기 때문에 주석처리
const category = document.querySelector('.mw-category'); //위 링크의 html에서 mw-category가 포함된 클래스를 집어 넣는다.
const links = Array.from(category.querySelectorAll('a')); //a태그가 달린 모두를 array에 담는다.
//const links = [...category.querySelectorAll('a')]; //ES6 스타일

const de = links
            .map(link => link.textContent) //텍스트 컨텐츠를 담고
            .filter(streetName => streetName.includes('de')); //streetName에 de가 들어간 것들을 뽑는다.
*/


// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', '); //', '를 기준으로 나누어 array를 만들어줌.
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

console.log(alpha);



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    
    obj[item]++;
    return obj;
}, {});

console.log(transportation);