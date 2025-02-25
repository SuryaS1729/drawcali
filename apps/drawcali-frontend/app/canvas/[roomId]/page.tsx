
import { RoomCanvas } from "@/components/RoomCanvas";

export default async function CanvasPage({params}:{
    params:{
        roomId: string
    }
}){
    const roomId = (await params).roomId
    console.log(roomId)
    
    return <RoomCanvas roomId={roomId}></RoomCanvas>
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