"use client"

import { useRecoilValue } from "recoil"

import { maxNoteState } from "@/atoms/upperBoundState"
import chooseTwoNotes from "@/utils/chooseTwoNotes"

export default function Game() {
    // const [upperBound, setUpperBound] = useRecoilState(upperBoundState)
    const maxNote = useRecoilValue(maxNoteState)
    return (
        <main className="min-h-screen flex p-24 gap-4 bg-gray-300">
            <button onClick={() => chooseTwoNotes(30, 40, "up")}>
                Upper Bound = {maxNote}
            </button>
        </main>
    )
}
