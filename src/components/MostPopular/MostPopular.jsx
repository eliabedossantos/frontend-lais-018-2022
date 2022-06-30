import sifilisImg from "../../assets/img/sifilis.png"
import { CardModuleIndex } from "../CardModulesIndex/ContainerModuleIndex";
import { ButtonRounded } from "../layout/Buttons/ButtonRounded.styled";
import { Label, SubTitle } from "../layout/Texts/Texts";
import { Rating } from "../Rating";
import { TotalHour } from "../TotalHour";
import { TotalPeople } from "../TotalPeople";

export function MostPopular(){
    
    return(
        <div className="w-100 py-3">
            <CardModuleIndex className="gap-2">
                <img src={sifilisImg} alt="" />
                <div className="w-50">
                    <SubTitle fontSize="1.2rem" textAlign="left">LAIS / EBSERH
                    Sífilis: Aspectos Clínicos e Diagnóstico Diferencial
                    </SubTitle>
                    <Label textColor="#7dc143">
                        LAIS / EBSERH
                    </Label>
                </div>
                <TotalPeople TotalPeople={27.645}/>
                <TotalHour TotalHour={"4h30min"}/>
                <Rating TotalRating={"5,0"}/>
        
            </CardModuleIndex>
        </div>
    );
}