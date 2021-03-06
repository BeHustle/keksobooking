'use strict';

(function () {
  var DELAY_TIME = 500;
  var lastTimeout;
  var errorElement = document.createElement('div');
  window.util = {
    ESC_KEY: 'Escape',
    HIDDEN_CLASS: 'hidden',
    ENTER_KEY: 'Enter',
    showError: function (error) {
      errorElement.style.position = 'absolute';
      errorElement.style.left = '0';
      errorElement.style.right = '0';
      errorElement.style = 'padding: 8px 0; z-index: 5; text-align: center; background-color: red; color: white';
      errorElement.style.fontSize = '15px';
      errorElement.textContent = error;
      errorElement.style.display = 'block';
      document.body.insertAdjacentElement('afterbegin', errorElement);
    },
    hideError: function () {
      errorElement.style.display = 'none';
    },
    getPinCoordinates: function (pinElement, type) {
      var coordianteX = 0;
      var coordianteY = 0;
      switch (type) {
        case 'main':
          coordianteX = parseInt(pinElement.style.left, 10) + window.data.OffsetPins.main.x;
          coordianteY = parseInt(pinElement.style.top, 10) + window.data.OffsetPins.main.y;
          break;
        case 'offer':
          coordianteX = parseInt(pinElement.style.left, 10) + window.data.OffsetPins.offer.x;
          coordianteY = parseInt(pinElement.style.top, 10) + window.data.OffsetPins.offer.y;
          break;
        default:
          break;
      }
      return {
        x: coordianteX,
        y: coordianteY
      };
    },
    disableFormElements: function (nodeList) {
      for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].setAttribute('disabled', 'disabled');
      }
    },
    enableFormElements: function (nodeList) {
      for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].removeAttribute('disabled');
      }
    },
    parseNumber: function (number) {
      return parseInt(number.replace(/[^\d]/g, ''), 10);
    },
    compareArrays: function (array, arrayToCompare) {
      var isContains = true;
      array.forEach(function (item) {
        if (!arrayToCompare.includes(item)) {
          isContains = false;
        }
      });
      return isContains;
    },
    debounce: function (cb) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(cb, DELAY_TIME);
    }
  };
})();
