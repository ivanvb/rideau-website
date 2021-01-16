export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

export function getHumanDate(date) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const dayPostfix = {
        1: "st",
        2: "nd",
        3: "rd",
    }

    const day = date.getDate()
    const dayOfWeek = date.getDay()
    const year = date.getFullYear()
    const month = date.getMonth()

    return `${days[dayOfWeek]}, ${months[month]} ${day}${
        dayPostfix[day] || "th"
    }, ${year}`
}
