import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should load the restaurant card", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const restaurantName = screen.getByText("Burger King");
    expect(restaurantName).toBeInTheDocument();
});

it("Should load the restaurant card with promoted label", () => {
    const RestaurantCardOpen = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardOpen resData={MOCK_DATA} />);
    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument();
});