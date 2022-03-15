import React from 'react';
import ClassNames from 'classnames';
import { debug } from './func/Func';
import { WebDevType, ModalType, IllustType } from '../types';

debug('IllustItem.js_1');

type PropsType = {
    alt: string,
    category: string,
    desc: string,
    id: string,
    language_tools: string,
    name: string,
    scale: string,
    modal: ModalType,
    works: {
        illust: IllustType[],
        webDev: WebDevType[],
    },
    onClickShowModal: (id: string, category: string) => void,
    onClickCloseModal: () => void
}

class IllustItem extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {

        debug('IllustItem.js:render ');
        const { id, name, alt, scale } = this.props;
        debug(id);
        const classNamescale = ClassNames({
            'works-illust__img--portraight': scale === 'p',
            'works-illust__img--landscape': scale === 'l'
        });
        return (
            <div className="works-illust__item" onClick={(e: any) => this.props.onClickShowModal(e.target.id, 'illust')} id={id}>
                <img src={`${process.env.PUBLIC_URL}img/${id}_1.png`} alt={alt} className={classNamescale} />
                <p className="works-illust__sub-title">{name}</p>
            </div>
        );
    }
}

export default IllustItem;
