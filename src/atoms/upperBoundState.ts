import { atom, selector } from "recoil"

export const upperBoundState = atom({
    key: "upperBoundState",
    default: 0,
})

export const maxNoteState = selector({
    key: "maxNote",
    get: ({ get }) => {
        const upperBound = get(upperBoundState)
        return Math.min(82, 51 + upperBound)
    },
})
