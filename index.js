import date from './nifty/date'

import { isEqual, isYummy } from './nifty/basic'
import { getScrollOffset, getViewportSize, queryToObject } from './nifty/browser'
import { fileToBlob, fileToBase64, base64ToFile, compressFile } from './nifty/file'
import { get, set } from './nifty/lodash'
import { deepClone, find, findIndex, flatArray, removeDuplicate } from './nifty/object'
import { getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined } from './nifty/types'

export {
  date,

  isEqual, isYummy,
  getScrollOffset, getViewportSize, queryToObject,
  fileToBlob, fileToBase64, base64ToFile, compressFile,
  get, set,
  deepClone, find, findIndex, flatArray, removeDuplicate,
  getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined
}

export default {
  date,

  isEqual, isYummy,
  getScrollOffset, getViewportSize, queryToObject,
  fileToBlob, fileToBase64, base64ToFile, compressFile,
  get, set,
  deepClone, find, findIndex, flatArray, removeDuplicate,
  getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined
}