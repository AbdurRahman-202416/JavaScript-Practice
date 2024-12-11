setTimeout(() => {
    console.log('after 2 sec call This function ')
}, 2000);

function processData(data, callback) {
    // Process the data
    const processedData = data.toUpperCase();
    callback(processedData);
  }
  
  processData('hello world', function(result) {
    console.log(result); // Output: HELLO WORLD
  });


  function sum (a,b,callback){
    let add=a+b;
    return  callback(add);

  }
  sum(10,20, function add(result) {
    console.log(result); // Output: 30
    
  });
  
