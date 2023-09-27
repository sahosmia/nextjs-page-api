import { subcategories } from '@/data/dummy';
import type { NextApiRequest, NextApiResponse } from 'next'
import { successResponse, errorResponse, getSuccessResponse, httpResponse, validationResponse } from '@/lib/response-helper';
import { subcategoryStoreValidation } from '@/lib/validation/subcategory-val';
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {

  // ===================  Get Http Method  ===================
    case "GET":
      try {    
      return res.status(200).json(getSuccessResponse(subcategories));     
    } catch (error) {
      return res.status(500).json(errorResponse(error))
    }
      break;
  
  
  // ==================  Post Http Method  =====================
    case "POST":
      try {      
        const { title, category_id } = req.body;
        // validation 
        const errors = subcategoryStoreValidation(title, category_id)
        // Error == 0 (Create New Data)
        if (Object.keys(errors).length == 0) {
          const data = {
            id: Date.now(),
            title: title.toString(),
            category_id : parseInt(category_id),
          };
          subcategories.push(data);
          return res.status(200).json(successResponse(data))         
        }
        return res.status(200).json(validationResponse(errors));
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