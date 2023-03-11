import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    query: '',
  };

  hadleFormSubmit = query => {
    console.log(query);
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.hadleFormSubmit} />
        <ImageGallery query={this.state.query} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </>
    );
  }
}
