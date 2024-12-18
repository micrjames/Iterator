import { Iterator } from "../Iterator";
import { getItered, expectIterEnd, expectIter } from "./utils"; 
import { dataObj } from "../utils";

describe("An Iterator of numbers", () => {
   let numbers: dataObj;
   let iter: Iterator<dataObj>;
   beforeAll(() => {
	   numbers = {
		  '1': 1,
		  '2': 2,
		  '3': 3,
		  '4': 4,
		  '5': 5
	   };
   });
   describe("That Doesn't Iterate", () => {
	  let itered: [dataObj, boolean];
	  describe("With No Data", () => {
		 beforeAll(() => {
			iter = new Iterator();
			itered = getItered(iter);
		 });
		 test("Should exist", () => {
			expect(iter).toBeDefined();
		 });
		 test("Should have a size of 'NaN'.", () => {
			const iterSize = iter.size;
			expect(iterSize).toBeNaN();
		 });
		 test("Should not generate a value.", () => {
			expectIterEnd(...itered);
		 });
	  });
	  describe("With a Value Function And No Endpoint", () => {
		 let numbersSize: number;
		 beforeAll(() => {
			iter = new Iterator(numbers, (numbers, it) => <dataObj> numbers[it+1]);
			numbersSize = Object.keys(numbers).length;
		 });
		 beforeEach(() => {
			itered = getItered(iter);
		 });
		 test("Should generate the first value.", () => {
			expectIter(numbers[1], ...itered);
		 });
		 test("Should have a size of '5' elements.", () => {
			const iterSize = iter.size;
			expect(iterSize).toBe(numbersSize);
		 });
		 test("Should not generate a further value.", () => {
			expectIterEnd(...itered);
		 });
	  });
   });
   describe("That Is Iterated", () => {
	  let itered: [dataObj, boolean];
	  let it: number;
   /*
	  beforeAll(() => {
		 iter = new Iterator(numbers, (numbers, it) => <dataObj> numbers[it], numbers.size);
		 it = -1;
	  });
	  describe("With a Value Function And An Endpoint", () => {
		 beforeEach(() => {
			itered = getItered(iter);
			it++;
		 });
		 test("Should generate the first value.", () => {
			expectIter(numbers[it], ...itered);
		 });
		 test("Should generate the second value.", () => {
			expectIter(numbers[it], ...itered);
		 });
		 test("Should generate the third value.", () => {
			expectIter(numbers[it], ...itered);
		 });
		 test("Should generate the fourth value.", () => {
			expectIter(numbers[it], ...itered);
		 });
		 test("Should generate the fifth value.", () => {
			expectIter(numbers[it], ...itered);
		 });
		 test("Should not generate a further value.", () => {
			expectIterEnd(...itered);
		 });
	  });
	  describe("That Has Been Used Up", () => {
		 beforeEach(() => {
			itered = getItered(iter);
		 });
		 test("Should not generate the first value.", () => {
			expectIterEnd(...itered);
		 });
		 test("Should not generate the second value.", () => {
			expectIterEnd(...itered);
		 });
		 test("Should not generate the third value.", () => {
			expectIterEnd(...itered);
		 });
		 test("Should not generate the fourth value.", () => {
			expectIterEnd(...itered);
		 });
		 test("Should not generate the fifth value.", () => {
			expectIterEnd(...itered);
		 });
		 test("Should not generate a further value.", () => {
			expectIterEnd(...itered);
		 });
	  });
	  describe("That has been reset", () => {
		 describe("By Offset", () => {
			beforeAll(() => {
			   iter.reset(-5);
			   it = -1;
			});
			describe("Within Range and Of Positive Parity", () => {
			   beforeEach(() => {
				  itered = getItered(iter);
				  it++;
			   });
			   test("Should generate the first value.", () => {
				  expectIter(numbers[it], ...itered);
			   });
			   test("Should generate the second value.", () => {
				  expectIter(numbers[it], ...itered);
			   });
			   test("Should generate the third value.", () => {
				  expectIter(numbers[it], ...itered);
			   });
			   test("Should generate the fourth value.", () => {
				  expectIter(numbers[it], ...itered);
			   });
			   test("Should generate the fifth value.", () => {
				  expectIter(numbers[it], ...itered);
			   });
			   test("Should not generate a further value.", () => {
				  expectIterEnd(...itered);
			   });
			});
			describe("Outside of Positive Parity", () => {
			   beforeEach(() => {
				  itered = getItered(iter);
			   });
			   test("Should not generate the first value.", () => {
				  expectIterEnd(...itered);
			   });
			   test("Should not generate the second value.", () => {
				  expectIterEnd(...itered);
			   });
			   test("Should not generate the third value.", () => {
				  expectIterEnd(...itered);
			   });
			   test("Should not generate the fourth value.", () => {
				  expectIterEnd(...itered);
			   });
			   test("Should not generate the fifth value.", () => {
				  expectIterEnd(...itered);
			   });
			   test("Should not generate a further value.", () => {
				  expectIterEnd(...itered);
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
  */
   });
});
