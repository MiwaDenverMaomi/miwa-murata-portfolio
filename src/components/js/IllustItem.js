import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { debug } from './func/Func';

debug('IllustItem.js_1');
class IllustItem extends React.Component {
    constructor(props) {
        super(props);
        debug(this.props);
        debug(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        debug('IllustItem.js handleClick');
        debug(e.target);
        debug(e.target.id);
        this.props.onClickShowModal(e.target.id, 'illust');
    }

    render() {

        debug('IllustItem.js:render ');
        const { id, name, alt, scale } = this.props;
        debug(id);
        const classNamescale = ClassNames({
            'slides-l__img--portraight': scale === 'p',
            'slides-l__img--landscape': scale === 'l'
        });
        return (
            <div className="slides-l__item" onClick={this.handleClick} id={id}>
                <img src={`${process.env.PUBLIC_URL}img/${id}_1.png`} alt={alt} className={classNamescale} />
                <p className="slides-l__sub-title">{name}</p>
            </div>
        );
    }
}

// IllustItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     scale: PropTypes.string.isRequired,
//     onClickShowModal: PropTypes.func.isRequired
// }
export default IllustItem;
