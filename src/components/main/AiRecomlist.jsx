import React from "react";
import styled from "styled-components";
export default function AiRecomlist() {
  return (
    <>
      <AiList>
        <ListItem>
          <div className="">
            <CirclePercent></CirclePercent>
          </div>
          <div className="">
            <div className="">모두닥 리뷰 내용 확인</div>
            <div className="">
              <em>진료전</em>90% 클리닉이 적용중
            </div>
          </div>
          <div className="">
            <button>추가</button>
          </div>
        </ListItem>
        <ListItem>
          <div className="">
            <CirclePercent></CirclePercent>
          </div>
          <div className="">
            <div className="">모두닥 리뷰 내용 확인</div>
            <div className="">
              <em>진료전</em>90% 클리닉이 적용중
            </div>
          </div>
          <div className="">
            <button>추가</button>
          </div>
        </ListItem>
        <ListItem>
          <div className="">
            <CirclePercent></CirclePercent>
          </div>
          <div className="">
            <div className="">모두닥 리뷰 내용 확인</div>
            <div className="">
              <em>진료전</em>90% 클리닉이 적용중
            </div>
          </div>
          <div className="">
            <button>추가</button>
          </div>
        </ListItem>
        <ListItem>
          <div className="">
            <CirclePercent></CirclePercent>
          </div>
          <div className="">
            <div className="">모두닥 리뷰 내용 확인</div>
            <div className="">
              <em>진료전</em>90% 클리닉이 적용중
            </div>
          </div>
          <div className="">
            <button>추가</button>
          </div>
        </ListItem>
        <ListItem>
          <div className="">
            <CirclePercent></CirclePercent>
          </div>
          <div className="">
            <div className="">모두닥 리뷰 내용 확인</div>
            <div className="">
              <em>진료전</em>90% 클리닉이 적용중
            </div>
          </div>
          <div className="">
            <button>추가</button>
          </div>
        </ListItem>
        <ListItem>
          <div className="">
            <CirclePercent></CirclePercent>
          </div>
          <div className="">
            <div className="">모두닥 리뷰 내용 확인</div>
            <div className="">
              <em>진료전</em>90% 클리닉이 적용중
            </div>
          </div>
          <div className="">
            <button>추가</button>
          </div>
        </ListItem>{" "}
        <ListItem>
          <div className="">
            <CirclePercent></CirclePercent>
          </div>
          <div className="">
            <div className="">모두닥 리뷰 내용 확인</div>
            <div className="">
              <em>진료전</em>90% 클리닉이 적용중
            </div>
          </div>
          <div className="">
            <button>추가</button>
          </div>
        </ListItem>
        <ListItem>
          <div className="">
            <CirclePercent></CirclePercent>
          </div>
          <div className="">
            <div className="">모두닥 리뷰 내용 확인</div>
            <div className="">
              <em>진료전</em>90% 클리닉이 적용중
            </div>
          </div>
          <div className="">
            <button>추가</button>
          </div>
        </ListItem>
      </AiList>
    </>
  );
}

const AiList = styled.ul`
  display: inline-block;
`;
const ListItem = styled.li`
  postiion: relative;
  display: flex;
  > div {
    flex: 0 0 auto;
  }
`;
const CirclePercent = styled.div`
  width: 48px;
  height: 48px;
  background: #ddd;
  border-radius: 50%;
`;
