import Title from "../../components/title/title.component"
import NextButton from "../../components/next-page-button/next-page-button.component"
import { ButtonPos } from "./start-page.styles"

function StartPage(){
    return(
        <div>
            <Title titleText="Don't Pass Out." pText="Spil imens du har det sjovt!"/>
            <ButtonPos>
                <NextButton isActive="True" linkPath="/CharecterSelect" linkText="Start" />
            </ButtonPos>
        </div>
    )
}

export default StartPage