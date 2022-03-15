import React from 'react';
import PropTypes from 'prop-types';
import Works from './../container/Works';
import { debug } from './func/Func';

debug('WorksIllust.js');
class WorksIllust extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debug('WorksIllust.js render ');
        const IllustItems = [];
        const modal = this.props.modal.modalCategory === 'illust' ? <Works.modal /> : '';
        debug(this.props.works.illust);
        debug(Works.illust);

        for (let i in this.props.works.illust) {
            IllustItems.push(<Works.illustItem key={this.props.works.illust[i].id}{...this.props.works.illust[i]} />
            );
        }
        debug(IllustItems);
        return (
            <section className="slides-l" id="works-illustrating">
                <div className="flag"></div>
                <h2 className="">WORKS -Illustrating-</h2>
                <ul className="">
                    <li className="slides-l__items">
                        <div className="slides-l__wrap">
                            {IllustItems}
                        </div>
                    </li>
                </ul>
                {modal}
            </section>
        );
    }
}
// WorksIllust.propTypes = {
//     modal: PropTypes.objectOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
//     works: PropTypes.objectOf(
//         PropTypes.shape({
//             illust: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired

// };
export default WorksIllust;
