import React from 'react';
import PropTypes from 'prop-types';
import { debug } from './func/Func';


class WebDevItem extends React.Component {
    constructor(props) {
        super(props);
        debug(props);
    }

    render() {
        const { id, name, alt } = this.props;

        return (
            <div className="panels__item" onClick={e => this.props.onClickShowModal(e.target.id, 'webDev')} id={id}>
                <img src={`${process.env.PUBLIC_URL}img/${id}_1.png`} alt={alt} className="panels__img--landscape" />
                <p className="panels__sub-title">{name}</p>
            </div>
        );
    }
}

// WebDevItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     onClickShowModal: PropTypes.func.isRequired
// }

export default WebDevItem;
