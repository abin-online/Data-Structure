const maxTwoEvents = function(events) {

    const isOverLap = (arr1, arr2)=> {
        let startTime1 = arr1[0]
        let startTime2 = arr2[0]
        let endTime1 = arr1[1]
        let endTime2 = arr2[1]
        if(startTime2 <= startTime1 <= endTime2){
            return true
        }
        if(startTime1 <= startTime2 <= endTime1){
            return true
        }
        return false
    }

    let result = []
    for(let i = 0 ; i < events.length ; i++) {
        for(let j = i + 1 ; j < events.length ; j++){
            console.log(events[i] , events[j])
            if(isOverLap(events[i], events[j])){
                console.log(events[i] , events[j])
                result.push(events[i][2] + events[j][2])
            }
        }
    }
    console.log(result)
    return Math.max(...result)
};

console.log(maxTwoEvents([[1,5,3],[1,5,1],[6,6,5]]))