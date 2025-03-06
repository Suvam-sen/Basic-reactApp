import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"},
        React.createElement("h1", {}, "Hello this is h1 tag"),
        React.createElement("h2", {}, "Hello i am sibling of h1 tag")
    )

)
// console.log(parent);

root.render(parent)

