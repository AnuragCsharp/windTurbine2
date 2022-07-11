import './Window.css'
import Engine from './scripts/engine.js'
import {useEffect} from 'react';

const Window = () => {
    let canvas;
    let engine;

    const handleLoad = () => {
        canvas = document.getElementById("glCanvas");

        let gl = canvas.getContext("webgl2");
      
        if(gl == null){
            alert("Unable to initialize webgl2. Your browser or machine may not support it");
            return;
        }

        engine = new Engine();
        

        engine.init(gl);

        engine.loop();

    }
        let start = 0;
         useEffect( () => {
             if(start == 0)
             {
                start = 1;
                 handleLoad();
             }
        });
    
      
   
    return (
        <div className="Window" >
            <div id="canvas handle">
                 <canvas id="glCanvas" width="512" height="450"></canvas>
            </div>
        </div>
    );
}

export default Window;
