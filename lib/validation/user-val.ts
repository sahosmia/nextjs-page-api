
export const userStoreValidation = (name: string) => {
  let errors: any = {};

  // Name
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 3) {
    errors.name = "Name length will be minimum 3  char";
  } else if (name.length > 20) {
    errors.name = "Name length will be maximum 20 char";
  }
  return errors;
};


export const userUpdateValidation = (name: string) => {
  let errors: any = {};

  // Name
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 3) {
    errors.name = "Name length will be minimum 3  char";
  } else if (name.length > 20) {
    errors.name = "Name length will be maximum 20 char";
  }

  return errors;
};