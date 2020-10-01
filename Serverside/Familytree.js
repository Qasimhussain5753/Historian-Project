const Model  = require('./model');
const { console } = require('window-or-global');
const { median } = require('d3');


let table = [
    {
        "name": "Eve",
        "parent": ""
    },
    {
        "name": "qasim",
        "parent": "Eve"
    },
    {
        "name": "Mesam",
        "parent": "qasim"
    },
    {
        "name": "Mahum Ali",
        "parent": "qasim"
    },
    {
        "name": "ansar",
        "parent": "Eve"
    },
    {
        "name": "ismail",
        "parent": "ansar"
    },
    {
        "name": "enos",
        "parent": "ansar"
    },
    {
        "name": "Abel",
        "parent": "Eve"
    },
    {
        "name": "Awan",
        "parent": "Eve"
    },
    {
        "name": "Azura",
        "parent": "Awan"
    },
    {
        "name": "qasim2",
        "parent": "ismail"
    },
    {
        "name": "qasim23",
        "parent": "Abel"
    }
    ,
    {
        "name": "Mard e Mujahid",
        "parent": "Azura"
    }

]
function main(){

    table.map(table => {
        //   console.log(table.name,table.parent)
        const model = new Model({
            name: table.name,
            parent: table.parent
        })
        model.save().then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
    })
}

main()