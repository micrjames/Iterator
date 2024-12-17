import { Iterator } from "../Iterator";
import { getItered } from "./utils";

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
			[nextNumValue, nextNumDone] = getItered(iter);
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
			[nextNumValue, nextNumDone] = getItered(iter);
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
			[nextNumValue, nextNumDone] = getItered(iter);
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should generate the second value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			it++;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should generate the third value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			it++;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should generate the fourth value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			it++;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should generate the fifth value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			it++;
			expect(nextNumValue).toBe(numbers[it]);
			expect(nextNumDone).toBeFalsy();
		 });
		 test("Should not generate a further value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
	  });
	  describe("That Has Been Used Up", () => {
		 test("Should not generate the first value.", () => {
			nextNum = iter.next();
			nextNumValue = nextNum.value;
			nextNumDone = nextNum.done;
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
		 test("Should not generate the second value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
		 test("Should not generate the third value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
		 test("Should not generate the fourth value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
		 test("Should not generate the fifth value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
		 test("Should not generate a further value.", () => {
			[nextNumValue, nextNumDone] = getItered(iter);
			expect(nextNumValue).toBeNull();
			expect(nextNumDone).toBeTruthy();
		 });
	  });
	  describe("That has been reset", () => {
		 describe("By Offset", () => {
			beforeAll(() => {
			   iter.reset(-5);
			   it = 0;
			});
			describe("Within Range and Of Positive Parity", () => {
			   test("Should generate the first value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  expect(nextNumValue).toBe(numbers[it]);
				  expect(nextNumDone).toBeFalsy();
			   });
			   test("Should generate the second value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  it++;
				  expect(nextNumValue).toBe(numbers[it]);
				  expect(nextNumDone).toBeFalsy();
			   });
			   test("Should generate the third value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  it++;
				  expect(nextNumValue).toBe(numbers[it]);
				  expect(nextNumDone).toBeFalsy();
			   });
			   test("Should generate the fourth value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  it++;
				  expect(nextNumValue).toBe(numbers[it]);
				  expect(nextNumDone).toBeFalsy();
			   });
			   test("Should generate the fifth value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  it++;
				  expect(nextNumValue).toBe(numbers[it]);
				  expect(nextNumDone).toBeFalsy();
			   });
			   test("Should not generate a further value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  it++;
				  expect(nextNumValue).toBeNull();
				  expect(nextNumDone).toBeTruthy();
			   });
			});
			describe("Outside of Positive Parity", () => {
			   test("Should not generate the first value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  expect(nextNumValue).toBeNull();
				  expect(nextNumDone).toBeTruthy();
			   });
			   test("Should not generate the second value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  expect(nextNumValue).toBeNull();
				  expect(nextNumDone).toBeTruthy();
			   });
			   test("Should not generate the third value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  expect(nextNumValue).toBeNull();
				  expect(nextNumDone).toBeTruthy();
			   });
			   test("Should not generate the fourth value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  expect(nextNumValue).toBeNull();
				  expect(nextNumDone).toBeTruthy();
			   });
			   test("Should not generate the fifth value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  expect(nextNumValue).toBeNull();
				  expect(nextNumDone).toBeTruthy();
			   });
			   test("Should not generate a further value.", () => {
				  [nextNumValue, nextNumDone] = getItered(iter);
				  expect(nextNumValue).toBeNull();
				  expect(nextNumDone).toBeTruthy();
			   });
			   test("Should throw 'Outside Positive Parity' error.", () => {
				  expect(() => {
					 iter.reset(-6);
				  }).toThrow("Outside Positive Parity");
			   });
			});
			describe("Outside of Range", () => {
			   test.todo("Should not generate the first value.");
			   test.todo("Should not generate the second value.");
			   test.todo("Should not generate the third value.");
			   test.todo("Should not generate the fourth value.");
			   test.todo("Should not generate the fifth value.");
			   test.todo("Should not generate a further value.");
			   test.todo("Should throw 'Out Of Range' error.");
			});
		 });
		 describe("Not By Offset", () => {
			describe("Back to Beginning of the Data Set", () => {
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
   });
});
