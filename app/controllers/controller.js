export const demo1 = async (req, res)=> {
    // params
    let name = req.params.name;
    let age = req.params.age;
    let city = req.params.city;

    return res.json({
        name: name,
        age: age,
        city: city
    })
}

// export const createController = async (req, res)=> {
//     return res.json({message:"created successfully"})
// }
// export const readController = async (req, res)=> {
//     return res.json({message:"read successfully"})
// }
// export const updateController = async (req, res)=> {
//     return res.json({message:"Updated successfully"})
// }
// export const deleteController = async (req, res)=> {
//     return res.json({message:"deleted successfully"})
// }