import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { AvatarStack } from "./AvatarStack";

describe("AvatarStack", () => {
  it("renders all people when under the max", () => {
    render(<AvatarStack people={[{ initials: "RA" }, { initials: "JK" }]} />);
    expect(screen.getByText("RA")).toBeInTheDocument();
    expect(screen.getByText("JK")).toBeInTheDocument();
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });

  it("caps visible avatars and shows a +N overflow badge", () => {
    render(
      <AvatarStack
        people={[
          { initials: "RA" },
          { initials: "JK" },
          { initials: "SA" },
          { initials: "SB" },
          { initials: "FB" },
        ]}
        maxVisible={3}
      />,
    );
    expect(screen.getByText("RA")).toBeInTheDocument();
    expect(screen.getByText("JK")).toBeInTheDocument();
    expect(screen.getByText("SA")).toBeInTheDocument();
    expect(screen.queryByText("SB")).not.toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
  });
});
