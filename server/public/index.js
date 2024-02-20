"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const logger_1 = require("hono/logger");
const app = new hono_1.Hono().basePath("/");
app.use("*", (0, logger_1.logger)());
app.get("/", (c) => c.json({ status: 200, message: "Success" }, 200));
app.notFound((c) => c.json({ status: 404, message: "Not found" }, 404));
(0, node_server_1.serve)(app, () => {
    console.log("Server is running on http://localhost:3000");
});
//# sourceMappingURL=index.js.map