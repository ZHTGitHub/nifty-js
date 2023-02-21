// set
export const set = function(object, path, value) {
  let paths = Array.isArray(path) ? path : path.split('.')
  let current = object

  for(let i = 0; i < paths.length; i++) {
    if(i === paths.length - 1) {
      current[paths[i]] = value
    } 
    else {
      if(current[paths[i]] === undefined) {
        current[paths[i]] = {}
      }
      
      current = current[paths[i]]
    }
  }

  return object
}

// get
export const get = function(object, path, defaultValue) {
  let paths = Array.isArray(path) ? path : path.split('.')
  let current = object

  for(let i = 0; i < paths.length; i++) {
    if(current[paths[i]] === undefined) {
      return defaultValue
    }

    current = current[paths[i]]
  }

  return current
}

export default {
  get,
  set
}

