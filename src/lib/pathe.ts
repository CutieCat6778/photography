const FILENAME_RE = /(^|[/\\])([^/\\]+?)(?=(\.[^.]+)?$)/;

export function filename(path: string) {
  return path.match(FILENAME_RE)?.[2];
}