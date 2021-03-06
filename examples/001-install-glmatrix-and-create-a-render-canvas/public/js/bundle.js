(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebGLContext_1 = require("./WebGLContext");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        if (!WebGLContext_1.WebGLContext.Init("renderCanvas")) {
            console.log("Failed to initialize the WebGL context");
            return;
        }
        WebGLContext_1.gl.clearColor(0, 0.5, 0, 1);
        WebGLContext_1.gl.clear(WebGLContext_1.gl.COLOR_BUFFER_BIT);
    };
    return Program;
}());
// Debug Version
// Program.Main();
// Release Version
window.onload = function () { return Program.Main(); };

},{"./WebGLContext":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gl = null;
var WebGLContext = /** @class */ (function () {
    function WebGLContext() {
    }
    WebGLContext.Init = function (canvasName) {
        var canvas = document.getElementById(canvasName);
        if (canvas === null) {
            console.log("Failed to get the canvas element with the name: " + canvasName);
            return false;
        }
        exports.gl = canvas.getContext("webgl");
        if (exports.gl === null) {
            console.log("Your browser does not support WebGL 1.0");
            return false;
        }
        return true;
    };
    return WebGLContext;
}());
exports.WebGLContext = WebGLContext;

},{}]},{},[1]);
