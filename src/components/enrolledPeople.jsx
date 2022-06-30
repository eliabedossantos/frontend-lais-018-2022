import { Label } from "./layout/Texts/Texts";
import { PeopleIcon } from "./Svgs/PeopleIcon";

export function TotalPeople(props){
    return(
        <span className="d-flex align-items-center gap-2">
            <PeopleIcon />
            <Label>
                {props.enrolledPeople}
            </Label>
        </span>
    );
}