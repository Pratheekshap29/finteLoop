(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_App_index_js"],{

/***/ "./resources/js/components/App/TheContent.js":
/*!***************************************************!*\
  !*** ./resources/js/components/App/TheContent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./resources/js/components/routes.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // routes config





var loading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
  className: "pt-3 text-center",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "sk-spinner sk-spinner-pulse"
  })
});

var TheContent = function TheContent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("main", {
    className: "c-main",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CContainer, {
      fluid: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: loading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, {
          children: [_routes__WEBPACK_IMPORTED_MODULE_3__.default.map(function (route, idx) {
            return route.component && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
              path: route.path,
              exact: route.exact,
              name: route.name,
              render: function render(props) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CFade, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(route.component, _objectSpread({}, props))
                });
              }
            }, idx);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {
            from: "/",
            to: "/dashboard"
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(TheContent));

/***/ }),

/***/ "./resources/js/components/App/TheFooter.js":
/*!**************************************************!*\
  !*** ./resources/js/components/App/TheFooter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var TheFooter = function TheFooter() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFooter, {
    fixed: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://coreui.io",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "CoreUI"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "ml-1",
        children: "\xA9 2020 creativeLabs."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "mfs-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "mr-1",
        children: "Powered by"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://coreui.io/react",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "CoreUI for React"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(TheFooter));

/***/ }),

/***/ "./resources/js/components/App/TheHeader.js":
/*!**************************************************!*\
  !*** ./resources/js/components/App/TheHeader.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./resources/js/components/routes.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./resources/js/components/App/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



 // routes config





var TheHeader = function TheHeader() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var sidebarShow = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.sidebarShow;
  });

  var toggleSidebar = function toggleSidebar() {
    var val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive';
    dispatch({
      type: 'set',
      sidebarShow: val
    });
  };

  var toggleSidebarMobile = function toggleSidebarMobile() {
    var val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive';
    dispatch({
      type: 'set',
      sidebarShow: val
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CHeader, {
    withSubheader: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CBreadcrumbRouter, {
      className: "border-0 c-subheader-nav m-0 px-0 px-md-3",
      routes: _routes__WEBPACK_IMPORTED_MODULE_4__.default
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheHeader);

/***/ }),

/***/ "./resources/js/components/App/TheHeaderDropdown.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/App/TheHeaderDropdown.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var TheHeaderDropdown = function TheHeaderDropdown() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    inNav: true,
    className: "c-header-nav-items mx-2",
    direction: "down",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
      className: "pt-0",
      placement: "bottom-end"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheHeaderDropdown);

/***/ }),

/***/ "./resources/js/components/App/TheHeaderDropdownMssg.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/App/TheHeaderDropdownMssg.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TheHeaderDropdownMssg = function TheHeaderDropdownMssg() {
  var itemsCount = 4;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    inNav: true,
    className: "c-header-nav-item mx-2",
    direction: "down",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
      className: "c-header-nav-link",
      caret: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
        name: "cil-envelope-open"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
        shape: "pill",
        color: "info",
        children: itemsCount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
      className: "pt-0",
      placement: "bottom-end",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        header: true,
        tag: "div",
        color: "light",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
          children: ["You have ", itemsCount, " messages"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pt-3 mr-3 float-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "c-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CImg, {
                src: 'avatars/7.jpg',
                className: "c-avatar-img",
                alt: "admin@bootstrapmaster.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "c-avatar-status bg-success"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted",
              children: "John Doe"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted float-right mt-1",
              children: "Just now"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-truncate font-weight-bold",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "fa fa-exclamation text-danger"
            }), " Important message"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "small text-muted text-truncate",
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pt-3 mr-3 float-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "c-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CImg, {
                src: 'avatars/6.jpg',
                className: "c-avatar-img",
                alt: "admin@bootstrapmaster.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "c-avatar-status bg-warning"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted",
              children: "Jane Dovve"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted float-right mt-1",
              children: "5 minutes ago"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-truncate font-weight-bold",
            children: "Lorem ipsum dolor sit amet"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "small text-muted text-truncate",
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pt-3 mr-3 float-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "c-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CImg, {
                src: 'avatars/5.jpg',
                className: "c-avatar-img",
                alt: "admin@bootstrapmaster.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "c-avatar-status bg-danger"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted",
              children: "Janet Doe"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted float-right mt-1",
              children: "1:52 PM"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-truncate font-weight-bold",
            children: "Lorem ipsum dolor sit amet"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "small text-muted text-truncate",
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "message",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "pt-3 mr-3 float-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "c-avatar",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CImg, {
                src: 'avatars/4.jpg',
                className: "c-avatar-img",
                alt: "admin@bootstrapmaster.com"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "c-avatar-status bg-info"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted",
              children: "Joe Doe"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              className: "text-muted float-right mt-1",
              children: "4:03 AM"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-truncate font-weight-bold",
            children: "Lorem ipsum dolor sit amet"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "small text-muted text-truncate",
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        href: "#",
        className: "text-center border-top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: "View all messages"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheHeaderDropdownMssg);

