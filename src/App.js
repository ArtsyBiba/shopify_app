import styled from 'styled-components';

import Icon from './Components/StyledElements/Icon';
import MoviesBoard from './Components/Movies/MoviesBoard';

function App() {
  return (
    <PageContainer>
        <HeaderWrapper>
          <Header>The Shoppies</Header>
          <Icon>🎬</Icon>
        </HeaderWrapper>
        <SubHeader>Select and nominate your favorite movies!</SubHeader>
        <MoviesBoard />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin: auto;
  margin-top: 2em;
  width: 85%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Header = styled.h1`
  color: #004c3f;
`;

const SubHeader = styled.h3`
  margin-bottom: 0.25em;
  margin-top: 1em;

  @media(max-width: 600px) {
      margin-top: 0;
    }
`;

export default App;
