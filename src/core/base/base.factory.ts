type Constructor<T, P> = new (...args: any) => T;

export abstract class DomainFactory {
  static create<T, P>(this: Constructor<T, P>, params: P): T {
    return new this(params);
  }
}
