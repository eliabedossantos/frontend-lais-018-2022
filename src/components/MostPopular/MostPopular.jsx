import sifilisImg from "../../assets/img/sifilis.png"
import { CardModuleIndex } from "../CardModulesStyled/ContainerModuleIndex";
import { SubTitle } from "../layout/Texts/Texts";

export function MostPopular(){
    return(
        <div className="w-100 py-3">
            <CardModuleIndex>
                <img src={sifilisImg} alt="" />
                <div>
                    <SubTitle>
                    Sífilis: Aspectos Clínicos e Diagnóstico Diferencial
                    </SubTitle>
                </div>
            </CardModuleIndex>
        </div>
    );
}