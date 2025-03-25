import { fireEvent, render,screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json:() => Promise.resolve(MOCK_DATA)
    })
);

it("should load Restaurant menu component", async() => {
    await act(async() =>  
        render( 
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    );
    const accordionHeader = screen.getByText("Eid Special (6)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    const addBtns = screen.getAllByRole("button",{name:"Add+"});
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(8);
});