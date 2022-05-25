import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Shop from './Shop';

describe("Shop", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

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

  jest.spyOn(global, "fetch").mockImplementation(() =>    
    Promise.resolve({      
      json: () => Promise.resolve(mockResponse)    
    })  
  );

  it("renders list of products", async () => {
    await act(async () => {
      render(<Shop />, container);
    })

    expect(container.querySelector("[data-testid='item']")).toContain("niceshoe")
    global.fetch.mockRestore();
  });
})