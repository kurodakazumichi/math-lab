/** 
 * JavaScriptでは0と-0が区別されるがjestの判定でおいしくないので
 * -0だったら0にしてしまう処理
 * 0以外の数値は手を加えない
 */
export const unifySign = (a:number) => {
  if (a === 0) return 0;
  return a;
}