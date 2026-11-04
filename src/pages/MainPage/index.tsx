import {Sidebar} from "../../components/Sidebar/Sidebar";

export default function MainPage() {
    return (
        <div className="flex h-screen p-3 bg-gray-200">
            <Sidebar />
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">Main Page</h1>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
}