/***/ }),

/***/ "./resources/js/components/App/TheHeaderDropdownNotif.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/App/TheHeaderDropdownNotif.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TheHeaderDropdownNotif = function TheHeaderDropdownNotif() {
  var itemsCount = 5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    inNav: true,
    className: "c-header-nav-item mx-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
      className: "c-header-nav-link",
      caret: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
        name: "cil-bell"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
        shape: "pill",
        color: "danger",
        children: itemsCount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
      placement: "bottom-end",
      className: "pt-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        header: true,
        tag: "div",
        className: "text-center",
        color: "light",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
          children: ["You have ", itemsCount, " notifications"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-user-follow",
          className: "mr-2 text-success"
        }), " New user registered"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-user-unfollow",
          className: "mr-2 text-danger"
        }), " User deleted"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-chart-pie",
          className: "mr-2 text-info"
        }), " Sales report is ready"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-basket",
          className: "mr-2 text-primary"
        }), " New client"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
          name: "cil-speedometer",
          className: "mr-2 text-warning"
        }), " Server overloaded"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        header: true,
        tag: "div",
        color: "light",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: "Server"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-uppercase mb-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: "CPU Usage"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "info",
          value: 25
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
          className: "text-muted",
          children: "348 Processes. 1/4 Cores."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-uppercase mb-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: "Memory Usage"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "warning",
          value: 70
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
          className: "text-muted",
          children: "11444GB/16384MB"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-uppercase mb-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              children: "SSD 1 Usage"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "danger",
          value: 90
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
          className: "text-muted",
          children: "243GB/256GB"
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheHeaderDropdownNotif);

/***/ }),

