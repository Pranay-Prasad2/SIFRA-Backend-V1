export const success = <T>(
  data: T,
  message = "Success"
) => ({
  success: true,
  message,
  data,
});

export const failure = (
  message: string,
  errors?: unknown
) => ({
  success: false,
  message,
  errors,
});