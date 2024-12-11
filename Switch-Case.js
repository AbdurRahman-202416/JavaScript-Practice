function result(marks) {
  switch (true) {
    case marks > 100:
      console.log("Eenter  the valid marks");
      break;

    case marks <= 100 && marks >= 80:
      console.log("A+");
      break;

    case marks < 80 && marks >= 70:
      console.log("A");
      break;

    case marks < 70 && marks >= 60:
      console.log("B");
      break;

    case marks < 60 && marks >= 50:
      console.log("C");
      break;

    default:
      console.log("F");
      break;
  }
}
result(30);
result(40);
result(50);
result(60);
result(70);
result(80);
result(90);
result(100);
result(101);
