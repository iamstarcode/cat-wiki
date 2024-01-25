import {useLayoutEffect, useState } from "react";

    interface ISize{
        width: number,
        height:number
    }
  function useWindowResize(){

    const[windowSize, setwindowSize] = useState<ISize>({width:0,height:0}) 

    useLayoutEffect(()=>{

        function handleWindowResize(){
            setwindowSize({height:window.innerHeight, width: window.innerWidth})
            
        }

        window.addEventListener('resize', handleWindowResize)
        handleWindowResize();// set change so that the state can be tracked

        return ()=> window.removeEventListener('resize', handleWindowResize) // arrow function is run when component is unmounted
    },[]);//should only only run on mount

    return windowSize;
}
 
export default useWindowResize;