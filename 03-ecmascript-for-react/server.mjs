// const liveServer = require("live-server");
import liveServer from "live-server";

const params = {
  host: "localhost",
  port: 3000,
  root: ".",
  open: false,
  mount: [["/", "./public"]],
};

liveServer.start(params);
