export class Iterator<T> implements IterableIterator<T> {
   private _it: number;
   private _endpoint: number;
   private cb: Function;
   private data: unknown;
   constructor(data: unknown, cb?: (data: unknown) => T, endpoint: number = 0) {
	  this._it = 0;
	  this._endpoint = endpoint;
	  this.cb = cb;
	  this.data = data;
   }
   next(): IteratorResult<T> {
	  const value = this.cb ? this.cb(this.data) : null;
	  if(this._it > this._endpoint) {
		 return {
			done: true,
			value: null
		 };
	  }
	  return {
		 done: false,
		 value
	  };
   }
   [Symbol.iterator](): IterableIterator<T> {
	  return this;
   }
}
