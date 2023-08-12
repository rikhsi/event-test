import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from 'src/app/models/api/speaker-card';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(data: Speaker[], state: 0 | 1 | 2): any[] {
    if (state === 0) {
      return data;
    }

    const sortedData = [...data];
  
    sortedData.sort((a, b) => {
      if (state === 1) {
        return b.rate - a.rate;
      } else if (state === 2) {
        return a.rate - b.rate;
      }
      return 0;
    });
  
    return sortedData;
  }

}
