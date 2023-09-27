
export const productStoreValidation = (title: string, category_id: any, subcategory_id:any, price:any) => {
  let errors: any = {};
  
// Title 
  if (!title) {
    errors.title = "Title is required";
  } else if (title.length < 3) {
    errors.title = "Title length will be minimum 3  char";
  } else if (title.length > 20) {
    errors.title = "Title length will be maximum 20 char";
  };


  // category_id 
  if (!category_id) {
    errors.category_id = "Category Id is required";
  };


  // subcategory_id 
  if (!subcategory_id) {
    errors.subcategory_id = "Subcategory Id is required";
  };


  // Price 
  if (!price) {
    errors.price = "Price Id is required";
  };


  return errors;
};


export const productUpdateValidation = (title: string, category_id: any, subcategory_id:any, price:any) => {
  let errors: any = {};

  
// Title 
  if (!title) {
    errors.title = "Title is required";
  } else if (title.length < 3) {
    errors.title = "Title length will be minimum 3  char";
  } else if (title.length > 20) {
    errors.title = "Title length will be maximum 20 char";
  };


  // category_id 
  if (!category_id) {
    errors.category_id = "Category Id is required";
  };


  // subcategory_id 
  if (!subcategory_id) {
    errors.subcategory_id = "Subcategory Id is required";
  };


  // Price 
  if (!price) {
    errors.price = "Price Id is required";
  };



  return errors;
};