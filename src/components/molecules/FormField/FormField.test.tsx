import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormField } from "./FormField";

describe("FormField", () => {
  it("renders a labeled text input by default", () => {
    render(<FormField label="Full name" name="name" placeholder="Jane Doe" />);
    const input = screen.getByLabelText("Full name");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("placeholder", "Jane Doe");
  });

  it("renders a textarea when as='textarea'", () => {
    render(<FormField as="textarea" label="Project brief" name="brief" />);
    expect(screen.getByLabelText("Project brief").tagName).toBe("TEXTAREA");
  });

  it("renders a select with options when as='select'", () => {
    render(
      <FormField
        as="select"
        label="Sector"
        name="sector"
        options={[
          { label: "Commercial", value: "commercial" },
          { label: "Residential", value: "residential" },
        ]}
      />,
    );
    const select = screen.getByLabelText("Sector");
    expect(select.tagName).toBe("SELECT");
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("calls onChange handlers", async () => {
    const onChange = vi.fn();
    render(<FormField label="Email" name="email" type="email" onChange={onChange} />);
    await userEvent.type(screen.getByLabelText("Email"), "a@b.com");
    expect(onChange).toHaveBeenCalled();
  });
});
