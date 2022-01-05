function myEach(collection, callback){
    for(let accessor in collection){
      callback(collection[accessor])
    }
    return collection;
  }


  function myMap(collection, callback){
      let modifiedArray = []
      for( let accessor in collection){
        modifiedArray.push(callback(collection[accessor]))
      }

      return modifiedArray
  }

  function myReduce(collection, callback, acc){
    if (Array.isArray(collection)){
        let copy = [...collection]
        acc = acc || copy.shift();
        for(let accessor in copy){
            acc = callback(acc, copy[accessor], copy)
        }
        return acc;  
    }
    let newCollection = []
    for(let key in collection){
        newCollection.push(collection[key])
    }
    acc = acc || newCollection.shift();
    for(let accessor in newCollection){
        acc = callback(acc, newCollection[accessor], newCollection)
    }
    return acc;   
  }

function myFind(collection, predicate){
    for(let accessor in collection){
        let element = collection[accessor]
        if(predicate(element) === true){
            return element
        }
    }
}

function myFilter(collection, predicate){
    let selectedArr = []
    for(let accessor in collection){
        let element = collection[accessor]
        if(predicate(element) === true){
            selectedArr.push(element)
        }
    }
    return selectedArr
}

function mySize(collection){
    return Object.keys(collection).length

}

function myFirst(array, n = 1){
    return n > 1 ? array.slice(0, n) : array[0]
}

function myLast(array, n = 1){
    return n > 1 ? array.slice(-n) : array[array.length - n]
 }
 

//BONUS
function mySortBy(array, callback){

}
//another BONUS
function myFlatten(array, [shallow], newArr=[]){

}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    let allValues = []
    for(let key in object){
      allValues.push(object[key])
    }
    return allValues;
}