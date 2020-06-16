/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import Contacts from 'components/Contacts';
import messages from './messages';

export default class ItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      newName: '',
      contacts: [],
    };

    this.handleChange = this.handleIdChange.bind(this);
    this.handleChange = this.handleNameChange.bind(this);
    this.handleChange = this.handleNewNameChange.bind(this);

    this.handlePost = this.handlePost.bind(this);
    this.handleGetAll = this.handleGetAll.bind(this);
    this.handlePut = this.handlePut.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleIdChange = event => {
    this.setState({
      id: event.target.value,
    });
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleNewNameChange = event => {
    this.setState({
      newName: event.target.value,
    });
  };

  Item(id, name) {
    this.id = id;
    this.name = name;
  }

  // Get Message
  handleGetAll(e) {
    fetch(
      'http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories',
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
   // added debug message
    e.preventDefault();
  }

  // Post Message
  handlePost(e) {
    fetch(
      'http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.id,
          name: this.state.name,
        }),
      },
    );

    e.preventDefault();
  }

  // Put Message
  handlePut(e) {
    fetch(
      'http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories?newName=' +
        this.state.newName,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.id,
          name: this.state.name,
        }),
      },
    );

    e.preventDefault();
  }

  // Delete Message
  handleDelete(e) {
    fetch(
      'http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories?id=' +
        this.state.id,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    e.preventDefault();
  }

  componentDidMount() {
    // fetch('http://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ contacts: data });
    //   })
    //   .catch(console.log);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handlePost}>
          <H2>
            <FormattedMessage {...messages.itemID} />
          </H2>
          <input
            type="text"
            value={this.state.id}
            onChange={this.handleIdChange}
          />
          <H2>
            <FormattedMessage {...messages.itemName} />
          </H2>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <div>
            <br />
            <button onClick={this.handleGetAll}>Get</button>
          </div>
          <div>
            <br />
            <button type="submit">Post</button>
          </div>
          <div>
            <br />
            <button onClick={this.handlePut}>Put</button>
            <input
              type="text"
              value={this.state.newName}
              onChange={this.handleNewNameChange}
            />
          </div>
          <div>
            <br />
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </form>

        <Contacts contacts={this.state.contacts} />
      </React.Fragment>
    );
  }
}
