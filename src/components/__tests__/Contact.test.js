import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
//import toBeInTheDocument from "@testing-library/jest-dom"
import "@testing-library/jest-dom";


test("should load the contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("should have the button in contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});

test("should have the name input box in contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
});


test("should load two input boxes in contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes[0]);
    expect(inputBoxes.length).toBe(2);
});