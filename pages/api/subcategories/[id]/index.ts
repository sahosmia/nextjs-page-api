import { subcategories } from '@/data/dummy';
import type { NextApiRequest, NextApiResponse } from 'next'
import { successResponse, errorResponse, httpResponse, validationResponse } from '@/lib/response-helper';
import { subcategoryUpdateValidation } from '@/lib/validation/subcategory-val';
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.query
  const data :any | undefined = subcategories.find(subcategory => subcategory.id === parseInt(id));

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

        const { title, category_id } = req.body;
        const errors = subcategoryUpdateValidation(title, category_id);

        if (Object.keys(errors).length == 0) {
          data.title = title.toString();
          data.category_id = parseInt(category_id);
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
        const index = subcategories.findIndex((subcategory) => subcategory.id === Number(id));
        subcategories.splice(index, 1);  
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