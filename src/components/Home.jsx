import { styled } from 'styled-components';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import Middle from './Middle';
const Home = () => {
  return (
    <Container>
      <Layout>
        <LeftSideBar />
        <Middle />
        <RightSideBar />
      </Layout>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
// const Content = styled.div`
//   max-width: 1128px;
//   margin-left: auto;
//   margin-right: auto;
// `;

const Layout = styled.div`
  max-width: 1200px;
  /* margin: 25px 0; */
  margin: 25px auto;
  padding: 16px 0;
  display: grid;
  grid-template-areas: 'leftside middle rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  row-gap: 25px;
  column-gap: 25px;
  grid-template-rows: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
export default Home;
