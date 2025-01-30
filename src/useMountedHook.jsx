import { useEffect, useState } from "react";
import './App.css'

const useMount = ()=>{
    const [ismount,setmount] = useState(false);

    useEffect(()=>{
        setmount(true);
    },[]);
    
    return {ismount};
}
export default useMount