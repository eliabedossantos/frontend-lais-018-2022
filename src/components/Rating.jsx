import { Label } from "./layout/Texts/Texts";
import { FullStar } from "./Svgs/FullStar"

export function Rating(props){
    return(
        <div className="gap-1 d-flex">
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <Label>
                {props.TotalRating}
            </Label>
        </div>
    );
}