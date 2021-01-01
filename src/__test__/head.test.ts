import MarkScript from "..";

test('should export head level 1', () => {
  const head1 = new MarkScript();
  head1.addHead("test head", 1);
  expect(head1.output()).toBe("# test head\n");
});

test('should export head level 2', () => {
  const head2 = new MarkScript();
  head2.addHead("test head", 2);
  expect(head2.output()).toBe("## test head\n");
});

test('should export head level 3', () => {
  const head3 = new MarkScript();
  head3.addHead("test head", 3);
  expect(head3.output()).toBe("### test head\n");
});

test('should export head level 4', () => {
  const head4 = new MarkScript();
  head4.addHead("test head", 4);
  expect(head4.output()).toBe("#### test head\n");
});

test('should export head level 5', () => {
  const head5 = new MarkScript();
  head5.addHead("test head", 5);
  expect(head5.output()).toBe("##### test head\n");
});

test('should export head level 6', () => {
  const head6 = new MarkScript();
  head6.addHead("test head", 6);
  expect(head6.output()).toBe("###### test head\n");
});