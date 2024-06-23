import DiffText from "./components/DiffText";
import HiddenInput from "./components/HiddenInput";

export default function Home() {
    return (
        <div className="h-full leading-relaxed flex flex-col justify-center items-center">
            <DiffText></DiffText>
            <HiddenInput></HiddenInput>
        </div>
    );
}
