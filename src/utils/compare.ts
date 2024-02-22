type PlainObject<T> = {
    [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject<typeof value> {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject<typeof value> {
    return isPlainObject(value) || isArray(value);
}

function compare(lhs: Record<string, unknown>, rhs: Record<string, unknown>) {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (compare(value as PlainObject<typeof Object>, rightValue as PlainObject<typeof Object>)) {
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}

export default compare;
