import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
//import toBeInTheDocument from "@testing-library/jest-dom"
import "@testing-library/jest-dom";

describe("Contact Us Component Test Cases", () => {
    it("should load the contact component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    it("should have the button in contact component", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    it("should have the name input box in contact component", () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });
    
    it("should load two input boxes in contact component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });
});

