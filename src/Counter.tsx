import { useBookStore } from "./Store/bookstore"
import React from "react"

function Counter() {
    const {title, author, amount} = useBookStore()
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h2>{title}</h2>
                <h4>{author}</h4>
                <p>{amount}</p>
                
                
                
            </div>
            
            
        </div>
    )
}

export default Counter
