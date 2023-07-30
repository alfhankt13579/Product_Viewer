import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], searchTerm: string, propsName: string): any[] {
    const result: any[] = [];

    if (!products || searchTerm == '' || propsName == '') {
      return products;
    }

    products.forEach((product: any) => {
      if (
        product[propsName]
          .trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      ) {
        result.push(product);
      }
    });
    return result;
  }
}
