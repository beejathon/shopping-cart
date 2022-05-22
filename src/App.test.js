import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import { act } from 'react-dom/test-utils';

describe("App", () => {
  it("renders home and shop routes", () => {
    render(<App />);
    let heading = screen.getByRole("heading");
    expect(heading.textContent).toContain("HOME");
    let link = screen.getByRole("link", { name: /Shop/i });
    act(() => {
      userEvent.click(link);
    });
    heading = screen.getByRole("heading");
    expect(heading.textContent).toContain("SHOP");
  });
})