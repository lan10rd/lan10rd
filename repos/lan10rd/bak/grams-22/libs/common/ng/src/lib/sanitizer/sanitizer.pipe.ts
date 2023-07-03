import { Pipe, PipeTransform } from '@angular/core';
import { CommonNgSanitizerService } from './sanitizer.service';

@Pipe({ name: 'sanitizer' })
export class CommonNgSanitizerPipe implements PipeTransform {

  constructor(public sanitizer: CommonNgSanitizerService, ) { }

  transform(value: string, type: 'url' | 'resourceUrl' | 'html' | 'script' | 'style' = 'html') {
    return this.sanitizer.bypass(value, type);
  }

}