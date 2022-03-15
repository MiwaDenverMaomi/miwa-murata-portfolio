import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { debug } from './func/Func';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.mainPhotoRef = React.createRef();
        // this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSwitchPhoto = this.handleSwitchPhoto.bind(this);
        this.handlePreventScroll = this.handlePreventScroll.bind(this);
    }

    // handleCloseModal() {
    //     this.props.onClickCloseModal();
    // }

    handleSwitchPhoto(e) {
        const srcTarget = e.target.getAttribute('src');
        const altTarget = e.target.getAttribute('alt');
        this.mainPhotoRef.current.setAttribute('src', srcTarget);
        this.mainPhotoRef.current.setAttribute('alt', altTarget);
    }

    handlePreventScroll() {
        debug('handlePreventScroll');
        const body = document.querySelector('body');
        const ua = window.navigator.userAgent.toLowerCase();
        debug(ua);
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        if (this.props.modal.isModal === true) {
            body.style.paddingRight = scrollBarWidth + "px";
            body.classList.add('fixed');
        } else {
            body.classList.remove('fixed');
        }
    }

    render() {
        debug('modal render ');
        debug(this.props);
        const { onClickCloseModal, modal } = this.props;
        debug(onClickCloseModal);
        debug(modal.modalCategory);

        const classNameLinks = ClassNames({
            'details__links': modal.modalCategory === 'webDev',
            'displayNone': modal.modalCategory === 'illust'
        });

        const classNameImgContainer = ClassNames({
            'details__img-container': modal.modalCategory === 'webDev',
            'details-illust__img-container': modal.modalCategory === 'illust'
        });

        const classNameImgSubs = ClassNames({
            'details__sub-imgs-wrap': modal.modalCategory === 'webDev',
            'displayNone': modal.modalCategory === 'illust'
        });

        return (
            <div className="modal" id="modal-works" onScroll={this.handlePreventScroll}>
                <div className="details margin-0-auto">

                    <button className="btn-back" onClick={this.props.onClickCloseModal}>Back</button>
                    <div className={classNameLinks}><i className="fab fa-github"></i></div>
                    <div className={classNameImgContainer}>
                        <div className="details__img-main_wrap">
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_1.png`} alt={`${modal.info.alt}`} className="js-switch-img-main details__img-main" ref={this.mainPhotoRef} />
                        </div>
                        <div className={classNameImgSubs}>
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_1.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_2.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_3.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_4.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_5.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_6.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                        </div>
                    </div>

                    <table className="table-a margin-bottom-100">
                        <tbody>
                            <tr><th>Name</th><td><a href={modal.info.url}>{modal.info.name}</a></td></tr>
                            <tr><th>Language/Tool</th><td>{modal.info.language_tools}</td></tr>
                            <tr><th>Description</th><td>{modal.info.desc}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

// Modal.propTypes = {
//     modal: PropTypes.objectOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             modalCategory: PropTypes.string.isRequired,
//             info: PropTypes.objectOf(
//                 PropTypes.shape({
//                     alt: PropTypes.string.isRequired,
//                     name: PropTypes.string.isRequired,
//                     language_tools: PropTypes.string.isRequired,
//                     desc: PropTypes.string.isRequired
//                 }).isRequired
//             ).isRequired,
//         })).isRequired,
//     onClickCloseModal: PropTypes.func.isRequired
// };

export default Modal;
