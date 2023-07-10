// function User(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getName = function() { 
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var admin = new User('Trang', 'Nguyen');
// admin.role = 'Admin';
// admin['admin-avt'] = 'avatar';

// console.log(admin.getName());
// console.log(admin.role);
// console.log(admin['admin-avt']);


// function Student(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }



// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');

// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'

// var random = Math.floor(Math.random() * 5);

// var gift = [
//     '10 xu',
//     '20 xu',
//     '30 xu',
//     '40 xu',
//     '50 xu',
// ];

// console.log(gift[random]);

// var course = {
//     name: 'Javascript',
//     coin: 250
// }

// console.log(course.coin>0? `${course.coin} coins` : 'Miễn phí');

// var languages = [
//     'Java',
//     'PHP',
//     'Ruby'
// ]

// VONG LAP

// var myInfo = {
//     name: 'Nguyen Van A',
//     age: 18,
//     address: 'Bac Lieu, VN'
// }

// for (var key in languages) {
//     console.log(languages[key]);
// }

// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }

// for (var value of languages) {
//     console.log(value);
// }

// for (var key of Object.keys(myInfo)) {
//     console.log(myInfo[key]);
// }

// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }



// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];

// for (var i = 0; i < myArray.length; i++)
// {
//     for (var j = 0; j < myArray[i].length; j++)
//     {
//         console.log(myArray[i][j]);
//     }
// }

// for (var arrayChild of myArray)
// {
//     for (var value of arrayChild)
//     {
//         console.log(value);
//     }
// }



// var array = ['a', 'b', 'c', 'd', 'a', 'a', 'c'];
// var arrayChild = [];

// function rutGon1(array) {
//     var newArray = [];   

//     for (var value of array)
//     {
//         if (newArray.indexOf(value) == -1)      
//             newArray.push(value);
//     }
//     return newArray;
// }

// function rutGon2(array) {
//     return ([...(new Set(array))]);
// }

// function rutGon3(start, end, cb) {
//     if (start <= end) {
//         cb(start);
//         rutGon3(start+1, end, cb);
//     }
// }

// console.log(rutGon1(array));
// console.log(rutGon2(array));
// (rutGon3(0, array.length - 1, function (num) { 
//     if(arrayChild.indexOf(array[num]) == -1)
//     {
//         arrayChild.push(array[num]);
//     }
// }));

// console.log(arrayChild);


// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Python',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'Dark',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'Android',
//         coin: 300
//     },
//     {
//         id: 7,
//         name: 'Javascript',
//         coin: 150
//     }
// ]

/**
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 */

// courses.forEach(function(course) {
//     console.log(course);
// });


// console.log(courses.every(function(course) {
//     return course.name == 'Javascript';
// }));

// console.log(courses.some(function(course) {
//     // console.log(course.name);
//     return course.name == 'Python';
// }));

// console.log(courses.find(function(course) {
//     return course.name == 'Python';
// }));

// console.log(courses.filter(function(course) {
//     return course.name == 'Javascript';
// }));


// var getName = function(course) {
//     return `<h2>${course.name}</h2>`;
// };

// var courseName = courses.map(getName);
// console.log(courseName.join(''));




// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(array) {
//     return sports.reduce(function(a, b) {
//         console.log(a);
//         return a + b.gold;
//     }, 0);
// }


// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23




// var watchList = [
// {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
// },
// {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
// },
// {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
// },
// {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
// },
// {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
// }
// ];

// function calculateRating(array) {
//     var films = array.filter((film) => {
//         return film.Director === 'Christopher Nolan';
//     });

//     return films.reduce((total, film) => {
//         return total + Number.parseFloat(film.imdbRating);
//     }, 0) / films.length;
// }


// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675





// var courses = [
//     {
//         topic: 'Front-end',
//         courses: [
//             {
//                 id: 1,
//                 tittle: 'Html, css'
//             },
//             {
//                 id: 2,
//                 tittle: 'Javascript'
//             }
//         ]
//     },
//     {
//         topic: 'Back-end',
//         courses: [
//             {
//                 id: 1,
//                 tittle: 'PHP'
//             },
//             {
//                 id: 2,
//                 tittle: 'Nodejs'
//             }
//         ]
//     }
// ];

// var courseList = courses.reduce(function(storeValue, item) {
//     return storeValue.concat(item.courses);
// }, []);
// console.log(courseList);

// var numList = [1, 2, [3, 4], 5, [6, 7, 8], 9];
// console.log(numList);

// var newNumList = numList.reduce(function (storeValue, item) {
//     return storeValue.concat(item);
// }, []);
// console.log(newNumList);

 


// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0;
//     if (!result) {
//         result = this[0];
//         i = 1;
//     }
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this);
//     }
//     return result;
// }

// var array = [1, 2, 3, 4, 5];
// var total1 = 0;

// for (var i = 0; i < array.length; i++) {
//     total1 += array[i];
// }
// console.log(total1);

// var total2 = array.reduce2(function(storeValue, item) {
//     return storeValue + item;
// }, 0);
// console.log(total2);



// function arrToObj(array) {
//     return array.reduce(function(storeValue, item) {
//         storeValue[item[0]] = item[1];
//         return storeValue;
//     }, {});
// }

// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }


var courses = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'PHP'
    },
    {
        id: 3,
        name: 'Ruby'
    },
    {
        id: 4,
        name: 'PHP'
    }
];

// var coursesInfo = courses.map((course) => {
//     return {
//         name: course
//     }
// });
// console.log(coursesInfo);

// map
Array.prototype.map2 = function(callback) {
    var results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(callback(this[i], i));
    }
    return results;
}

var coursesInfo = courses.map2((course, index) => {
    return {
        id: index,
        name: `Khoa học ${course.name}`
    }
});
console.log(coursesInfo);


// forEach
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
}
courses.forEach2((course, index) => {
    console.log(`${index}: ${course.name}`);
});


// every
Array.prototype.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i))      return false;
    }
    return true;
}
console.log(courses.every2((course) => {
    return course.name === 'PHP';
}));


// some
Array.prototype.some2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i))      return true;
    }
    return false;
}
console.log(courses.some2((course) => {
    return course.name === 'PHP';
}));


Array.prototype.find2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i))   return this[i];
    }
    return undefined;
}
console.log(courses.find2((course) => {
    return course.name === 'PHP';
}));


Array.prototype.filter2 = function(callback) {
    var output = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i))   output.push(this[i]);
    }
    return output;
}
console.log(courses.filter2((course) => {
    return course.name === 'PHP';
}));


var text = 'Responsive web design';
console.log(text.includes('web'));

var myArray = [1, 2, 3, 4];
console.log(myArray.includes(2, -2));


var random = Math.random(); 
console.log(random);
console.log(random * 5);


var course = {
    name: 'Javascript',
    coin: 250
}

console.log(course.coin>0?`${course.coin} Coins`:`Mien phi`)

function getRandNumbers(min, max, length) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array[i] = min + Math.floor(Math.random() * (max - min));
    }
    return array;
}
console.log(getRandNumbers(10, 100, 5));