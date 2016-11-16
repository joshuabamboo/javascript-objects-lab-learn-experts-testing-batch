// MY SOLUTION WITH ES6 SYNTAX (Wont pass the local build with new syntax)
// var recipes = {};

// updateObjectWithKeyAndValue = (object, key, value) => {
//   return Object.assign({}, object, {
//     [key]: value
//   })
// };

// destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
//   object[key] = value
//   return object
// };

// deleteFromObjectByKey = (object, key) => {
//   let copy = Object.assign({}, object)
//   delete copy.key
//   return copy
// };

// destructivelyDeleteFromObjectByKey = (object, key) => {
//   delete object.key
//   return object
// };

var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)

  delete newObj[key]

  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}