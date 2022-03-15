import { connect } from 'react-redux';
import { showModal, closeModal } from '../actions';
import WorksWebDev from '../components/WorksWebDev.js';
import WorksIllust from '../components/WorksIllust.js';
import Modal from '../components/Modal.js';
import WebDevItem from '../components/WebDevItem';
import IllustItem from '../components/IllustItem';
import { debug } from './../components/func/Func';


debug('containers/Works.js');

const mapStateToProps = state => {
    return {
        modal: state.task.modal,
        works: state.task.works,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClickShowModal: (id, category) => {
            dispatch(showModal(id, category));
        },
        onClickCloseModal: () => {
            dispatch(closeModal());
        },
    }
};

export default {
    webDev: connect(mapStateToProps, mapDispatchToProps)(WorksWebDev),
    webDevItem: connect(mapStateToProps, mapDispatchToProps)(WebDevItem),
    illust: connect(mapStateToProps, mapDispatchToProps)(WorksIllust),
    illustItem: connect(mapStateToProps, mapDispatchToProps)(IllustItem),
    modal: connect(mapStateToProps, mapDispatchToProps)(Modal)
}
