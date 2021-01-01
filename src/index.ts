import MarkScript, { NumberingList, CommonList, ITableObject } from './MarkScript';
const a = new MarkScript();
const dict: ITableObject[] = [{"sdf":["asdf", "adf"]}, {"adsf":["fasd", "adsf"]}];
a.addTable(dict);
export default MarkScript;
export {
  NumberingList,
  CommonList,
  ITableObject
};