//
// Copyright (c) 2022-2022, John Mettraux, jmettraux@gmail.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// Made in Japan
//

var Formose = (function() {

  "use strict";

  this.VERSION = '1.0.0';

  var self = this;

  //
  // protected functions

  var MODES = [ 'edit', 'view' ];

  var determineArgs = function(as) {

    var objects = [];

    as = Array.from(as);
    var elts = as.filter(function(e) {
      return H.isElt(e); });
    var modes = as.filter(function(e) {
      return MODES.includes(e); });
    var sels = as.filter(function(e) {
      return (typeof e === 'string') && ! modes.includes(e); });
    var objects = as.filter(function(e) {
      return (typeof e === 'object') && ! elts.includes(e); });

    var noData = as.includes(self.NOFORM);
    var noForm = as.includes(self.NODATA);

    var sta = elts.shift() || sels.shift();
    var sel = sels.shift();
    var sta_sel = [ sta, sel ].filter(function(e) { return !! e });

    return {
      sta: sta, sel: sel, sta_sel: sta_sel,
      data: noData ? null : objects.shift(),
      form: noForm ? null : objects.shift(),
      mode: modes.shift(),
      opts: objects.shift(),
      rest: { elts: elts, modes: modes, sels: sels, objects: objects } };
  };

  var render = function(/* args */) {

    var as = determineArgs(arguments);
    var e = H.elt.apply(null, as.sta_sel);

    return e;
  };

  var derive = function(/* args */) {
    var as = determineArgs(arguments);
return as; // TODO
  };

  var validate = function(/* args */) {
    var as = determineArgs(arguments);
return as; // TODO
  };

  var readElementName = function(e) {
    return H.att(e, 'name');
  };
  var readElement = function(e, r) {
    r[readElementName(e)] = e.value;
  };

  var read = function(/* args */) {

    var as = determineArgs(arguments);
    var e = H.elt.apply(null, as.sta_sel);

    var r = {};
    var readElt = function(ie) { readElement(ie, r); };

    H.forEach(e, 'input[name]', readElt);
    H.forEach(e, 'select[name]', readElt);
    H.forEach(e, 'textarea[name]', readElt);
    H.forEach(e, '[is]', readElt);

    return r;
  };

  //
  // public functions

  this.NOFORM = {};
  this.NODATA = {};

  this.render /*(sta, sel, data, form, mode)*/ = render;
  this.validate /*(data, form)*/ = validate;
  this.derive /*(sta, sel)*/ = derive;
  this.read /*(sta, sel)*/ = read;

  this.formats = {};

  //
  // done

  return this;

}).apply({}); // end Formose


Formose.formats.table = {
  makeContainer: function(e) { return H.c(e, 'table.formose-container'); },
  makeRow: function(ce) { return H.c(ce, 'tr'); },
  makeKey: function(re, k) { return H.c(re, 'td.formose-key', k); },
  makeVal: function(re) { return H.c(re, 'td.formose-val'); } };
Formose.formats.default =
  Formose.formats.table;

