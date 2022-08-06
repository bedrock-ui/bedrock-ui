function pxToNumber(numberInPx: string): number {
  return parseFloat(numberInPx.replace('px', ''));
}

export default pxToNumber;
