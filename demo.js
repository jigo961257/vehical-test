const data = [
    {
        folder_id: "M1",
        next_folder_type: "2",
        chlidern: [
            {
                folder_id: "M1",
                next_type_folder: "2",
                childern: [
                    {
                        id: 1,
                        folder_id: "M1",
                        next_type_folder: "3",
                        childern: [],
                    },
                    {
                        id: 2,
                        folder_id: "M1",
                        next_type_folder: "3",
                        childern: [],
                    },
                    {
                        id: 3,
                        folder_id: "M1",
                        next_type_folder: "3",
                        childern: [],
                    },
                ]
            }
        ]
    },
    {
        folder_id: "B1",
        next_folder_type: "2",
        chlidern: [
            {
                folder_id: "B1",
                next_type_folder: "2",
                childern: [
                    {
                        id: 1,
                        folder_id: "B1",
                        next_type_folder: "3",
                        childern: [],
                    },
                    {
                        id: 2,
                        folder_id: "B1",
                        next_type_folder: "3",
                        childern: [],
                    },
                    {
                        id: 3,
                        folder_id: "B1",
                        next_type_folder: "3",
                        childern: [],
                    },
                ]
            }
        ]
    }
];

const filterData = data.map(e => {
    if(e.folder_id === "M1") {
        e.chlidern.map(e1 => {
            if(e1.hasOwnProperty("isCollubs")){
                e1.isCollubs = false
            } else {
                e1.isCollubs = true
            }
            e1.childern.map(e2 => {
                if(e2.hasOwnProperty("isCollubs")){
                    e2.isCollubs = false
                } else {
                    e2.isCollubs = true
                }
            })
        })

        return e;
    }
    return e;
});

console.dir(JSON.stringify(filterData));

JSON.stringify()