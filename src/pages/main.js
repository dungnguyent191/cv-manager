import React from 'react';
import * as AnimationHelper from '../assets/js/animation';
import { PageHeader } from '../components/PageHeader';
import { PageFooter } from '../components/PageFooter';
import { PageContent } from '../components/PageContent';
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    AnimationHelper.init();
  }, [])
    return <>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </>
}

export default Main