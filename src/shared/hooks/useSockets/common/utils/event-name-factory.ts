import { EventNamePostfix } from '../types'

export class EventNameFactory {
  private _postfix: EventNamePostfix
  constructor(postfix: EventNamePostfix) {
    this._postfix = postfix
  }

  get<T>(EN: T): string {
    return `${EN}__${this._postfix}`
  }
}
