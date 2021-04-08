(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_views_charts_Charts_js"],{

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

/***/ "./resources/js/components/reusable/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/reusable/index.js ***!
  \***************************************************/
/***/ (() => {

// import DocsLink from './DocsLink'
// export {
//   DocsLink
// }

/***/ }),

/***/ "./resources/js/components/views/charts/Charts.js":
/*!********************************************************!*\
  !*** ./resources/js/components/views/charts/Charts.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/es/index.js");
/* harmony import */ var _reusable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reusable */ "./resources/js/components/reusable/index.js");
/* harmony import */ var _reusable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reusable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Charts = function Charts() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardGroup, {
    columns: true,
    className: "cols-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: ["Bar Chart", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_3__.DocsLink, {
          href: "http://www.chartjs.org"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartBar, {
          datasets: [{
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }],
          labels: "months",
          options: {
            tooltips: {
              enabled: true
            }
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: "Doughnut Chart"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartDoughnut, {
          datasets: [{
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }],
          labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
          options: {
            tooltips: {
              enabled: true
            }
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: "Line Chart"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, {
          datasets: [{
            label: 'Data One',
            backgroundColor: 'rgb(228,102,81,0.9)',
            data: [30, 39, 10, 50, 30, 70, 35]
          }, {
            label: 'Data Two',
            backgroundColor: 'rgb(0,216,255,0.9)',
            data: [39, 80, 40, 35, 40, 20, 45]
          }],
          options: {
            tooltips: {
              enabled: true
            }
          },
          labels: "months"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: "Pie Chart"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartPie, {
          datasets: [{
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }],
          labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
          options: {
            tooltips: {
              enabled: true
            }
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: "Polar Area Chart"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartPolarArea, {
          datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgba(179,181,198,1)',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          }, {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgba(255,99,132,1)',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }],
          options: {
            aspectRatio: 1.5,
            tooltips: {
              enabled: true
            }
          },
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running']
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: "Radar Chart"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartRadar, {
          datasets: [{
            label: '2019',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            tooltipLabelColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          }, {
            label: '2020',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            tooltipLabelColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }],
          options: {
            aspectRatio: 1.5,
            tooltips: {
              enabled: true
            }
          },
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running']
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Charts);

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