import Link from "next/link";


type AppProps = {
    InitialColor: string;
    SecondColor: string;
    className: string;
}

export default function HomeL( { InitialColor, SecondColor, className}: AppProps) {
    return (
    <Link href="/">
        <div className={`${className}`}>
        <button
        className={` rounded-lg font-bold p-4 shadow-md ${InitialColor} ${SecondColor}`}
        >
            Home
        </button>
        </div>
    </Link>
    )
}

HomeL.defaultProps = { 
    InitialColor : "bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-300",
    SecondColor : "hover:from-purple-700 hover:via-violet-800 hover:to-purple-700",
    className: "",
  }