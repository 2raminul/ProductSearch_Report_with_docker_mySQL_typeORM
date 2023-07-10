import { Product } from '../entities/product.entity';
import { getRepository } from 'typeorm';
import * as path from 'path';
var fs = require('fs'),
  split = require('split'),
  es = require('event-stream');
const ProductDataSeed = async (willRun = false): Promise<void> => {
  if (!willRun) {
    return;
  }
  console.log('---- Seed Start ----');

  const productRepository = getRepository(Product);
  const filename = path.resolve(__dirname, '../../ss_input_data_sample.jsonl');
  const fileStream = fs.createReadStream(filename, { encoding: 'utf8' });
  fileStream.pipe(split()).pipe(
    es.through(async function (data) {
      const singleProduct: Product = JSON.parse(data);
      this.pause();
      await InsertThisProductToDB(singleProduct, this);
      console.log('---- Seed End ----');
      return data;
    }),
    function end() {
      console.log('stream reading ended');
      this.emit('end');
    },
  );

  async function InsertThisProductToDB(product, es) {
    const productobj = await productRepository.create(product);
    await productRepository.save(productobj);
    es.resume();
  }
};

export default ProductDataSeed;
