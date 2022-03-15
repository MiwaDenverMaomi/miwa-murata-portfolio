import React from 'react';
import { validRequired, validMaxLen, validEmail, ERR_004, ERR_005, debug } from './func/Func';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    handleChange(e) {
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

    handleKeyUp(e) {
        debug('handleKeyUp');
        switch (e.target.id) {
            case 'name':
                this.setState({
                    nameErrMsg: validRequired(e.target.value) || validMaxLen(50, e.target.value)
                });
                break;
            case 'title':
                this.setState({
                    titleErrMsg: validRequired(e.target.value) || validMaxLen(50, e.target.value)
                });
                break;

            case 'email':
                this.setState({
                    emailErrMsg: validRequired(e.target.value) || validEmail(e.target.value)
                });
                break;
            case 'comment':
                this.setState({
                    commentErrMsg: validRequired(e.target.value) || validMaxLen(1000, e.target.value)
                });
                break;
        }
    }

    onHandleSubmit(e) {
        e.preventDefault();
        if (this.state.nameErrMsg === '' && this.state.titleErrMsg === '' && this.state.emailErrMsg === '' && this.state.commentErrMsg === '') {
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
        const nameErrMsg = this.state.nameErrMsg ? <span className="error">{this.state.nameErrMsg}</span> : '';
        const emailErrMsg = this.state.emailErrMsg ? <span className="error">{this.state.emailErrMsg}</span> : '';
        const commentErrMsg = this.state.commentErrMsg ? <span className="error">{this.state.commentErrMsg}</span> : '';
        const titleErrMsg = this.state.titleErrMsg ? <span className="error">{this.state.titleErrMsg}</span> : '';
        const form = this.state.resultMessage ? <div className="input-group__result" >
            <p className="input-group__result-msg">{this.state.resultMessage}</p><img src={this.state.resultImage} alt="result_image" className="input-group__result-img" /></div> : <form action="https://api.staticforms.xyz/submit" method="post" className="input-group">
            <img className="memo__img1" src={`${process.env.PUBLIC_URL}img/girl3.png`} alt="girl_image_3" />
            <div className="input-group__item">
                <h3 className="input-group__title">Name</h3>
                {nameErrMsg}
                <input id="name" type="text" name="name" className="input-group__input" placeholder="First name /Last name" value={this.state.name} onChange={this.handleChange} onKeyUp={this.handleKeyUp} required />
                <h3 className="input-group__title">Title</h3>
                {titleErrMsg}
                <input id="title" type="text" name="title" className="input-group__input" placeholder="" value={this.state.title} onChange={this.handleChange} onKeyUp={this.handleKeyUp} />

                <h3 className="input-group__title">Email</h3>
                {emailErrMsg}
                <input id="email" type="text" name="email" className="input-group__input" placeholder="" value={this.state.email} onChange={this.handleChange} onKeyUp={this.handleKeyUp} required />

                <h3 className="input-group__title">Comment</h3>
                {commentErrMsg}
                <textarea id="comment" value={this.state.comment} type="text" name="comment" className="input-group__textarea" cols="10" rows="5" placeholder="" onChange={this.handleChange} onKeyUp={this.handleKeyUp} required></textarea>
            </div>
            <input className="btn-submit" type="submit" data="btn" id="send-btn" value="Send" onClick={this.onHandleSubmit} />
        </form>;
        return (
            <React.Fragment>
                <section className="memo" id="contact">
                    <span className="tape-stripe"></span>
                    <h2>CONTACT</h2>
                    {form}
                </section>
                <a href="#top"><img src={`${process.env.PUBLIC_URL}./img/back_to_top.png`} alt="Back to Top" className="note__back-to-top" /></a >
            </React.Fragment>
        );
    }
}

export default Contact;
