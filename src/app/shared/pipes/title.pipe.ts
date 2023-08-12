import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from 'src/app/models/api/speaker-card';
import { SpeakersListComponent } from 'src/app/modules/speakers-page/components/speakers-list/speakers-list.component';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(speakers: Speaker[], name: string, component: SpeakersListComponent): Speaker[] {
    component.onFilteringStart();
    const onCancel = () => {
      setTimeout(() => {
        component.onFilteringDone();
      }, 300);
    }
    if (!name) {
      onCancel();
      return speakers
    };
    const lowerCaseName = name.toLowerCase();
    const result = speakers.filter(speaker => speaker.name.toLowerCase().includes(lowerCaseName));
    onCancel();
    return result;
  }

}
