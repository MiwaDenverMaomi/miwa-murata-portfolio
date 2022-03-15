import React from 'react';
import PropTypes from 'prop-types';
import Works from './../container/Works';
import { debug } from './func/Func';

debug('WorksWebDev.js');

class WorksWebDev extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        debug('WorksWebDev.js render ');
        debug(this.props.modal.modalCategory);
        const modal = this.props.modal.modalCategory === 'webDev' ? <Works.modal /> : '';
        let WebDevItems = [];

        for (let i in this.props.works.webDev) {
            WebDevItems.push(
                <Works.webDevItem key={this.props.works.webDev[i].id}
                    {...this.props.works.webDev[i]} />
            );
        }
        return (
            <section className="panels" id="works-webdev">
                <h2 className="">WORKS -WEB DEV-</h2>
                <ul className="">
                    <li className="panels__items">
                        <div className="panels__wrap">
                            {WebDevItems}
                        </div>
                    </li>
                </ul>
                {modal}
            </section>
        );
    }

}
// WorksWebDev.propTypes = {
//     modal: PropTypes.objectOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             modalCategory: PropTypes.string.isRequired,
//         }).isRequired

//     ).isRequired,
//     works: PropTypes.objectOf(
//         PropTypes.shape({
//             webDev: PropTypes.objectOf({
//                 id: PropTypes.string.isRequired
//             }).isRequired,
//         }).isRequired
//     ).isRequired,
//     onClickShowModal: PropTypes.func.isRequired
// };

export default WorksWebDev;
