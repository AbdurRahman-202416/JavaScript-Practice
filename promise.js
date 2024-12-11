function getPhone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("i have to Got an phone");
      } else {
        // reject('you have faild')
        reject(new Error("You have to faild"));
      }
    }, 2000);
  });
}
getPhone(false)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e.message);
  });

// let p1=Promise.resolve('Test');
// p1.then((v)=>console.log(v))
//  let p2 = Promise.reject('Faild')
//  p2.catch((e)=> console.log(e));

//another way using .then .catch

// let url='www.google.com';
// fetch(url)
// .then((res)=>{ res.json()})
// .then((data)=> console.log(data))
// .catch((e)=>(
//     console.log(e.message)
// ))

// another way using  aysnc awit

// let newPromise= new Promise(resolve=>{
//     setTimeout(resolve,5000, 'TestValue')
// });
// async function Myfunc() {
//     let v = await newPromise;
//     console.log(v);
// }

// Myfunc()

const apiKey = "1e3e8f230b6064d27976e41163a82b77";
let city = "Dhaka";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
}

fetchData();
