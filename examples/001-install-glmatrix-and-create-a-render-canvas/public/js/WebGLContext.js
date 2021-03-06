define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=WebGLContext.js.map