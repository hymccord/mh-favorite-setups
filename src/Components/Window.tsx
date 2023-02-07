import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Menu from './Menu';

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
            <Box>
                <Menu />
            </Box>
        );
    }

    return <></>
}