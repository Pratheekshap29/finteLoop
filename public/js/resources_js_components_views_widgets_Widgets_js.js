(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_widgets_Widgets_js"],{

/***/ "./node_modules/@coreui/chartjs/dist/js/coreui-chartjs.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/chartjs/dist/js/coreui-chartjs.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customTooltips": () => (/* binding */ customTooltips)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/*!
  * CoreUI Plugins - Chart.js for CoreUI 3 v2.0.0 (https://coreui.io)
  * Copyright 2020 creativeLabs Łukasz Holeczek
  * Licensed under MIT (https://coreui.io/license/)
  */


/**
 * --------------------------------------------------------------------------
 * Custom Tooltips for Chart.js (vv2.0.0-beta.0): custom-tooltips.js
 * Licensed under MIT (https://coreui.io/plugins/chart.js)
 * --------------------------------------------------------------------------
 */
function customTooltips(tooltipModel) {
  // Add unique id if not exist
  var _setCanvasId = () => {
    var _idMaker = () => {
      var _hex = 16;
      var _multiplier = 0x10000;
      return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
    };

    var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

    this._chart.canvas.id = _canvasId;
    return _canvasId;
  };

  var ClassName = {
    ABOVE: 'c-above',
    BELOW: 'c-below',
    CHARTJS_TOOLTIP: 'c-chartjs-tooltip',
    NO_TRANSFORM: 'c-no-transform',
    TOOLTIP_BODY: 'c-tooltip-body',
    TOOLTIP_BODY_ITEM: 'c-tooltip-body-item',
    TOOLTIP_BODY_ITEM_COLOR: 'c-tooltip-body-item-color',
    TOOLTIP_BODY_ITEM_LABEL: 'c-tooltip-body-item-label',
    TOOLTIP_BODY_ITEM_VALUE: 'c-tooltip-body-item-value',
    TOOLTIP_HEADER: 'c-tooltip-header',
    TOOLTIP_HEADER_ITEM: 'c-tooltip-header-item'
  };
  var Selector = {
    DIV: 'div',
    SPAN: 'span',
    TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
  };
  var tooltip = document.getElementById(Selector.TOOLTIP);

  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = Selector.TOOLTIP;
    tooltip.className = ClassName.CHARTJS_TOOLTIP;

    this._chart.canvas.parentNode.appendChild(tooltip);
  } // Hide if no tooltip


  if (tooltipModel.opacity === 0) {
    tooltip.style.opacity = 0;
    return;
  } // Set caret Position


  tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

  if (tooltipModel.yAlign) {
    tooltip.classList.add(tooltipModel.yAlign);
  } else {
    tooltip.classList.add(ClassName.NO_TRANSFORM);
  } // Set Text


  if (tooltipModel.body) {
    var titleLines = tooltipModel.title || [];
    var tooltipHeader = document.createElement(Selector.DIV);
    tooltipHeader.className = ClassName.TOOLTIP_HEADER;
    titleLines.forEach(title => {
      var tooltipHeaderTitle = document.createElement(Selector.DIV);
      tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
      tooltipHeaderTitle.innerHTML = title;
      tooltipHeader.appendChild(tooltipHeaderTitle);
    });
    var tooltipBody = document.createElement(Selector.DIV);
    tooltipBody.className = ClassName.TOOLTIP_BODY;
    var tooltipBodyItems = tooltipModel.body.map(item => item.lines);
    tooltipBodyItems.forEach((item, i) => {
      var tooltipBodyItem = document.createElement(Selector.DIV);
      tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
      var colors = tooltipModel.labelColors[i];
      var tooltipBodyItemColor = document.createElement(Selector.SPAN);
      tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
      tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
      tooltipBodyItem.appendChild(tooltipBodyItemColor);

      if (item[0].split(':').length > 1) {
        var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
        tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
        tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
        tooltipBodyItem.appendChild(tooltipBodyItemLabel);
        var tooltipBodyItemValue = document.createElement(Selector.SPAN);
        tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
        tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
        tooltipBodyItem.appendChild(tooltipBodyItemValue);
      } else {
        var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

        _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
        _tooltipBodyItemValue.innerHTML = item[0];
        tooltipBodyItem.appendChild(_tooltipBodyItemValue);
      }

      tooltipBody.appendChild(tooltipBodyItem);
    });
    tooltip.innerHTML = '';
    tooltip.appendChild(tooltipHeader);
    tooltip.appendChild(tooltipBody);
  }

  var position = this._chart.canvas.getBoundingClientRect();

  var positionY = this._chart.canvas.offsetTop;
  var positionX = this._chart.canvas.offsetLeft;
  var positionLeft = positionX + tooltipModel.caretX;
  var positionTop = positionY + tooltipModel.caretY; // eslint-disable-next-line

  var halfWidth = tooltipModel.width / 2;

  if (positionLeft + halfWidth > position.width) {
    positionLeft -= halfWidth;
  } else if (positionLeft < halfWidth) {
    positionLeft += halfWidth;
  } // Display, position, and set styles for font


  tooltip.style.opacity = 1;
  tooltip.style.left = positionLeft + "px";
  tooltip.style.top = positionTop + "px";
}


