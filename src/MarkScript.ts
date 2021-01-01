
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

  addHead = (text: string, level: number) => {
    level = level < 1 ? 1 : level;
    level = 6 < level ? 6 : level;
    this._generated += `${"#".repeat(level)} ${text}  \n`;
  }

  addCode = (body: string) => {
    this._generated += "```\n";
    this._generated += `${body}\n`;
    this._generated += "```\n";
  }

  addLink = (text: string, url: string) => {
    this._generated += `[${text}](${url})`;
  }

  addList = (elem: ListBase<NumberingList|CommonList>) => {
    this._addList(elem);
  }

  addTable = (objs: ITableObject[]) => {
    let title: string = "";
    let sep: string = "";
    let column: string = "";
    let tmp: string[][] = [];
    objs.map((obj) => {
      title += `| ${Object.keys(obj)[0]} `;
      sep += "|---";
      tmp.push(Object.values(obj)[0]);
    });
    const mTmp = tmp.reduce((m, e) => m.length < e.length ? e : m);
    mTmp.map((_, i) => {
      tmp.map((e) => column += e.length < i ? "|  " : `| ${e[i]} `);
      column += "|\n";
    });
    title += "|\n";
    sep += "|\n";
    this._generated += title + sep + column;
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