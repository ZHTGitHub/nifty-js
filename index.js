import date from './source/date'

import { isEqual, isYummy } from './source/basic'
import { getScrollOffset, getViewportSize, queryToObject } from './source/browser'
import { fileToBlob, fileToBase64, base64ToFile, formatConvert, compressFile } from './source/file'
import { get, set } from './source/lodash'
import { deepClone, find, findIndex, flatArray, removeDuplicate } from './source/object'
import { getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined } from './source/types'

export {
  date,
  isEqual, isYummy,
  getScrollOffset, getViewportSize, queryToObject,
  fileToBlob, fileToBase64, base64ToFile, formatConvert, compressFile,
  get, set,
  deepClone, find, findIndex, flatArray, removeDuplicate,
  getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined
}

export default {
  date,
  isEqual, isYummy,
  getScrollOffset, getViewportSize, queryToObject,
  fileToBlob, fileToBase64, base64ToFile, formatConvert, compressFile,
  get, set,
  deepClone, find, findIndex, flatArray, removeDuplicate,
  getType, isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isSymbol, isUndefined
}