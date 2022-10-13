import { useState } from "react";
import Title from "../../components/title/title.component";
import CharecterPopUp from "../../components/charecter-popUp-choice/charecter-popUp-choice.component";
import { CodeInput, SubmitButton, Container, PopUpBackGround, PopUpPos, PopUpPos2, Text, Close} from "./code-enterperet-page.styles";
import { PopCard } from "../../components/pop-up/pop-up.styles";

function UserCodePage({charecterSelected, setCharecterSelected, questionNum, setQuestionNum, wrongAnswerPop, setWrongAnswerPop, rightAnswerPop, setRightAnswerPop}){
    const [inputVal, setInputVal] = useState()
    
    function maxLengthCheck(object){
        if (object.target.value.length > 4) {
         object.target.value = object.target.value.slice(0, 4)
          }
        }

    function checkForAnswer(){
        if (questionNum === 0) {
            if(inputVal === "1501"){
                setRightAnswerPop(true)
                setQuestionNum(questionNum + 1)
            } else{
                setWrongAnswerPop(true)
            }
        } else if (questionNum === 1){
            if(inputVal === "1031"){
                setRightAnswerPop(true)
            } else{
                setWrongAnswerPop(true)
            }
        } else if (questionNum === 2){
            if(inputVal === "1357"){
                setRightAnswerPop(true)
                setQuestionNum(questionNum + 1)
            } else{
                setWrongAnswerPop(true)
            }
        } else if (questionNum === 3){
            if(inputVal === "6177"){
                setRightAnswerPop(true)
                setQuestionNum(questionNum + 1)
            } else{
                setWrongAnswerPop(true)
            }
        } else if (questionNum === 4){
            if(inputVal === "6750"){
                setRightAnswerPop(true)
                setQuestionNum(questionNum + 1)
            } else{
                setWrongAnswerPop(true)
            }
        } else if (questionNum === 5){
            if(inputVal === "1011"){
                setRightAnswerPop(true)
                setQuestionNum(questionNum + 1)
            } else{
                setWrongAnswerPop(true)
            }
        } else if (questionNum === 6){
            if(inputVal === "2020"){
                setRightAnswerPop(true)
                setQuestionNum(questionNum + 1)
            } else{
                setWrongAnswerPop(true)
            }
        } else if (questionNum === 7){
            if(inputVal === "6014"){
                setRightAnswerPop(true)
                setQuestionNum(questionNum + 1)
            } else{
                setWrongAnswerPop(true)
            }
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
                <CodeInput value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="number" maxLength={4} onInput={maxLengthCheck} />
                <SubmitButton onClick={checkForAnswer} >Godkend</SubmitButton>
                <PopUpBackGround active={wrongAnswerPop ? "active" : "inActive"} >
                    <PopUpPos>
                        <PopCard  height="auto">
                            {selectedCharecter.map((charecter) =>
                                <CharecterPopUp charecterSelected={charecterSelected} setCharecterSelected={setCharecterSelected} id={charecter.id} theSrc={charecter.image_front} søvnT={charecter.søvnT} søvnBehov={charecter.søvnBehov} setWrong={setWrongAnswerPop} evneForbrug={charecter.evneForbrug} />
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