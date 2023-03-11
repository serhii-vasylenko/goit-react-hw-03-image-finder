import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';

import { fetchImages } from 'services/image-api';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    loading: false,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: 'pending' });

      fetchImages(this.props.query, this.state.page).then(data => {
        console.log(data.hits[0]);
        console.log(data.totalHits);
        this.setState({
          images: data.hits,
          status: 'resolved',
          page: this.state.page + 1,
        });
      });
      // .finally(this.setState({ status: 'idle' }));
    }

    // if (prevProps.query !== this.props.query) {
    //   this.setState({ status: 'pending' });
    //   this.fetchImages(this.props.query)
    //     .then(data => {
    //       console.log(data.hits[0]);
    //       console.log(data.totalHits);
    //       this.setState({
    //         images: data.hits,
    //         status: 'resolved',
    //       });
    //     })
    //     // .finally(this.setState({ status: 'idle' }));
    // }
  }

  fetchImages = async query => {
    const BASE_URI = 'https://pixabay.com/api';
    const params = new URLSearchParams({
      key: '32503099-d9dd46ceec4182b992252d5d9',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: this.state.page,
    });

    const uri = `${BASE_URI}/?${params}&q=${encodeURIComponent(query)}`;
    console.log(uri);

    const response = await axios.get(uri);
    console.log(response);
    return response.data;
  };

  render() {
    const { images, loading, status } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery">
            {images.map(image => (
              <ImageGalleryItem item={image} key={image.id} />
            ))}
          </ul>
          <Button
            text="Load More"
            onClick={() => {
              fetchImages(this.props.query, this.state.page).then(data => {
                console.log(this.state.images);
                this.setState(state => ({
                  images: [...state.images, ...data.hits],
                  status: 'resolved',
                  page: this.state.page + 1,
                }));
              });
            }}
          />
        </>
      );
    }
  }
}
