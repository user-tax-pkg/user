import { ver, posId } from "./var.js";
import i18n from "../../_/i18n.js";
import CDN from "../../_/CDN.js";
import lang from "../../_/lang.js";
const r = i18n.user(ver, posId, () => CDN() + "user/" + ver + "/" + lang());
export const I18N = r[0];
export default r[1];
