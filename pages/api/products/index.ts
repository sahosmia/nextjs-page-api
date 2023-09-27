import { products } from '@/data/dummy';
import { successResponse, errorResponse, getSuccessResponse, httpResponse, validationResponse } from '@/lib/response-helper';
import { productStoreValidation } from '@/lib/validation/product-val';
import type { NextApiRequest, NextApiResponse } from 'next'
 

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {

  // ===================  Get Http Method  ===================
    case "GET":
     try {      
        return res.status(200).json(getSuccessResponse(products));     
    } catch (error) {
      return res.status(500).json(errorResponse(error))
    }
      break;
  
  
  // ==================  Post Http Method  =====================
    case "POST":
      try {      
        const { title, category_id, subcategory_id, price, product_details, quantity } = req.body;

        const errors = productStoreValidation(title, category_id, subcategory_id, price)

         if (Object.keys(errors).length == 0) {
          const data = {
            id: Date.now(),
            title: title.toString(),
            category_id: parseInt(category_id), 
            subcategory_id: parseInt(subcategory_id), 
            price: parseInt(price), 
            product_details: product_details,
            quantity:  parseInt(quantity),
          };

          products.push(data);


           return res.status(200).json(successResponse(data))         
        }
 
        const errorlengrth = Object.keys(errors).length;
        return res.status(200).json(validationResponse(errorlengrth));

      } catch (error) {
        return res.status(500).json(errorResponse(error))
      }   

    break;

    
    default:
      return res.status(500).json(httpResponse())
      break;
  }
}




