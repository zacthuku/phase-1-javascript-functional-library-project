function myEach(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      // Assume the collection is an object
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
  
    // Return the original collection
    return collection;
  }
  
function myMap(collection, callback) {
  const result = [];
  for (let key in collection) {
    if (collection.hasOwnProperty(key)) {
      result.push(callback(collection[key], key, collection));
    }
  }
  return result;
}




function myReduce(collection, callback, initialValue) {
  let accumulator;
  let keys = Array.isArray(collection) ? collection : Object.values(collection);

  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = keys[0];
    keys = keys.slice(1);
  }

  for (let value of keys) {
    accumulator = callback(accumulator, value, collection);
  }

  return accumulator;
}

function myFind(collection, callback) {
  for (let key in collection) {
    if (callback(collection[key])) {
      return collection[key];
    }
  }
  return undefined;
}

function myFilter(collection, callback) {
  const result = [];

  for (let key in collection) {
    if (callback(collection[key])) {
      result.push(collection[key]);
    }
  }

  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === 'object' && collection !== null) {
    return Object.keys(collection).length;
  }
  return 0; 
}

function myFirst(array, n = 1) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
  if (typeof object !== 'object' || object === null) {
    return [];
  }

  const keys = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys;
}

function myValues(object) {
  if (typeof object !== 'object' || object === null) {
    return [];
  }

  const values = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      values.push(object[key]);
    }
  }

  return values;
}
