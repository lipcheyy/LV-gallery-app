"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Registration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Registration",
  data: function data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirm: null,
      error: null
    };
  },
  methods: {
    storeUser: function storeUser() {
      var _this = this;
      axios.post('/api/users/registration', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm
      }).then(function (res) {
        localStorage.setItem('access_token', res.data.access_token);
        _this.$router.push({
          name: 'personal.page'
        });
      })["catch"](function (error) {
        _this.error = error.response.data.message;
        //this.error=error.response.data.errors.password[0];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=template&id=02ea7b42&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=template&id=02ea7b42&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, [_c("div", {
    staticClass: "form-container"
  }, [_c("div", {
    staticClass: "btn-container"
  }, [_c("router-link", {
    staticClass: "route-btn",
    attrs: {
      to: {
        name: "user.login"
      }
    }
  }, [_vm._v("Вхід")]), _vm._v(" "), _c("router-link", {
    staticClass: "route-btn active",
    attrs: {
      to: {
        name: "user.registration"
      }
    }
  }, [_vm._v("Реєстрація")])], 1), _vm._v(" "), _c("div", {
    staticClass: "inputs-container"
  }, [_c("p", {
    staticClass: "title"
  }, [_vm._v("Ім'я")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Пошта")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email"
    },
    domProps: {
      value: _vm.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Пароль")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "title"
  }, [_vm._v("Пароль")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password_confirm,
      expression: "password_confirm"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.password_confirm
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.password_confirm = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "submit-container"
  }, [_c("input", {
    staticClass: "btn",
    attrs: {
      type: "submit",
      value: "Зареєструватися"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.storeUser.apply(null, arguments);
      }
    }
  }), _vm._v(" "), _vm.error ? _c("p", [_vm._v(_vm._s(_vm.error))]) : _vm._e()])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-02ea7b42]{\n    text-decoration: none;\n}\n.main-container[data-v-02ea7b42] {\n    width: 490px;\n    height: 600px;\n    background: rgba(251, 251, 251, 0.91);\n    box-shadow: 20px -20px 30px -2px #F4F4F4, -20px 20px 30px -2px #F4F4F4;\n    border-radius: 35px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin: auto;\n}\n.form-container[data-v-02ea7b42] {\n    margin-top: 51px;\n}\n.btn-container[data-v-02ea7b42] {\n    width: 299px;\n    display: flex;\n    justify-content: space-between;\n}\n.route-btn[data-v-02ea7b42] {\n    width: 143px;\n    height: 25px;\n    background: #FBFBFB;\n    border: 2px solid #000000;\n    border-radius: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Inter', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 19px;\n    letter-spacing: 0.065em;\n    color: black\n}\n.route-btn.active[data-v-02ea7b42] {\n    background-color: red;\n    color: white;\n    border: 2px solid red;\n}\n.title[data-v-02ea7b42] {\n    font-family: 'Inter', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 18px;\n    letter-spacing: 0.065em;\n    margin: 0 0 10px 0;\n    padding: 0;\n    color: #000000;\n}\n.inputs-container[data-v-02ea7b42] {\n    margin-top: 87px;\n}\n.form-control[data-v-02ea7b42] {\n    margin-bottom: 9px;\n    border: 1px solid #000000;\n    border-radius: 7px;\n    background-color: rgba(251, 251, 251, 0.91);\n}\n.submit-container[data-v-02ea7b42] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.btn[data-v-02ea7b42] {\n    margin-top: 29px;\n    background: #B00000;\n    border-bottom: 1px solid #4F0000;\n    border-radius: 7px;\n    width: 162px;\n    height: 32px;\n    font-family: 'Inter', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 17px;\n    color: #FFF6F6;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_02ea7b42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css&");



var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_02ea7b42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_02ea7b42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/User/Registration.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/User/Registration.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registration_vue_vue_type_template_id_02ea7b42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=02ea7b42&scoped=true& */ "./resources/js/components/User/Registration.vue?vue&type=template&id=02ea7b42&scoped=true&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Registration.vue?vue&type=script&lang=js&");
/* harmony import */ var _Registration_vue_vue_type_style_index_0_id_02ea7b42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css& */ "./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_02ea7b42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registration_vue_vue_type_template_id_02ea7b42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "02ea7b42",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Registration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Registration.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/User/Registration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/User/Registration.vue?vue&type=template&id=02ea7b42&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/User/Registration.vue?vue&type=template&id=02ea7b42&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_02ea7b42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_02ea7b42_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_02ea7b42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration.vue?vue&type=template&id=02ea7b42&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=template&id=02ea7b42&scoped=true&");


/***/ }),

/***/ "./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_id_02ea7b42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Registration.vue?vue&type=style&index=0&id=02ea7b42&scoped=true&lang=css&");


/***/ })

}]);
