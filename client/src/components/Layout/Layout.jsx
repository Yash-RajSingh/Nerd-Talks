import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Pseudobody = styled.div`
  width: 95%;
  margin: 1% auto;
`;

const Layout = (props) => {
  return (
    <>
      <Header />
      <Pseudobody>{props.children}</Pseudobody>
      <Footer />
    </>
  );
};

export default Layout;
