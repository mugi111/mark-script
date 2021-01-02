import MarkScript, { CommonList, NumberingList } from "../";

const m1 = new MarkScript();
const clist1: CommonList = new CommonList(["list1", "list2", "list3"]);

test('should export common list', () => {
  m1.addList(clist1);
  expect(m1.output()).toBe("- list1\n- list2\n- list3\n");
});

const m2 = new MarkScript();
const clist2: CommonList = new CommonList(["plist1", "plist2", "plist3"], clist1);

test('should export common nested list', () => {
  m2.addList(clist2);
  expect(m2.output()).toBe("- plist1\n- plist2\n- plist3\n\t- list1\n\t- list2\n\t- list3\n");
});

const m3 = new MarkScript();
const nlist1: NumberingList = new NumberingList(["list1", "list2", "list3"]);

test('should export numbering list', () => {
  m3.addList(nlist1);
  expect(m3.output()).toBe("* list1\n* list2\n* list3\n");
});

const m4 = new MarkScript();
const nlist2: NumberingList = new NumberingList(["plist1", "plist2", "plist3"], nlist1);

test('should export nested numbering list', () => {
  m4.addList(nlist2);
  expect(m4.output()).toBe("* plist1\n* plist2\n* plist3\n\t* list1\n\t* list2\n\t* list3\n");
});

