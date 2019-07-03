import React, { useState } from "react";

const ThirdTask = () => {
  function MySingleton() {
    if (MySingleton.instance) return MySingleton.instance;

    if (!(this instanceof MySingleton)) {
      return new MySingleton();
    }

    MySingleton.instance = this;
    return MySingleton.instance;
  }

  MySingleton.prototype.download = function(url) {
    console.log("hello");
    return this;
  };

  var a = MySingleton();
  var b = new MySingleton();
  var c = new MySingleton();
  var d = MySingleton();
  console.log(a === b); // true
  console.log(b === c); // true
  console.log(c === d); // true
  console.log(a === d); // true

  b.download();
  return <div />;
};

export default ThirdTask;