//# sourceMappingURL=coreui-chartjs.esm.js.map


/***/ }),

/***/ "./node_modules/@coreui/react-chartjs/es/CChart.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react-chartjs/es/CChart.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CChart": () => (/* binding */ CChart),
/* harmony export */   "CCharts": () => (/* binding */ CCharts),
/* harmony export */   "CChartBar": () => (/* binding */ CChartBar),
/* harmony export */   "CChartHorizontalBar": () => (/* binding */ CChartHorizontalBar),
/* harmony export */   "CChartLine": () => (/* binding */ CChartLine),
/* harmony export */   "CChartDoughnut": () => (/* binding */ CChartDoughnut),
/* harmony export */   "CChartRadar": () => (/* binding */ CChartRadar),
/* harmony export */   "CChartPie": () => (/* binding */ CChartPie),
/* harmony export */   "CChartPolarArea": () => (/* binding */ CChartPolarArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreui_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/chartjs */ "./node_modules/@coreui/chartjs/dist/js/coreui-chartjs.esm.js");
/* harmony import */ var _coreui_chartjs_dist_css_coreui_chartjs_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/chartjs/dist/css/coreui-chartjs.css */ "./node_modules/@coreui/chartjs/dist/css/coreui-chartjs.css");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var key = function key() {
  return Math.random().toString(36).replace('0.', '');
}; //component - CoreUI / CChart


