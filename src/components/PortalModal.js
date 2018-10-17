import React from 'react';
import ReactDOM from 'react-dom';

class PortalModal extends React.PureComponent{
  constructor(props){
    super(props);

    this.container = document.createElement('div');
    this.el = document.createElement('div');
    this.listener = (e) => this.props.onClick(e);
  }

  componentDidMount(){
    this.container.classList.add('p-modal');
    this.container.appendChild(this.el);
    this.container.addEventListener('click', this.listener, false)
    if(this.props.className && this.props.className != '') this.setClass(this.props.className.split(" "));
    document.body.appendChild(this.container);
  }

  componentWillUnmount(){
    this.container.removeChild(this.el);
    this.container.classList.remove('p-modal')
    this.container.removeEventListener('click', this.listener, false);
    this.container.remove();
    this.container = null;
  }

  setClass(strings){
    strings.map((s) => this.el.classList.add(s));
  }

  render(){
    return ReactDOM.createPortal(
      this.props.children, this.el
    )
  }
}

export default PortalModal;