
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export function getVideoId(regexp: RegExp, str: string) {
  let m = str.match(regexp);
  let id = m[m.length - 1];
  return replaceAll(id, '"', "");
}


