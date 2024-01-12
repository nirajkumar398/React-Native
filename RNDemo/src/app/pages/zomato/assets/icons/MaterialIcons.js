import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const RocketIcon = () => <Icon name="rocket" size={30} color="#900" />;
export const BookmarkIcon = () => <Icon name="bookmark-outline" size={30} color="black" />;
export const ShareIcon = ({color, style, size=30}) => <Icon name="share-outline" size={size} color={color || "black"} {...style}/>;
export const BikeIcon = () => <Icon name="bike-fast" size={20} color="black" style={{backgroundColor:'#cdcdcd', padding: 4, borderRadius: 4, marginRight: 8}}/>;
export const TimeIcon = () => <Icon name="timer-outline" size={20} color="black" style={{backgroundColor:'#cdcdcd', padding: 4, borderRadius: 4, marginRight: 8}}/>;
export const OfferIcon = () => <Icon name="brightness-percent" size={20} color="blue" style={{backgroundColor:'#cdcdcd', padding: 4, borderRadius: 4, marginRight: 8}}/>;
