import bcrypt from 'bcryptjs'
const users=[
    {
        name:"Admin",
        email:"admin@shop.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:"qubais",
        email:"qubais@shop.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:"mohammed",
        email:"mohammed@shop.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    }
]

export default users;