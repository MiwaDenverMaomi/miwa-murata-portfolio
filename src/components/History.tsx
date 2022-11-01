import React from 'react';
import { debug } from './func/Func';

debug('History.js');
class History extends React.Component {
    render() {
        return (
            <>
                <section className="history" id="history">
                    <div className="history__lace-up"></div>
                    <h2 className="history__title">M</h2>
                    <div className="history__wrap">
                        <img src={`${process.env.PUBLIC_URL}img/self_img.png`} alt="self_image" className="history__selfimg" />
                        {/* <ul className="note__list">
                            <li className="note__item">Technical Writer/Yamagata Intec Shanghai (2010.4-2018.5)<br />
                                Worked for a Japanese data-making/publishing companey in Shanghai as a technical writer. In charge of directing the entire process including making data of operating instructions for home electric products and multilingual localization.(8 years)
                            </li>
                            <li className="note__item">ToyPlanner/Wiz.coIn charge of planning for the planning and development department at a toy company. Worked on the toys for a popular girls' anime that continues to now. (4 years)
                            </li>
                            <li className="note__item">
                                After leaving the toy company, work a part time for a companey that runs dating website while vollunteering an Non Goverment Organization, "Japan Assosiation for Refugees".
                            </li>
                            <li className="note__item">Sophia University (Japan) BA in languages in 2002.
                            </li>

                        </ul> */}
                    </div>
                </section>
            </>
        );
    }
}

export default History;
