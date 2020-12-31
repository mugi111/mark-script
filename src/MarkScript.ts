export default class MarkScript {
  _generated: string;
  
  constructor() {
    this._generated = "";
  }

  addText = (body: string) => {
    this._generated += `${body}  \n`;
  }

  addCode = (body: string) => {
    this._generated += "```\n";
    this._generated += `${body}\n`;
    this._generated += "```\n";
  }

  addList = (elem: ListBase<NumberingList|CommonList>) => {
    this._addList(elem);
  }

  private _addList = (cList: ListBase<NumberingList|CommonList>, indent: number = 0) => {
    for(const e in cList.arr) {
      this._generated += "\t".repeat(indent);
      this._generated += `- ${e}\n`;
    }
    if(cList.c != null) {
      this._addList(cList.c, indent++);
    }
  }
}

class ListBase<T> {
  arr: string[];
  c: T;

  constructor(arr: string[], nList: T = null) {
    this.arr = arr;
    this.c = nList;
  }
}

export class NumberingList extends ListBase<NumberingList> {}

export class CommonList extends ListBase<CommonList> {}