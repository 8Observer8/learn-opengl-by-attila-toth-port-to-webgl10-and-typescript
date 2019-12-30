
export let gl: WebGLRenderingContext = null;

export class WebGLContext
{
    public static Init(canvasName: string): boolean
    {
        let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
        if (canvas === null)
        {
            console.log("Failed to get the canvas element with the name: " + canvasName);
            return false;
        }

        gl = canvas.getContext("webgl");
        if (gl === null)
        {
            console.log("Your browser does not support WebGL 1.0");
            return false;
        }

        return true;
    }
}