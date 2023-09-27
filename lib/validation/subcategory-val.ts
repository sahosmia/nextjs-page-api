
export const subcategoryStoreValidation = (title:string, category_id:number) => {
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

  return errors;
};


export const subcategoryUpdateValidation = (title:string, category_id:number) => {
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

  return errors;
};