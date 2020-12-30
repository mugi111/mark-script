export default class MarkScript {
  _generated: string;
  
  constructor() {
    this._generated = "";
  }

  text = (body: string) => {
    this._generated += `${body}  \n`;
  }

  code = (body: string) => {
    this._generated += "```\n";
    this._generated += `${body}`;
    this._generated += "```\n";
  }
}

class ListBase<T> {
  _contents: any;

  constructor(arr: string[]);
  constructor(nList: T);
  constructor(contents: any) {
    if (contents instanceof ListBase) {
      this._contents = contents;
    } else {

    }
  }
}

export class NumberingList extends ListBase<NumberingList> {}

export class CommonList extends ListBase<CommonList> {}