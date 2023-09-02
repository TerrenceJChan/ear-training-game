export default function Home() {
    return (
        <main className="min-h-screen flex flex-row p-24 gap-4 bg-gray-300">
            <div className="flex flex-1 bg-red-500 flex-col justify-center items-center">
                <div className="flex flex-col gap-8">
                    <button className="p-4 border border-1">Play Game</button>
                    <button className="p-4 border border-1">Points Shop</button>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center bg-red-500">
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-left"></div>
            </div>
        </main>
    )
}
