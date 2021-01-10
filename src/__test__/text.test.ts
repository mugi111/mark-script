import MarkScript, { TEXT_TYPES } from "../";

const text: string = "Test text";

const nMarkScript = new MarkScript();

test('should export normal text', () => {
  nMarkScript.addText(text);
  expect(nMarkScript.output()).toBe(` ${text} `);
});

const iMarkScript = new MarkScript();

test('should export italic text', () => {
  iMarkScript.addText(text, TEXT_TYPES.ITARIC);
  expect(iMarkScript.output()).toBe(` *${text}* `);
});

const hMarkScript = new MarkScript();

test('should export highlight text', () => {
  hMarkScript.addText(text, TEXT_TYPES.HIGHLIGHT);
  expect(hMarkScript.output()).toBe(` **${text}** `);
})

