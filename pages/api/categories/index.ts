import { categories } from '@/data/dummy';
import { successResponse, errorResponse, getSuccessResponse, httpResponse, validationResponse } from '@/lib/response-helper';
import { categoryStoreValidation } from '@/lib/validation/category-val';
import type { NextApiRequest, NextApiResponse } from 'next'
 

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {

  // ===================  Get Http Method  ===================
    case "GET":
     try {      
        return res.status(200).json(getSuccessResponse(categories));     
    } catch (error) {
      return res.status(500).json(errorResponse(error))
    }
      break;
  
  
  // ==================  Post Http Method  =====================
    case "POST":
      try {      
        const { title } = req.body;
        // validation 
        const errors = categoryStoreValidation(title)
        // Error == 0 (Create New Data)
        if (Object.keys(errors).length == 0) {
          const data = {
            id: Date.now(),
            title: title.toString(),
          };
          categories.push(data);
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
}




