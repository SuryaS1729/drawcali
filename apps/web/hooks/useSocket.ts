import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket(){
    const [loading,setLoading]= useState(true);
    const [socket,setSocket]=useState<WebSocket>()

    useEffect(()=>{
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmJmZGU3NS03OGM4LTQxZTItYTc0ZC0zYjcxYWE1NjUxZWQiLCJpYXQiOjE3Mzk4OTczNjd9.8AgruDzvsruShXCLYU_vdZsPlDNgDH1R9L0lJF6hEj8`)

        ws.onopen = ()=>{
            setLoading(false);
            setSocket(ws)
        }
    },[])

    return {
        socket, loading
    }
}