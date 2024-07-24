import { Articals } from "./application-config.mock";

export function createUrl(title: string, length: number): string {
  const date = new Date();
  const string = title + '-' + date.getDate() + '-' + date.getMonth() + '-' + length
  return string
}
