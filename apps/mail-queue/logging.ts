
export const log = (
  scope: string,
  message: string,
  payload?: object | string | number,
) => {
  console.log({ scope, message, payload });
};

log.error = (
  scope: string,
  message: string,
  payload?: object | string | number,
) => {
  console.error({ scope, message, payload });
};

