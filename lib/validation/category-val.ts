
export const categoryStoreValidation = (title:string) => {
  let errors: any = {};

// Title 
  if (!title) {
    errors.title = "Title is required";
  } else if (title.length < 3) {
    errors.title = "Title length will be minimum 3  char";
  } else if (title.length > 20) {
    errors.title = "Title length will be maximum 20 char";
  };
  return errors;
};


export const categoryUpdateValidation = (title:string) => {
  let errors: any = {};

// Title 
  if (!title) {
    errors.title = "Title is required";
  } else if (title.length < 3) {
    errors.title = "Title length will be minimum 3  char";
  } else if (title.length > 20) {
    errors.title = "Title length will be maximum 20 char";
  };

  return errors;
};