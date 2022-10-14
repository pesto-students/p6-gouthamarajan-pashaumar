const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = args.toString();
    if (cache[key]) {
      console.log("cache");
      return cache[key];
    } else {
      const sum = args.reduce((curr, item) => fn(curr, item), 0);
      cache[key] = sum;
      console.log("calculation");
      return sum;
    }
  };
};

const add = (a, b) => a + b;

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100, 100, 100));
console.log(memoizeAdd(100, 100, 200));
