import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";  // Adjust the import path as needed

describe("Footer Component", () => {
  test("renders social media icons", () => {
    render(<Footer />);
    const instagramIcon = screen.getByTestId("Instagram");
    const xIcon = screen.getByTestId("X");
    const facebookIcon = screen.getByTestId("Facebook");
    const linkedInIcon = screen.getByTestId("LinkedIn");
    
    expect(instagramIcon).toBeInTheDocument();
    expect(xIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
  });

  test("renders footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/© 2024 datadyktig.no/i);
    expect(footerText).toBeInTheDocument();
  });
});
