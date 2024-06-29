// // // CLOSURES

// // let a = 10; // Global scope

// // function extFn() {
// //   let b = 20; // limited to external function

// //   function intFn() {
// //     let c = 30; // limited to internal function
// //     return a + b + c;
// //   }
// //   return intFn;
// // }

// // console.log("🚀 ~ extFn ~ b:", b);

// // let res = extFn()();

// // console.log(res);

// var a;
// var b = null;

// console.log({ a, b });

// fetch


const endpoint = 'https://api.airtribe.com';
fetch(`${endpoint}/users`)
// AXIOS

https://api.airtribe.com/users
https://api.airtribe.com/user/:id
https://api.airtribe.com/user/:id/post/:postid
https://api.airtribe.com/articles

const ins  = axios.create({
    baseUrl: '',
    headers: { token: 'sdkbijbdl'}
})

ins.post(`/users`, {
    userId: 1
}, {
    params:
    {
        key1: 'key1',
        key2: 'key2'
    },
    headers:{
        Authorization: 'Bearer Auth Token',
        'Content-type': 'application/json'
    }
})

const array = [765, 876,986];

array.map((item) => {
// logic
})


if(!Array.prototype.map)
Array.prototype.map = function(callbackFn) {
    var arr = [];              
    for (var i = 0; i < this.length; i++) { 
       /* call the callback function for every value of this array and       push the returned value into our resulting array
       */
      arr.push(callbackFn(this[i], i, this));
    }
    return arr;
  }

ins.get('/users')

fetch(`${endpoint}/users`, {
    method: 'GET', 
    headers: {
        token: 'sdkbijbdl'
    }
})
