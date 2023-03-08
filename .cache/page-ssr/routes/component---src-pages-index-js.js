exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/ProjectCard.js":
/*!***************************************!*\
  !*** ./src/components/ProjectCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ProjectCard({
  name,
  description,
  repository,
  webpage,
  videos,
  status
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `student 
                      ${status === "beta" ? "beta" : ""} 
                      ${status === "alpha" ? "alpha" : ""}
                      ${status !== "alpha" && status !== "beta" ? "stable" : ""}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    class: "title"
  }, name), description === '' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, description), repository === '' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: repository,
    target: "_blank",
    rel: "noreferrer"
  }, "Contribute!")), webpage === '' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: webpage,
    target: "_blank",
    rel: "noreferrer"
  }, "Start learning!")), videos === '' ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: videos,
    target: "_blank",
    rel: "noreferrer"
  }, "Watch videos"))));
}

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectCard */ "./src/components/ProjectCard.js");
/* harmony import */ var _content_index_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/index.yaml */ "./src/content/index.yaml");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);




function Index() {
  const {
    0: sportList,
    1: setSportList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: videoAvaliable,
    1: setVideoAvaliable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSportList(_content_index_yaml__WEBPACK_IMPORTED_MODULE_2__);
  }, []);
  function getFilteredList() {
    if (!selectedCategory && !videoAvaliable) {
      return sportList;
    } else if (selectedCategory && !videoAvaliable) {
      return sportList.filter(item => item.status === selectedCategory);
    } else if (!selectedCategory && videoAvaliable) {
      return sportList.filter(item => item.videos !== "");
    } else {
      return sportList.filter(item => item.status === selectedCategory).filter(item => item.videos !== "");
    }
  }
  var filteredList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(getFilteredList, [videoAvaliable, selectedCategory, sportList]);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleVideoChange() {
    setVideoAvaliable(!videoAvaliable);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "sideBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sideBarContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "filterByStatus"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Status:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "category-list",
    id: "category-list",
    onChange: handleCategoryChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "stable"
  }, "stable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "beta"
  }, "beta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "alpha"
  }, "alpha")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "filterByVideo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    id: "video",
    checked: videoAvaliable,
    value: "video",
    onChange: handleVideoChange
  }), "Video")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "container"
  }, filteredList.map((project, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, project, {
    key: `project_item_${index}`
  })))));
}
// export default indexPage

/***/ }),

