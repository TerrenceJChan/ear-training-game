import { soundMap } from "@/utils/soundMap"

export default function chooseTwoNotes(
    min: number,
    max: number,
    direction: "up" | "down" | "both"
) {
    const firstNote = Math.floor(Math.random() * (max - min + 1) + min)
    const secondNote = (): number => {
        const num = Math.floor(Math.random() * (max - min + 1) + min)
        if (num === firstNote) {
            return secondNote()
        } else {
            return num
        }
    }

    const firstAudio = new Audio(`./sounds/${soundMap[firstNote].name}.mp3`)
    const secondAudio = new Audio(`./sounds/${soundMap[secondNote()].name}.mp3`)

    if (direction === "both") {
        const x = Math.floor(Math.random() * 2) == 0
        if (x) {
            firstAudio.play()
            setTimeout(() => {
                secondAudio.play()
            }, 3000)
        } else {
            secondAudio.play()
            setTimeout(() => {
                firstAudio.play()
            }, 3000)
        }
    } else if (direction === "up") {
        firstAudio.play()
        setTimeout(() => {
            secondAudio.play()
        }, 3000)
    } else if (direction === "down") {
        secondAudio.play()
        setTimeout(() => {
            firstAudio.play()
        }, 3000)
    }
}
