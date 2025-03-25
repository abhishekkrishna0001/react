import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});


// beforeAll(() => {
//     console.log("Before All");
// });

// beforeEach(() => {
//     console.log("Before Each");
// });

// afterAll(() =>{
//     console.log("After All");
// });

// afterEach(() => {
//     console.log("After Each");
// });


it("should render the body component with search", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
    const searchBtn =  screen.getByRole("button",{name:"Search"});
    expect(searchBtn).toBeInTheDocument();

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target:{value:"burger"}});
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);
});

it("should filter the top rated restaurants", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));
    const topRatedBtn =  screen.getByRole("button",{name:"Top Rated Restaurants"});
    expect(topRatedBtn).toBeInTheDocument();

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    fireEvent.click(topRatedBtn);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(5);
});


