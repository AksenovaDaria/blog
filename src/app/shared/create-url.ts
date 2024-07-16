import { Articals } from "./application-config.mock";

export function createUrl(title: string): string {
  const date = new Date();
  const string = title + '-' + date.getDate() + '-' + date.getMonth() + '-' + Articals.length
  return string
}
