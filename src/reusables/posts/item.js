import { ListItem } from '../lists';

export default ListItem.extend`
  &:after {
    display: block;
    content: '';
    width: 5rem;
    height: 1px;
    margin: 23px auto;
    background-color: #e6e6e6;
  };
  list-style-type: none;
`;
