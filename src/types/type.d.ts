type UserComment = {
  /** レス番号 */
  number?: number;
  /** 名前 */
  name: string;
  /** 日付 */
  date?: string;
  /** コメント */
  text: string;
  /** アイコン画像 */
  imgUrl: string;
  threadTitle?: string;
  id?: string;
  email?: string;
};
