/*
@license

dhtmlxGantt v.4.1.0 Stardard
This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
gantt.date.date_to_str = function(t, e) {
    return function(a) {
        return t.replace(/%[a-zA-Z]/g, function(t) {
            switch (t) {
                case "%d":
                    return e ? gantt.date.to_fixed(a.getUTCDate()) : gantt.date.to_fixed(a.getDate());
                case "%m":
                    return e ? gantt.date.to_fixed(a.getUTCMonth() + 1) : gantt.date.to_fixed(a.getMonth() + 1);
                case "%j":
                    return e ? a.getUTCDate() : a.getDate();
                case "%n":
                    return e ? a.getUTCMonth() + 1 : a.getMonth() + 1;
                case "%y":
                    return e ? gantt.date.to_fixed(a.getUTCFullYear() % 100) : gantt.date.to_fixed(a.getFullYear() % 100);
                case "%Y":
                    return e ? a.getUTCFullYear() : a.getFullYear();
                case "%D":
                    return e ? gantt.locale.date.day_short[a.getUTCDay()] : gantt.locale.date.day_short[a.getDay()];
                case "%l":
                    return e ? gantt.locale.date.day_full[a.getUTCDay()] : gantt.locale.date.day_full[a.getDay()];
                case "%M":
                    return e ? gantt.locale.date.month_short[a.getUTCMonth()] : gantt.locale.date.month_short[a.getMonth()];
                case "%F":
                    return e ? gantt.locale.date.month_full[a.getUTCMonth()] : gantt.locale.date.month_full[a.getMonth()];
                case "%h":
                    return e ? gantt.date.to_fixed((a.getUTCHours() + 11) % 12 + 1) : gantt.date.to_fixed((a.getHours() + 11) % 12 + 1);
                case "%g":
                    return e ? (a.getUTCHours() + 11) % 12 + 1 : (a.getHours() + 11) % 12 + 1;
                case "%G":
                    return e ? a.getUTCHours() : a.getHours();
                case "%H":
                    return e ? gantt.date.to_fixed(a.getUTCHours()) : gantt.date.to_fixed(a.getHours());
                case "%i":
                    return e ? gantt.date.to_fixed(a.getUTCMinutes()) : gantt.date.to_fixed(a.getMinutes());
                case "%a":
                    return e ? a.getUTCHours() > 11 ? "pm" : "am" : a.getHours() > 11 ? "pm" : "am";
                case "%A":
                    return e ? a.getUTCHours() > 11 ? "PM" : "AM" : a.getHours() > 11 ? "PM" : "AM";
                case "%s":
                    return e ? gantt.date.to_fixed(a.getUTCSeconds()) : gantt.date.to_fixed(a.getSeconds());
                case "%W":
                    return e ? gantt.date.to_fixed(gantt.date.getUTCISOWeek(a)) : gantt.date.to_fixed(gantt.date.getISOWeek(a));
                default:
                    return t
            }
        })
    }
}, gantt.date.str_to_date = function(t, e) {
    return function(a) {
        for (var n = [0, 0, 1, 0, 0, 0], r = a.match(/[a-zA-Z]+|[0-9]+/g), g = t.match(/%[a-zA-Z]/g), o = 0; o < g.length; o++) switch (g[o]) {
            case "%j":
            case "%d":
                n[2] = r[o] || 1;
                break;
            case "%n":
            case "%m":
                n[1] = (r[o] || 1) - 1;
                break;
            case "%y":
                n[0] = 1 * r[o] + (r[o] > 50 ? 1900 : 2e3);
                break;
            case "%g":
            case "%G":
            case "%h":
            case "%H":
                n[3] = r[o] || 0;
                break;
            case "%i":
                n[4] = r[o] || 0;
                break;
            case "%Y":
                n[0] = r[o] || 0;
                break;
            case "%a":
            case "%A":
                n[3] = n[3] % 12 + ("am" == (r[o] || "").toLowerCase() ? 0 : 12);
                break;
            case "%s":
                n[5] = r[o] || 0;
                break;
            case "%M":
                n[1] = gantt.locale.date.month_short_hash[r[o]] || 0;
                break;
            case "%F":
                n[1] = gantt.locale.date.month_full_hash[r[o]] || 0
        }
        return e ? new Date(Date.UTC(n[0], n[1], n[2], n[3], n[4], n[5])) : new Date(n[0], n[1], n[2], n[3], n[4], n[5])
    }
};
//# sourceMappingURL=../sources/ext/dhtmlxgantt_csp.js.map
