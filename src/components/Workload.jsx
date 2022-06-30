import { Label } from "./layout/Texts/Texts";
import { ClockIcon } from "./Svgs/ClockIcon";

export function TotalHour(props){
    return(
        <span className="d-flex align-items-center gap-2">
            <ClockIcon />
            <Label>
                {props.workload}
            </Label>
        </span>
    );
}