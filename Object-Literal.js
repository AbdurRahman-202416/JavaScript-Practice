let rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am a Rectangle");
    this.PrintProperties(); 
  },
  PrintProperties: function () {
    console.log("my Width is " + this.width);
    console.log("my Height is " + this.height);
  },
};

rect.draw();
rect.height = 250;
rect.draw();
