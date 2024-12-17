export class Iterator<T> implements IterableIterator<T> {
   private _it: number;
   private _endpoint: number;
   private cb: Function;
   private data: unknown;
   constructor(data?: unknown, cb?: (data: unknown, it: number) => T, endpoint: number = 0) {
	  this._it = 0;
	  this._endpoint = endpoint;
	  this.cb = cb;
	  this.data = data;
   }
   reset(offset?: number) {
	  // TODO: restrict bounds to within iterated range & preserve parity.
	  if(this._it + offset < 0) throw new Error("Outside Positive Parity");
	  this._it = offset ? this._it + offset : 0;
   }
   next(): IteratorResult<T> {
	  if(this.data) {
		 const value = this.cb ? this.cb(this.data, this._it) : null;
		 if(this._it > this._endpoint) {
			return {
			   done: true,
			   value: null
			};
		 }
		 this._it++;
		 return {
			done: false,
			value
		 };
	  }
	  return {
		 done: true,
		 value: null
	  };
   }
   [Symbol.iterator](): IterableIterator<T> {
	  return this;
   }
}
