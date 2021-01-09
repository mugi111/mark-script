export interface ITableObject {
  [key: string]: string[];
}

export type TList = {
  p: string;
  c?: Array<TList>;
}

export const enum TEXT_TYPES {
  NORMAL,
  ITARIC,
  HIGHLIGHT,
}

const enum LIST_TYPES {
  BULLET,
  NUMBERED,
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

  addBulletList = (elem: Array<TList>) => {
    this._addList(elem, 0, LIST_TYPES.BULLET);
  }

  addNumberedList = (elem: Array<TList>) => {
    this._addList(elem, 0, LIST_TYPES.NUMBERED);
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

  private _addList = (cList: Array<TList>, indent: number = 0, listType: LIST_TYPES) => {
    cList.forEach((e, _) => {
      this._generated += `${"\t".repeat(indent)}${(listType === LIST_TYPES.BULLET) ? "-" : (listType === LIST_TYPES.NUMBERED) ? `1.` : ""} ${e.p}\n`;
      if(e.c != null && listType === LIST_TYPES.BULLET) {
        this._addList(e.c, ++indent, listType);
      }
    });
  }
}
