import React from 'react';

type PropsType = {
    alt: string,
    category: string,
    desc: string,
    id: string,
    language_tools: string,
    name: string,
    url: string,
    onClickShowModal: (id: string, category: string) => void,
    onClickCloseModal: () => void
};

class WebDevItem extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }
    render() {
        const { id, name, alt } = this.props;
        return (
            <div className="works-webdev__item" onClick={(e: any) => this.props.onClickShowModal(e.target.id, 'webDev')
            } id={id} >
                <img src={`${process.env.PUBLIC_URL}img/${id}_1.png`} alt={alt} className="works-webdev__img--landscape" />
                <p className="works-webdev__sub-title" > {name} </p>
            </div>
        );
    }
}

export default WebDevItem;
