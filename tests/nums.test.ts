import { Iterator } from "../Iterator";

describe("An Iterator of numbers", () => {
   let numbers: number[];
   let iter: Iterator<number>;
   beforeAll(() => {
	   numbers = [1, 2, 3, 4, 5];
   });
   describe("That Doesn't Iterate", () => {
	  let nextNum: IteratorResult<number>; 
	  let nextNumValue: number;
	  let nextNumDone: boolean;
	  describe("With No Data", () => {
		 beforeAll(() => {
			iter = new Iterator();
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
		 });
		 test("Should exist", () => {
			expect(iter).toBeDefined();
		 });
		 test("Should not generate a value.", () => {
			expect(nextNumValue).toBeNull();
		   	expect(nextNumDone).toBeTruthy();
		 });
	  });
	  describe("With a Value Function And No Endpoint", () => {
		 beforeAll(() => {
			iter = new Iterator(numbers, (numbers, it) => numbers[it]);
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
		 });
		 test("Should generate the first value.", () => {
			expect(nextNumValue).toBe(numbers[0]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should not generate a further value.", () => {
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
	  });
   });
   describe("That Is Iterated", () => {
	  let nextNum: IteratorResult<number>; 
	  let nextNumValue: number;
	  let nextNumDone: boolean;
	  let it: number;
	  beforeAll(() => {
		 iter = new Iterator(numbers, (numbers, it) => numbers[it], numbers.length-1);
		 it = 0;
	  });
	  describe("With a Value Function And An Endpoint", () => {
		 test("Should generate the first value.", () => {
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should generate the second value.", () => {
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
			it++;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should generate the third value.", () => {
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
			it++;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should generate the fourth value.", () => {
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
			it++;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should generate the fifth value.", () => {
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
			it++;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should not generate a further value.", () => {
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
	  });
	  describe("That Has Been Used Up", () => {
		 test.todo("Should not generate the first value.");
		 test.todo("Should not generate the second value.");
		 test.todo("Should not generate the third value.");
		 test.todo("Should not generate the fourth value.");
		 test.todo("Should not generate the fifth value.");
		 test.todo("Should not generate a further value.");
	  });
	  describe("That has been reset", () => {
		 // TODO: test for 'reset by offset'
		 beforeAll(() => {
			iter.reset();
		 });
		 test.todo("Should generate the first value.");
		 test.todo("Should generate the second value.");
		 test.todo("Should generate the third value.");
		 test.todo("Should generate the fourth value.");
		 test.todo("Should generate the fifth value.");
		 test.todo("Should not generate a further value.");
	  });
   });
});
