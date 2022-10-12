import {useEffect, useState} from "react"

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

        return m + "月" + d + "日"
    }
    const hm = () => {
        const h = time.getHours()
        const m = time.getMinutes()
        const fh = h < 10 ? "0" + h : h
        const fm = m < 10? "0" + m: m
        return fh + ":" + fm
    }
    // .slice(2, 8)
    return  <div className={"absolute left-1/2 -translate-x-1/2 top-[50px] w-[300px] text-center bg-white"}>
        <div
            className={"text-4xl whitespace-nowrap font-semibold"}>
            {day()} {hm()}:{time.getSeconds()}
        </div>
    </div>
    // <span>{format(time, "yyyy-MM-dd HH:mm:SS")}</span>

}

function App() {

    return <div className={"relative"}>
        {/*<Name/>*/}
        <Time/>
        <img src={"bg.jpg"} alt={""}/>
    </div>
}

export default App
