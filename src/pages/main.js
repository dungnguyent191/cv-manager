import React from 'react';
import * as AnimationHelper from '../assets/js/animation';
import { PageHeader } from '../components/PageHeader';
import { PageFooter } from '../components/PageFooter';
import { PageContent } from '../components/PageContent';

export default class Main extends React.Component {
  componentDidMount() {
    AnimationHelper.init();
  }
  render() {
    return <>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </>
  }
}