var CChart = function CChart(props) {
  var innerRef = props.innerRef,
      datasets = props.datasets,
      labels = props.labels,
      options = props.options,
      plugins = props.plugins,
      type = props.type,
      attributes = _objectWithoutPropertiesLoose(props, ["innerRef", "datasets", "labels", "options", "plugins", "type"]);

  var compData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    firstRun: true
  }).current;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      chart = _useState[0],
      setChart = _useState[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var safeId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('safe_id_' + key())[0]; // methods

  var renderChart = function renderChart() {
    destroyChart();
    setChart(new (chart_js__WEBPACK_IMPORTED_MODULE_2___default())(ref.current.getContext('2d'), chartConfig));
  };

  var updateChart = function updateChart() {
    Object.assign(chart, chartConfig);
    chart.update();
  };

  var destroyChart = function destroyChart() {
    return chart && chart.destroy();
  };

  var dataset = datasets && datasets[0] && datasets[0].data || [];
  var computedLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (labels && typeof labels !== 'string') {
      return labels;
    }

    var emptyLabels = Array(dataset.length).fill('');

    if (labels === 'indexes') {
      return emptyLabels.map(function (u, i) {
        return i + 1;
      });
    } else if (labels === 'months') {
      return emptyLabels.map(function (u, i) {
        return months[i % 12];
      });
    }

    return emptyLabels;
  }, [JSON.stringify(labels), dataset.length]);

  var customTooltips = function () {
    if (options && options.tooltips) {
      return;
    }

    return {
      tooltips: {
        enabled: false,
        custom: _coreui_chartjs__WEBPACK_IMPORTED_MODULE_3__.customTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function labelColor(tooltipItem, chart) {
            function getValue(prop) {
              return typeof prop === 'object' ? prop[tooltipItem.index] : prop;
            }

            var dataset = chart.data.datasets[tooltipItem.datasetIndex]; //tooltipLabelColor is coreUI custom prop used only here

            var backgroundColor = getValue(dataset.tooltipLabelColor || dataset.pointHoverBackgroundColor || dataset.borderColor || dataset.backgroundColor);
            return {
              backgroundColor: backgroundColor
            };
          }
        }
      }
    };
  }();

  var computedOptions = function () {
    return Object.assign({}, options, customTooltips || {});
  }();

  var chartConfig = {
    type: type,
    data: {
      datasets: datasets,
      labels: computedLabels
    },
    options: computedOptions,
    plugins: plugins
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (compData.firstRun) return;
    updateChart();
  }, [chartConfig]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    renderChart();
    compData.firstRun = false;
    return function () {
      return destroyChart();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({}, attributes, {
    ref: innerRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
    id: safeId,
    ref: ref
  }));
};

CChart.propTypes =  true ? {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  datasets: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  labels: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  plugins: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
} : 0;

var CChartBar = function CChartBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CChart, _extends({}, props, {
    type: "bar"
  }));
};

var CChartHorizontalBar = function CChartHorizontalBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CChart, _extends({}, props, {
    type: "horizontalBar"
  }));
};

var CChartLine = function CChartLine(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CChart, _extends({}, props, {
    type: "line"
  }));
};

var CChartDoughnut = function CChartDoughnut(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CChart, _extends({}, props, {
    type: "doughnut"
  }));
};

var CChartRadar = function CChartRadar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CChart, _extends({}, props, {
    type: "radar"
  }));
};

var CChartPie = function CChartPie(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CChart, _extends({}, props, {
    type: "pie"
  }));
};

var CChartPolarArea = function CChartPolarArea(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CChart, _extends({}, props, {
    type: "polarArea"
  }));
};

var CCharts = function CCharts(props) {
  console.warn('<CCharts> component has been deprecated. Use <CChart> or <CChart{type}> instead');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CChart, props);
};



/***/ }),

/***/ "./node_modules/@coreui/react-chartjs/es/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/react-chartjs/es/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CChart": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CChart),
/* harmony export */   "CCharts": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CCharts),
/* harmony export */   "CChartBar": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CChartBar),
/* harmony export */   "CChartHorizontalBar": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CChartHorizontalBar),
/* harmony export */   "CChartLine": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CChartLine),
/* harmony export */   "CChartDoughnut": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CChartDoughnut),
/* harmony export */   "CChartRadar": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CChartRadar),
/* harmony export */   "CChartPie": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CChartPie),
/* harmony export */   "CChartPolarArea": () => (/* reexport safe */ _CChart__WEBPACK_IMPORTED_MODULE_0__.CChartPolarArea)
/* harmony export */ });
/* harmony import */ var _CChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CChart */ "./node_modules/@coreui/react-chartjs/es/CChart.js");



/***/ }),

