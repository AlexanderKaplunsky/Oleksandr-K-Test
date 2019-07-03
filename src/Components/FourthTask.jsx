import React, { useState } from "react";

const FourthTask = () => {
  var myBind = function(thisArg, target, ...args) {
    return msg => target.call(thisArg, ...args, msg);
  };
  var user = "admin:";
  var log = {
    error: myBind(console, console.log, "[Error]", user),
    warning: myBind(console, console.log, "[Warning]", user)
  };
  log.error("File not found!"); // [Error] admin: File not found!
  log.warning("No timezone set!"); // [Warning] admin: No timezone set!
  return <div onClick={() => log.warning("No timezone set!")} />;
};

export default FourthTask;
