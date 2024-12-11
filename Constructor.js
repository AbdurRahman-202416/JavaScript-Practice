class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;


  }
}
let Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  this.fn = function () {
    console.log("Rectangle");
    this.print();
    console.log(this);
  };
  this.print = function () {
    console.log("Width: " + this.width + " Height: " + this.height);
  };
};
// Create a new rectangle object
let rect = new Rectangle(10, 30);

rect.fn();
rect.print();
