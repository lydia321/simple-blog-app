import { useState } from "react";
import './likeButton.css'
export default function Like() {
    const [count, setCount] = useState(0);
    const handleSumbit = () =>{
        setCount(count + 1);
    };
    return(
        <button className="like-button" onClick={handleSumbit}>
        <span >Like</span>
        <span className=".like-count">  {count}</span>
        </button>
    )

}
;