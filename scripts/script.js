let main = document.createElement("div");
main.classList.add("main");
document.body.append(main);

let square = document.createElement("div");
square.classList.add("square");
main.append(square);

let clockBoard = document.createElement("div");
clockBoard.classList.add("clockBoard");
main.append(clockBoard);

let arrayOfNumbersId = ["hourSpan", "minuteSpan", "secondSpan"];

let date = new Date();

let timeTitles = ["Hours", "Mins", "Sec"];
let timeUnit = ["hour", "minute", "second"];
let timeSpans = {};

let time = {
    [timeUnit[0]]: date.getHours(),
    [timeUnit[1]]: date.getMinutes(),
    [timeUnit[2]]: date.getSeconds()
}

for (let i = 0; i < timeUnit.length; i++) {

    let container = document.createElement("div");
    container.classList.add("hours");
    clockBoard.append(container);

    let timeValueContainer = document.createElement("div");
    container.append(timeValueContainer);

    let timeValueSpan = document.createElement("span");
    timeValueSpan.setAttribute("id", arrayOfNumbersId[i]);
    timeValueSpan.innerText = time[timeUnit[i]];
    timeValueContainer.append(timeValueSpan);

    timeSpans[timeUnit[i]] = timeValueSpan;

    let timeTitleContainer = document.createElement("div");
    container.append(timeTitleContainer);

    let timeTitleSpan = document.createElement("span");
    timeTitleSpan.innerText = timeTitles[i];
    timeTitleContainer.append(timeTitleSpan);

    if (i === timeUnit.length - 1) {
        continue;
    }

    let separator = document.createElement("div");
    separator.classList.add("separator");
    separator.innerText = ":";
    clockBoard.append(separator);

}

setInterval(() => {
    timeSpans.second.innerText = ++time.second;
    if (time.second === 60) {
        timeSpans.second.innerText = time.second = 0;
        timeSpans.minute.innerText = ++time.minute;

        if (time.minute === 60) {
            timeSpans.minute.innerText = time.minute = 0;
            timeSpans.hour.innerText = ++time.hour;

            if (time.hour === 24) {
                timeSpans.hour.innerText = time.hour = 0;
            }
        }
    }
}, 1000);

let circle = document.createElement("div");
circle.classList.add("circle");
main.append(circle);