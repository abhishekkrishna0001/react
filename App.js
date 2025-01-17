import React from "react";
import ReactDOM from "react-dom/client";

//const heading=React.createElement("h1",{id:"heading"},"Namaste React");

const Title=(
        <h1 id="heading" tabIndex="5">Namaste React using JSX</h1>
    );

const number=5;
const HeadingComponent=() => (
    <div id="container">
        {Title}
        <h1>Namaste React Functional component</h1>
        <h2>{number}</h2>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(<HeadingComponent/>);