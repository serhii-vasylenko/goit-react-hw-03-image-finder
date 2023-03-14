import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import {List} from 'components/ImageGallery/ImageGallery.styled'

export const ImageGallery = ({ images, onShowModal }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem
          item={image}
          key={image.id}
          onShowModal={onShowModal}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onShowModal: PropTypes.func.isRequired,
};
