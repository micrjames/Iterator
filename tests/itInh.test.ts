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
         test("Should exist", () => {
			expect(iter).toBeDefined();                                                        
         });
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
});
