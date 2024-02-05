export const isDate = (val: any) => {
    return val instanceof Date;
}

export const isNumeric = (val: any) => {
    return typeof val === 'number' && !Number.isNaN(val);
}

export const isString = (val: any) => {
    return typeof val === 'string' || val instanceof String
}

export const isBoolean = (val: any) => {
    return typeof val == "boolean"
}

export const isSimpleType = (val: any): boolean => {
    return isNumeric(val) || isBoolean(val) || isString(val)
}

export const fixedEncodeURIComponent = (str: string) => {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
}