import { ITester } from '.';

export class Tester implements ITester {
  private _name: string;
  private _tests: (() => boolean)[];

  constructor(name: string) {
    this._name = name;
    this._tests = [];
  }

  add(test: () => boolean) {
    this._tests.push(test);
  }

  execute() {
    console.log(`\n[+] ${this.name.toUpperCase()}`);

    this._tests.forEach(test => {
      const passedMsg = `${green}Passed${resetColor}`;
      const failedMsg = `${red}Failed${resetColor}`;

      try {
        const result: boolean = test();
        console.log(`\t- ${test.name}: ${result ? passedMsg : failedMsg}`);
      } catch (error) {
        console.log(`\t\t${error}`);
      }
    });
  }

  get name() {
    return this._name;
  }
}

/* ----------------------------------------------------------------------------------------- */
/* ANSI                                                                                      */
/* ----------------------------------------------------------------------------------------- */

const red = '\x1B[31m';
const green = '\x1B[32m';
const resetColor = '\x1B[0m';
