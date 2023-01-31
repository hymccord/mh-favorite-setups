import { useEffect, useState } from "react";

export default function Window({setHandleOpen}: any): JSX.Element | null {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setHandleOpen(setOpen);
    }, [setHandleOpen]);

    if (!open) {
        return null;
    }

    if (open) {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save. Then, refresh the
                        page 🔒.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }

    return <></>
}