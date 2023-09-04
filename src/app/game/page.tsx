"use client"

import chooseTwoNotes from "@/utils/chooseTwoNotes"

export default function Game() {
    return (
        <main className="min-h-screen flex p-24 gap-4 bg-gray-300">
            <button onClick={() => chooseTwoNotes(30, 40, "up")}>
                Play Note
            </button>
        </main>
    )
}
