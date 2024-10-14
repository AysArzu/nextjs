export const transformYupErrors = (errors) => {
  const errObject = {};
  errors.forEach((item) => {
    errObject[item.path] = item.message;
  });
  return {
    ok: false,
    errors: errObject,
    message: "Validation error",
  };
};
