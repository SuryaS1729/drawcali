"use client"

import { useEffect, useRef } from "react";

export default function Canvas(){

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(canvasRef.current){
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d")

            if(!ctx){return}

            let clicked = false;
            let startX = 0;
            let startY = 0;

            canvas.addEventListener("mousedown", (e) => {
                clicked = true
                startX = e.clientX
                startY = e.clientY
            })

            canvas.addEventListener("mouseup", (e) => {
                clicked = false
                console.log(e.clientX)
                console.log(e.clientY)
            })            

            canvas.addEventListener("mousemove", (e) => {
                if (clicked) {
                    const width = e.clientX - startX;
                    const height = e.clientY - startY;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.strokeRect(startX, startY, width, height);
                }
            })            
        }

    }, [canvasRef]);

    return <div>
        <canvas ref={canvasRef} width={2000} height={2000}></canvas>
    </div>
}

// import { useRef, useEffect } from "react";

// function CanvasExample() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Set canvas size
//     canvas.width = 1000;
//     canvas.height = 1000;

//     // Draw a rectangle
//     ctx.fillStyle = "blue";
//     ctx.fillRect(50, 50, 200, 100);

//     // Draw a circle
//     ctx.fillStyle = "yellow";
//     ctx.beginPath();
//     ctx.arc(200, 300, 100, 0, Math.PI * 2);
//     ctx.fill();

//   }, []);

//   return <canvas ref={canvasRef} style={{ border: "1px solid black" }} />;
// }

// export default CanvasExample;