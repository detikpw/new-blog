import { List } from '../../reusables/lists';
import media from '../../lib/media';

export default List.extend`
  ${media.largerThanPhone`
    font-size: 1em;
    line-height: 1.8em;
  `}
`;
