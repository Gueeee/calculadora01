import { ListContainer } from "./styles";

const List = ({values}) => {
    return (
        <ListContainer>
            <ul>
            {values.map(value => (
                <lu>
                {value} | 
                </lu>
            ))}
            </ul>
        </ListContainer>
    );
}

export default List;