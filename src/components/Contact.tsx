import React, { MouseEvent } from 'react';
import { validRequired, validMaxLen, validEmail, debug } from './func/Func';

class Contact extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    state = {
        name: '',
        email: '',
        title: '',
        comment: '',
        nameErrMsg: '',
        titleErrMsg: '',
        emailErrMsg: '',
        commentErrMsg: '',
        commonErrMsg: '',
        resultMessage: '',
        resultImage: ''
    };

    handleChange(e: any) {
        debug(e.target);
        switch (e.target.id) {
            case 'name':
                this.setState({
                    name: e.target.value
                });
                break;
            case 'title':
                this.setState({
                    title: e.target.value
                });
                break;
            case 'email':
                this.setState({
                    email: e.target.value
                });
                break;
            case 'comment':
                this.setState({
                    comment: e.target.value
                });
                break;
        }
        debug(this.state.name);
        debug(this.state.title);
        debug(this.state.email);
        debug(this.state.comment);
    }

    handleKeyUp(e: any) {
        debug('handleKeyUp');
        this.setState({ nameErrMsg: '' });
        this.setState({ titleErrMsg: '' });
        this.setState({ emailErrMsg: '' });
        this.setState({ commentErrMsg: '' });
    }

    onHandleSubmit(e: any) {
        e.preventDefault();
        //validatoin

        let nameValidErr: string = '';
        let titleValidErr: string = '';
        let emailValidErr: string = '';
        let commentValidErr: string = '';
        //validation:name
        const nameRequiredResult: string = validRequired(this.state.name);
        if (nameRequiredResult === '') {
            const nameMaxLenResult: string = validMaxLen(50, this.state.name);
            if (nameMaxLenResult === '') {
                nameValidErr = '';
                this.setState({ nameErrMsg: '' });
            } else {
                nameValidErr = nameMaxLenResult;
                this.setState({ nameErrMsg: nameMaxLenResult });
            }

        } else {
            nameValidErr = nameRequiredResult;
            this.setState({ nameErrMsg: nameRequiredResult });
        }
        //validation:title
        const titleRequiredResult: string = validRequired(this.state.title);
        if (titleRequiredResult === '') {
            const titleMaxLenResult: string = validMaxLen(100, this.state.title);
            if (titleMaxLenResult === '') {
                titleValidErr = '';
                this.setState({ titleErrMsg: '' });
            } else {
                titleValidErr = titleMaxLenResult;
                this.setState({ titleErrMsg: titleMaxLenResult });
            }

        } else {
            titleValidErr = titleRequiredResult;
            this.setState({ titleErrMsg: titleRequiredResult });
        }

        //validation:email
        const emailRequiredResult: string = validRequired(this.state.email);
        if (emailRequiredResult === '') {
            const emailMaxLenResult: string = validMaxLen(100, this.state.email);
            if (emailMaxLenResult === '') {
                const emailValidResult: string = validEmail(this.state.email);
                if (emailValidResult === '') {
                    emailValidErr = '';
                    this.setState({ emailErrMsg: '' });
                } else {
                    emailValidErr = emailValidResult;
                    this.setState({ emailErrMsg: emailValidResult });
                }
            } else {
                titleValidErr = emailMaxLenResult;
                this.setState({ titleErrMsg: emailMaxLenResult });
            }

        } else {
            emailValidErr = emailRequiredResult;
            this.setState({ emailErrMsg: emailRequiredResult });
        }
        //valid comment
        const commentRequiredResult: string = validRequired(this.state.comment);
        if (commentRequiredResult === '') {
            const commentMaxLenResult: string = validMaxLen(2000, this.state.email);
            if (commentMaxLenResult === '') {
                commentValidErr = '';
                this.setState({ commentErrMsg: '' });
            } else {
                commentValidErr = '';
                this.setState({ commentErrMsg: commentMaxLenResult });
            }

        } else {
            commentValidErr = commentRequiredResult;
            this.setState({ commentErrMsg: commentRequiredResult });
        }

        if (nameValidErr === '' && titleValidErr === '' && emailValidErr === '' && commentValidErr === '') {
            debug('No error');
            fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    subject: 'Contacting',
                    message: "Title:" + this.state.title + "<br/>" + "Message:" + this.state.comment,
                    replyTo: '@',
                    accessKey: process.env.REACT_APP_ACCESS_KEY
                }),
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    data.success ? this.setState({
                        resultMessage: "Thank you for your inquiry!We will reply in a few days.",
                        resultImage: `${process.env.PUBLIC_URL}img/email_sent.png`
                    }) : this.setState({
                        resultMessage: "Something went wrong...Email was not sent.",
                        resultImage: `${process.env.PUBLIC_URL}img/email_fail.png`
                    });
                })
                .catch(error => {
                    this.setState({
                        resultMessage: "An error occurred! Please try again!",
                        resultImage: `${process.env.PUBLIC_URL}img/email_fail.png`
                    });
                });
        }
    }

    render() {
        debug('render');
        const nameErrMsg = this.state.nameErrMsg !== '' ? <span className="contact__form-error">{this.state.nameErrMsg}</span> : '';
        const emailErrMsg = this.state.emailErrMsg !== '' ? <span className="contact__form-error">{this.state.emailErrMsg}</span> : '';
        const commentErrMsg = this.state.commentErrMsg !== '' ? <span className="contact__form-error">{this.state.commentErrMsg}</span> : '';
        const titleErrMsg = this.state.titleErrMsg !== '' ? <span className="contact__form-error">{this.state.titleErrMsg}</span> : '';
        const form = this.state.resultMessage ? <div className="contact__result" >
            <p className="contact__result-msg">{this.state.resultMessage}</p><img src={this.state.resultImage} alt="result_image" className="contact__result-img" /></div> : <form action="https://api.staticforms.xyz/submit" method="post" className="">
            <img className="contact__img1" src={`${process.env.PUBLIC_URL}img/girl3.png`} alt="girl_image_3" />
            <div className="contact__item">
                <h3 className="contact__input-title">Name</h3>
                {nameErrMsg}
                <input id="name" type="text" name="name" className="contact__input" placeholder="First name /Last name" value={this.state.name} onChange={this.handleChange} onKeyUp={this.handleKeyUp} required />
                <h3 className="contact__input-title">Title</h3>
                {titleErrMsg}
                <input id="title" type="text" name="title" className="contact__input" placeholder="" value={this.state.title} onChange={this.handleChange} onKeyUp={this.handleKeyUp} />

                <h3 className="contact__input-title">Email</h3>
                {emailErrMsg}
                <input id="email" type="text" name="email" className="contact__input" placeholder="" value={this.state.email} onChange={this.handleChange} onKeyUp={this.handleKeyUp} required />

                <h3 className="contact__input-title">Comment</h3>
                {commentErrMsg}
                <textarea id="comment" value={this.state.comment} name="comment" className="contact__textarea" placeholder="" onChange={this.handleChange} onKeyUp={this.handleKeyUp} required></textarea>
            </div>
            <input className="contact__btn-submit" type="submit" id="send-btn" value="Send" onClick={this.onHandleSubmit} />
        </form>;
        return (
            <React.Fragment>
                <section className="contact" id="contact">
                    <span className="contact__tape"></span>
                    <h2 className="contact__title">CONTACT</h2>
                    {form}
                    <a href="#top"><img src={`${process.env.PUBLIC_URL}./img/back_to_top.png`} alt="Back to Top" className="contact__back-to-top" /></a >
                </section>

            </React.Fragment>
        );
    }
}

export default Contact;
