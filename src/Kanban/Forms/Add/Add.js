import React from 'react';
import Modal from 'react-modal';
import { addCard } from '../../../actions/actions.js'

class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  addCard() {
    this.props.dispatch(
      addCard()
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Hi", this.state);
    this.addCard();
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="button" id="newOpen">Add a Card</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div className="top">
            <button onClick={this.closeModal} id="close" className="button">&times;</button>
            <h3>
              <label id="formTitle">New Card</label>
            </h3>
          </div>
          <form>
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input type="text" name="title" id="title" className="inputBars" placeholder="Title of Card"></input>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input type="text" name="body" id="body" className="inputBars" placeholder="Task"></input>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <select type="text" name="priority" id="priority" className="select">
              <option value="">Please Choose a Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <select type="text" name="status" id="status" className="select">
              <option value="">Please Choose a Status</option>
              <option value="In-Queue">In-Queue</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Done">Done</option>
            </select>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input type="text" name="createdBy" id="createdBy" className="inputBars" placeholder="Created By..."></input>
            <br />
            <br />
            <img src="/assets/box.png" alt="" id="boxIcon"></img>
            <input type="text" name="assignedTo" id="assignedTo" className="inputBars" placeholder="Assigned To..."></input>
            <br />
            <br />
            <label>
              <input type="submit" value="Submit" id="submitButton" onSubmit={() => this.handleSubmit()}></input>
            </label>
          </form>
        </Modal>
      </div>
    );
  }
}


// const Add = (props) => (
//   <Popup trigger={<button className="button" id="newOpen"> Add a Card </button>} modal>
//     {close => (
//       <div className="modal">
//         <div className="top">
//           <h3>
//             <label id="formTitle">New Card</label>
//           </h3>
//           <button
//             id="close"
//             className="button"
//             onClick={() => {
//               close();
//             }}
//           >
//             &times;
//           </button>
//         </div>
//         <div className="content">

//         </div>
//       </div>
//     )}
//   </Popup>
// );

export default Add;