export declare function isEqual(val1: string, val2: string): boolean;
export declare function isYummy(value: any): boolean;

export declare function getScrollOffset(): { x: number, y: number };
export declare function getViewportSize(): { width: number, height: number };
export declare function queryToObject(query: string): {}

export declare function date(value: string | number | Date): { year: number, month: number, day: number, date: number, hours: number, minutes: number, seconds: number, milliseconds: number, time: number, normalMonth: number, am00Time: number, pm24Time: number };

export declare function fileToBlob(file: File): Promise<any>;
export declare function fileToBase64(file: File): Promise<any>;
export declare function base64ToFile(base64: string, name: string): Promise<any>;
export declare function formatConvert(file: File, extName: string): Promise<any>;
export declare function compressImage(file: File, quality: number): Promise<any>;

export declare function set(object: {}, path: string | [], value: any): {};
export declare function get(object: {}, path: string | [], defaultValue: any): {};

export declare function deepClone(value: any): any;
export declare function find(collection: any[], predicate: any): any;
export declare function findIndex(collection: any[], predicate: any): number;
export declare function flatArray(value: any[]): any[];
export declare function removeDuplicate(value: any[]): any[];

export declare function getType(value: any): 'boolean' | 'NaN' | 'number' | 'string' | 'array' | 'function' | 'object' | 'null' | 'undefined' | 'symbol';
export declare function isArray(value: any): boolean;
export declare function isBoolean(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function isNull(value: any): boolean;
export declare function isNumber(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function isString(value: any): boolean;
export declare function isSymbol(value: any): boolean;
export declare function isUndefined(value: any): boolean;