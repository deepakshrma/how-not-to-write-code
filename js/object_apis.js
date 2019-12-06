const obj = {
    "IN": "India",
    "SG": "Singapore",
    "US": "United State Of America",
    "JP": "JAPAN",
    "UK": "United Kingdom"
}
// get all keys
console.log(Object.keys(obj))
// get all key-value pair entries
console.log(Object.entries(obj))

// get all countries array
console.time("entries")
console.log(Object.entries(obj).map(([code, name]) => {
    return {
        name,
        code
    }
}))
console.timeEnd("entries")

// flatObject in array
console.time("flatObject")
const flatObject = (obj) => {
    let array = []
    for(let key in obj) {
        array.push({name: obj[key], code: key})
    }
    return array
}
console.log(flatObject(obj))
console.timeEnd("flatObject")

// flatObject in array, with mapper function
console.time("flatObjectFn")
const flatObjectFn = (obj, fn) => {
    let array = []
    for(let key in obj) {
        array.push(fn(key, obj[key]))
    }
    return array
}
console.log(flatObjectFn(obj, (key, value) => ({name:value, code: key})))
console.timeEnd("flatObjectFn")
