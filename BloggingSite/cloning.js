obj = {
    ename: "AAzad",
    eid: 786,
    esal: 40000,
    address: {
        state: "Chattisgarh",
        city: {
            city: "Raipur",
        }
    }
}
let obj1 = {};
for (let i of Object.values(obj)) {
    console.log(i)
}