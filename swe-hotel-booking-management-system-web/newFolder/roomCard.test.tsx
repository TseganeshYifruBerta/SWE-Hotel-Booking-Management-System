import React from "react";
import { render } from "@testing-library/react";
import RoomCard from "./RoomCard";

describe("RoomCard component", () => {
  test("renders correctly", () => {
    const { getByText, getByAltText } = render(<RoomCard />);

    // Check if the image is rendered
    const roomImage = getByAltText("");
    expect(roomImage).toBeInTheDocument();

    // Check if the room type text is rendered
    const roomType = getByText(/room type/i);
    expect(roomType).toBeInTheDocument();

    // Check if the price button is rendered
    const priceButton = getByText(/price/i);
    expect(priceButton).toBeInTheDocument();
  });
});