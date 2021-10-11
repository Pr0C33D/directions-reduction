// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
    const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    const result = []
    arr.forEach(item => {
        if(result.length) {
            const prevItem = result.pop()
            if(prevItem !== opposites[item]) {
                result.push(prevItem)
                result.push(item)
            }
        } else {
            result.push(item)
        }
    })
    return result
}