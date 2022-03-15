import React, { DOMAttributes, HtmlHTMLAttributes, useState } from 'react';
import ClassNames from 'classnames';
import { debug } from './func/Func';
import { ModalType, WebDevType, IllustType } from '../types';

type PropsType = {
    modal: ModalType,
    works: {
        webDev: WebDevType[],
        illust: IllustType[]
    },
    onClickShowModal: (id: string, category: string) => void,
    onClickCloseModal: () => void
};
type state = {
    mainPhotoRef: any,
    body: HTMLBodyElement | null
}
class Modal extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
        this.handleSwitchPhoto = this.handleSwitchPhoto.bind(this);
        this.handlePreventScroll = this.handlePreventScroll.bind(this);
    }
    state: state = {
        mainPhotoRef: React.createRef(),
        body: document.querySelector('body'),
    }

    componentDidMount() {
        this.setState({ mainPhotoRef: React.createRef() });
        this.setState({ body: document.querySelector('body') })
    }

    handleSwitchPhoto(e: any) {
        if (this.state.mainPhotoRef !== null) {
            let mainPhotoRef = this.state.mainPhotoRef;
            const srcTarget = e.target.getAttribute('src');
            const altTarget = e.target.getAttribute('alt');
            mainPhotoRef.current.setAttribute('src', srcTarget);
            mainPhotoRef.current.setAttribute('alt', altTarget);
        }
    }

    handlePreventScroll() {
        debug('handlePreventScroll');
        const body = this.state.body;
        const ua = window.navigator.userAgent.toLowerCase();
        debug(ua);
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        if (body !== null) {
            if (this.props.modal.isModal === true) {
                body.style.paddingRight = scrollBarWidth + "px";
                body.classList.add('fixed');
            } else {
                body.classList.remove('fixed');
            }
        }
    }

    render() {
        debug('modal render ');
        debug(this.props);
        const { onClickCloseModal, modal } = this.props;
        debug(onClickCloseModal);
        debug(modal.modalCategory);

        const classNameLinks = ClassNames({
            'modal__links': modal.modalCategory === 'webDev',
            'displayNone': modal.modalCategory === 'illust'
        });

        const classNameImgContainer = ClassNames({
            'modal__img-container': modal.modalCategory === 'webDev',
            'modal-illust__img-container': modal.modalCategory === 'illust'
        });

        const classNameImgSubs = ClassNames({
            'modal__sub-imgs-wrap': modal.modalCategory === 'webDev',
            'displayNone': modal.modalCategory === 'illust'
        });

        return (
            <div className="modal" id="modal-works" onScroll={this.handlePreventScroll}>
                <div className="modal__details">
                    <button className="modal__btn-back" onClick={this.props.onClickCloseModal}>Back</button>
                    <div className={classNameLinks}><a href={modal.info.source} target="_blank"><i className="fab fa-github"></i></a></div>
                    <div className={classNameImgContainer}>
                        <div className="modal__img-main_wrap">
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_1.png`} alt={`${modal.info.alt}`} className="js-switch-img-main modal__img-main" ref={this.state.mainPhotoRef} />
                        </div>
                        <div className={classNameImgSubs}>
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_1.png`} alt={`${modal.info.alt}`} className="modal__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_2.png`} alt={`${modal.info.alt}`} className="modal__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_3.png`} alt={`${modal.info.alt}`} className="modal__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            {/* <img src={`${process.env.PUBLIC_URL}img/${modal.id}_4.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_5.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} />
                            <img src={`${process.env.PUBLIC_URL}img/${modal.id}_6.png`} alt={`${modal.info.alt}`} className="details__img-sub js-switch-img-sub" onClick={this.handleSwitchPhoto} /> */}
                        </div>
                    </div>

                    <table className="modal__table">
                        <tbody>
                            <tr><th className="modal__th">Name</th><td className="modal__td"><a href={modal.info.url} target="_blank">{modal.info.name}</a></td></tr>
                            <tr><th className="modal__th">Language/Tool</th><td className="modal__td">{modal.info.language_tools}</td></tr>
                            {modal.info.desc !== '' ? < tr ><th className="modal__th">Description</th><td className="modal__td">{modal.info.desc}</td></tr> : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Modal;
