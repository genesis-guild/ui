export const trunckate = (str: string, count = 4): string => {
  return `${str.slice(0, count)}...${str.slice(-count)}`
}
