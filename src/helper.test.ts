import { hello } from "./helper.js";

test('print hello', () => {
    expect((hello)).toBe('Hello, mine turtle!');
})