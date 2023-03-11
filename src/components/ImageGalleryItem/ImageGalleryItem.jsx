import PropTypes from 'prop-types';

export const ImageGalleryItem = ({item}) => (
  <li className="ImageGalleryItem">
    <img src={item.webformatURL} alt={item.tags} className="ImageGalleryItem-image" />
  </li>
);
