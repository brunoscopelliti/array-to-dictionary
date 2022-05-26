"use strict";

/**
 * @name toDictionary
 * @param {Array} arr
 * @param {String?} k
 * @return {Object}
 */
function toDictionary (arr, k) {
  k = k || "id";
  var dict = {};
  var el, key;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      el = arr[i];
      key = el[k];
      if (key) {
        dict[key] = el;
      }
    }
  }
  return dict;
};

exports.toDictionary = toDictionary;
