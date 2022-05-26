"use strict";

var test = require("tape");

var { toDictionary } = require("./");

test("Transform an array into an object", function (t) {
  var list = [{
    id: "a",
    value: 1,
  }, {
    id: "b",
    value: 2,
  }];

  t.plan(1);

  t.deepEqual(toDictionary(list), {
    a: {
      id: "a",
      value: 1
    },
    b: {
      id: "b",
      value: 2,
    },
  });
});

test("Transform an array into an object / override entry", function (t) {
  var list = [{
    id: "a",
    value: 1,
  }, {
    id: "a",
    value: 2,
  }];

  t.plan(1);

  t.deepEqual(toDictionary(list), {
    a: {
      id: "a",
      value: 2
    },
  });
});

test("Transform an array into an object / skip entry", function (t) {
  var list = [{
    id: "a",
    value: 1,
  }, {
    value: 2,
  }];

  t.plan(1);

  t.deepEqual(toDictionary(list), {
    a: {
      id: "a",
      value: 1
    },
  });
});

test("Transform an array into an object / custom key", function (t) {
  var list = [{
    key: "a",
    value: 1,
  }, {
    key: "b",
    value: 2,
  }];

  t.plan(1);

  t.deepEqual(toDictionary(list, "key"), {
    a: {
      key: "a",
      value: 1
    },
    b: {
      key: "b",
      value: 2
    },
  });
});
