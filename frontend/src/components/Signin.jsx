import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Statecontext } from "./StateContext";
import axios from "axios";


export default function Signin() {
    const {token, settoken} = useContext(Statecontext);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    return (
      <div className="flex justify-center ">
        <div className="w-6/12 rounded-md bg-slate-100 text-center flex">
            <div className="">
                <img className="h-96 rounded-md" src="/projectLogin.PNG" />
            </div>
            <div className="m-7 ml-12 text-left font-Poppins">
                <p className="font-Poppins text-slate-500">Welcome Back👋</p>
                <h2 className="text-xl font-semibold font-Poppins mb-5">Login to your Account</h2>
                <label className="block mb-2 mt-12 text-slate-600">Email
                    <input type="text" placeholder="abcd@gmail.com" className="border w-full h-8 rounded pl-3 mb-3" onChange={(e)=>{
                        setemail(e.target.value);
                    }}></input>
                </label>
                <label className="block mb-2 mt-1 text-slate-600">Password
                    <input type="password" placeholder=". . . . . . . . ." className="border w-full h-8 rounded pl-3 mb-3" onChange={(e)=>{
                        setpassword(e.target.value);
                    }}></input>
                </label>
                <button className="w-full rounded-md border p-1 bg-[#91CDCB]" onClick={async()=>{
                    try{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            email,
                            password
                        })
                        settoken(response.data.token);
                        localStorage.setItem("token", response.data.token);
                        navigate("/");
                    }catch(e){
                        console.log("error details",e);
                        alert("enter valid email or password");
                    }
                }}>
                    <p className="text-white">Sign in</p>
                </button>
                <div className="flex  justify-center font-sans text-base font-normal text-slate-500 pt-4 -mt-3">
                <div>
                    Dont have an account? 
                </div> 
                <div className="underline decoration-solid pl-3 cursor-pointer" onClick={()=> navigate("/signup")}>
                    Sign Up
                </div>
            </div>
            </div>
        </div>
      </div>
    )
  }