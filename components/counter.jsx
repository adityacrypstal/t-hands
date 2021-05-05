import React from 'react';

const Counter = () => {
    return (
        <div className="block-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                        <div className="block">
                            <p><i className="material-icons">favorite</i></p>
                            <p className="counter-wrapper"><span className="fb"></span></p>
                            <p className="text-block">CAUSES</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                        <div className="block">
                            <p><i className="material-icons">language</i></p>
                            <p className="counter-wrapper"><span className="code"></span></p>
                            <p className="text-block">PLACES</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                        <div className="block">
                            <p><i className="material-icons">person_add</i></p>
                            <p className="counter-wrapper"><span className="bike"></span></p>
                            <p className="text-block">VOLUNTEERS</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-6 for-border">
                        <div className="block">
                            <p><i className="material-icons">people</i></p>
                            <p className="counter-wrapper"><span className="coffee"></span></p>
                            <p className="text-block">SAVED</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
