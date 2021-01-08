export interface ITableObject {
  [key: string]: string[];
}

export const enum TEXT_TYPES {
  NORMAL,
  ITARIC,
  HIGHLIGHT,
}

export default class MarkScript {
  private _generated: string;
  
  constructor() {
    this._generated = "";
  }

  addText = (body: string, type: TEXT_TYPES = TEXT_TYPES.NORMAL) => {
    let s = "";
    switch (type) {
      case TEXT_TYPES.ITARIC:
        s = "*";
        break;
      case TEXT_TYPES.HIGHLIGHT:
        s = "***";
        break;
      default:
        break;
    }
    this._generated += ` ${s}${body}${s} `;
  }

  addReturn = () => {
    this._generated += "  \n";
  }

  addHead = (text: string, level: number) => {
    level = level < 1 ? 1 : level;
    level = 6 < level ? 6 : level;
    this._generated += `${"#".repeat(level)} ${text}\n`;
  }

  addCode = (body: string) => {
    this._generated += ` \`${body}\` `;
  }

  addCodeblock = (body: string) => {
    this._generated += "```\n";
    this._generated += `${body}\n`;
    this._generated += "```\n";
  }

  addLink = (text: string, url: string) => {
    this._generated += `[${text}](${url})`;
  }

  addHorizon = () => {
    this._generated += "\n***\n";
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

  output = (): string => {
    return this._generated;
  }

  private _addList = (cList: ListBase<CommonList|NumberingList>, indent: number = 0) => {
    cList.arr.forEach((e, i) => {
      this._generated += `${"\t".repeat(indent)}${(cList instanceof CommonList) ? "-" : (cList instanceof NumberingList) ? `${i+1}.` : ""} ${e}\n`;
    });
    if(cList.c != null) {
      this._addList(cList.c, ++indent);
    }
  }
}

class ListBase<T> {
  arr: string[];
  c: T | null;

  constructor(arr: string[], nList: T | null = null) {
    this.arr = arr;
    this.c = nList;
  }
}

export class NumberingList extends ListBase<NumberingList> {}

export class CommonList extends ListBase<CommonList> {}