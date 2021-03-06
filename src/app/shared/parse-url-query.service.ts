import { Injectable } from '@angular/core';

@Injectable()
export class ParseUrlQueryService {
  constructor() {}

  parseUrlQuery() {
    let data = {};
    if (location.search) {
      let pair = (location.search.substr(1)).split('&');
      for (let i = 0; i < pair.length; i ++) {
        let param = pair[i].split('=');
        data[param[0]] = param[1];
      }
    }
    return data;
  }
}
