/*<div id="parent">
* <div id="child1">
*   <h1> I am H1 </h1>
*   <h2> I am h2 </h2>
* </div>
* <div id="child2">
*    <h1> I am H1 </h1>
*  <h2> I am h2 </h2>
* </div>
*</div>
*/


const parent1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
]);

console.log(parent1)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);
