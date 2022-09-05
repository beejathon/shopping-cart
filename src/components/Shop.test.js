import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Shop from './Shop';

describe("Shop", () => {
  const mockResponse = {
    results: [
      { 
        name: "niceshoe",
        id: "123",
        retailPrice: "99",
        image: { thumbnail: null },
      }
    ]
  };
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    });
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders list of products", async () => {
    const container = document.createElement('div');
    await act(async () => {
      render(<Shop />, container);
    })
    const name = screen.getByText("niceshoe")
    const price = screen.getByText("$99")
    expect(name.textContent).toBe("niceshoe")
    expect(price.textContent).toBe("$99")
  });
})