import React from 'react';
import Works from './../container/Works';
import { debug } from './func/Func';
import { ModalType, WebDevType, IllustType } from '../types';

debug('WorksWebDev.js');

type PropsType = {
    modal: ModalType,
    works: {
        webDev: WebDevType[],
        illust: IllustType[]
    },
    onClickShowModal: (id: string, category: string) => void,
    onClickCloseModal: () => void
};

class WorksWebDev extends React.Component<PropsType> {
    constructor(props: PropsType) {
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
            <section className="works-webdev" id="works-webdev">
                <h2 className="works-webdev__title">WEB DEVELOPMENT</h2>
                <ul>
                    <li className="works-webdev__items">
                        <div className="works-webdev__wrap">
                            {WebDevItems}
                        </div>
                    </li>
                </ul>
                {modal}
            </section>
        );
    }

}

export default WorksWebDev;
