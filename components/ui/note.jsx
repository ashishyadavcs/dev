import Link from "next/link";
import { openwhatsapp } from "utils/device";

const Notes = () => {
    return (
        <div className="py-2 notes">
            <div className="container text-center">
                Learn frontend one to one
                <button onClick={e => window.open(openwhatsapp())} className="text-info linkbtn">
                    join now
                </button>
            </div>
        </div>
    );
};

export default Notes;
