(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Personal_Personal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      userRole: null,
      username: null
    };
  },
  name: "Personal",
  mounted: function mounted() {
    this.userdata();
  },
  methods: {
    userdata: function userdata() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/me').then(function (res) {
        var user = res.data;
        localStorage.setItem('user_role', user.role);
        _this.userRole = parseInt(user.role);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=template&id=a5ad4a18&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=template&id=a5ad4a18&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-container"
  }, [_c("div", {
    staticClass: "user-info"
  }, [_c("div", {
    staticClass: "circle"
  }, [_c("img", {
    staticClass: "user-icon",
    attrs: {
      src: __webpack_require__(/*! ../Includes/Images/User.png */ "./resources/js/components/Includes/Images/User.png"),
      alt: "User"
    }
  })]), _vm._v(" "), _c("h1", {
    staticClass: "name"
  }, [_vm._v("Ім'я")]), _vm._v(" "), _c("p", {
    staticClass: "posts-count-title"
  }, [_vm._v("Кількість ваших постів")]), _vm._v(" "), _c("p", {
    staticClass: "posts-count"
  }, [_vm._v("10")])]), _vm._v(" "), _c("div", {
    staticClass: "posts"
  }, [_c("img", {
    staticClass: "post",
    attrs: {
      src: __webpack_require__(/*! ../Includes/Images/Post.png */ "./resources/js/components/Includes/Images/Post.png"),
      alt: "Post"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "post",
    attrs: {
      src: __webpack_require__(/*! ../Includes/Images/Post.png */ "./resources/js/components/Includes/Images/Post.png"),
      alt: "Post"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "post",
    attrs: {
      src: __webpack_require__(/*! ../Includes/Images/Post.png */ "./resources/js/components/Includes/Images/Post.png"),
      alt: "Post"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "post",
    attrs: {
      src: __webpack_require__(/*! ../Includes/Images/Post.png */ "./resources/js/components/Includes/Images/Post.png"),
      alt: "Post"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "post",
    attrs: {
      src: __webpack_require__(/*! ../Includes/Images/Post.png */ "./resources/js/components/Includes/Images/Post.png"),
      alt: "Post"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-a5ad4a18], h1[data-v-a5ad4a18] {\n    margin: 0;\n    padding: 0;\n}\n.main-container[data-v-a5ad4a18] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-top: 30px;\n    flex-direction: column;\n    align-items: center;\n}\n.circle[data-v-a5ad4a18] {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    background: #D9D9D9;\n    box-shadow: 3px -6px 10px rgba(60, 60, 60, 0.14);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    margin-bottom: 5px;\n}\n.user-icon[data-v-a5ad4a18] {\n    width: 75%;\n    height: 75%;\n}\n.user-info[data-v-a5ad4a18] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.name[data-v-a5ad4a18] {\n    font-family: 'Inter';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 48px;\n    color: #000000;\n    margin-bottom: 5px;\n}\n.posts-count-title[data-v-a5ad4a18] {\n    font-family: 'Inter';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 32px;\n    color: #000000;\n    margin-bottom: 3px;\n}\n.posts-count[data-v-a5ad4a18] {\n    font-family: 'Inter';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 32px;\n    color: #000000;\n    margin-bottom: 5px;\n}\n.posts[data-v-a5ad4a18] {\n    width: 80%;\n    background: rgba(183, 183, 183, 0.14);\n    border: 4px dashed #C5C5C5;\n    border-radius: 8px;\n    display: flex;\n    flex-wrap: wrap;\n    /*height: 47.50692520775623vh;*/\n    -moz-column-gap: 30px;\n         column-gap: 30px;\n    row-gap: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 30px 0 30px 0;\n}\n.post[data-v-a5ad4a18] {\n    width: 200px;\n    height: 250px;\n    cursor: pointer;\n}\n\n\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Includes/Images/Post.png":
/*!**********************************************************!*\
  !*** ./resources/js/components/Includes/Images/Post.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/Post.png?efcd61b2cb9a645baf5423c139f87f85";

/***/ }),

/***/ "./resources/js/components/Includes/Images/User.png":
/*!**********************************************************!*\
  !*** ./resources/js/components/Includes/Images/User.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/User.png?6456b560ef79027feb1ff172972d8039";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_a5ad4a18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_a5ad4a18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_a5ad4a18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Personal/Personal.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Personal/Personal.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Personal_vue_vue_type_template_id_a5ad4a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Personal.vue?vue&type=template&id=a5ad4a18&scoped=true& */ "./resources/js/components/Personal/Personal.vue?vue&type=template&id=a5ad4a18&scoped=true&");
/* harmony import */ var _Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Personal.vue?vue&type=script&lang=js& */ "./resources/js/components/Personal/Personal.vue?vue&type=script&lang=js&");
/* harmony import */ var _Personal_vue_vue_type_style_index_0_id_a5ad4a18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css& */ "./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Personal_vue_vue_type_template_id_a5ad4a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Personal_vue_vue_type_template_id_a5ad4a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a5ad4a18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Personal/Personal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Personal/Personal.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Personal/Personal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Personal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Personal/Personal.vue?vue&type=template&id=a5ad4a18&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Personal/Personal.vue?vue&type=template&id=a5ad4a18&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_a5ad4a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_a5ad4a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_template_id_a5ad4a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Personal.vue?vue&type=template&id=a5ad4a18&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=template&id=a5ad4a18&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_a5ad4a18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Personal/Personal.vue?vue&type=style&index=0&id=a5ad4a18&scoped=true&lang=css&");


/***/ })

}]);