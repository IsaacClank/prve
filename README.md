# PRVE

---

prve is a minimnal testing library. Prova provides a __Tester__ class and a few utilities functions.

prve is currently still in development.

## I. Usage

### Basic

1. Create a new __Tester__.
2. Use add() method to add a new test function. (Test functions must return boolean or throw error)
3. Run execute() method of __Tester__ object to execute tests.

```javascript
const tester = new Tester('Tester1');

tester.add(function test1() {
  assert(true)
})

tester.execute()
```

### Advanced

```javascript
const testers = [];

const tester1 = new Tester('tester1')
tester1.add(function test1(){
  // return boolean or throw error
})

const tester2 = new Tester('tester2')
tester2.add(function test2(){
  // return boolean or throw error
})

testers.push(tester1)
testers.push(tester2)

// Run all tests
testers.forEach(tester => tester.execute())

// Only run tests of tester1
const ignore = ['tester2']
testers.forEach(tester => !ignore.includes(tester.name) && tester.execute())
```

## II. API

### Tester

Fields:

* ___name__ : name of this tester.
* ___tests__ : list of test functions.

Methods:

* __add(test: ()=>boolean)__ : define a test function.
* __execute()__ : execute all tests managed by this tester.

### ITester

Interface for Tester class. Can be used to implements your own tester class.

```javascript
interface ITester {
  add(test: () => boolean): void;
  execute(): void;
}
```

### Utilities

* __assert(value:any) => boolean__: returns (value === true)
* __assertEq(left:any, right:any) => boolean__: checks if left===right
