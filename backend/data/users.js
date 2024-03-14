import bcript from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcript.hashSync("123456", 10),
    isAdmin: true,
  },
{
    name: "John Doe",
    email: "john@example.com",
    password: bcript.hashSync("123456", 10),
    isAdmin: false,
  },
{
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcript.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;