let obj = {
  start: 1,
  end: 10,
  [Symbol.iterator]: function () {
    let current = this.start;
    let end = this.end;
    return {
      next: function () {
        if (current <= end) {
          return {
            value: current++,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

for (let i of obj) {
  console.log(i);
}
