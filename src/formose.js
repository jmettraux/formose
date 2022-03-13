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

  var determineArgs = function(as) {

    var elts = [];
    var modes = [];
    var sel = [];
    var objects = [];

    as = Array.from(as);

    return {
      sta: null, sel: null, data: null, form: null, mode: null, rest: {} };
  };

  var render = function(/* args */) {
    var as = determineArgs(arguments);
return as; // FIXME
  };

  var derive = function(/* args */) {
    var as = determineArgs(arguments);
// TODO
  };

  var validate = function(/* args */) {
    var as = determineArgs(arguments);
// TODO
  };

  var read = function(/* args */) {
    var as = determineArgs(arguments);
// TODO
  };

  //
  // public functions

  this.render /*(sta, sel, data, form, mode)*/ = render;
  this.validate /*(data, form)*/ = validate;
  this.derive /*(sta, sel)*/ = derive;
  this.read /*(sta, sel)*/ = read;

  //
  // done

  return this;

}).apply({}); // end Formose

