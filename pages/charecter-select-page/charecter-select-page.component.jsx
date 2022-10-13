import CharecterCard from "../../components/charecter/charecter.component"
import Title from "../../components/title/title.component"
import NextButton from "../../components/next-page-button/next-page-button.component"
import { Dash, ButtonPos } from "./charecter-select-page.styles.jsx"


function CharecterSelectPage({charecterSelected, setCharecterSelected}){
    const selectedCount = charecterSelected.filter((charecter) => charecter.selected).length;
    return(
        <div>
            <Title titleText="Don't Pass Out" pText="Vælg mindst 3 inden du går videre" />
            <Dash>
                {charecterSelected.map((charecter) =>
                    <CharecterCard 
                        frontCard={charecter.image_front}
                        backCard={charecter.image_back}
                        AltText={charecter.alt_text}
                        dataId={charecter.id}
                        charecterSelected={charecterSelected}
                        setCharecterSelected={setCharecterSelected}
                        isSelected={charecter.selected ? true : false}
                    />
                )}
            </Dash>
            <ButtonPos>
                {selectedCount >=3 ? <NextButton isActive="True" linkText="Næste" linkPath="/UserCodePage"/> : <NextButton isActive="False" linkText="Næste" linkPath="/"/>}
            </ButtonPos>
        </div>
    )
};

export default CharecterSelectPage;