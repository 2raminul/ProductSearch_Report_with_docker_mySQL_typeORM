import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { ReportResponse } from '../dtos/report.response.dto';

@Controller('reports')
export class ReportController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async rateReport(): Promise<ReportResponse> {
    const totalRecords = await this.productService.countAll(); // Retrieve the total count of records

    const fulfillmentRate = async (field: string): Promise<number> => {
      const count = await this.productService.countByField(field); // Retrieve the count of non-null or non-empty values for the specified field
      return count / totalRecords;
    };

    return {
      product_name: await fulfillmentRate('product_name'),
      attributes: await fulfillmentRate('attributes'),
      maker: await fulfillmentRate('maker'),
      brand: await fulfillmentRate('brand'),
      tags_from_description: await fulfillmentRate('tags_from_description'),
      tags_from_review: await fulfillmentRate('tags_from_review'),
    };
  }
}