/***/ "./resources/js/components/App/TheHeaderDropdownTasks.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/App/TheHeaderDropdownTasks.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TheHeaderDropdownTasks = function TheHeaderDropdownTasks() {
  var itemsCount = 5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
    inNav: true,
    className: "c-header-nav-item mx-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
      className: "c-header-nav-link",
      caret: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
        name: "cil-list"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
        shape: "pill",
        color: "warning",
        children: itemsCount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
      placement: "bottom-end",
      className: "pt-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        header: true,
        tag: "div",
        className: "text-center",
        color: "light",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
          children: ["You have ", itemsCount, " pending tasks"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["Upgrade NPM & Bower ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "0%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "info",
          value: 0
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["ReactJS Version ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "25%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "danger",
          value: 25
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["VueJS Version ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "50%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "warning",
          value: 50
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["Add new layouts ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "75%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "info",
          value: 75
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "d-block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "small mb-1",
          children: ["Angular 2 Cli Version ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "float-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "100%"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CProgress, {
          size: "xs",
          color: "success",
          value: 100
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
        className: "text-center border-top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
          children: "View all tasks"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheHeaderDropdownTasks);

/***/ }),

/***/ "./resources/js/components/App/TheLayout.js":
/*!**************************************************!*\
  !*** ./resources/js/components/App/TheLayout.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./resources/js/components/App/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var TheLayout = function TheLayout() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "c-app c-default-layout",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.TheSidebar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "c-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.TheHeader, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "c-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.TheContent, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.TheFooter, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheLayout);

/***/ }),

/***/ "./resources/js/components/App/TheSidebar.js":
/*!***************************************************!*\
  !*** ./resources/js/components/App/TheSidebar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_nav */ "./resources/js/components/App/_nav.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



 // sidebar nav config





var TheSidebar = function TheSidebar() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var show = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.sidebarShow;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebar, {
    show: show,
    onShowChange: function onShowChange(val) {
      return dispatch({
        type: 'set',
        sidebarShow: val
      });
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarBrand, {
      className: "d-md-down-none",
      to: "/",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "c-sidebar-brand-full",
        name: "logo-negative",
        height: 35
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "c-sidebar-brand-minimized",
        name: "sygnet",
        height: 35
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNav, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCreateElement, {
        items: _nav__WEBPACK_IMPORTED_MODULE_4__.default,
        components: {
          CSidebarNavDivider: _coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNavDivider,
          CSidebarNavDropdown: _coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNavDropdown,
          CSidebarNavItem: _coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNavItem,
          CSidebarNavTitle: _coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarNavTitle
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CSidebarMinimizer, {
      className: "c-d-md-down-none"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(TheSidebar));

/***/ }),

/***/ "./resources/js/components/App/_nav.js":
/*!*********************************************!*\
  !*** ./resources/js/components/App/_nav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var _nav = [{
  _tag: 'CSidebarNavItem',
  name: 'Dashboard',
  to: '/',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__.default, {
    name: "cil-speedometer",
    customClasses: "c-sidebar-nav-icon"
  }) // badge: {
  //   color: 'info',
  //   text: 'NEW',
  // }

}, // {
//   _tag: 'CSidebarNavTitle',
//   _children: ['Theme']
// },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Colors',
//   to: '/theme/colors',
//   icon: 'cil-drop',
// },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Typography',
//   to: '/theme/typography',
//   icon: 'cil-pencil',
// },
{
  _tag: 'CSidebarNavTitle',
  _children: ['Components']
}, // {
//   _tag: 'CSidebarNavDropdown',
//   name: 'Base',
//   route: '/base',
//   icon: 'cil-puzzle',
//   _children: [
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Breadcrumb',
//       to: '/base/breadcrumbs',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Cards',
//       to: '/base/cards',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Carousel',
//       to: '/base/carousels',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Collapse',
//       to: '/base/collapses',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Forms',
//       to: '/base/forms',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Jumbotron',
//       to: '/base/jumbotrons',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'List group',
//       to: '/base/list-groups',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Navs',
//       to: '/base/navs',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Navbars',
//       to: '/base/navbars',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Pagination',
//       to: '/base/paginations',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Popovers',
//       to: '/base/popovers',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Progress',
//       to: '/base/progress-bar',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Switches',
//       to: '/base/switches',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Tables',
//       to: '/base/tables',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Tabs',
//       to: '/base/tabs',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Tooltips',
//       to: '/base/tooltips',
//     },
//   ],
// },
{
  _tag: 'CSidebarNavDropdown',
  name: 'Events',
  route: '/events',
  icon: 'cil-cursor',
  _children: [// {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Buttons',
  //   to: '/buttons/buttons',
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Create Event',
    to: '/events/add'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Manage Events',
    to: '/events'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Projects',
  route: '/projects',
  icon: 'cil-cursor',
  _children: [// {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Buttons',
  //   to: '/buttons/buttons',
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Create Project',
    to: '/projects/add'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Manage Projects',
    to: '/projects'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'News',
  route: '/newss',
  icon: 'cil-cursor',
  _children: [// {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Buttons',
  //   to: '/buttons/buttons',
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Create News',
    to: '/newss/add'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Manage News',
    to: '/newss'
  }]
}, {
  _tag: 'CSidebarNavDropdown',
  name: 'Memebers',
  route: '/members',
  icon: 'cil-cursor',
  _children: [// {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Buttons',
  //   to: '/buttons/buttons',
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Create Members',
    to: '/members/add'
  }, {
    _tag: 'CSidebarNavItem',
    name: 'Mange Members',
    to: '/members'
  }]
} // {
//   _tag: 'CSidebarNavDropdown',
//   name: 'Icons',
//   route: '/icons',
//   icon: 'cil-star',
//   _children: [
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'CoreUI Free',
//       to: '/icons/coreui-icons',
//       badge: {
//         color: 'success',
//         text: 'NEW',
//       },
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'CoreUI Flags',
//       to: '/icons/flags',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'CoreUI Brands',
//       to: '/icons/brands',
//     },
//   ],
// },
// {
//   _tag: 'CSidebarNavDropdown',
//   name: 'Notifications',
//   route: '/notifications',
//   icon: 'cil-bell',
//   _children: [
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Alerts',
//       to: '/notifications/alerts',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Badges',
//       to: '/notifications/badges',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Modal',
//       to: '/notifications/modals',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Toaster',
//       to: '/notifications/toaster'
//     }
//   ]
// },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Widgets',
//   to: '/widgets',
//   icon: 'cil-calculator',
//   badge: {
//     color: 'info',
//     text: 'NEW',
//   },
// },
// {
//   _tag: 'CSidebarNavDivider'
// },
// {
//   _tag: 'CSidebarNavTitle',
//   _children: ['Extras'],
// },
// {
//   _tag: 'CSidebarNavDropdown',
//   name: 'Pages',
//   route: '/pages',
//   icon: 'cil-star',
//   _children: [
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Login',
//       to: '/login',
//     },
//     {
//       _tag: 'CSidebarNavItem',
//       name: 'Register',
//       to: '/register',
//     },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Error 404',
//   to: '/404',
// },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Error 500',
//   to: '/500',
// },
// ],
// },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Disabled',
//   icon: 'cil-ban',
//   badge: {
//     color: 'secondary',
//     text: 'NEW',
//   },
//   addLinkClass: 'c-disabled',
//   'disabled': true
// },
// {
//   _tag: 'CSidebarNavDivider',
//   className: 'm-2'
// },
// {
//   _tag: 'CSidebarNavTitle',
//   _children: ['Labels']
// },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Label danger',
//   to: '',
//   icon: {
//     name: 'cil-star',
//     className: 'text-danger'
//   },
//   label: true
// },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Label info',
//   to: '',
//   icon: {
//     name: 'cil-star',
//     className: 'text-info'
//   },
//   label: true
// },
// {
//   _tag: 'CSidebarNavItem',
//   name: 'Label warning',
//   to: '',
//   icon: {
//     name: 'cil-star',
//     className: 'text-warning'
//   },
//   label: true
// },
// {
//   _tag: 'CSidebarNavDivider',
//   className: 'm-2'
// }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_nav);

/***/ }),

/***/ "./resources/js/components/App/index.js":
/*!**********************************************!*\
  !*** ./resources/js/components/App/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheContent": () => (/* reexport safe */ _TheContent__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "TheFooter": () => (/* reexport safe */ _TheFooter__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "TheHeader": () => (/* reexport safe */ _TheHeader__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "TheHeaderDropdown": () => (/* reexport safe */ _TheHeaderDropdown__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "TheHeaderDropdownMssg": () => (/* reexport safe */ _TheHeaderDropdownMssg__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "TheHeaderDropdownNotif": () => (/* reexport safe */ _TheHeaderDropdownNotif__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "TheHeaderDropdownTasks": () => (/* reexport safe */ _TheHeaderDropdownTasks__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "TheLayout": () => (/* reexport safe */ _TheLayout__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "TheSidebar": () => (/* reexport safe */ _TheSidebar__WEBPACK_IMPORTED_MODULE_8__.default)
/* harmony export */ });
/* harmony import */ var _TheContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheContent */ "./resources/js/components/App/TheContent.js");
/* harmony import */ var _TheFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter */ "./resources/js/components/App/TheFooter.js");
/* harmony import */ var _TheHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheHeader */ "./resources/js/components/App/TheHeader.js");
/* harmony import */ var _TheHeaderDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TheHeaderDropdown */ "./resources/js/components/App/TheHeaderDropdown.js");
/* harmony import */ var _TheHeaderDropdownMssg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TheHeaderDropdownMssg */ "./resources/js/components/App/TheHeaderDropdownMssg.js");
/* harmony import */ var _TheHeaderDropdownNotif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TheHeaderDropdownNotif */ "./resources/js/components/App/TheHeaderDropdownNotif.js");
/* harmony import */ var _TheHeaderDropdownTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TheHeaderDropdownTasks */ "./resources/js/components/App/TheHeaderDropdownTasks.js");
/* harmony import */ var _TheLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TheLayout */ "./resources/js/components/App/TheLayout.js");
/* harmony import */ var _TheSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TheSidebar */ "./resources/js/components/App/TheSidebar.js");











