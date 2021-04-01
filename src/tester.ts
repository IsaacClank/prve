import { ITest } from '.';

export interface ITester {
  name: string;
  add(test: ITest): void;
  execute(): void;
}

export class Tester implements ITester {
  private _name: string;
  private _tests: ITest[];

  constructor(name: string) {
    this._name = name;
    this._tests = [];
  }

  get name() {
    return this._name;
  }

  add(test: ITest) {
    this._tests.push(test);
  }

  execute(options?: ExecuteOptions) {
    console.log(`\n[+] ${this.name.toUpperCase()}`);
    this._tests.forEach(test => this.executeTest(test, options));
  }

  private executeTest(test: ITest, options?: ExecuteOptions) {
    try {
      const result: boolean = test.execute();
      this.printResult(test.name, result);
    } catch (error) {
      if (options?.verbose) console.log(`\t\t${error}`);
    }
  }

  private printResult(testName: string, success: boolean) {
    const message = `\t- ${testName}: ${success ? get_passed_msg() : get_failed_msg()}`;
    console.log(message);
  }
}

interface ExecuteOptions {
  verbose: boolean;
}

/* ----------------------------------------------------------------------------------------- */
/* ANSI                                                                                      */
/* ----------------------------------------------------------------------------------------- */

const red = '\x1B[31m';
const green = '\x1B[32m';
const resetColor = '\x1B[0m';

const get_passed_msg = () => `${green}Passed${resetColor}`;
const get_failed_msg = () => `${red}Failed${resetColor}`;
