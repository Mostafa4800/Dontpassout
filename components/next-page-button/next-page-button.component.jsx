import { LinkContainer, ActiveLink } from "./next-page-button.styles"

function NextButton({linkText, linkPath, isActive}){
    return(
        <LinkContainer isActive={isActive}>
            <ActiveLink isActive={isActive} to={linkPath}>{linkText}</ActiveLink>
        </LinkContainer>
    )
}

export default NextButton