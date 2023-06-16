import { useState } from "react";
import AccordionData from "./AccordionData";
import { Accordion } from './AccordionType';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from "@mui/material";

interface AccordionProps {
    id: number;
    title: string;
    info: string;
}

function Question(props: AccordionProps) {
    const { title, info } = props;
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="question">
            <header>
                <h1>{title}</h1>
                <Button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <RemoveIcon /> : <AddIcon />}
                </Button>
            </header>
            {showInfo && <p>{info}</p>}
        </div>

    )

}

export default Question;