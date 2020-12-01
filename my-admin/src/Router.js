const routers =[
    {
        name: "List Manager",
        path : "/list",
        icon: "",
        component: <h3>List Manager</h3>
    },
    {
        name: "Permission",
        path: "/permission",
        icon: "",
        children: [
            {
                name: "Admin",
                path: "/permission/admin",
                icon: "",
                component: <h3>Admin</h3>
            },
            {
                name: "Modrator",
                path: "/permission/modrator",
                icon: "",
                component: <h3>Modrator</h3>

            },
            {
                name: "User",
                path: "/permission/user",
                icon: "",
                component: <h3>User</h3>
            }
        ]
    },
    {
        name: "Category",
        path: "/category",
        icon: "",
        children: [
            {
                name: "Tiên Hiêp",
                path: "/category/tien-hiep",
                icon: "",
                component: <h3>Tiên Hiệp</h3>
            },
            {
                name: "Kiếm Hiêp",
                path: "/category/kiem-hiep",
                icon: "",
                component: <h3>Kiếm Hiệp</h3>
            },
            {
                name: "Ngôn Tình",
                path: "/category/ngon-tinh",
                icon: "",
                component: <h3>Ngôn Tình</h3>
            },
        ]
    }
]
export default routers;