// Questions: https://bit.ly/3UKkWeS
// Solutions
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Question Link: shorturl.at/cu068
function timeConversion(s) {
    // Write your code here
    s = s.split(':');
    // console.log(s[2].includes('PM'))
    let hh = s[0]
    let mm = s[1]
    let ss = s[2]
    let pm = false
    let am = false

    if(ss.includes('PM')){
        pm = true
        ss = ss.replace('PM', '')
    }
    else if(ss.includes('AM')){
        am = true
        ss = ss.replace('AM', '')
    }

    if(pm){
        if(hh === '12'){
            return `${hh}:${mm}:${ss}`
        }else{
            let newTime = parseInt(hh) + 12
            return `${newTime}:${mm}:${ss}`
        }
    }else{
        if(hh === '12'){
            return `00:${mm}:${ss}`
        } else{
            return `${hh}:${mm}:${ss}`
        }
    }
}
let time = '12:01:00PM'
console.log(timeConversion(time))

// let hour = '12:01:00:pm'.split(':');
// console.log(hour)