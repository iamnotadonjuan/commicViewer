import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'dateParseFormat' })
export class DateParseFormat implements PipeTransform {
  transform(value: string): string {
    if (!value.startsWith('-')) {
      const index = value.indexOf('T')
      return value.substring(0, index)
    } else {
      return 'Desconocida'
    }
  }
}