import MarkScript from "../";

const markScript = new MarkScript();

test('should horizon line', () => {
  markScript.addHorizon();
  expect(markScript.output()).toBe("\n***\n");
});
