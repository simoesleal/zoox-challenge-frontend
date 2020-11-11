/* HTTP */
const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;
const HTTP_REQUEST_FAILED = 402;
const HTTP_FORBIDDEN = 403;
const HTTP_NOT_FOUND = 404;

/* MESSAGE */
const ERROR_MESSAGE =
  "Por favor, realize o preenchimento correto para continuidade do processo.";
const SERVICE_UNAVAILABLE = "Serviço Indisponível";
const SERVICE_UNAVAILABLE_DETAILS =
  "Serviço indisponível no momento. Por favor, tente novamente em alguns instântes.";
const SERVICE_UNAVAILABLE_OBJ = {
  title: SERVICE_UNAVAILABLE,
  message: SERVICE_UNAVAILABLE_DETAILS,
};

module.exports = {
  HTTP_OK,
  HTTP_CREATED,
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
  HTTP_REQUEST_FAILED,
  HTTP_FORBIDDEN,
  HTTP_NOT_FOUND,
  ERROR_MESSAGE,
  SERVICE_UNAVAILABLE_OBJ,
};
