import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
    describe("When it receives 'true'", () => {
        test("Then it should display 'Calling...' on the screen", () => {
            const isCalling = true;
            const expectedText = "Calling...";

            render(
                <Info isCalling={isCalling} />
            );
            const text = screen.getByText(expectedText);

            expect(text).toBeInTheDocument();
        });
    });
});