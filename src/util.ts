/** 
 * JavaScriptでは0と-0が区別されるがjestの判定でおいしくないので
 * -0だったら0にしてしまう処理
 * 0以外の数値は手を加えない
 */
export const unifySign = (a:number) => {
  if (a === 0) return 0;
  return a;
}

/** 度数法から弧度法へ */
export const deg2rad = (d:number) => {
  return Math.PI / 180 * d;
}

/** 弧度法から度数法へ */
export const rad2deg = (r:number) => {
  return 180 / Math.PI * r;
}

/**
 * 小数点第何位を指定して使者五入
 * @param num 
 * @param fixed 切り上げる桁数
 */
export const round = (num:number, fixed:number = 1) => {
  const fix = 10 ** fixed;
  return Math.round(num * fix) / fix;
}

/** min <= no <= max */
export const cramp = (no:number, min:number, max:number) => {
  no = Math.min(no, max);
  no = Math.max(no, min);
  return no;
}

export const lerp = (from:number, to:number, rate:number) => {
  return from + ((to - from) * rate);
}