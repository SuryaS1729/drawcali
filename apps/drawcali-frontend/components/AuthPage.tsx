
"use client"
export function AuthPage({isSignIn}:{isSignIn: boolean}){


    return <div className="w-screen h-screen flex justify-center items-center">


        <div className="p-6 m-2 bg-white rounded">
            <div className="pt-2"><input className="text-black placeholder-black" type="text" placeholder="email" /></div>
            <div className="pt-2 text-black"><input className="text-black placeholder-black" type="password" placeholder="password" /></div>
            <div className="pt-2 text-black">
                <button onClick={()=>{
                }}>{isSignIn?"Sign In" : "Sign Up"}</button>
            </div>
       </div>

    </div>
}