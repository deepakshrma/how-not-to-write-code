const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

const resolve = () => {
  return new Promise(r => {
    delay(r, 1000, "SUCCESS");
  });
};
const reject = () => {
  return new Promise((_, r) => {
    delay(r, 800, "FAIL");
  });
};
let all = Promise.all([resolve(), resolve()]);
all.then(console.log).catch(console.error);


all = Promise.all([resolve(), reject()]);
all.then(console.log).catch(console.error);

// Type definition

/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises
 * resolve, or rejected when any Promise is rejected.
 * @param values An array of Promises.
 * @returns A new Promise.
 */
//all<T>(values: (T | PromiseLike<T>)[]): Promise<T[]>;

const collectAll = (...promises) => {
  return new Promise(r => {
    const results = [];
    let counter = 0;
      const final = (index, res) => {
        results[index] = res;
        counter++;
      if (counter === promises.length) r(results);
    };
    promises.map((promise, index) => {
      promise
        .then(final.bind(null, index))
        .catch(final.bind(null, index));
    });
  });
};

all = collectAll(resolve(), resolve());
all.then(console.log)


all = collectAll(resolve(), reject());
all.then(console.log)