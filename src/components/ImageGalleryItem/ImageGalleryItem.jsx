import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item, onShowModal }) => {
  // console.log(item.largeImageURL);
  return (
    <li className="ImageGalleryItem">
      <img
        src={item.webformatURL}
        alt={item.tags}
        className="ImageGalleryItem-image"
        onClick={() => onShowModal(item)}
      />
    </li>
  );
};