/***/ }),

/***/ "./resources/js/components/routes.js":
/*!*******************************************!*\
  !*** ./resources/js/components/routes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Toaster = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_notifications_toaster_Toaster_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/notifications/toaster/Toaster */ "./resources/js/components/views/notifications/toaster/Toaster.js"));
});
var Tables = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_tables_Tables_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/tables/Tables */ "./resources/js/components/views/base/tables/Tables.js"));
});
var Breadcrumbs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_breadcrumbs_Breadcrumbs_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/breadcrumbs/Breadcrumbs */ "./resources/js/components/views/base/breadcrumbs/Breadcrumbs.js"));
});
var Cards = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_cards_Cards_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/cards/Cards */ "./resources/js/components/views/base/cards/Cards.js"));
});
var Carousels = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_carousels_Carousels_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/carousels/Carousels */ "./resources/js/components/views/base/carousels/Carousels.js"));
});
var Collapses = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_collapses_Collapses_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/collapses/Collapses */ "./resources/js/components/views/base/collapses/Collapses.js"));
});
var BasicForms = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_forms_BasicForms_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/forms/BasicForms */ "./resources/js/components/views/base/forms/BasicForms.js"));
});
var Jumbotrons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_jumbotrons_Jumbotrons_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/jumbotrons/Jumbotrons */ "./resources/js/components/views/base/jumbotrons/Jumbotrons.js"));
});
var ListGroups = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_list-groups_ListGroups_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/list-groups/ListGroups */ "./resources/js/components/views/base/list-groups/ListGroups.js"));
});
var Navbars = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_navbars_Navbars_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/navbars/Navbars */ "./resources/js/components/views/base/navbars/Navbars.js"));
});
var Navs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_navs_Navs_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/navs/Navs */ "./resources/js/components/views/base/navs/Navs.js"));
});
var Paginations = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_paginations_Pagnations_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/paginations/Pagnations */ "./resources/js/components/views/base/paginations/Pagnations.js"));
});
var Popovers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_popovers_Popovers_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/popovers/Popovers */ "./resources/js/components/views/base/popovers/Popovers.js"));
});
var ProgressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_progress-bar_ProgressBar_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/progress-bar/ProgressBar */ "./resources/js/components/views/base/progress-bar/ProgressBar.js"));
});
var Switches = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_switches_Switches_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/switches/Switches */ "./resources/js/components/views/base/switches/Switches.js"));
});
var Tabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_tabs_Tabs_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/tabs/Tabs */ "./resources/js/components/views/base/tabs/Tabs.js"));
});
var Tooltips = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_base_tooltips_Tooltips_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/base/tooltips/Tooltips */ "./resources/js/components/views/base/tooltips/Tooltips.js"));
});
var BrandButtons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_buttons_brand-buttons_BrandButtons_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/buttons/brand-buttons/BrandButtons */ "./resources/js/components/views/buttons/brand-buttons/BrandButtons.js"));
});
var ButtonDropdowns = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_buttons_button-dropdowns_ButtonDropdowns_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/buttons/button-dropdowns/ButtonDropdowns */ "./resources/js/components/views/buttons/button-dropdowns/ButtonDropdowns.js"));
});
var ButtonGroups = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_buttons_button-groups_ButtonGroups_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/buttons/button-groups/ButtonGroups */ "./resources/js/components/views/buttons/button-groups/ButtonGroups.js"));
});
var Buttons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_buttons_buttons_Buttons_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/buttons/buttons/Buttons */ "./resources/js/components/views/buttons/buttons/Buttons.js"));
});
var Charts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_charts_Charts_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/charts/Charts */ "./resources/js/components/views/charts/Charts.js"));
});
var Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_dashboard_Dashboard_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/Dashboard */ "./resources/js/components/views/dashboard/Dashboard.js"));
});
var CoreUIIcons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_icons_coreui-icons_CoreUIIcons_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/icons/coreui-icons/CoreUIIcons */ "./resources/js/components/views/icons/coreui-icons/CoreUIIcons.js"));
});
var Flags = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_icons_flags_Flags_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/icons/flags/Flags */ "./resources/js/components/views/icons/flags/Flags.js"));
});
var Brands = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_icons_brands_Brands_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/icons/brands/Brands */ "./resources/js/components/views/icons/brands/Brands.js"));
});
var Alerts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_notifications_alerts_Alerts_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/notifications/alerts/Alerts */ "./resources/js/components/views/notifications/alerts/Alerts.js"));
});
var Badges = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_notifications_badges_Badges_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/notifications/badges/Badges */ "./resources/js/components/views/notifications/badges/Badges.js"));
});
var Modals = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_notifications_modals_Modals_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/notifications/modals/Modals */ "./resources/js/components/views/notifications/modals/Modals.js"));
});
var Colors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_theme_colors_Colors_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/theme/colors/Colors */ "./resources/js/components/views/theme/colors/Colors.js"));
});
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_theme_typography_Typography_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/theme/typography/Typography */ "./resources/js/components/views/theme/typography/Typography.js"));
});
var Widgets = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_widgets_Widgets_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/widgets/Widgets */ "./resources/js/components/views/widgets/Widgets.js"));
});
var Users = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_users_Users_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/users/Users */ "./resources/js/components/views/users/Users.js"));
});
var User = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_views_users_User_js").then(__webpack_require__.bind(__webpack_require__, /*! ./views/users/User */ "./resources/js/components/views/users/User.js"));
});
var Events = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./App/Events */ "./resources/js/components/App/Events.js"));
});
var AddEvents = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_App_Events_Create_js").then(__webpack_require__.bind(__webpack_require__, /*! ./App/Events/Create */ "./resources/js/components/App/Events/Create.js"));
});
var Projects = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./App/Projects */ "./resources/js/components/App/Projects.js"));
});
var AddProjects = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_App_Projects_Create_js").then(__webpack_require__.bind(__webpack_require__, /*! ./App/Projects/Create */ "./resources/js/components/App/Projects/Create.js"));
});
var News = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./App/Newss */ "./resources/js/components/App/Newss.js"));
});
var AddNews = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_App_Newss_Create_js").then(__webpack_require__.bind(__webpack_require__, /*! ./App/Newss/Create */ "./resources/js/components/App/Newss/Create.js"));
});
var Members = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./App/Members */ "./resources/js/components/App/Members.js"));
});
var AddMembers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_components_App_Members_Create_js").then(__webpack_require__.bind(__webpack_require__, /*! ./App/Members/Create */ "./resources/js/components/App/Members/Create.js"));
});
var routes = [// { path: '/', exact: true, name: 'Home' },
{
  path: '/',
  name: 'Dashboard',
  component: Dashboard,
  exact: true
}, {
  path: '/events',
  name: 'Events',
  component: Events,
  exact: true
}, {
  path: '/events/add',
  name: 'AddEvents',
  component: AddEvents,
  exact: true
}, {
  path: '/projects',
  name: 'Projects',
  component: Projects,
  exact: true
}, {
  path: '/projects/add',
  name: 'AddProjects',
  component: AddProjects,
  exact: true
}, {
  path: '/newss',
  name: 'News',
  component: News,
  exact: true
}, {
  path: '/newss/add',
  name: 'AddNews',
  component: AddNews,
  exact: true
}, {
  path: '/members',
  name: 'Members',
  component: Members,
  exact: true
}, {
  path: '/members/add',
  name: 'AddMembers',
  component: AddMembers,
  exact: true
}, // { path: '/theme', name: 'Theme', component: Colors, exact: true },
// { path: '/theme/colors', name: 'Colors', component: Colors },
// { path: '/theme/typography', name: 'Typography', component: Typography },
// { path: '/base', name: 'Base', component: Cards, exact: true },
// { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
// { path: '/base/cards', name: 'Cards', component: Cards },
// { path: '/base/carousels', name: 'Carousel', component: Carousels },
// { path: '/base/collapses', name: 'Collapse', component: Collapses },
// { path: '/base/forms', name: 'Forms', component: BasicForms },
// { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
// { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
// { path: '/base/navbars', name: 'Navbars', component: Navbars },
// { path: '/base/navs', name: 'Navs', component: Navs },
// { path: '/base/paginations', name: 'Paginations', component: Paginations },
// { path: '/base/popovers', name: 'Popovers', component: Popovers },
// { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
// { path: '/base/switches', name: 'Switches', component: Switches },
// { path: '/base/tables', name: 'Tables', component: Tables },
// { path: '/base/tabs', name: 'Tabs', component: Tabs },
// { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
{
  path: '/buttons',
  name: 'Buttons',
  component: Buttons,
  exact: true
}, {
  path: '/buttons/buttons',
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/button-dropdowns',
  name: 'Dropdowns',
  component: ButtonDropdowns
}, {
  path: '/buttons/button-groups',
  name: 'Button Groups',
  component: ButtonGroups
}, {
  path: '/buttons/brand-buttons',
  name: 'Brand Buttons',
  component: BrandButtons
}, //{ path: '/charts', name: 'Charts', component: Charts },
// { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
// { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
// { path: '/icons/flags', name: 'Flags', component: Flags },
// { path: '/icons/brands', name: 'Brands', component: Brands },
// { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
// { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
// { path: '/notifications/badges', name: 'Badges', component: Badges },
// { path: '/notifications/modals', name: 'Modals', component: Modals },
// { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
// { path: '/widgets', name: 'Widgets', component: Widgets },
{
  path: '/users',
  exact: true,
  name: 'Users',
  component: Users
}, {
  path: '/users/:id',
  exact: true,
  name: 'User Details',
  component: User
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

}]);