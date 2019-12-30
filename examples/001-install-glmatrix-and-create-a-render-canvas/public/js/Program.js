define(["require", "exports", "./WebGLContext"], function (require, exports, WebGLContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    Program.Main();
});
// Release Version
// window.onload = () => Program.Main();
//# sourceMappingURL=Program.js.map