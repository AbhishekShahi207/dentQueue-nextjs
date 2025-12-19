"use client"

import { syncUser } from "@/lib/actions/user";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

function UserSync(){
    const {isLoaded,isSignedIn} =useUser()

useEffect(()=>{

    const handleUserSync =async()=>{
        if(isLoaded && isSignedIn){
            try {
                await syncUser()
            } catch (error) {
                console.log("Failed  to Sync User",error)
            }
        }
    }
handleUserSync()
},[isLoaded,isSignedIn])
return null;

}

export default UserSync;