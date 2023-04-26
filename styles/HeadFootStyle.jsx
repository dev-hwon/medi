import styled, { keyframes, css } from "styled-components";

// ----------------- header ------------------
export const Head = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  // transition: all 0.4s;
  display: flex;
  > div {
    padding: 0 40px;
  }
  a {
    color: #aaa;
    font-size: 16px;
  }
  ${(props) =>
    props.isFold &&
    css`
      background-color: #000;
      > .header_logo {
        display: flex;
        align-items: center;
      }
    `};
`;
export const FamilySiteTab = styled.div`
  a {
    position: relative;
    display: block;
    text-align: center;
    padding: 19px 0;
    font-size: 13px;
  }
  a.active {
    color: #25aae1;
    font-weight: bold;
  }
  a.active::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #25aae1;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const Topmenu = styled.div`
  a {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 14px;
  }
  button {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    color: #aaa;
    border: none;
    background-color: transparent;
  }
`;
export const MemberLevel = styled.span`
  font-size: 12px;
  color: #444;
  > span {
    font-weight: bold;
    > em {
    }
  }
`;
export const MemberName = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #25aae1;
  margin-left: 8px;
`;

// ----------------- footer ------------------
export const Foot = styled.footer`
  position: relative;
  padding: 8px 16px;
  background-color: #212224;
  color: #aaa;
`;
export const FootExpandBtn = styled.button`
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
