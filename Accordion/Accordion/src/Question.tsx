import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from "@mui/material";
import { Wrapper } from "./App.styles";

interface AccordionProps {
    id: number;
    title: string;
    info: string;
}

function Question(props: AccordionProps) {
    const { title, info } = props;
    const [showInfo, setShowInfo] = useState(false);

    return (
        <Wrapper>
            <div className="question">
                <header>
                    <h4>{title}</h4>
                    <Button className="btn" onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? <RemoveIcon /> : <AddIcon />}
                    </Button>
                </header>
                {showInfo && <p>{info}</p>}
            </div>
        </Wrapper>
    )

}

export default Question;