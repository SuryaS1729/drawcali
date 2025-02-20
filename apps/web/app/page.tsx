"use client"

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function Home() {
  const [slug,setSlug]=useState("")
  const router= useRouter()
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      width:"100vw"
    }}>
      <input style={{padding:10}} value={slug} onChange={(e)=>{
        setSlug(e.target.value)
      }} type="text" placeholder="room id"></input>

      <button style={{padding:10}}  onClick={()=>{
        router.push(`/room/${slug}`)
      }}>Join ROOm</button>
    </div>
  );
}
