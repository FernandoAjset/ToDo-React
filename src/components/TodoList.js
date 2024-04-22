import React from "react";


function TodoList({children}){
    return (
        <ul className="list-group">
            {children}
        </ul>
    );
}

export {TodoList};