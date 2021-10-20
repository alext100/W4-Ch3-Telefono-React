import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Given component Display", () => {
    describe("When it recives a phoneNumber", () => {
        test("Then it should show this number on display", () => {
            const phoneNumber = [6, 6, 7, 3, 5, 9, 9, 6, 1];

            const expected = 667359961;

            render(<Display phoneNumber={phoneNumber} />);
            const text = screen.getByText(expected);

            expect(text).toBeInTheDocument();
        });
    });
});