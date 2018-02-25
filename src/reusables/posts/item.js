import { ListItem } from '../lists';
import { GREY } from '../../constants/color';

export default ListItem.extend`
  &:after {
    display: block;
    content: '';
    width: 5rem;
    height: 1px;
    margin: 23px auto;
    background-color: ${GREY};
  };
  list-style-type: none;
`;
