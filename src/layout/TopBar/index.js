import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from "react-collapsible";
import {connect} from "react-redux";

// svg
import {ReactComponent as Close} from "../../img/icon-close.svg";

// Actions
import {setOpenTopBar} from '../../redux/actions/topBar'

import './styles.sass'


const TopBar = ({isOpenTopBar, setOpenTopBar}) => {
    return (
        <div className={'TopBar'}>
            <Collapsible open={isOpenTopBar}>
                <div className={'TopBar__wrapper'}>
                    <div className={"TopBar__icon"} onClick={() => setOpenTopBar(!isOpenTopBar)}><Close/></div>
                    <div className="TopBar__items">
                        <div className="TopBar__item">Kich</div>
                        <div className="TopBar__item">Мужское</div>
                        <div className="TopBar__item">Женское</div>
                        <div className="TopBar__item">Аксессуары</div>
                        <div className="TopBar__item">Электроника</div>
                    </div>
                </div>
            </Collapsible>

        </div>
    );
};

TopBar.propTypes = {
    isOpen: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isOpenTopBar: state.topBarReducer.isOpenTopBar,
})

export default connect(mapStateToProps, {setOpenTopBar})(TopBar)