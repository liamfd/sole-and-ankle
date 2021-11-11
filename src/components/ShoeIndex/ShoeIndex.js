import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
        {/* <FakeShoeGrid /> */}
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;
`;

const LeftColumn = styled.div`
  margin-top: 12px; // magic number - how do I align this properly?
`;

const MainColumn = styled.div`
  flex: 1;
`;

const FakeShoeGrid = styled.div`
  background-color: grey;
  min-height: 800px;
  margin-top: -24px; // also a magic number, to offset the spacer
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin-right: auto;
`;

export default ShoeIndex;
