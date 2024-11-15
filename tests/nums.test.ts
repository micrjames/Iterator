import { Iterator } from "../Iterator";

describe("An Iterator of numbers", () => {
   let numbers: number[];
   let iter: Iterator<number>;
   beforeAll(() => {
	   numbers = [1, 2, 3, 4, 5];
   });
   describe("That Doesn't Iterate", () => {
	  describe("With No Data", () => {
		 beforeAll(() => {
			iter = new Iterator();
		 });
		 test.todo("Should exist");
		 test.todo("Should not generate a value.");
	  });
	  describe("With a Value Function And No Endpoint", () => {
		 beforeAll(() => {
			iter = new Iterator(numbers, (numbers, it) => numbers[it]);
		 });
		 test.todo("Should generate the first value.");
		 test.todo("Should not generate a further value.");
	  });
   });
   describe("That Is Iterated", () => {
	  beforeAll(() => {
		 iter = new Iterator(numbers, (numbers, it) => numbers[it], numbers.length-1);
	  });
	  describe("With a Value Function And An Endpoint", () => {
		 test.todo("Should generate the first value.");
		 test.todo("Should generate the second value.");
		 test.todo("Should generate the third value.");
		 test.todo("Should generate the fourth value.");
		 test.todo("Should generate the fifth value.");
		 test.todo("Should not generate a further value.");
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
