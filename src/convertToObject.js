'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';');

  const result = pairs.map((i) => {
    const [key, value] = i.split(':');
    return { [key]: value };
  });
}

module.exports = convertToObject;
