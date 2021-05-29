//Array with some profile examples (if all profiles aren't with the same properties, the program won't work)
var profiles = [
    {
        "name" : "Lucas César Freitas",
        "age" : 16,
        "nationality" : "Brazil",
        "interests" : ["Physics", "Math", "Programming"],
    },

    {
        "name" : "Elon Reeve Musk",
        "age" : 49,
        "nationality" : "South Africa",
        "interests" : ["Space", "Rockets", "Electric Cars"],
    },

    {
        "name" : "Kurt Donald Cobain",
        "age" : 27,
        "nationality" : "United States of America",
        "interests" : ["Rock", "Grunge", "Vodka"],
    },

    {
        "name" : "Bruce Thomas Wayne",
        "age" : 34,
        "nationality" : "United States of America",
        "interests" : ["Money", "Expensive Cars", "Batman"],
    },

    {
        "name" : "Paul Bruce Dickinson",
        "age" : 62,
        "nationality" : "United Kingdom",
        "interests" : ["Iron Maiden", "Singing", "Music"],
    },

    {
        "name" : "Harry James Potter",
        "age" : 17,
        "nationality" : "United Kingdom",
        "interests" : ["Magic", "Owls", "Flying Brooms"],
    },

    {
        "name" : "Harry Edward Styles",
        "age" : 27,
        "nationality" : "United Kingdom",
        "interests" : ["One Direction", "dont know this guy", "i really do not know him"],
    },
    
    {
        "name" : "Albert Einstein",
        "age" : 76,
        "nationality" : "Germany",
        "interests" : ["Physics", "Violin", "Math"],
    },

    {
        "name" : "Will Smith",
        "age" : 52,
        "nationality" : "United States of America",
        "interests" : ["Comedy", "Dogs", "Acting"],
    },
]

//Checks if there is a certain property inside an object
function checkProp(obj, prop){
    return obj.hasOwnProperty(prop)
}

//Searches the profiles that matches the informations given
function searchProfile (array, prop, value){
    var profilesFound = []
    
    //If the property exists...
    if(checkProp(array[0], prop))
        //Check that property on each object inside the given array
        for (c = 0 ; c < array.length ; c++){

            //Instructions if the property is an object
            if (typeof(array[c][prop]) == "object"){
                for (j = 0 ; j < array[c].interests.length ; j++)
                    if (array[c].interests[j].toLowerCase() == value.toLowerCase())
                        profilesFound +=  JSON.stringify(array[c])

            //Instructions if the property is a number
            } else if (typeof(array[c][prop]) == "number"){
                if (array[c][prop] == value)
                    profilesFound += JSON.stringify(array[c])
            
            //Instructions if the property is a string
            } else { 
                if (array[c][prop].toLowerCase().includes(value.toLowerCase()))
                    profilesFound += JSON.stringify(array[c])
            }
        
        }
    
    //If at least one profile matches the given informations
    if (profilesFound.length != 0)
        return profilesFound

    //If there isn't any profile with the given informations
    return "User not found"
}

console.log(searchProfile(profiles, "name", "bRuCe"))