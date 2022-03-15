
import { debug } from './../components/func/Func';

debug('Reducers/Task.js');

const initialState = {
    modal: {
        id: '',
        modalCategory: '',
        info: {
            alt: 'No-image',
            name: 'No Name',
            language_tools: 'None',
            desc: 'No-description'
        }
    },
    works: {
        webDev: [
            { id: 'web_1', alt: 'Application1:Weather App', name: 'Weather App', language_tools: 'React', desc: "Type the location to get the weather.", category: 'webDev', url: 'https://loving-tereshkova-364082.netlify.app/', source: '' },
            { id: 'web_2', alt: 'Application2:Pokemon Search App', name: 'Weather App', language_tools: 'React', desc: 'Select the pokemon name that you want to refer.', category: 'webDev', url: 'https://confident-elion-b670b4.netlify.app/', source: '' },
            { id: 'web_3', alt: 'Application3:Video Search App', name: 'Video Search App', language_tools: 'React', desc: 'Type keywords to search YouTube videos.', category: 'webDev', url: 'https://romantic-easley-d781f7.netlify.app/' },
            { id: 'web_4', alt: 'Application4:React Redux Calculator', name: 'React Redux Calculator', language_tools: 'React/Redux', desc: 'A simple calculator. Made it to know how to use redux.', category: 'webDev', url: 'https://xenodochial-lichterman-5c894d.netlify.app/', source: '' },
            { id: 'web_5', alt: 'Website:Hair Sallon', name: 'Sallon Inogashira', language_tools: 'HTML/CSS/JavaScript', desc: 'An website of a non-exist hair sallon in Japan.', category: 'webDev', url: 'https://elegant-neumann-aec1f1.netlify.app/', source: '' },
        ],
        illust: [
            { id: 'ill_1', alt: 'Illustration1:A Lady in a Red Dress', name: 'A Lady in a Red Dress', language_tools: 'Illustrator', desc: 'A Illutration used for a flyer for my friend in China. She married an European and left for Itally. She is friendly, happy and likes wines and meats. I tried to draw who this is so that participants to the party recognizes her easily.', category: 'illust', scale: 'p' }, { id: 'ill_2', alt: 'Illustration2:A Lady Taking Like a parakeet', name: 'A Lady Taking Like a Parakeet', language_tools: 'Illustrator', desc: 'My friend who runs her restaurant in China, ordered her staffs to remake her lemon sour because it was too sour. She is ambitious and holds multiple professional licenses(hairstylist, chef, and so on).', category: 'illust', scale: 'p' },
            { id: 'ill_3', alt: 'Illustration3:A Cooking Guy', name: 'A Cooking Guy', language_tools: 'ibis Paint', desc: 'An illustration that I applyed with for a job offer.', category: 'illust', scale: 'l' },
            { id: 'ill_4', alt: "Illustraion4:My Cousin's Marriage", name: 'Wedding Card', language_tooels: 'Illustrator', desc: 'I drew them just like in Disney Princess -style so that they will be together happily ever after.', category: 'illust', scale: 'l' },
            { id: 'ill_5', alt: 'Illustration5:A Young Female Secretary', name: 'A young Female Secretary', language_tools: 'ibis Paint', desc: "Drew with an American comic book taste.", category: 'illust', scale: 'l' },
        ]
    }
}

export default function task(state = initialState, action) {
    switch (action.type) {
        case 'SHOWMODAL': {
            debug('reducers/Task.js:SHOWMODAL');
            debug(action);
            debug(action.type);
            debug(action.id);
            debug(action.category);
            const workcat = action.category;
            const workid = action.id;
            debug(workcat);
            debug(workid);
            debug(state);
            debug(state.works.webDev[1]);
            debug(state.works.webDev[1].id);
            debug(state.works[action.category]);


            return Object.assign({}, state, {
                modal: {
                    id: action.id,
                    modalCategory: action.category,
                    info: state.works[action.category].filter((x) => {
                        debug(x);
                        debug(x.id);
                        debug(x[0]);
                        if (x.id === action.id) {
                            return Object.assign({}, x);
                        }
                    })[0]
                }
            });
            break;
        }
        case 'CLOSEMODAL': {
            debug('reducers/Task.js:CLOSEMODAL');
            debug(action.type);
            return Object.assign({}, state, {
                modal: {
                    id: 0,
                    modalCategory: '',
                    info: {
                        alt: 'No-image',
                        name: 'No Name',
                        language_tools: 'None',
                        desc: 'No-description'
                    }
                }
            });
        }
        default: debug('reducers/Task.js SWHOMODAL return state');
            return state;
    }

}
