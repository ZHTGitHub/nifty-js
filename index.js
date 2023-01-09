import date from './nifty/date'
import localStorage from './nifty/localStorage'
import sessionStorage from './nifty/sessionStorage'

import { isEqual, isYummy } from './nifty/basic'
import { getScrollOffset, getViewportSize, queryToObject } from './nifty/browser'
import { fileToBlob, fileToBase64, base64ToFile, formatConvert, compressFile } from './nifty/file'
import { get, set } from './nifty/lodash'
import { deepClone, find, findIndex, flatArray, removeDuplicate } from './nifty/object'
import { getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined } from './nifty/types'

export {
  date,
  localStorage,
  sessionStorage,

  isEqual, isYummy,
  getScrollOffset, getViewportSize, queryToObject,
  fileToBlob, fileToBase64, base64ToFile, formatConvert, compressFile,
  get, set,
  deepClone, find, findIndex, flatArray, removeDuplicate,
  getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined
}

export default {
  date,
  localStorage,
  sessionStorage,

  isEqual, isYummy,
  getScrollOffset, getViewportSize, queryToObject,
  fileToBlob, fileToBase64, base64ToFile, formatConvert, compressFile,
  get, set,
  deepClone, find, findIndex, flatArray, removeDuplicate,
  getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined
}