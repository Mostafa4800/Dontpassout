import Title from "../../components/title/title.component";
import CharecterPopUp from "../../components/charecter-popUp-choice/charecter-popUp-choice.component";
import { CodeInput, SubmitButton, Container, PopUpBackGround, PopUpPos, PopUpPos2, Text, Close} from "./code-enterperet-page.styles";
import { PopCard } from "../../components/pop-up/pop-up.styles";

function UserCodePage({charecterSelected, setCharecterSelected, questionNum, setQuestionNum, wrongAnswerPop, setWrongAnswerPop, rightAnswerPop, setRightAnswerPop}){
    function maxLengthCheck(object){
        if (object.target.value.length > 4) {
         object.target.value = object.target.value.slice(0, 4)
          }
        }

    function checkForAnswer(){
        if (questionNum < 1) {
            setRightAnswerPop(true)
            setQuestionNum(questionNum + 1)
        } else {
            setWrongAnswerPop(true)
        }
    }

    function closePop(){
        setRightAnswerPop(false)
    }
    
    const selectedCharecter = charecterSelected.filter((charecter) => charecter.selected);

    return(
        <div>
            <Title />
            <Container>
                <CodeInput type="number" maxLength={4} onInput={maxLengthCheck} />
                <SubmitButton onClick={checkForAnswer} >Godkend</SubmitButton>
                <PopUpBackGround active={wrongAnswerPop ? "active" : "inActive"} >
                    <PopUpPos>
                        <PopCard  height="auto">
                            {selectedCharecter.map((charecter) =>
                                <CharecterPopUp theSrc={charecter.image_front} søvnT={charecter.søvnT} søvnBehov={charecter.søvnBehov} setWrong={setWrongAnswerPop} evneForbrug={charecter.evneForbrug} />
                            )}
                        </PopCard>
                    </PopUpPos>
                </PopUpBackGround>
                <PopUpBackGround active={rightAnswerPop ? "active" : "inActive"}>
                    <PopUpPos2>
                        <PopCard>
                            <Text>Du svarede rigtigt! Tag nu næste kort.</Text>
                            <Close onClick={closePop} >&times;</Close>
                        </PopCard>
                    </PopUpPos2>
                </PopUpBackGround>
            </Container>
        </div>
    )
}

export default UserCodePage;