import {useEffect, useState} from "react"

const Name = () => {
    return <div className={"absolute left-6 top-28 text-gray-50 text-xl"}>
**威
    </div>
}

const Time = () => {
    const [time, setTime] = useState<Date>(new Date())

    const tick = () => setTime(new Date())

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => clearInterval(interval)
    })

    const day = () => {
        const y = time.getFullYear()
        const m = time.getMonth()
        const d = time.getDay()

        return y + "-" + m + "-" + d
    }
    const hm = () => {
        const h = time.getHours()
        const m = time.getMinutes()
        return h + ":" + m
    }
    // .slice(2, 8)
    return  <div
        className={"absolute left-1/2 -translate-x-1/2 top-48 whitespace-nowrap font-semibold"}>
        {day()} {hm()}:<span className={"text-sky-400 text-lg"}>{time.getSeconds()}</span>
    </div>
    // <span>{format(time, "yyyy-MM-dd HH:mm:SS")}</span>

}

function App() {

    return <div className={"relative"}>
        <Name/>
        <Time/>
        <img src={"bg.jpg"} alt={""}/>
    </div>
}

export default App
