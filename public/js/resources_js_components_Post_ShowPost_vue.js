(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Post_ShowPost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ShowPost",
  data: function data() {
    return {
      post: null
    };
  },
  mounted: function mounted() {
    console.log(this.$route.params.id);
    this.getPost();
  },
  methods: {
    getPost: function getPost() {
      var _this = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/auth/posts/".concat(this.$route.params.id)).then(function (res) {
        _this.post = res.data.data;
        console.log(_this.post);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=template&id=e50970de&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=template&id=e50970de&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    staticClass: "main-container"
  }, [_vm.post && _vm.post.images ? [_vm._l(_vm.post.images, function (image) {
    return [_c("img", {
      staticClass: "post",
      attrs: {
        src: image.url,
        alt: "Post"
      }
    })];
  })] : _vm._e(), _vm._v(" "), _vm._m(0)], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "commentaries-container"
  }, [_c("div", {
    staticClass: "post-user-info"
  }, [_c("div", {
    staticClass: "user-info"
  }, [_c("img", {
    staticClass: "user",
    attrs: {
      src: __webpack_require__(/*! ../Includes/Images/User.png */ "./resources/js/components/Includes/Images/User.png"),
      alt: "User"
    }
  }), _vm._v(" "), _c("h2", {
    staticClass: "username"
  }, [_vm._v("Vasya")])]), _vm._v(" "), _c("div", {
    staticClass: "post-interaction"
  }, [_c("i", {
    staticClass: "far fa-heart likeBtn"
  }), _vm._v(" "), _c("i", {
    staticClass: "far fa-bookmark"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "line"
  }), _vm._v(" "), _c("div", {
    staticClass: "commentaries"
  }, [_c("div", {
    staticClass: "comment"
  }, [_c("img", {
    staticClass: "comment-user",
    attrs: {
      src: __webpack_require__(/*! ../Includes/Images/User.png */ "./resources/js/components/Includes/Images/User.png"),
      alt: "User"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "comment-title"
  }, [_vm._v("Gavnoi vonyaet")])])]), _vm._v(" "), _c("div", {
    staticClass: "send-container"
  }, [_c("input", {
    staticClass: "send-comment",
    attrs: {
      type: "text",
      placeholder: "Enter the message"
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "send-btn",
    attrs: {
      type: "submit"
    }
  }, [_c("i", {
    staticClass: "fa-sharp fa-solid fa-paper-plane"
  })])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nh1[data-v-e50970de], h2[data-v-e50970de], p[data-v-e50970de], i[data-v-e50970de] {\n    margin: 0;\n}\n.main-container[data-v-e50970de] {\n    width: 70%;\n    margin: 0 auto;\n    border: 1px solid black;\n    padding: 15px;\n    display: flex;\n}\n.commentaries-container[data-v-e50970de] {\n    margin-left: 3%;\n    width: 52%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.post[data-v-e50970de] {\n    width: 45%;\n}\n.post-user-info[data-v-e50970de] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.line[data-v-e50970de] {\n    width: 100%;\n    height: 3px;\n    background-color: #D9D9D9;\n    border-radius: 10%;\n    margin-top: 5px;\n}\n.user[data-v-e50970de] {\n    width: 10%;\n    border-radius: 50%;\n    border: 1px solid black;\n    margin-right: 10px;\n}\n.commentaries[data-v-e50970de] {\n    padding: 10px;\n    margin-top: 10px;\n    height: 75%;\n    overflow: auto;\n}\n.comment[data-v-e50970de] {\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 10px;\n    padding: 5px;\n    margin: 5px 0;\n}\n.comment-user[data-v-e50970de] {\n    height: 20px;\n    border: 1px solid black;\n    border-radius: 50%;\n}\n.user-info[data-v-e50970de] {\n    display: flex;\n    width: 70%;\n}\n.send-container[data-v-e50970de] {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 10%;\n    justify-content: space-between;\n}\n.send-comment[data-v-e50970de] {\n    width: 75%;\n    height: 100%;\n    border: 1px solid grey;\n    font-size: 32px;\n    border-radius: 10px;\n}\n.send-btn[data-v-e50970de] {\n    width: 20%;\n    height: 100%;\n    font-size: 24px;\n    border: 1px solid grey;\n    border-radius: 10px;\n    padding: 0;\n}\n.fa-paper-plane[data-v-e50970de] {\n    margin: 0 auto;\n}\n.post-interaction[data-v-e50970de] {\n    height: 100%;\n    width: 15%;\n    display: flex;\n    align-items: center;\n    font-size: 32px;\n    justify-content: space-between;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Includes/Images/User.png":
/*!**********************************************************!*\
  !*** ./resources/js/components/Includes/Images/User.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/User.png?6456b560ef79027feb1ff172972d8039";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_style_index_0_id_e50970de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_style_index_0_id_e50970de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_style_index_0_id_e50970de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Post/ShowPost.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Post/ShowPost.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowPost_vue_vue_type_template_id_e50970de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowPost.vue?vue&type=template&id=e50970de&scoped=true& */ "./resources/js/components/Post/ShowPost.vue?vue&type=template&id=e50970de&scoped=true&");
/* harmony import */ var _ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowPost.vue?vue&type=script&lang=js& */ "./resources/js/components/Post/ShowPost.vue?vue&type=script&lang=js&");
/* harmony import */ var _ShowPost_vue_vue_type_style_index_0_id_e50970de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& */ "./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowPost_vue_vue_type_template_id_e50970de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowPost_vue_vue_type_template_id_e50970de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e50970de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Post/ShowPost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Post/ShowPost.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Post/ShowPost.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Post/ShowPost.vue?vue&type=template&id=e50970de&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Post/ShowPost.vue?vue&type=template&id=e50970de&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_e50970de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_e50970de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_template_id_e50970de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowPost.vue?vue&type=template&id=e50970de&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=template&id=e50970de&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_style_index_0_id_e50970de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&");


/***/ })

}]);