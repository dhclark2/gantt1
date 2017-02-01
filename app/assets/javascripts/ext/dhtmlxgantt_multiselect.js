/*
@license

dhtmlxGantt v.4.1.0 Stardard
This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
gantt.config.multiselect = !0, gantt.config.multiselect_one_level = !1, gantt._multiselect = {
        selected: {},
        one_level: !0,
        active: !0,
        isActive: function() {
            return this.update_state(), this.active
        },
        update_state: function() {
            this.one_level = gantt.config.multiselect_one_level;
            var t = this.active;
            this.active = gantt.config.multiselect, this.active != t && this.reset()
        },
        reset: function() {
            this.selected = {}
        },
        set_last_selected: function(t) {
            this.last_selected = t
        },
        getLastSelected: function() {
            var t = this.last_selected;
            return t && gantt.isTaskExists(t) ? t : null;
        },
        select: function(t, e) {
            gantt.callEvent("onBeforeTaskMultiSelect", [t, !0, e]) && (this.selected[t] = !0, this.set_last_selected(t), gantt.callEvent("onTaskMultiSelect", [t, !0, e]))
        },
        toggle: function(t, e) {
            this.selected[t] ? this.unselect(t, e) : this.select(t, e)
        },
        unselect: function(t, e) {
            gantt.callEvent("onBeforeTaskMultiSelect", [t, !1, e]) && (this.selected[t] = !1, this.last_selected == t && (this.last_selected = null), gantt.callEvent("onTaskMultiSelect", [t, !0, e]))
        },
        isSelected: function(t) {
            return !(!gantt.isTaskExists(t) || !this.selected[t]);
        },
        getSelected: function() {
            var t = [];
            for (var e in this.selected) this.selected[e] && gantt.isTaskExists(e) ? t.push(e) : this.selected[e] = !1;
            return t.sort(function(t, e) {
                return gantt.calculateTaskLevel(gantt.getTask(t)) > gantt.calculateTaskLevel(gantt.getTask(e)) ? 1 : -1
            }), t
        },
        forSelected: function(t) {
            for (var e = this.getSelected(), n = 0; n < e.length; n++) t(e[n])
        },
        is_same_level: function(t) {
            if (!this.one_level) return !0;
            var e = this.getLastSelected();
            return e && gantt.isTaskExists(e) && gantt.isTaskExists(t) ? !(gantt.calculateTaskLevel(gantt.getTask(e)) != gantt.calculateTaskLevel(gantt.getTask(t))) : !0;
        },
        _after_select: function(t) {
            gantt.refreshTask(t)
        },
        _do_selection: function(t) {
            if (!this.isActive()) return !0;
            var e = gantt.locate(t),
                n = this.getSelected();
            if (!e) return !0;
            if (!gantt.callEvent("onBeforeMultiSelect", [t])) return !0;
            if (t.ctrlKey || t.metaKey) e && (this.toggle(e, t), this._after_select(e));
            else if (t.shiftKey && n.length) {
                var a = this.getLastSelected();
                if (a || (a = n[n.length - 1]), e && a != e) {
                    for (var i = gantt.getGlobalTaskIndex(a), s = gantt.getGlobalTaskIndex(e), r = e; gantt.getGlobalTaskIndex(r) != i;) this.select(r), this._after_select(r),
                        r = i > s ? gantt.getNext(r) : gantt.getPrev(r);
                    this.forSelected(gantt.bind(function(t) {
                        var e = gantt.getGlobalTaskIndex(t);
                        (e > i && e > s || i > e && s > e) && (this.unselect(t), gantt.refreshTask(t))
                    }, this))
                }
            } else this.forSelected(gantt.bind(function(t) {
                t != e && (this.unselect(t), gantt.refreshTask(t))
            }, this)), this.isSelected(e) || (this.select(e), this._after_select(e));
            return this.isSelected(e) ? !0 : !1
        }
    },
    function() {
        var t = gantt.selectTask;
        gantt.selectTask = function(e) {
            var n = t.call(this, e);
            return this.config.multiselect && this._multiselect.select(e),
                n
        };
        var e = gantt.unselectTask;
        gantt.unselectTask = function(t) {
            void 0 !== t && this.config.multiselect && this._multiselect.unselect(t);
            var n = e.call(this, t);
            return n
        }, gantt.toggleTaskSelection = function(t) {
            this.config.multiselect && this._multiselect.toggle(t)
        }, gantt.getSelectedTasks = function() {
            return this._multiselect.getSelected()
        }, gantt.eachSelectedTask = function(t) {
            return this._multiselect.forSelected(t)
        }, gantt.isSelectedTask = function(t) {
            return this._multiselect.isSelected(t)
        }, gantt.getLastSelectedTask = function() {
            return this._multiselect.getLastSelected()
        }
    }(), gantt.attachEvent("onTaskIdChange", function(t, e) {
        var n = gantt._multiselect;
        return n.isActive() ? void(gantt.isSelectedTask(t) && (n.unselect(t, null), n.select(e, null), gantt.refreshTask(e))) : !0
    }), gantt.attachEvent("onAfterTaskDelete", function(t, e) {
        var n = gantt._multiselect;
        return n.isActive() ? (n.selected[t] && n.unselect(t, null), void n.forSelected(function(t) {
            gantt.isTaskExists(t) || n.unselect(t, null)
        })) : !0
    }), gantt.attachEvent("onBeforeTaskMultiSelect", function(t, e, n) {
        var a = gantt._multiselect;
        return e && a.isActive() ? a.is_same_level(t) : !0
    }), gantt.attachEvent("onTaskClick", function(t, e) {
        var n = gantt._multiselect._do_selection(e);
        return gantt.callEvent("onMultiSelect", [e]), n
    }), gantt.attachEvent("onEmptyClick", function(t) {
        return gantt._multiselect._do_selection(t), gantt.callEvent("onMultiSelect", [t]), !0
    });
//# sourceMappingURL=../sources/ext/dhtmlxgantt_multiselect.js.map
