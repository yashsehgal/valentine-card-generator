export type MemeType =
  | "cat-01.jpeg"
  | "cat-02.webp"
  | "cat-03.webp";

export type TemplateType = {
  to: string;
  message: string;
  meme: MemeType;
}