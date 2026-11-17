import { expect, test } from "vitest";
import { format } from "./format";

test("format", () => {
    expect(format({a: 1})).toBe('{\n  "a": 1\n}');
});