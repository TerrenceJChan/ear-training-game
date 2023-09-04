import { atom, selector } from "recoil"

export const lowerBoundState = atom({
    key: "lowerBoundState",
    default: 0,
})

export const minNoteState = selector({
    key: "minNote",
    get: ({ get }) => {
        const lowerBound = get(lowerBoundState)
        return Math.max(0, 27 - lowerBound)
    },
})