/***/ "./src/pages/style.css":
/*!*****************************!*\
  !*** ./src/pages/style.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/content/index.yaml":
/*!********************************!*\
  !*** ./src/content/index.yaml ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"description":"Track code changes, undo mistakes, collaborate. This module is a must.","name":"Version controlling with git","repository":"https://github.com/swcarpentry/git-novice","status":"stable","videos":"","webpage":"http://swcarpentry.github.io/git-novice","id":"git"},{"description":"Learn to work with branches and more with this interactive webpage.","name":"Advanced git","repository":"https://github.com/pcottle/learnGitBranching","status":"stable","videos":"","webpage":"https://learngitbranching.js.org/?locale=en_US","id":"advancedgit"},{"description":"Get started with an incredibly popular programming language.","name":"Programming with python","repository":"https://github.com/swcarpentry/python-novice-inflammation","status":"stable","videos":"","webpage":"http://swcarpentry.github.io/python-novice-inflammation","id":"python"},{"description":"A full introduction to C++ based on a series of slides and exercises.","name":"HEP C++ Course","repository":"https://github.com/hsf-training/cpluspluscourse","status":"stable","videos":"https://github.com/hsf-training/cpluspluscourse#-video-recordings--events","webpage":"https://github.com/hsf-training/cpluspluscourse#-getting-the-latest-pdf","id":"hepcpp"},{"description":"Building code is hard. <code>CMake</code> makes it easier.","name":"Build systems:  <code>cmake</code>","repository":"https://github.com/hsf-training/hsf-training-cmake-webpage","status":"stable","videos":"","webpage":"https://hsf-training.github.io/hsf-training-cmake-webpage/","id":"cmake"},{"description":"","name":"Distributed file systems and grid computing","repository":"","status":"alpha","videos":"","webpage":"","id":"grid"},{"description":"The most famous data analysis framework used in HEP.","name":"<code>ROOT</code>","repository":"https://github.com/root-project/software-carpentry","status":"stable","videos":"","webpage":"https://github.com/root-project/software-carpentry","id":"root"},{"description":"Reading and writing ROOT files without having to install ROOT.","name":"<code>uproot</code>","repository":"https://github.com/hsf-training/hsf-training-uproot-webpage","status":"beta","videos":"","webpage":"https://hsf-training.github.io/hsf-training-uproot-webpage/","id":"uproot"},{"description":"A simple analysis using CMS open data.","name":"A simple analysis","repository":"https://github.com/hsf-training/hsf-training-cms-analysis-webpage","status":"stable","videos":"https://www.youtube.com/watch?v=gplMywJAFDI&list=PLKZ9c4ONm-Vk0wnDKaaovoEkOk3PVdL0V","webpage":"https://hsf-training.github.io/hsf-training-cms-analysis-webpage/","id":"simpleanalysis"},{"description":"<a href=\\"https://en.wikipedia.org/wiki/Unit_testing\\">Unit testing</a> in python.","name":"Unit testing","repository":"https://github.com/carpentries-incubator/python-testing","status":"beta","videos":"","webpage":"http://carpentries-incubator.github.io/python-testing/","id":"testingpython"},{"description":"Make science prettier with beautiful plots!","name":"Matplotlib for HEP","repository":"https://github.com/hsf-training/hsf-training-matplotlib","status":"beta","videos":"","webpage":"https://hsf-training.github.io/hsf-training-matplotlib/","id":"matplotlib"},{"description":"","name":"Parallel programming","repository":"","status":"alpha","videos":"","webpage":"","id":"parallel"},{"description":"Introduction to the <a href=\\"https://www.docker.com/\\">docker</a> container image system.","name":"Docker","repository":"https://github.com/hsf-training/hsf-training-docker","status":"stable","videos":"https://www.youtube.com/watch?v=Qr42pEtio-Q&list=PLKZ9c4ONm-VnqD5oN2_8tXO0Yb1H_s0sj","webpage":"https://hsf-training.github.io/hsf-training-docker/index.html","id":"docker"},{"description":"E.g. <code>yadage</code> and <code>reana</code>","name":"Workflows &amp; reproducibility","repository":"","status":"alpha","videos":"","webpage":"","id":"yadagereana"},{"description":"Get behind the buzzword and teach machines to work for you intelligently!","name":"Machine learning","repository":"https://github.com/hsf-training/hsf-training-ml-webpage","status":"stable","videos":"https://www.youtube.com/playlist?list=PLKZ9c4ONm-VmHsMKImIDEMsZI1Vp0UY-Z","webpage":"https://hsf-training.github.io/hsf-training-ml-webpage","id":"ml"},{"description":"Speed up your machine learning using massive parallelization!","name":"Machine learning on GPU","repository":"https://github.com/hsf-training/hsf-training-ml-gpu-webpage","status":"stable","videos":"https://www.youtube.com/playlist?list=PLKZ9c4ONm-VnfKk7XrVUa-V42lUdMrB6M","webpage":"https://hsf-training.github.io/hsf-training-ml-gpu-webpage","id":"gpuml"},{"description":"<a href=\\"https://docs.gitlab.com/ee/ci/\\">Continuous integration and deployment</a> with <a href=\\"https://about.gitlab.com/\\">gitlab</a>.","name":"CI/CD (gitlab)","repository":"https://github.com/hsf-training/hsf-training-cicd","status":"stable","videos":"https://www.youtube.com/watch?v=C9auGFgIHns&list=PLKZ9c4ONm-VmmTObyNWpz4hB3Hgx8ZWSb","webpage":"https://hsf-training.github.io/hsf-training-cicd/","id":"cicd"},{"description":"<a href=\\"https://docs.gitlab.com/ee/ci/\\">Continuous integration and deployment</a> with <a href=\\"https://github.com/features/actions\\">github actions</a>.","name":"CI/CD (github)","repository":"https://github.com/hsf-training/hsf-training-cicd-github","status":"stable","videos":"https://www.youtube.com/watch?v=-Xd5D6xKugk&list=PLKZ9c4ONm-Vl3kwsjrNRlPYNQFbPO2no4","webpage":"https://hsf-training.github.io/hsf-training-cicd-github/","id":"cicdgithub"},{"description":"<code>sphinx</code>, <code>doxygen</code>, etc.","name":"Documentation","repository":"","status":"alpha","videos":"","webpage":"","id":"doc"},{"description":"<code>pythia</code>, <code>sherpa</code>, <code>madgraph</code>, etc.","name":"Event generation and MC","repository":"","status":"alpha","videos":"","webpage":"","id":"generators"},{"description":"<a href=\\"https://alpaka.readthedocs.io/en/latest/index.html\\">alpaka</a> is a header-only C++ abstraction library for accelerator development.","name":"alpaka","repository":"https://github.com/hsf-training/hsf-training-alpaka-webpage","status":"alpha","videos":"","webpage":"","id":"alpaka"},{"description":"Introduction to the <a href=\\"https://en.wikipedia.org/wiki/Ssh_(Secure_Shell)\\">Secure Shell (SSH)</a>","name":"SSH","repository":"https://github.com/hsf-training/hsf-training-ssh-webpage/","status":"alpha","videos":"","webpage":"https://hsf-training.github.io/hsf-training-ssh-webpage/","id":"ssh"},{"description":"A guide through the basics of the file systems and the shell.","name":"The UNIX Shell","repository":"https://github.com/swcarpentry/shell-novice","status":"stable","videos":"","webpage":"https://swcarpentry.github.io/shell-novice/","id":"unix"},{"description":"A collection of packages for particle physics analyses in Python.","name":"Scikit-HEP","status":"stable","videos":"","webpage":"https://hsf-training.github.io/hsf-training-scikit-hep-webpage/","id":"scikithep","repository":"https://github.com/hsf-training/hsf-training-scikit-hep-webpage"},{"description":"Introduction to containerization with <a href=\\"https://apptainer.org/\\">Singularity/Apptainer</a>.","name":"Singularity","status":"beta","videos":"https://www.youtube.com/watch?v=g0cCErlveiI&list=PLKZ9c4ONm-VkxWW98Gcn9H6WwykMiqtnF","webpage":"https://hsf-training.github.io/hsf-training-singularity-webpage/","id":"singularity","repository":"https://github.com/hsf-training/hsf-training-singularity-webpage"},{"name":"<code>UnROOT</code>","description":"Open <code>ROOT</code> files in <a href=\\"https://julialang.org/\\">Julia</a>!","id":"unroot","status":"beta","videos":"","webpage":"https://moelf.github.io/HSF_Julia_Tutorial/dev/notebooks/unroot_tutorial/","repository":"https://github.com/Moelf/HSF_Julia_Tutorial"},{"description":"Advanced bits of python (testing, debugging, logging, and more)","id":"levelupyourpython","name":"Level up your python","status":"stable","videos":"","webpage":"https://henryiii.github.io/level-up-your-python/notebooks/0%20Intro.html","repository":"https://github.com/henryiii/level-up-your-python"},{"description":"Run containerised data analysis pipelines on remote compute clouds.","id":"reana","name":"Reproducible analyses with REANA","status":"beta","videos":"","webpage":"https://hsf-training.github.io/hsf-training-reana-webpage/","repository":"https://github.com/hsf-training/hsf-training-reana-webpage"}]');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map