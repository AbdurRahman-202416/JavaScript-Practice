let createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("i am  a rectangle");
      this.Print();
      console.log(this);
    },
    Print: function () {
      console.log(
        "My Width  is " + this.width + " and My Height is " + this.height
      );
    },
  };
};
 let rec1= createRect(10,20);
 rec1.draw();
 let rec2= createRect(11,11);
 rec2.draw();

 