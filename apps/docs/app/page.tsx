import DiffText from "./components/DiffText";
import HiddenInput from "./components/HiddenInput";

export default function Home() {
    return (
        <div className=" leading-relaxed flex flex-col justify-center items-center">
            <span className="md:text-xl text-white font-mono pb-10">
                Start typing to see <em>typer-diff</em> in action.
            </span>
            <DiffText></DiffText>
            <HiddenInput></HiddenInput>
        </div>
    );
}
