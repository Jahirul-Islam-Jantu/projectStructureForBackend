import {json, query} from "express";

export const demo1 = async (req, res)=> {
    // params
    let name = req.params.name;
    let age = req.params.age;
    let city = req.params.city;


    // request query
    let country = req.query.country;
    let lang = req.query.lang;
    let religion = req.query.religion;


    return res.json({
        name: name,
        age: age,
        city: city,
        country: country,
        lang: lang,
        religion: religion,


    })
}

export const demo2 = async (req, res)=> {
    let reqBody = req.body;

    return res.json({
        fname: reqBody.fname,
        lname: reqBody.lname,
        age: reqBody.age,
        profession: reqBody.profession,
        city: reqBody.city,
        country: reqBody.country,
        salary: reqBody.salary,


    })
}
export const formData = async (req, res)=> {
    let reqBody = req.body;
    return res.json({
        email: reqBody.email,
        password: reqBody.password,
    })
}
export const file = async (req, res)=> {
    let pic = req.files

    return res.json({message: pic})

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