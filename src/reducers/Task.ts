
import { debug } from './../components/func/Func';
import { ModalType, WebDevType, IllustType, StateType, actionShowModalType } from '../types';


debug('Reducers/Task.js');

const initialState: StateType = {
    modal: {
        id: '',
        modalCategory: '',
        info: {
            alt: 'No-image',
            name: 'No Name',
            language_tools: 'None',
            desc: 'No-description',
            source: '',
            url: ''
        },
        isModal: false,

    },
    works: {
        webDev: [
            { id: 'web_1', alt: 'Application1:Weather App', name: 'Weather App', language_tools: 'React', desc: "Type the location to get the weather.", category: 'webDev', url: 'https://loving-tereshkova-364082.netlify.app/', source: 'https://github.com/MiwaDenverMaomi/react_weather_app' },
            { id: 'web_2', alt: 'Application2:Pokemon Search App', name: 'Pokemon Search App', language_tools: 'React', desc: 'Select the pokemon name to learn about its properties.', category: 'webDev', url: 'https://confident-elion-b670b4.netlify.app/', source: 'https://github.com/MiwaDenverMaomi/react-pokemon-search-app' },
            { id: 'web_3', alt: 'Application3:Video Search App', name: 'Video Search App', language_tools: 'React', desc: 'Type keywords to search YouTube videos.', category: 'webDev', url: 'https://romantic-easley-d781f7.netlify.app/', source: 'https://github.com/MiwaDenverMaomi/react-video-search-app' },
            { id: 'web_4', alt: 'Application4:React Redux Calculator', name: 'React Redux Calculator', language_tools: 'React/Redux/Typescript', desc: 'A calculator', category: 'webDev', url: 'https://xenodochial-lichterman-5c894d.netlify.app/', source: 'https://github.com/MiwaDenverMaomi/react-typescript-calculator' },
            { id: 'web_5', alt: 'Website:Hair Sallon', name: 'Hair Salloon Website', language_tools: 'HTML/CSS/Javascript', desc: 'Web design.', category: 'webDev', url: 'https://elegant-neumann-aec1f1.netlify.app/', source: 'https://github.com/MiwaDenverMaomi/hairsalloon' },
            { id: 'web_6', alt: 'Website:Baby Word Dictionary', name: 'Baby Words Dictionary', language_tools: 'JavaScript', desc: 'List of the words your baby says.', category: 'webDev', url: 'https://miwadenvermaomi.github.io/baby_word_list/', source: 'https://github.com/MiwaDenverMaomi/baby_word_list' },
        ],
        illust: [
            { id: 'ill_1', alt: 'Illustration1:A Lady in a Red Dress', name: 'A Lady in a Red Dress', language_tools: 'Illustrator', desc: '', category: 'illust', scale: 'p' }, { id: 'ill_2', alt: 'Illustration2:A Lady Taking Like a parakeet', name: 'A Lady Taking Like a Parakeet', language_tools: 'Illustrator', desc: '', category: 'illust', scale: 'p' },
            { id: 'ill_3', alt: 'Illustration3:A Cooking Guy', name: 'Chef', language_tools: 'ibis Paint', desc: '', category: 'illust', scale: 'l' },
            { id: 'ill_4', alt: "Illustraion4:My Cousin's Marriage", name: 'Wedding Card', language_tools: 'Illustrator', desc: '', category: 'illust', scale: 'l' },
            { id: 'ill_5', alt: 'Illustration5:A Young Female Secretary', name: 'A young Female Secretary', language_tools: 'ibis Paint', desc: '', category: 'illust', scale: 'l' },
        ]
    }
}

export default function task(state = initialState, action: actionShowModalType) {
    switch (action.type) {
        case 'SHOWMODAL':
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



            return Object.assign({}, state, {
                modal: {
                    id: action.id,
                    modalCategory: action.category,
                    isModal: !state.modal.isModal,
                    info: action.category === 'illust' ? state.works.illust.filter((x) => {
                        debug(x);
                        debug(x.id);
                        if (x.id === action.id) {
                            return Object.assign({}, x);
                        }
                    })[0] : state.works.webDev.filter((x) => {
                        debug(x);
                        debug(x.id);
                        if (x.id === action.id) {
                            return Object.assign({}, x);
                        }
                    })[0]
                }
            });

        case 'CLOSEMODAL':
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
                        desc: 'No-description',
                        source: '',
                        url: ''
                    },
                    isModal: false
                }
            });

        default: debug('reducers/Task.js SWHOMODAL return state');
            return state;
    }

}