/***/ "./node_modules/@coreui/utils/dist/coreui-utils.common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/utils/dist/coreui-utils.common.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"deepObjectsMerge",(function(){return r})),n.d(t,"getColor",(function(){return u})),n.d(t,"getStyle",(function(){return a})),n.d(t,"hexToRgb",(function(){return s})),n.d(t,"hexToRgba",(function(){return l})),n.d(t,"makeUid",(function(){return f})),n.d(t,"omitByKeys",(function(){return d})),n.d(t,"pickByKeys",(function(){return p})),n.d(t,"rgbToHex",(function(){return g}));var r=function e(t,n){for(var r=0,o=Object.keys(n);r<o.length;r++){var c=o[r];n[c]instanceof Object&&Object.assign(n[c],e(t[c],n[c]))}return Object.assign(t||{},n),t},o=function(){for(var e={},t=document.styleSheets,n="",r=t.length-1;r>-1;r--){for(var o=t[r].cssRules,c=o.length-1;c>-1;c--)if(".ie-custom-properties"===o[c].selectorText){n=o[c].cssText;break}if(n)break}return(n=n.substring(n.lastIndexOf("{")+1,n.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var n=t.split(": ")[0],r=t.split(": ")[1];n&&r&&(e["--".concat(n.trim())]=r.trim())}})),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},a=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&c()){var r=o();t=r[e]}else t=window.getComputedStyle(n,null).getPropertyValue(e).replace(/^\s/,"");return t},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n="--".concat(e),r=a(n,t);return r||e},s=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,n,r;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(n,", ").concat(r,")")},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var n,r,o,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(n=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(n=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(n,", ").concat(r,", ").concat(o,", ").concat(t/100,")")},f=function(){return"uid-"+Math.random().toString(36).substr(2)},d=function(e,t){for(var n={},r=Object.keys(e),o=0;o<r.length;o++)!t.includes(r[o])&&(n[r[o]]=e[r[o]]);return n},p=function(e,t){for(var n={},r=0;r<t.length;r++)n[t[r]]=e[t[r]];return n},g=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var n="0".concat(parseInt(t[1],10).toString(16)),r="0".concat(parseInt(t[2],10).toString(16)),o="0".concat(parseInt(t[3],10).toString(16));return"#".concat(n.slice(-2)).concat(r.slice(-2)).concat(o.slice(-2))},b={deepObjectsMerge:r,getColor:u,getStyle:a,hexToRgb:s,hexToRgba:l,makeUid:f,omitByKeys:d,pickByKeys:p,rgbToHex:g};t.default=b}]));

/***/ }),

/***/ "./resources/js/components/views/charts/ChartBarSimple.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/views/charts/ChartBarSimple.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var ChartBarSimple = function ChartBarSimple(props) {
  var backgroundColor = props.backgroundColor,
      pointHoverBackgroundColor = props.pointHoverBackgroundColor,
      dataPoints = props.dataPoints,
      label = props.label,
      pointed = props.pointed,
      attributes = _objectWithoutProperties(props, ["backgroundColor", "pointHoverBackgroundColor", "dataPoints", "label", "pointed"]);

  var defaultDatasets = function () {
    return [{
      data: dataPoints,
      backgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(backgroundColor),
      pointHoverBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(pointHoverBackgroundColor),
      label: label,
      barPercentage: 0.5,
      categoryPercentage: 1
    }];
  }();

  var defaultOptions = function () {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    };
  }(); // render


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartBar, _objectSpread(_objectSpread({}, attributes), {}, {
    datasets: defaultDatasets,
    options: defaultOptions,
    labels: label
  }));
};

ChartBarSimple.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  //
  backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  pointHoverBackgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  dataPoints: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  pointed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ChartBarSimple.defaultProps = {
  backgroundColor: 'rgba(0,0,0,.2)',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartBarSimple);

/***/ }),

