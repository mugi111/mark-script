import MarkScript from "../MarkScript";

const markScript = new MarkScript();

test('should export head level 1', () => {
  markScript.addHead("test head", 1);
  expect(markScript.output()).toBe("# test head\n");
});

test('should export head level 2', () => {
  markScript.addHead("test head", 2);
  expect(markScript.output()).toBe("## test head\n");
});

test('should export head level 3', () => {
  markScript.addHead("test head", 3);
  expect(markScript.output()).toBe("### test head\n");
});

test('should export head level 4', () => {
  markScript.addHead("test head", 4);
  expect(markScript.output()).toBe("#### test head\n");
});

test('should export head level 5', () => {
  markScript.addHead("test head", 5);
  expect(markScript.output()).toBe("##### test head\n");
});

test('should export head level 6', () => {
  markScript.addHead("test head", 6);
  expect(markScript.output()).toBe("###### test head\n");
});