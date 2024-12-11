let n = 10;
for (let i = 1 ;i<=n;i++){
    var result='';
    for(let j =1;j<=i;j++){
        result += j+ ' ';
    }
    console.log(result);
    

}



let rows = 5; // Number of rows
let cols = 5; // Number of columns

for (let i = 1; i <= rows; i++) {
    let rowOutput = ""; // To store the current row's output
    for (let j = 1; j <= cols; j++) {
        rowOutput += (i * j) + "\t"; // Multiply and add to the row output
    }
    console.log(rowOutput); // Print the current row
}