import { getExistingShapes } from "./http";

type Shape={

    type:"rect",
    x: number,
    y:number,
    width:number,
    height:number,
}|
{

    type:"circle",
    centerX: number,
    centerY:number,
    radius:number,
    
}|
{
    type:"pencil",
    startX:number,
    startY:number,
    endX:number,
    endY:number,
}

export class Game{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D   
    private existingShapes: Shape[];
    private roomId : string
     socket : WebSocket

    constructor(canvas: HTMLCanvasElement, roomId:string, socket: WebSocket){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!
        this.existingShapes = []
        this.roomId= roomId
        this.socket = socket
        this.init();
        this.initHandlers();
    }

   async init(){
        this.existingShapes = await getExistingShapes( this.roomId );
    }
    initHandlers(){
        this.socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if(message.type = "chat" ){
            const parsedShape = JSON.parse(message.message)
            this.existingShapes.push(parsedShape) 
            this.clearCanvas()
             }
      }
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle="rgba(0,0,0)"
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
       this.existingShapes.map((shape)=>{
           if(shape.type ==="rect"){
                  
               this.ctx.strokeStyle="rgba(255,255,255)"
               this.ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
           }else if(shape.type ==="circle"){
               
   
                   this.ctx.beginPath();
                   this.ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, 2 * Math.PI);
                   this.ctx.stroke();
                   this.ctx.closePath()
   
           }
       })
    }
}