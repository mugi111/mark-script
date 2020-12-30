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