export function trim(str: string, chars:string = ' '): string {
    let start = 0;
    let end = str.length - 1;

    while (start <= end && chars.includes(str[start])) {
        start++;
    }
    while (end >= start && chars.includes(str[end])) {
        end--;
    }

    return str.slice(start, end + 1);
} 

export function authTrim(string: string, chars: string) {
    const str = ' ' + string + ' ';

    if (str && chars === undefined) {
        return string.trim();
    }

    if (!str || !chars) {
        return (string || '');
    }

    const regFirst = new RegExp(` ${chars}`, 'gi');
    const regSecond = new RegExp(`${chars} `, 'gi');

    return str
      .replace(regFirst, '')
      .replace(regSecond, '')
      .trim();
}
