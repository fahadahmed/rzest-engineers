import { afterEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  afterEach(() => {
    document.documentElement.removeAttribute("data-theme");
    window.localStorage.clear();
  });

  it("defaults to light and toggles to dark on click", async () => {
    render(<ThemeToggle />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");

    await userEvent.click(screen.getByRole("button"));

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(window.localStorage.getItem("rzest-theme")).toBe("dark");
  });

  it("picks up an existing data-theme attribute as the initial state", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: /Switch to light mode/ })).toBeInTheDocument();
  });
});
