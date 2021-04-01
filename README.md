# PRVE

---

prve is a minimnal testing library. prve provides a **Tester** class and a few utilities functions.

prve is currently still in development.

## I. Usage

### Basic

1. Create a new **Tester**.
2. Use add() method to add a new test function. (Test functions must return boolean or throw error)
3. Run execute() method of **Tester** object to execute tests.

```javascript
const tester = new Tester('Tester1');

tester.add(function test1() {
  assert(true);
});

tester.execute();
```

### Advanced

```javascript
const testers = [];

const tester1 = new Tester('tester1');
tester1.add({
  name: 'Test should do something',
  body: () => {
    // return boolean or throw error
  },
});

const tester2 = new Tester('tester2');
tester2.add({
  name: 'Test should do something',
  body: () => {
    // return boolean or throw error
  },
});

testers.push(tester1);
testers.push(tester2);

// Run all tests
testers.forEach(tester => tester.execute());

// Only run tests of tester1
const ignore = ['tester2'];
testers.forEach(tester => !ignore.includes(tester.name) && tester.execute());
```

## II. API

### Tester

Fields:

- **\_name** : name of this tester.
- **\_tests** : list of test functions.

Methods:

- **add(test: Test)** : define a test function.
- **execute(options?: ExecuteOptions)** : execute all tests managed by this tester, an optional options object can be passed as arguments.

Execute options:

```javascript
interface ExecuteOptions {
  verbose: boolean; // Should error messages be output to the console
}
```

### Interfaces

Can be used to implements your own Tester/Test class.

```javascript
interface ITester {
  add(test: () => boolean): void;
  execute(): void;
}

interface ITest {
  name: string;
  execute: () => boolean;
}
```

### Utilities

- **assert(value:any) => boolean**: returns (value === true)
- **assertEq(left:any, right:any) => boolean**: checks if left===right
