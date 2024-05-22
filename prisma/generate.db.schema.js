const path = require("path");
const fs = require("fs");

const schemaPath = path.join(__dirname, ".", "schema.prisma");
const dbSchemaPath = path.join(__dirname, ".", "db.schema.prisma");

const schema = fs.readFileSync(schemaPath, "utf-8");

fs.writeFileSync(dbSchemaPath, schema);
