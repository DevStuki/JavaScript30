    // ## Array Cardio Day 2

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      //적어도 한명이라도 해당되는가?
      const isAdult = people.some(person=>((new Date()).getFullYear()) - person.year >= 19);
      //=>에서는 return을 생략해도 된다. 또한 ===이런 연산자가 있으면 if도 생략 true or false로 값이 나온다.
      console.log({isAdult});
      
      
      // Array.prototype.every() // is everyone 19 or older?
      // 전부 해당되는가?
      const allAdults = people.every(person=>((new Date()).getFullYear()) - person.year >= 19); 
      //=>에서는 return을 생략해도 된다. 또한 ===이런 연산자가 있으면 if도 생략 true or false로 값이 나온다.
      console.log({allAdults});


      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      // 해당하는 값이 있는가?
      const comment = comments.find(comment => comment.id === 823423);
      //=>에서는 return을 생략해도 된다. 또한 ===이런 연산자가 있으면 if도 생략 true or false로 값이 나온다.
      console.log(comment);

  
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      // 해당하는 값의 인덱스를 찾아낸다.
      const index = comments.findIndex(comment => comment.id === 823423);
      
      console.log(index);

      //comments.splice(index, 1); //원본에서 사라짐
      
      //아래는 원본은 두고 새로 만듬
      const newComments = [
          ...comments.slice(0, index),
          ...comments.slice(index + 1)
      ];