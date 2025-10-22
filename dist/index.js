'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// Add the cn function here
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
const Button = React.forwardRef((_a, ref) => {
    var { className, variant = 'default', size = 'default', outline = false, children } = _a, props = __rest(_a, ["className", "variant", "size", "outline", "children"]);
    const baseStyles = 'flex items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    const variants = {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-transparent bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary: outline ? 'bg-transparent border border-primary hover:bg-primary hover:text-white text-primary' : 'bg-primary hover:bg-primary-hover text-white',
        success: outline ? 'bg-transparent border border-success hover:bg-success hover:text-white text-success' : 'bg-success hover:bg-success-hover text-white',
        warning: outline ? 'bg-transparent border border-warning hover:bg-warning hover:text-white text-warning' : 'bg-warning hover:bg-warning-hover text-white',
        error: outline ? 'bg-transparent border border-error hover:bg-error hover:text-white text-error' : 'bg-error hover:bg-error-hover text-white',
        info: outline ? 'bg-transparent border border-info hover:bg-info hover:text-white text-info' : 'bg-info hover:bg-info-hover text-white',
    };
    const sizes = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-2',
        default: 'px-4 py-2',
        lg: 'px-8 py-2',
        xl: 'px-10 py-3 text-base',
        icon: 'p-2',
    };
    return (jsxRuntime.jsx("button", Object.assign({ className: cn(baseStyles, variants[variant], sizes[size], className), ref: ref }, props, { children: children })));
});
Button.displayName = 'Button';

exports.Button = Button;
//# sourceMappingURL=index.js.map
