export function isFunction (obj) {
    return obj && Object.prototype.toString.call(obj) === 
        '[object Function]';
}