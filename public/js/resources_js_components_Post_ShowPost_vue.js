"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Post_ShowPost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ShowPost",
  data: function data() {
    return {
      post: null,
      avatar: null,
      content: '',
      user_id: parseInt(localStorage.getItem('id')),
      toEdit: null,
      contentToEdit: '',
      id: parseInt(this.$route.params.id),
      likedIds: [],
      savedIds: [],
      userRole: parseInt(localStorage.getItem('user_role'))
    };
  },
  mounted: function mounted() {
    this.getPost();
    this.getUserLikes();
    this.getUserSaves();
  },
  methods: {
    getPost: function getPost() {
      var _this = this;
      if (this.$route.params.id) {
        _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/auth/posts/".concat(this.id)).then(function (res) {
          _this.post = res.data.data;
          _this.avatar = _this.post.user.avatar[0].url;
          console.log(_this.avatar);
        });
      }
    },
    storeComment: function storeComment() {
      var _this2 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/auth/posts/".concat(this.id, "/comments"), {
        content: this.content,
        post_id: this.$route.params.id
      }).then(function () {
        _this2.getPost();
        _this2.content = '';
      });
    },
    destroy: function destroy(id) {
      var _this3 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/api/auth/posts/".concat(this.id, "/comments/").concat(id)).then(function () {
        _this3.getPost();
      });
    },
    commentToEdit: function commentToEdit(id) {
      return this.toEdit === id;
    },
    getCommentDataToEdit: function getCommentDataToEdit(id, content) {
      this.toEdit = id;
      this.contentToEdit = content;
    },
    destroyPost: function destroyPost(id) {
      var _this4 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/api/auth/posts/".concat(id)).then(function () {
        _this4.$router.push({
          name: 'post.index'
        });
      });
    },
    update: function update(id) {
      var _this5 = this;
      this.toEdit = null;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/api/auth/posts/".concat(this.id, "/comments/").concat(id), {
        content: this.contentToEdit
      }).then(function (res) {
        _this5.getPost();
      });
    },
    getUserLikes: function getUserLikes() {
      var _this6 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/posts/liked').then(function (res) {
        _this6.userLiked = res.data;
        // console.log(this.userLiked);
        _this6.userLiked.forEach(function (liked) {
          _this6.likedIds.push(liked.id);
        });
      });
    },
    getUserSaves: function getUserSaves() {
      var _this7 = this;
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/posts/saved').then(function (res) {
        res.data.forEach(function (saved) {
          _this7.savedIds.push(saved.id);
        });
      });
    },
    like: function like() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/auth/posts/".concat(this.id, "/likes"));
      var likesCount = parseInt(document.querySelector(".likesCount").textContent);
      if (this.likedIds.includes(this.id)) {
        var likeIndex = this.likedIds.indexOf(this.id);
        this.likedIds.splice(likeIndex, 1);
        likesCount -= 1;
        document.querySelector(".likesCount").textContent = likesCount;
      } else {
        this.likedIds.push(this.id);
        likesCount += 1;
        document.querySelector(".likesCount").textContent = likesCount;
      }
    },
    save: function save() {
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/auth/posts/".concat(this.id, "/saves"));
      if (this.savedIds.includes(this.id)) {
        var saveIndex = this.savedIds.indexOf(this.id);
        this.savedIds.splice(saveIndex, 1);
      } else {
        this.savedIds.push(this.id);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=template&id=e50970de&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=template&id=e50970de&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.post && _vm.post.images ? _c("div", {
    staticClass: "main-container"
  }, [[_vm._l(_vm.post.images, function (image) {
    return [_c("div", {
      staticClass: "post",
      style: {
        "background-image": "url(" + image.url + ")"
      },
      attrs: {
        alt: "Post"
      }
    })];
  })], _vm._v(" "), _c("div", {
    staticClass: "commentaries-container"
  }, [_c("div", {
    staticClass: "post-user-info"
  }, [_c("div", {
    staticClass: "user-info"
  }, [_c("div", {
    staticClass: "user",
    style: {
      "background-image": "url(" + _vm.avatar + ")"
    }
  }), _vm._v(" "), _c("h2", {
    staticClass: "username"
  }, [_vm._v(_vm._s(_vm.post.user.name))])]), _vm._v(" "), _c("div", {
    staticClass: "post-interaction"
  }, [_c("span", {
    staticClass: "likesCount"
  }, [_vm._v(_vm._s(_vm.post.likesCount))]), _vm._v(" "), _c("span", {
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.like.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "far fa-heart",
    "class": {
      "fas fa-heart": _vm.likedIds.includes(_vm.id)
    }
  })]), _vm._v(" "), _c("i", {
    staticClass: "far fa-bookmark",
    "class": {
      "fas fa-bookmark": _vm.savedIds.includes(_vm.id)
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.save.apply(null, arguments);
      }
    }
  }), _vm._v(" "), _vm.post.user.id === _vm.user_id || _vm.userRole === 1 ? _c("span", {
    staticStyle: {
      display: "flex",
      gap: "10px"
    }
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "post.edit",
        params: {
          id: _vm.id
        }
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-pencil",
    staticStyle: {
      color: "black"
    }
  })]), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.destroyPost(_vm.id);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-trash",
    staticStyle: {
      color: "black"
    }
  })])], 1) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "line"
  }), _vm._v(" "), _c("div", {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.post.title))]), _vm._v(" "), _c("div", {
    staticClass: "commentaries"
  }, _vm._l(_vm.post.comments, function (comment) {
    return _c("div", {
      staticClass: "comment"
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        "justify-content": "space-between"
      }
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        gap: "5px"
      }
    }, [_c("div", {
      staticClass: "comment-user",
      style: {
        "background-image": "url(" + _vm.avatar + ")"
      }
    }), _vm._v("\n                        " + _vm._s(comment.writer.name) + "\n                    ")]), _vm._v(" "), _c("div", {
      staticClass: "comment-interactions"
    }, [comment.writer.id === _vm.user_id || _vm.userRole === 1 ? [_c("div", {
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.destroy(comment.id);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-trash"
    })]), _vm._v(" "), _c("div", {
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.getCommentDataToEdit(comment.id, comment.content);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-pencil"
    })])] : _vm._e()], 2)]), _vm._v(" "), _c("div", {
      staticClass: "comment-indludes"
    }, [_c("div", {
      staticClass: "content-wrap"
    }, [_c("span", {
      "class": _vm.commentToEdit(comment.id) ? "d-none" : ""
    }, [_c("i", {
      staticClass: "comment-title"
    }, [_vm._v(_vm._s(comment.content))])])]), _vm._v(" "), _c("span", {
      "class": _vm.commentToEdit(comment.id) ? "" : "d-none"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.contentToEdit,
        expression: "contentToEdit"
      }],
      domProps: {
        value: _vm.contentToEdit
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.contentToEdit = $event.target.value;
        }
      }
    }), _vm._v(" "), _c("a", {
      attrs: {
        href: ""
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.update(comment.id);
        }
      }
    }, [_vm._v("upd")])])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "send-container"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "send-comment",
    attrs: {
      type: "text",
      placeholder: "Enter the message"
    },
    domProps: {
      value: _vm.content
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.content = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "send-btn",
    attrs: {
      type: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.storeComment.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa-sharp fa-solid fa-paper-plane"
  })])])])], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nh1[data-v-e50970de], h2[data-v-e50970de], p[data-v-e50970de], i[data-v-e50970de] {\n    margin: 0;\n}\na[data-v-e50970de] {\n    text-decoration: none;\n    color: #0060B6;\n}\na[data-v-e50970de]:before {\n    text-decoration: none;\n}\n.main-container[data-v-e50970de] {\n    width: 70%;\n    margin: 0 auto;\n    border: 1px solid black;\n    padding: 15px;\n    display: flex;\n}\n.far.fa-heart.fas-heart-animation[data-v-e50970de] {\n    animation: heart-pulse 0.3s ease-in-out;\n}\n.commentaries-container[data-v-e50970de] {\n    margin-left: 3%;\n    width: 52%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.comment-indludes[data-v-e50970de] {\n    display: flex;\n    justify-content:  space-between;\n}\n.comment-interactions[data-v-e50970de] {\n    display: flex;\n    gap: 5px;\n}\n.content-wrap[data-v-e50970de] {\n    width: 90%;\n}\n.comment-title[data-v-e50970de] {\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n}\n.post[data-v-e50970de] {\n    background: 50% 50% no-repeat;\n    background-size: cover;\n    width: 45%;\n    height: 600px;\n}\n.post-user-info[data-v-e50970de] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.line[data-v-e50970de] {\n    width: 100%;\n    height: 3px;\n    background-color: #D9D9D9;\n    border-radius: 10%;\n    margin-top: 5px;\n}\n.user[data-v-e50970de] {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin-right: 10px;\n    border-radius: 50%;\n    background: 50% 50% no-repeat;\n    background-size: cover;\n}\n.commentaries[data-v-e50970de] {\n    padding: 10px;\n    margin-top: 10px;\n    height: 400px;\n    overflow: auto;\n}\n.comment[data-v-e50970de] {\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 10px;\n    padding: 5px;\n    margin: 5px 0;\n}\n.comment-user[data-v-e50970de] {\n    height: 20px;\n    width: 20px;\n    border: 1px solid black;\n    border-radius: 50%;\n    background: 50% 50% no-repeat;\n    background-size: cover;\n}\n.user-info[data-v-e50970de] {\n    display: flex;\n    width: 70%;\n    align-items: center;\n}\n.send-container[data-v-e50970de] {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 10%;\n    justify-content: space-between;\n}\n.send-comment[data-v-e50970de] {\n    width: 75%;\n    height: 100%;\n    border: 1px solid grey;\n    font-size: 32px;\n    border-radius: 10px;\n}\n.send-btn[data-v-e50970de] {\n    width: 20%;\n    height: 100%;\n    font-size: 24px;\n    border: 1px solid grey;\n    border-radius: 10px;\n    padding: 0;\n}\n.fa-paper-plane[data-v-e50970de] {\n    margin: 0 auto;\n}\n.post-interaction[data-v-e50970de] {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    font-size: 32px;\n    justify-content: space-between;\n    gap: 10px\n}\n.title[data-v-e50970de] {\n    margin: 10px auto 0 auto;\n}\n@media only screen and (max-width: 1024px) {\n.main-container[data-v-e50970de] {\n        flex-direction: column;\n}\n.post[data-v-e50970de], .commentaries-container[data-v-e50970de] {\n        width: 100%;\n        justify-content: space-between;\n        margin: 0 auto;\n}\n.commentaries[data-v-e50970de] {\n        height: 200px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowPost_vue_vue_type_style_index_0_id_e50970de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Post/ShowPost.vue?vue&type=style&index=0&id=e50970de&scoped=true&lang=css&");


/***/ })

}]);