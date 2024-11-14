import { Iterator } from "../Iterator";

describe("An Iterator", () => {
   let numbers: number[];
   let it: Iterator<number>;
   beforeAll(() => {
	   numbers = [1, 2, 3, 4, 5];
   });
   describe("That Doesn't Iterate", () => {
	  describe("With No Data", () => {
		 beforeAll(() => {
			it = new Iterator(numbers);
		 });
		 test.todo("Should exist");
		 test.todo("Should not generate any values.");
	  });
	  describe("With a Value Function And No Endpoint", () => {
		 beforeAll(() => {
			it = new Iterator(numbers);
		 });
		 test.todo("Should generate the first value.");
		 test.todo("Should not generate any further values.");
	  });
   });
   describe("That Does Iterate", () => {
	  beforeAll(() => {
		 it = new Iterator(numbers);
	  });
	  describe("With a Value Function And An Endpoint", () => {
		 test.todo("Should generate the first value.");
		 test.todo("Should generate the second value.");
		 test.todo("Should generate the third value.");
		 test.todo("Should generate the fourth value.");
		 test.todo("Should generate the fifth value.");
		 test.todo("Should not generate any further values.");
	  });
	  describe("That has been reset", () => {
		 beforeAll(() => {
		 });
		 test.todo("Should generate the first value.");
		 test.todo("Should generate the second value.");
		 test.todo("Should generate the third value.");
		 test.todo("Should generate the fourth value.");
		 test.todo("Should generate the fifth value.");
		 test.todo("Should not generate any further values.");
	  });
   });
});
