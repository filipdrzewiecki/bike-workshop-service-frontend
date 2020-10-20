import '../../Css/index.css';
import React, { Component } from 'react';
import ArticleBody from '../../Page/PageElements/article.jsx';
import { connect } from 'react-redux';
import { addFrameToBicycle } from '../apis/api-router';
import { getUserName } from '../../Page/Security/authHeader';
import AddFrameForm from './addFrameForm';

class AddFrameToBicycle extends Component {

  onSubmit = (formValues) => {
    this.props.addFrameToBicycle(this.props.match.params.id, formValues);
  }

  render() {
    return (
      <ArticleBody
        title="Dodaj ramę"
        backButtonLink={`/${getUserName()}/garage/${this.props.match.params.id}`}
        paragraphs={[
          <AddFrameForm onSubmit={this.onSubmit} send="Dodaj" />
        ]}
      />
    );
  }

}

export default connect(null, { addFrameToBicycle })(AddFrameToBicycle);