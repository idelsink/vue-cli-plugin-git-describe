import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import GitDescribe from '../components/GitDescribe.vue';
const { gitDescribeSync } = require('git-describe');

const gitInfo = gitDescribeSync();

describe('GitDescribe.vue', () => {
  it('renders version.raw', () => {
    const wrapper = shallowMount(GitDescribe, {
    });
    expect(wrapper.text()).to.equal(gitInfo.raw);
  });
});
