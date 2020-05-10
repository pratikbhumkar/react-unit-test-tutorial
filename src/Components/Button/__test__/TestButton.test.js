import  React  from "react";
import ReactDOM  from "react-dom";
import { TestButton } from "../TestButton";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
afterEach(cleanup)
//Render check
it("renders without crashing", ()=>{
    const div= document.createElement("div");
    ReactDOM.render(<TestButton label={"Test"}/>, div);
    ReactDOM.unmountComponentAtNode(div); 
})
//Checking the label content.
it("It renders with test label", ()=>{
    const {getByTestId}= render(<TestButton label={"Test"}/>);
    expect(getByTestId('TestButton')).toHaveTextContent("Test");
})

it("Renders button with another Label", ()=>{
    const {getByTestId}= render(<TestButton label={"Test 2"}/>);
    expect(getByTestId('TestButton')).toHaveTextContent("Test 2");
})
// Snapshot testing.
it("Matches snapshot", ()=>{
    const tree=renderer.create(<TestButton label="save"/>).toJSON();
    expect(tree).toMatchSnapshot();
})