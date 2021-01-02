import MarkScript, { ITableObject } from "../";

const markScript = new MarkScript();

const tableObj: ITableObject[] = [
  { "title1": ["col1raw1", "col1raw2", "col1raw3"] },
  { "title2": ["col2raw1", "col2raw2", "col2raw3"] },
  { "title3": ["col3raw1", "col3raw2", "col3raw3"] },
  { "title4": ["col4raw1", "col4raw2", "col4raw3"] }
]

test('should export table', () => {
  markScript.addTable(tableObj);
  expect(markScript.output()).toBe(`\
| ${Object.keys(tableObj[0])[0]} | ${Object.keys(tableObj[1])[0]} | ${Object.keys(tableObj[2])[0]} | ${Object.keys(tableObj[3])[0]} |\n\
|---|---|---|---|\n\
| ${Object.values(tableObj[0])[0][0]} | ${Object.values(tableObj[1])[0][0]} | ${Object.values(tableObj[2])[0][0]} | ${Object.values(tableObj[3])[0][0]} |\n\
| ${Object.values(tableObj[0])[0][1]} | ${Object.values(tableObj[1])[0][1]} | ${Object.values(tableObj[2])[0][1]} | ${Object.values(tableObj[3])[0][1]} |\n\
| ${Object.values(tableObj[0])[0][2]} | ${Object.values(tableObj[1])[0][2]} | ${Object.values(tableObj[2])[0][2]} | ${Object.values(tableObj[3])[0][2]} |\n\
`);
});
