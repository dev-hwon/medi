import styled, { keyframes, css } from "styled-components";

export const Footer = styled.footer`
  position: relative;
  padding: 8px 16px;
  background-color: #212224;
  color: #aaa;
`;
export const FooterExpandBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 32px;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border: none;
`;
export const Fnb = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 -8px;

  > li {
    flex: 0 0 auto;
    > a {
      position: relative;
      display: block;
      padding: 16px 8px;
      color: #eee;

      &::before {
        content: "";
        display: block;
        width: 1px;
        height: 8px;
        background-color: #888;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
    &:last-child a::before {
      display: none;
    }
  }
`;
export const CSInfo = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ul {
    // display: flex;
    // flex-wrap: wrap;

    li {
      // flex: 0 0 auto;
      margin-right: 16px;
      .tx_tit {
        &::after {
          content: "";
          display: inline-block;
          width: 1px;
          height: 8px;
          background: #888;
          margin: 0 8px;
        }
      }
      .tx_val {
        color: #ddd;
      }
    }
  }
`;
export const CompanyInfo = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  font-size: 12px;
  color: #888;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ul {
    // display: flex;
    // flex-wrap: wrap;

    li {
      // flex: 0 0 auto;
      margin-right: 16px;
      .tx_tit {
        &::after {
          content: "";
          display: inline-block;
          width: 1px;
          height: 8px;
          background: #888;
          margin: 0 8px;
        }
      }
      .tx_val {
        color: #ddd;
      }
    }
  }
`;
export const CopyrightText = styled.div`
  font-size: 12px;
  color: #888;
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
