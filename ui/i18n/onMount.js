import { ver, posId } from "./var.js";
import i18n from "../../_/i18n.js";
import CDN from "../../_/CDN.js";
const r = i18n.user(CDN, ver, posId);
export const I18N = r[0];
export default r[1];
