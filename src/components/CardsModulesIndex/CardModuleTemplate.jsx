import sifilisImg from "../../assets/img/sifilis.png"
import { CardModuleIndex, TitleContainer } from "./ContainerModule.styled";
import { ButtonRounded } from "../layout/Buttons/ButtonRounded.styled";
import { Label, SubTitle } from "../layout/Texts/Texts";
import { Rating } from "../Rating";
import { TotalHour } from "../Workload";
import { TotalPeople } from "../EnrolledPeople";


export function CardModuleTemplate(props){
    return(
        <div className="w-100 py-3">
            <CardModuleIndex className="gap-2">
                <img src={props.sourceImg} alt="example img" />
                <TitleContainer>
                    <SubTitle  
                    fontSize="1.2rem" textAlign="left">
                        {props.titleModule}
                    </SubTitle>
                    <Label textAlign="start" textColor="#7dc143">
                        {props.labelInstitution}
                    </Label>
                </TitleContainer>
                <TotalPeople enrolledPeople={props.totalPeople}/>
                <TotalHour workload={props.totalHour}/>
                <Rating rating={props.rating}/>
                <ButtonRounded to={props.openModule}>
                    Ver módulo
                </ButtonRounded>
            </CardModuleIndex>
        </div>
    );
}