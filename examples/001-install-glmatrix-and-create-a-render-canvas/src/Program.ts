import { WebGLContext, gl } from "./WebGLContext";

class Program
{
    public static Main(): void
    {
        if (!WebGLContext.Init("renderCanvas"))
        {
            console.log("Failed to initialize the WebGL context");
            return;
        }

        gl.clearColor(0, 0.5, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();
