import MarkScript, { TList } from "../";

const m1 = new MarkScript();
const clist1: Array<TList> = [
  { p: "list1" },
  { p: "list2" },
  { p: "list3" }
];

test('should export common list', () => {
  m1.addBulletList(clist1);
  expect(m1.output()).toBe("- list1\n- list2\n- list3\n");
});

const m2 = new MarkScript();
const clist2: Array<TList> = [
  { p: "plist1" }, 
  { p: "plist2" }, 
  { p: "plist3", c: clist1}
];

test('should export common nested list', () => {
  m2.addBulletList(clist2);
  expect(m2.output()).toBe("- plist1\n- plist2\n- plist3\n\t- list1\n\t- list2\n\t- list3\n");
});

const m3 = new MarkScript();
const nlist1: Array<TList> = [
  { p: "list1" },
  { p: "list2" },
  { p: "list3" },
];

test('should export numbering list', () => {
  m3.addNumberedList(nlist1);
  expect(m3.output()).toBe("1. list1\n1. list2\n1. list3\n");
});
