import MarkScript from "../";

const markScript = new MarkScript();

test('should export link', () => {
  markScript.addLink("example", "https://www.example.com/");
  expect(markScript.output()).toBe("[example](https://www.example.com/)");
});
