export function queryStringify(data: Record<string, unknown>): string {
    let query = '?';
    for (const key in data) {
      const value = data[key];
      if (Array.isArray(value)) {
        query += `${key}=${value.join(',')}&`;
      } else if (typeof value === 'object' && value !== null) {
        query += `${key}=${JSON.stringify(value)}&`;
      } else {
        query += `${key}=${value}&`;
      }
    }
    return query.slice(0, -1);
  }