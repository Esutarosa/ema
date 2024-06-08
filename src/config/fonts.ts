import { Poppins, Source_Code_Pro } from "next/font/google";

export const poppins = Poppins({
  weight: ['400', '700', '900'],
  display: 'fallback',
  subsets: ['latin'],
});

export const source_code_pro = Source_Code_Pro({
  weight: ['400'],
  display: 'fallback',
  subsets: ['latin'],
});