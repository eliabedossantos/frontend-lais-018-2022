import { Label } from "./layout/Texts/Texts";
import { FullStar } from "./Svgs/FullStar";
import { NoStar } from "./Svgs/NoStar";
import { HalfStar } from "./Svgs/HalfStar";

export function Rating(props){
    return(
        <div className="gap-1 d-flex">
            {[1,2,3,4,5].map(item => {
                return(
                    <div key={item} className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            {parseFloat(props.rating) >= item ? <FullStar /> : parseFloat(props.rating) >= item - 0.5 ? <HalfStar /> : <NoStar />}
                        </div>
                    </div>
                );
            })}
            <Label>
                {props.rating}
            </Label>
        </div>
    );
}