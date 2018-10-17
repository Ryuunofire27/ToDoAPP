import React from 'react';
import Modal from './components/Modal';
import ListItem from './components/ListItem';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      anyModal: false,
      modal: null,
      chores: ["hola", "soy", "un", "item"],
      modalMsg: ''
    }

    this.createNewChoreModal = this.createNewChoreModal.bind(this);
    this.createNewChore = this.createNewChore.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getModal = this.getModal.bind(this);
    this.deleteChore = this.deleteChore.bind(this);
    this.inputChore = React.createRef();
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.addChoreBtn = React.createRef();
  }

  createNewChoreModal(){
    this.setState({ anyModal: true, modal: Modal });
  }

  handleInputKeyDown(e){
    if(e.which == 13){
      this.addChoreBtn.current.click();
    } 
  }

  getModal(){
    const Modal = this.state.modal;
    return <Modal closeModal={this.closeModal} addChore={this.createNewChore} inputChore={this.inputChore} msg={this.state.modalMsg} onKeyDown={this.handleInputKeyDown}addChoreBtn={this.addChoreBtn} />
  }

  closeModal(e){
    console.log(e);
    if(e.target.classList.contains('p-modal') || e.target.classList.contains('modal-close')){
      this.setState({ anyModal: false, modal: null, modalMsg: '' })
    }
  }

  createNewChore(){
    const value = this.inputChore.current.value;
    if(value != ''){
      this.setState({ chores: [...this.state.chores, value], anyModal: false, modal: null, modalMsg: '' })
    }else{
      this.setState({ modalMsg: 'Debe digitar una tarea para crearla' }, () => setTimeout(() => this.setState({ modalMsg: '' }), 3000 ))
    }
  }

  deleteChore(index, key){
    console.log(index, key)
    const chores = this.state.chores;
    /*const index = chores.findIndex((c) => c.toLowerCase() == index.toLowerCase());
    console.log(index)*/
    if(index != -1){
      chores.splice(index, 1);
      this.setState({ chores })
    }
  }

  render(){
    return (
      <div>
        <header className="">
          <center>
            <h1>To - Do - APP Con React.js</h1>
          </center>
        </header>
        { this.state.anyModal && this.getModal()}
        <div className="container">
          <center>
            <button className="btn btn-primary" onClick={this.createNewChoreModal}>Crear una nueva tarea</button>
          </center>
          <ListItem chores={this.state.chores} deleteChore={this.deleteChore}/>
        </div>
      </div>
    )
  }
}

export default App;