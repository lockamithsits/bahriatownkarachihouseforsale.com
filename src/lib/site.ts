export const SITE = {
  name: "Bahria Town Karachi House For Sale",
  domain: "https://bahriatownkarachihouseforsale.com",
  tel: "+923474825228",
  telDisplay: "+92 347 4825228",
  telLocal: "0347 4825228",
  telHref: "tel:+923474825228",
  whatsapp: "https://wa.me/923474825228",
  locality: "Bahria Town Karachi",
  city: "Karachi",
  region: "Sindh",
  country: "PK",
};

export function waLink(message: string): string {
  return `${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
