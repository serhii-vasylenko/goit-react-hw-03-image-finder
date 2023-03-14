import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{marginLeft: 'auto', marginRight: 'auto', display: 'flex'}}
      wrapperClass="dna-wrapper"
    />
  );
};