/***/ "./resources/js/components/views/charts/ChartLineSimple.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/views/charts/ChartLineSimple.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var ChartLineSimple = function ChartLineSimple(props) {
  var borderColor = props.borderColor,
      backgroundColor = props.backgroundColor,
      pointHoverBackgroundColor = props.pointHoverBackgroundColor,
      dataPoints = props.dataPoints,
      label = props.label,
      pointed = props.pointed,
      attributes = _objectWithoutProperties(props, ["borderColor", "backgroundColor", "pointHoverBackgroundColor", "dataPoints", "label", "pointed"]);

  var pointHoverColor = function () {
    if (pointHoverBackgroundColor) {
      return pointHoverBackgroundColor;
    } else if (backgroundColor !== 'transparent') {
      return backgroundColor;
    }

    return borderColor;
  }();

  var defaultDatasets = function () {
    return [{
      data: dataPoints,
      borderColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(borderColor),
      backgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(backgroundColor),
      pointBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(pointHoverColor),
      pointHoverBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.getColor)(pointHoverColor),
      label: label
    }];
  }();

  var pointedOptions = function () {
    return {
      scales: {
        xAxes: [{
          offset: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, dataPoints) - 5,
            max: Math.max.apply(Math, dataPoints) + 5
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }();

  var straightOptions = function () {
    return {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }();

  var defaultOptions = function () {
    var options = pointed ? pointedOptions : straightOptions;
    return Object.assign({}, options, {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    });
  }();

  var computedDatasets = function () {
    return (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.deepObjectsMerge)(defaultDatasets, attributes.datasets || {});
  }();

  var computedOptions = function () {
    return (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_4__.deepObjectsMerge)(defaultOptions, attributes.options || {});
  }(); // render


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, _objectSpread(_objectSpread({}, attributes), {}, {
    datasets: computedDatasets,
    options: computedOptions,
    labels: label
  }));
};

ChartLineSimple.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  //
  borderColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  pointHoverBackgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  dataPoints: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  pointed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ChartLineSimple.defaultProps = {
  borderColor: 'rgba(255,255,255,.55)',
  backgroundColor: 'transparent',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartLineSimple);

/***/ }),

