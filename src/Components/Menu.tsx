import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Menu() {
    return (
        <ButtonGroup>
            <Button>Import</Button>
            <Button>Save</Button>
            <Button>Reset</Button>
            <Button>Disarm</Button>
        </ButtonGroup>
    )
}