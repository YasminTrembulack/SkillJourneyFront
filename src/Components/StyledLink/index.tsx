import { SLink } from "./styles";

export default function StyledLink({ to,  text } : { to: string, text: string })
{
    return <SLink to={to}>{text}</SLink>
}