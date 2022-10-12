import {useEffect, useState} from "react"

const Time = () => {
    const [time, setTime] = useState<Date>(new Date())

    const tick = () => setTime(new Date())

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => clearInterval(interval)
    })

    const day = () => {
        const m = time.getUTCMonth() + 1
        const d = time.getUTCDate()

        return m  + "月" + d + "日"
    }
    const prev = () => {
        const m = time.getUTCMonth() + 1
        const d = time.getUTCDate() - 1

        return m  + "月" + d + "日"
    }
    const hm = () => {
        const h = time.getHours()
        const m = time.getMinutes()
        const fh = h < 10 ? "0" + h : h
        const fm = m < 10 ? "0" + m : m
        return fh + ":" + fm
    }
    // .slice(2, 8)
    return <>
        <div className={"absolute left-1/2 -translate-x-1/2 top-[175px] w-[300px] text-center bg-white"}>
            <div
                className={"text-gray-700 text-4xl whitespace-nowrap font-semibold"}>
                {day()} {hm()}:{time.getSeconds()}
            </div>
        </div>

        <div className={"absolute left-[173px] top-[682px] w-[70px] text-center bg-white"}>
            <div
                className={"text-gray-700 whitespace-nowrap font-semibold"}>
                {day()}
            </div>
        </div>
    </>

}

function App() {

    return <div className={"relative"}>
        {/*<Name/>*/}
        <Time/>
        <img src={"bg.jpg"} alt={""}/>
    </div>
}

export default App
