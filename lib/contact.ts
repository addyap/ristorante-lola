export const MAP_QUERY =
  "https://www.google.com/maps/search/?api=1&query=Via+S.+Caterina+da+Siena+16+61033+Fermignano";
export const MAP_EMBED =
  "https://www.google.com/maps?q=Via%20S.%20Caterina%20da%20Siena%2016%2061033%20Fermignano&output=embed";
export const TEL = "+390722331684";
export const TEL_MOBILE = "+393477621359";
export const EMAIL = "lolaristorante@gmail.com";
export const WHATSAPP_NUMBER = "393477621359";
export const FACEBOOK_URL = "https://www.facebook.com/RistorantePizzeriaDaLola";

export function waHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