/***/ "./resources/js/components/views/widgets/Widgets.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/views/widgets/Widgets.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _WidgetsBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WidgetsBrand */ "./resources/js/components/views/widgets/WidgetsBrand.js");
/* harmony import */ var _WidgetsDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WidgetsDropdown */ "./resources/js/components/views/widgets/WidgetsDropdown.js");
/* harmony import */ var _charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../charts/ChartLineSimple */ "./resources/js/components/views/charts/ChartLineSimple.js");
/* harmony import */ var _charts_ChartBarSimple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../charts/ChartBarSimple */ "./resources/js/components/views/charts/ChartBarSimple.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var Widgets = function Widgets() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_WidgetsDropdown__WEBPACK_IMPORTED_MODULE_3__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgress, {
          color: "success",
          header: "89.9%",
          text: "Lorem ipsum...",
          footer: "Lorem ipsum dolor sit amet enim."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgress, {
          color: "info",
          header: "12.124",
          text: "Lorem ipsum...",
          footer: "Lorem ipsum dolor sit amet enim."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgress, {
          color: "warning",
          header: "$98.111,00",
          text: "Lorem ipsum...",
          footer: "Lorem ipsum dolor sit amet enim."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgress, {
          header: "2 TB",
          text: "Lorem ipsum...",
          footer: "Lorem ipsum dolor sit amet enim.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
            color: "danger",
            animated: true,
            size: "xs",
            className: "my-3",
            value: 75
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgress, {
          inverse: true,
          color: "success",
          variant: "inverse",
          header: "89.9%",
          text: "Lorem ipsum...",
          footer: "Lorem ipsum dolor sit amet enim."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgress, {
          inverse: true,
          color: "info",
          variant: "inverse",
          header: "12.124",
          text: "Lorem ipsum...",
          footer: "Lorem ipsum dolor sit amet enim."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgress, {
          inverse: true,
          color: "warning",
          variant: "inverse",
          header: "$98.111,00",
          text: "Lorem ipsum...",
          footer: "Lorem ipsum dolor sit amet enim."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgress, {
          inverse: true,
          color: "danger",
          variant: "inverse",
          value: 95,
          header: "2 TB",
          text: "Lorem ipsum...",
          footer: "Lorem ipsum dolor sit amet enim."
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-settings"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "info",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-user"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "warning",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-moon"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "danger",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-bell"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "primary",
          iconPadding: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-settings"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "info",
          iconPadding: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-laptop"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "warning",
          iconPadding: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-moon"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "danger",
          iconPadding: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-bell"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "primary",
          iconPadding: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-settings",
            className: "mx-5"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "info",
          iconPadding: false,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-laptop",
            className: "mx-5"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        xs: "12",
        sm: "6",
        lg: "4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetIcon, {
          text: "income",
          header: "$1.999,50",
          color: "warning",
          iconPadding: false,
          footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardFooter, {
            className: "card-footer px-3 py-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CLink, {
              className: "font-weight-bold font-xs btn-block text-muted",
              href: "https://coreui.io/",
              rel: "noopener norefferer",
              target: "_blank",
              children: ["View more", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
                name: "cil-arrow-right",
                className: "float-right",
                width: "16"
              })]
            })
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            width: 24,
            name: "cil-moon",
            className: "mx-5"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_WidgetsBrand__WEBPACK_IMPORTED_MODULE_2__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_WidgetsBrand__WEBPACK_IMPORTED_MODULE_2__.default, {
      withCharts: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardGroup, {
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "87.500",
        text: "Visitors",
        color: "gradient-info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-people",
          height: "36"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "385",
        text: "New Clients",
        color: "gradient-success",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-userFollow",
          height: "36"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "1238",
        text: "Products sold",
        color: "gradient-warning",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-basket",
          height: "36"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "28%",
        text: "Returning Visitors",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-chartPie",
          height: "36"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "5:34:11",
        text: "Avg. Time",
        color: "gradient-danger",
        progressSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          color: "danger",
          size: "xs",
          value: 75,
          animated: true,
          className: "my-3"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-speedometer",
          height: "36"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardGroup, {
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "87.500",
        text: "Visitors",
        color: "gradient-info",
        inverse: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-people",
          height: "36"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "385",
        text: "New Clients",
        color: "gradient-success",
        inverse: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-userFollow",
          height: "36"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "1238",
        text: "Products sold",
        color: "gradient-warning",
        inverse: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-basket",
          height: "36"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "28%",
        text: "Returning Visitors",
        color: "gradient-primary",
        inverse: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-chartPie",
          height: "36"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
        header: "5:34:11",
        text: "Avg. Time",
        color: "gradient-danger",
        inverse: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
          name: "cil-speedometer",
          height: "36"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "87.500",
          text: "Visitors",
          color: "gradient-info",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-people",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "385",
          text: "New Clients",
          color: "gradient-success",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-userFollow",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "1238",
          text: "Products sold",
          color: "gradient-warning",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-basket",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "28%",
          text: "Returning Visitors",
          color: "gradient-primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-chartPie",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "5:34:11",
          text: "Avg. Time",
          color: "gradient-danger",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-speedometer",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "972",
          text: "comments",
          color: "gradient-info",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-speech",
            height: "36"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "87.500",
          text: "Visitors",
          color: "gradient-info",
          inverse: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-people",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "385",
          text: "New Clients",
          color: "gradient-success",
          inverse: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-userFollow",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "1238",
          text: "Products sold",
          color: "gradient-warning",
          inverse: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-basket",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "28%",
          text: "Returning Visitors",
          color: "gradient-primary",
          inverse: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-chartPie",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "5:34:11",
          text: "Avg. Time",
          color: "gradient-danger",
          inverse: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-speedometer",
            height: "36"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "6",
        md: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetProgressIcon, {
          header: "972",
          text: "comments",
          color: "gradient-info",
          inverse: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__.default, {
            name: "cil-speech",
            height: "36"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "4",
        lg: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetSimple, {
          header: "title",
          text: "1,123",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
            style: {
              height: '40px'
            },
            borderColor: "danger"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "4",
        lg: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetSimple, {
          header: "title",
          text: "1,123",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
            style: {
              height: '40px'
            },
            borderColor: "primary"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "4",
        lg: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetSimple, {
          header: "title",
          text: "1,123",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
            style: {
              height: '40px'
            },
            borderColor: "success"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "4",
        lg: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetSimple, {
          header: "title",
          text: "1,123",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_charts_ChartBarSimple__WEBPACK_IMPORTED_MODULE_5__.default, {
            style: {
              height: '40px'
            },
            backgroundColor: "danger"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "4",
        lg: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetSimple, {
          header: "title",
          text: "1,123",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_charts_ChartBarSimple__WEBPACK_IMPORTED_MODULE_5__.default, {
            style: {
              height: '40px'
            },
            backgroundColor: "primary"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
        sm: "4",
        lg: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetSimple, {
          header: "title",
          text: "1,123",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_charts_ChartBarSimple__WEBPACK_IMPORTED_MODULE_5__.default, {
            style: {
              height: '40px'
            },
            backgroundColor: "success"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widgets);

/***/ }),

/***/ "./resources/js/components/views/widgets/WidgetsBrand.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/views/widgets/WidgetsBrand.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../charts/ChartLineSimple */ "./resources/js/components/views/charts/ChartLineSimple.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var WidgetsBrand = function WidgetsBrand(_ref) {
  var withCharts = _ref.withCharts;
  // render
  return withCharts ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "facebook",
        rightHeader: "89k",
        rightFooter: "friends",
        leftHeader: "459",
        leftFooter: "feeds",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-facebook",
          height: "52",
          className: "my-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "position-absolute w-100 h-100",
          backgroundColor: "rgba(255,255,255,.1)",
          dataPoints: [65, 59, 84, 84, 51, 55, 40],
          label: "Friends",
          labels: "months"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "twitter",
        rightHeader: "973k",
        rightFooter: "followers",
        leftHeader: "1.792",
        leftFooter: "tweets",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-twitter",
          height: "52",
          className: "my-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "position-absolute w-100 h-100",
          backgroundColor: "rgba(255,255,255,.1)",
          dataPoints: [1, 13, 9, 17, 34, 41, 38],
          label: "Followers",
          labels: "months"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "linkedin",
        rightHeader: "500+",
        rightFooter: "contracts",
        leftHeader: "292",
        leftFooter: "feeds",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-linkedin",
          height: "52",
          className: "my-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "position-absolute w-100 h-100",
          backgroundColor: "rgba(255,255,255,.1)",
          dataPoints: [78, 81, 80, 45, 34, 12, 40],
          label: "Contracts",
          labels: "months"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        rightHeader: "12",
        rightFooter: "events",
        leftHeader: "4",
        leftFooter: "meetings",
        color: "gradient-warning",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cil-calendar",
          height: "52",
          className: "my-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "position-absolute w-100 h-100",
          backgroundColor: "rgba(255,255,255,.1)",
          dataPoints: [35, 23, 56, 22, 97, 23, 64],
          label: "Followers",
          labels: "months"
        })]
      })
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "facebook",
        rightHeader: "89k",
        rightFooter: "friends",
        leftHeader: "459",
        leftFooter: "feeds",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-facebook",
          height: "56",
          className: "my-4"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "twitter",
        rightHeader: "973k",
        rightFooter: "followers",
        leftHeader: "1.792",
        leftFooter: "tweets",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-twitter",
          height: "56",
          className: "my-4"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        color: "linkedin",
        rightHeader: "500+",
        rightFooter: "contracts",
        leftHeader: "292",
        leftFooter: "feeds",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cib-linkedin",
          height: "56",
          className: "my-4"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        rightHeader: "12",
        rightFooter: "events",
        leftHeader: "4",
        leftFooter: "meetings",
        color: "gradient-warning",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "cil-calendar",
          height: "56",
          className: "my-4"
        })
      })
    })]
  });
};

WidgetsBrand.propTypes = {
  withCharts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsBrand);

/***/ }),

