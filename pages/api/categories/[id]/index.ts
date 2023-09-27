import { categories } from '@/data/dummy';
import type { NextApiRequest, NextApiResponse } from 'next'
import { successResponse, errorResponse, httpResponse, validationResponse } from '@/lib/response-helper';
import { categoryUpdateValidation } from '@/lib/validation/category-val';
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.query
  const data :any | undefined = categories.find(category => category.id === parseInt(id));

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

        const { title } = req.body;
        const errors = categoryUpdateValidation(title);

        if (Object.keys(errors).length == 0) {
          data.title = title.toString();
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
        const index = categories.findIndex((category) => category.id === Number(id));
        categories.splice(index, 1);  
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