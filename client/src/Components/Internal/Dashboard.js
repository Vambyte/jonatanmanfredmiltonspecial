import React from 'react';
import InternalHeader from './InternalHeader';
import InternalFooter from './InternalFooter';
import '../../ComponentStyle/Dashboard.css';
import ChapterPreview from "./ChapterPreview";
import { useAuth } from '../../contexts/AuthContext';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false
        };
        this._onShowPreview = this._onShowPreview.bind(this);
    }

    

    _onShowPreview() {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }

    render() {


        return (
            <>
                <InternalHeader />                
                <ul>
                    <li>
                        <button onClick={this._onShowPreview}>Kapitel 1</button>
                        {this.state.showComponent ? <ChapterPreview /> : null}
                    </li>
                    
                    <li><button onClick={this._onShowPreview}>Kapitel 2</button></li>
                    <li><button onClick={this._onShowPreview}>Kapitel 3</button></li>
                    <li><button onClick={this._onShowPreview}>Kapitel 4</button></li>
                    <li><button onClick={this._onShowPreview}>Kapitel 5</button></li>
                    <li><button onClick={this._onShowPreview}>Kapitel 6</button></li>
                    <li><button onClick={this._onShowPreview}>Kapitel 7</button></li>
                </ul>

                <InternalFooter />
            </>
        );
    }
}

export default Dashboard;
