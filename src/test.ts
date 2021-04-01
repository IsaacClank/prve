export interface ITest {
  name: string;
  execute(): boolean;
}

export class Test {
  constructor(private _name: string, private _body: () => boolean) {}

  get name() {
    return this._name;
  }

  execute() {
    return this._body();
  }
}
