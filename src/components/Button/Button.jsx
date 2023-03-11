import PropTypes from 'prop-types';

export const Button = ({text, onClick}) => {
    return <button type='button' className='Button' onClick={onClick}>{text}</button>
}