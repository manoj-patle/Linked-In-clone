import { styled } from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
const Home = (props) => {
  return (
    <Container>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  row-gap: 25px;
  column-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Home;
