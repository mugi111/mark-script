import MarkScript from "../";

const markScript = new MarkScript();

test('should export code', () => {
  const code: string = 
  "\
  #include <stdio.h>\
\
  int main()\
  {\
    printf(\"Hello World\n\");\
  }\
  ";
  markScript.addCode(code);
  expect(markScript.output()).toBe(`\`\`\`\n${code}\n\`\`\`\n`);
});
