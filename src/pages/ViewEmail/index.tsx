import {Sidebar} from "../../components/Sidebar/Sidebar";
import "../../styles/animations.css";
export default function ViewEmail() {
    return (
        <div className="flex min-h-screen min-w-0 p-3 bg-animated-black-ct">
            <Sidebar />
            <main className="flex-1 p-4 w-full max-w-full overflow-x-hidden md:ml-64 bg-white rounded-2xl shadow-md">
                <span className="flex justify-center items-center w-full mb-2">
                    <h1 className="text-2xl font-bold text-gray-800">Lorem Ipsum dolor sit amet concesesu</h1>
                </span>
                <span>
                    <span className="flex flex-row gap-2">
                        <p className="">Enviado por:</p>
                        <p className="text-orange-500">fulanodetals@gmail.com</p>                     
                    </span>
                    <p className="mt-2 flex text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a lacus aliquet ante sodales venenatis. Morbi consequat, dui sit amet aliquam ultricies, arcu dolor sagittis massa, a pellentesque massa sapien quis leo. Nam eu ligula ac eros dictum cursus eget non lectus. Curabitur nec ante a nulla tincidunt iaculis at id augue. Phasellus in justo feugiat, congue velit sit amet, efficitur neque. Sed ac tincidunt massa. Integer vestibulum arcu eu nisi laoreet porttitor sit amet vulputate metus. Maecenas neque tellus, ultrices id arcu eu, vehicula pellentesque magna. Curabitur facilisis, urna in vehicula dapibus, justo arcu feugiat velit, id accumsan velit velit eu sem. Nam vitae dui sit amet orci varius elementum. Nullam leo nunc, malesuada at convallis nec, convallis quis purus.

                        Sed ac tellus non dolor semper finibus. Nunc ac iaculis est. Vestibulum placerat scelerisque elementum. Suspendisse id blandit augue. In efficitur feugiat varius. Quisque finibus nulla nec ex accumsan, ut pharetra neque sagittis. Aliquam molestie arcu non erat pretium, eget lobortis lacus finibus. Sed consequat pharetra turpis ut pulvinar. In condimentum consectetur lectus at aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer fringilla dolor id turpis lacinia vestibulum. Nullam sed sapien eu ipsum tristique euismod eu sit amet magna. Proin in diam rhoncus dolor pellentesque tristique. Fusce nec leo porta, finibus massa finibus, lobortis eros. Vivamus non euismod risus. Mauris vel elit tincidunt, pellentesque sem a, molestie ligula.
                    </p>
                </span>
                
            </main>
        </div>
    );
}