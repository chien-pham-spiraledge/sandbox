import { expect, test } from "vitest";
import { serialize } from "./serialize";

test("serialize", () => {
    expect(serialize({a: 1})).toBe('{"a":1 }');
});
