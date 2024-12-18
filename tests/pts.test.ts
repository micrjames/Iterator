import { Iterator } from "../Iterator";
import { getItered, expectIterEnd, expectIter } from "./utils"; 
import { dataObj } from "../utils";
import { pts as data } from "./data";

describe("An Iterator of Points", () => {
   let pts: dataObj;
   let iter: Iterator<dataObj>;
   beforeAll(() => {
	  pts = data;
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
		 let ptsSize: number;
		 beforeAll(() => {
			iter = new Iterator(pts, (pts, it) => <dataObj> pts[it+1]);
			ptsSize = Object.keys(pts).length;
		 });
		 beforeEach(() => {
			itered = getItered(iter);
		 });
		 test("Should generate the first value.", () => {
			expectIter(pts[1], ...itered);
		 });
		 test("Should have a size of '5' elements.", () => {
			const iterSize = iter.size;
			expect(iterSize).toBe(ptsSize);
		 });
		 test("Should not generate a further value.", () => {
			expectIterEnd(...itered);
		 });
	  });
   });
});
