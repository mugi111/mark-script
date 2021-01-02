import MarkScript from "../";

const m1 = new MarkScript();

test('should export inline code', () => {
  const code1: string = "console.log(\"Hello World!\")";
  m1.addCode(code1);
  expect(m1.output()).toBe(` \`${code1}\` `);
});

const m2 = new MarkScript();

test('should export code block', () => {
  const code2: string = 
  "\
  #include <stdio.h>\
\
  int main()\
  {\
    printf(\"Hello World\n\");\
  }\
  ";
  m2.addCodeblock(code2);
  expect(m2.output()).toBe(`\`\`\`\n${code2}\n\`\`\`\n`);
});
