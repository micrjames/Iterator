import { Iterator } from "../Iterator";
import { getItered, expectIterEnd, expectIter } from "./utils"; 
import { dataObj } from "../utils";
import { numbers as data } from "./data";

describe("An Iterator of numbers", () => {
   let numbers: dataObj;
   let iter: Iterator<dataObj>;
   beforeAll(() => {
	   numbers = data;
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
	  let numbersSize: number;
	  beforeAll(() => {
		 numbersSize = Object.keys(numbers).length;
		 iter = new Iterator(numbers, (numbers, it) => <dataObj> numbers[it+1], numbersSize-1);
		 it = 0;
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
			   it = 0;
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
			   test("Should throw 'Out of Range' error.", () => {
				  expect(() => {
					 iter.reset(iter.size);
				  }).toThrow("Out of Range");
			   });
			});
		 });
		 describe("Not By Offset", () => {
			describe("Back to Beginning of the Data Set", () => {
			   beforeAll(() => {
				  iter.reset();
				  it = 0;
			   });
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
		 });
	  });
   });
});
