
export interface ITableObject {
  [key: string]: string[];
}

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

  addTable = (objs: ITableObject[]) => {
    let title: string = "";
    let sep: string = "";
    let column: string = "";
    for(const obj of objs) {
      title += `| ${Object.keys(obj)[0]} `;
      sep += "|---";
    }
    title += "|\n";
    sep += "|\n";
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

  constructor(arr: string[], nList: T) {
    this.arr = arr;
    this.c = nList;
  }
}

export class NumberingList extends ListBase<NumberingList> {}

export class CommonList extends ListBase<CommonList> {}