/***/ "./resources/js/components/views/widgets/WidgetsDropdown.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/views/widgets/WidgetsDropdown.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../charts/ChartLineSimple */ "./resources/js/components/views/charts/ChartLineSimple.js");
/* harmony import */ var _charts_ChartBarSimple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../charts/ChartBarSimple */ "./resources/js/components/views/charts/ChartBarSimple.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var WidgetsDropdown = function WidgetsDropdown() {
  // render
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        color: "gradient-primary",
        header: "9.823",
        text: "Members online",
        footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_3__.default, {
          pointed: true,
          className: "c-chart-wrapper mt-3 mx-3",
          style: {
            height: '70px'
          },
          dataPoints: [65, 59, 84, 84, 51, 55, 40],
          pointHoverBackgroundColor: "primary",
          label: "Members",
          labels: "months"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
              name: "cil-settings"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            className: "pt-0",
            placement: "bottom-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        color: "gradient-info",
        header: "9.823",
        text: "Members online",
        footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_3__.default, {
          pointed: true,
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          dataPoints: [1, 18, 9, 17, 34, 22, 11],
          pointHoverBackgroundColor: "info",
          options: {
            elements: {
              line: {
                tension: 0.00001
              }
            }
          },
          label: "Members",
          labels: "months"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            caret: false,
            color: "transparent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
              name: "cil-location-pin"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            className: "pt-0",
            placement: "bottom-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        color: "gradient-warning",
        header: "9.823",
        text: "Members online",
        footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: "mt-3",
          style: {
            height: '70px'
          },
          backgroundColor: "rgba(255,255,255,.2)",
          dataPoints: [78, 81, 80, 45, 34, 12, 40],
          options: {
            elements: {
              line: {
                borderWidth: 2.5
              }
            }
          },
          pointHoverBackgroundColor: "warning",
          label: "Members",
          labels: "months"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
              name: "cil-settings"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            className: "pt-0",
            placement: "bottom-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        color: "gradient-danger",
        header: "9.823",
        text: "Members online",
        footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartBarSimple__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          backgroundColor: "rgb(250, 152, 152)",
          label: "Members",
          labels: "months"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            caret: true,
            className: "text-white",
            color: "transparent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
              name: "cil-settings"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            className: "pt-0",
            placement: "bottom-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsDropdown);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/@coreui/chartjs/dist/css/coreui-chartjs.css":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/@coreui/chartjs/dist/css/coreui-chartjs.css ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*!\n * CoreUI Plugins - Chart.js for CoreUI 3\n * @version vv2.0.0-beta.0\n * @link https://coreui.io\n * Copyright (c) 2019 creativeLabs Łukasz Holeczek\n * Licensed under MIT (https://coreui.io/license/plugins/chart.js)\n */\n.c-chartjs-tooltip {\n  position: absolute;\n  z-index: 1021;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  pointer-events: none;\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 0;\n  transition: all 0.25s ease;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  border-radius: 0.25rem;\n}\n\n.c-chartjs-tooltip .c-tooltip-header {\n  margin-bottom: 0.5rem;\n}\n\n.c-chartjs-tooltip .c-tooltip-header-item {\n  font-size: 0.765625rem;\n  font-weight: 700;\n}\n\n.c-chartjs-tooltip .c-tooltip-body-item {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 0.765625rem;\n  white-space: nowrap;\n}\n\n.c-chartjs-tooltip .c-tooltip-body-item-color {\n  display: inline-block;\n  width: 0.875rem;\n  height: 0.875rem;\n  margin-right: 0.875rem;\n}\n\n.c-chartjs-tooltip .c-tooltip-body-item-value {\n  padding-left: 1rem;\n  margin-left: auto;\n  font-weight: 700;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/@coreui/chartjs/dist/css/coreui-chartjs.css":
/*!******************************************************************!*\
  !*** ./node_modules/@coreui/chartjs/dist/css/coreui-chartjs.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_coreui_chartjs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./coreui-chartjs.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/@coreui/chartjs/dist/css/coreui-chartjs.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_coreui_chartjs_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_coreui_chartjs_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);