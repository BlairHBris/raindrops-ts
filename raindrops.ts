export function convert(number: number) {
    let string = ""

    if(number % 3 == 0) {
        string += "Pling"
    }
    
    if(number % 5 == 0){
        string += "Plang"
    }

    if(number % 7 == 0){
        string += "Plong"
    }

    if(string.length > 0){
        return string
    } else {
        return number.toString()
    }
}
