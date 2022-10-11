import Title from "../../components/title/title.component";
import { CodeInput, SubmitButton, Container} from "./code-enterperet-page.styles";

function UserCodePage(){
    function maxLengthCheck(object){
        if (object.target.value.length > 4) {
         object.target.value = object.target.value.slice(0, 4)
          }
        }

    return(
        <div>
            <Title />
            <Container>
                <CodeInput type="number" maxLength={4} onInput={maxLengthCheck} />
                
                    <SubmitButton>Godkend</SubmitButton>
            
            </Container>
        </div>
    )
}

export default UserCodePage;