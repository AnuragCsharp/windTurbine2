import Renderer from './renderer.js'
import Mesh from './mesh.js'
import ShaderProgram from './shaderProgram.js'
import Object from './object.js'
import { objectFragmentShader, objectVertexShader } from '../shaderfiles/objectShader.js';
import Texture from './texture.js';
import WindTurbineBase from '../resource/windTurbineBase.js';
import WindTurbineFan from '../resource/windTurbineFan.js';

export default class engine{

    gl;
    canvas;
    renderer;
    shader;
    cube;
    square;

    ticks;

    lightPos;   lightColor;

    windTurbineFan;
    windTurbineBase;

    rotateFan = false;
    wireframe = -1;

    rpm = 2;

    init(gl){
        this.gl = gl;
        this.ticks = 1000/60;
        this.shader = new ShaderProgram(this.gl, objectVertexShader,objectFragmentShader);
        this.renderer = new Renderer(this.gl,this.shader);
      //  let squaremesh = new Mesh(this.gl);
      //  let squaretex = new Texture(this.gl,"brick");
      //  this.square = new Object(squaremesh, squaretex);
      //  this.square.pos[2] = -5;       

        let windTurbineBase = new WindTurbineBase();
        let turbineBaseMesh = new Mesh(this.gl, windTurbineBase.vertexData, windTurbineBase.indices);
        let turbineBaseTex = new Texture(this.gl, "windTurbine");
        this.windTurbineBase = new Object(turbineBaseMesh, turbineBaseTex);
        this.windTurbineBase.scale[0] = 0.25;
        this.windTurbineBase.scale[1] = 0.25;
        this.windTurbineBase.scale[2] = 0.25;
        this.windTurbineBase.pos[1] = -2;
        this.windTurbineBase.pos[2] = -3.5;
        this.windTurbineBase.rotate(0,-45,0);
        this.windTurbineBase.updateTransform();

        let windTurbineFan = new WindTurbineFan();
        let turbineFanMesh = new Mesh(this.gl, windTurbineFan.vertexData, windTurbineFan.indices);
        let turbineFanTex = new Texture(this.gl, "windTurbine");
        this.windTurbineFan = new Object(turbineFanMesh, turbineFanTex);
        this.windTurbineFan.scale[0] = 0.25;
        this.windTurbineFan.scale[1] = 0.25;
        this.windTurbineFan.scale[2] = 0.25;
        this.windTurbineFan.rotate(0,-45,0);
        this.windTurbineFan.pos[1] = 0.30;
        this.windTurbineFan.pos[2] = -3.5;
        this.windTurbineFan.updateTransform();

        this.lightPos = [20,5,20];
        this.lightColor = [1,1,1];

        this.gl.clearColor(0.84, 0.89, 0.94, 1.0);
        this.gl.enable(gl.DEPTH_TEST);

        this.attachListenersToButton();
        this.setStatVariables();
    }

    loop(){
        var self = this;
        setInterval(function(){
            self.input();
            self.update();
            self.render();
        },self.ticks);
    }

    input(){
        
    }

    update(){
     //   this.square.rotate(2,1,0.5);
        if(this.rotateFan == true)
            this.windTurbineFan.rotate(this.rpm,0,0);
    }

    render(){
        this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);
        this.renderer.render(this.gl,this.windTurbineBase,this.lightPos,this.lightColor,this.wireframe);
        this.renderer.render(this.gl,this.windTurbineFan,this.lightPos,this.lightColor,this.wireframe);
    }

    attachListenersToButton(){
        let fanSwitchButton = document.getElementById('fanSwitch');
        fanSwitchButton.onclick = (event) =>{
            if(this.rotateFan == true)
                this.rotateFan = false;
            else
                this.rotateFan = true;
        }

        let wireframeButton = document.getElementById('wireframe');
        wireframeButton.onclick = (event) => {
            this.wireframe = -1 * this.wireframe;
        }
    }

    setStatVariables(){
//        let rpm = document.getElementById('rpm');
//        rpm.innerText = (this.rpm*10);
    }

}
