export function shortCutText(text, maxValue) {
  return text.length > maxValue ? text.slice(0, maxValue) + "..." : text;
}
