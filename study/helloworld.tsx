/// <reference path="../typings/react/react-global.d.ts" />  


interface HelloWorldProps {
	name: string;
}

class HelloMessage extends React.Component<HelloWorldProps, any> {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}  

ReactDOM.render(<HelloMessage name="React" />, document.getElementById('container'));