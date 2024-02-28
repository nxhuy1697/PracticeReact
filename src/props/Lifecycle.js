import { useState } from "react";
import Messege from "./Messege";

function Lifecycle (){

    const [show, setShow] = useState(false)


    return <div style={{padding:30}}>
        <button onClick={() => setShow(!show)}>Toggle</button>

        {show && <Messege />}
    </div>

}

export default Lifecycle;