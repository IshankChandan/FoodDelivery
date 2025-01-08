import { render, screen } from "@testing-library/react";

import Contact from "../Contact";
import "@testing-library/jest-dom";

test('should load heading in Contact component', () => { 
    render(<Contact/>);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
 })

 
test('should have 2 input tags in Contact components',()=>{
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole('textbox');

    expect(inputBoxes.length).toBe(2);


}
)

test('should have submit button in Contact components',()=>{
    render(<Contact/>);

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();


}
)
