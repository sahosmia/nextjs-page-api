import { products } from '@/data/dummy';
import type { NextApiRequest, NextApiResponse } from 'next'
import { successResponse, errorResponse, httpResponse, validationResponse } from '@/lib/response-helper';
import { productUpdateValidation } from '@/lib/validation/product-val';
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.query
  const data :any | undefined = products.find(product => product.id === parseInt(id));

  function checkData() {
    if (!data) {        
      return res.status(500).json(errorResponse("Data not found. Id is invalid",));     
    } 
  }
  
  switch (req.method) {
    
    // ===================  Get Http Method  ===================
    case "GET":
      try { 
        checkData();
        return res.status(200).json(successResponse(data));     
      } catch (error) {
        return res.status(500).json(errorResponse(error))
      }
    break;
  
  
  // ==================  Put Http Method  =====================
    case "PUT":
      try {  
        checkData();

        const { title, category_id, subcategory_id, price, product_details, quantity } = req.body;
        const errors = productUpdateValidation(title, category_id, subcategory_id, price);

        if (Object.keys(errors).length == 0) {  
          data.title = title.toString();
                 data.category_id = parseInt(category_id); 
                 data.subcategory_id = parseInt(subcategory_id);
                 data.price = parseInt(price);
                 data.product_details = product_details;
          data.quantity = parseInt(quantity);
              return res.status(200).json(successResponse(data));     
        }

        return res.status(200).json(validationResponse(errors));
      } catch (error) {
        return res.status(500).json(errorResponse(error));
      }      
    break;


    // ===================  Delete Http Method  ===================
    case "DELETE":
      try { 
        checkData();
        const index = products.findIndex((product) => product.id === Number(id));
        products.splice(index, 1);  
        return res.status(200).json(successResponse(data));     
      } catch (error) {
        return res.status(500).json(errorResponse(error))
      }
    break;

    
    default:
      return res.status(500).json(httpResponse())
      break;
  }


  //end
}