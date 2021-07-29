import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass'
import Collapsible from "react-collapsible";

const TopBar = ({isOpen}) => {
    return (
        <div className={'TopBar'}>
            <Collapsible open={isOpen}>
                <div className={'TopBar__wrapper'}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="TopBar__item">Kich</div>
                            <div className="TopBar__item">Мужское</div>
                            <div className="TopBar__item">Женское</div>
                            <div className="TopBar__item">Аксессуары</div>
                            <div className="TopBar__item">Электроника</div>
                        </div>
                    </div>
                </div>
            </Collapsible>

        </div>
    );
};

TopBar.propTypes = {
    isOpen: PropTypes.bool,
};

export default TopBar;