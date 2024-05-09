import  { Component, ChangeEvent, KeyboardEvent } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
interface State {
    inputValue: string;
    isActive: boolean;
}
export default class BT08 extends Component<any, State> {
    constructor(props:State) {
        super(props);
        this.state = {
            inputValue: "",
            isActive: true,
        };
    }
    changeValue = (value: string) => {
        this.setState({ inputValue: value });
    }
    handleEnter = () => {
        this.setState({ isActive: false });
    }
    render() {
        return (
            <div>
                <h5>Bài 8</h5>
                {this.state.isActive ?
                    <Child2
                        onChange={this.changeValue}
                        onEnter={this.handleEnter}
                    /> :
                    <Child1 value={this.state.inputValue} />
                }
            </div>
        );
    }
}
