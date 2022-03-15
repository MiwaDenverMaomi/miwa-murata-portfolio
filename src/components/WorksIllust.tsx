import React from 'react';
import PropTypes from 'prop-types';
import Works from './../container/Works';
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

debug('WorksIllust.js');
class WorksIllust extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        debug('WorksIllust.js render ');
        const IllustItems = [];
        const modal = this.props.modal.modalCategory === 'illust' ? <Works.modal /> : '';

        for (let i in this.props.works.illust) {
            IllustItems.push(<Works.illustItem key={this.props.works.illust[i].id}{...this.props.works.illust[i]} />
            );
        }

        return (
            <section className="works-illust" id="works-illustrating">
                <div className="works-illust__flags"></div>
                <h2 className="works-illust__title">ILLUSTRATIONS</h2>
                <ul className="">
                    <li className="works-illust__items">
                        <div className="works-illust__wrap">
                            {IllustItems}
                        </div>
                    </li>
                </ul>
                {modal}
            </section>
        );
    }
}

export default WorksIllust;
