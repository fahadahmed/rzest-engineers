import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

const sectors = ["Commercial", "Residential", "Institutional"];

describe("ContactForm", () => {
  it("renders all fields and the submit button", () => {
    render(<ContactForm sectors={sectors} />);
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Company")).toBeInTheDocument();
    expect(screen.getByLabelText("Sector")).toBeInTheDocument();
    expect(screen.getByLabelText("Project brief")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send message/ })).toBeInTheDocument();
  });

  it("calls onSubmit with form data and shows the thanks state on success", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ContactForm sectors={sectors} onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText("Full name"), "Jane Doe");
    await userEvent.type(screen.getByLabelText("Email"), "jane@company.com");
    await userEvent.type(screen.getByLabelText("Project brief"), "A new mixed-use tower.");
    await userEvent.click(screen.getByRole("button", { name: /Send message/ }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Jane Doe",
        email: "jane@company.com",
        brief: "A new mixed-use tower.",
      }),
    );
    expect(await screen.findByText("Message sent — thank you.")).toBeInTheDocument();
  });

  it("shows an error message and stays on the form when onSubmit rejects", async () => {
    const onSubmit = vi.fn().mockRejectedValue(new Error("network error"));
    render(<ContactForm sectors={sectors} onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText("Full name"), "Jane Doe");
    await userEvent.type(screen.getByLabelText("Email"), "jane@company.com");
    await userEvent.type(screen.getByLabelText("Project brief"), "Brief.");
    await userEvent.click(screen.getByRole("button", { name: /Send message/ }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/Something went wrong/);
    expect(screen.getByRole("button", { name: /Send message/ })).toBeInTheDocument();
  });
});
