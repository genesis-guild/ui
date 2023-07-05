/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export const log = (
  type: 'error' | 'info' | 'warn',
  message: any,
  ...optionalParams: any[]
): void => {
  console[type](message, ...optionalParams)
}
