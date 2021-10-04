import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'sp4ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`)
  datasource: any = {
    get: (index:any, count:any, success:any) => {
      const data = [];
      for (let i = index; i <= index + count - 1; i++) {
        data.push({ id: i, text: 'item #' + i });
      }
      success(data);
    },
    settings: {
      horizontal: true
    }
  }
}
