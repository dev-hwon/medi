import React from "react";
import todosData from "../../db/todos.json";
import { Box, GridCol, GridWrap } from "../Style";
import styled from "styled-components";
import adjColon from "@/src/util/adjColon";
import Image from "next/image";

export default function TodoList() {
  const todosDataList = todosData.data.list;

  return (
    <>
      <GridWrap colWidth="25%" colGap={16} colNomargin>
        {todosDataList.map((data, idx) => {
          const statusNData = data.template_list.filter(
            (data) => data.status === "N"
          );
          const statusYData = data.template_list.filter(
            (data) => data.status === "Y"
          );
          return (
            <GridCol key={idx}>
              <Box backgroundColor="transparent">
                <TodoListCategoryName color={data.rgb}>
                  <div className="cateName">{data.cate_nm}</div>
                  <div className="workTime">
                    {data.time_start_hm
                      ? adjColon(data.time_start_hm)
                      : "00:00"}
                    &nbsp;~&nbsp;
                    {data.time_finish_hm
                      ? adjColon(data.time_finish_hm)
                      : "00:00"}
                    <Image
                      src="/images/todos/icon_clock.svg"
                      alt=""
                      width={14}
                      height={14}
                      style={{
                        display: "inline-block",
                        verticalAlign: "-2px",
                        marginLeft: "6px",
                      }}
                    />
                  </div>
                </TodoListCategoryName>
                <TodoListItems data={statusNData} />
                <TodoListItems data={statusYData} />
              </Box>
            </GridCol>
          );
        })}
      </GridWrap>
    </>
  );
}

const TodoListItems = ({ data }) => {
  return (
    <Listitems>
      {data.map((list, idx) => (
        <li key={idx} className={"li_state li_state_" + list.status}>
          <button tpye="button" className="btn_item">
            <div className="item_tit">{list.template_nm}</div>
            <div className="item_info">
              <div className={`tx_replyCnt ${list.reply_new ? "new" : ""}`}>
                {list.reply_cnt ? list.reply_cnt : 0}
              </div>
              <div className="tx_fileCnt">
                {list.file_cnt ? list.file_cnt : 0}
              </div>
            </div>
          </button>
          <button tpye="button" className="btn_status_change"></button>
        </li>
      ))}
    </Listitems>
  );
};
const TodoListCategoryName = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border: 1px solid #dfe3e9;
  border-radius: 8px;
  padding: 16px 16px 16px 20px;

  &:before {
    content: "";
    display: block;
    width: 8px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => (props.color ? "#" + props.color : "#ddd")};
    border-radius: 6px 0 0 6px;
  }

  .cateName {
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
  }
  .workTime {
    display: inline-block;
    font-size: 12px;
    color: #444;
    padding-left: 8px;
    padding-right: 6px;
    line-height: 26px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;
const Listitems = styled.div`
  mmargin-top: 16px;
  li {
    position: relative;
    margin-top: 8px;

    .btn_item {
      padding: 11px 20px;
      width: 100%;
      text-align: left;
      border: 1px solid #dfe3e9;
      border-radius: 8px;
      background-color: #fff;
      font-size: 12px;
      color: #838a95;

      &:hover {
        border-color: #25aae1;
        background-color: #f4fcff;
      }

      .item_tit {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #222;
        padding-right: 26px;
      }
      .item_info {
        display: flex;
        align-items: center;
        margin-top: 8px;

        .tx_replyCnt {
          position: relative;
          padding-left: 20px;
          line-height: 16px;
          margin-right: 16px;

          &:before {
            content: "";
            display: block;
            width: 16px;
            height: 16px;
            background-image: url("/images/todos/icon_chat.svg");
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
          &.new:after {
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            border: 2px solid #fff;
            background-color: #eb5757;
            position: absolute;
            top: -2px;
            left: 8px;
          }
        }
        .tx_fileCnt {
          position: relative;
          padding-left: 20px;
          line-height: 16px;

          &:before {
            content: "";
            display: block;
            width: 16px;
            height: 16px;
            background-image: url("/images/todos/icon_clip.svg");
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        }
      }
    }

    .btn_status_change {
      position: absolute;
      top: 12px;
      right: 8px;
      flex: 0 0 auto;
      width: 24px;
      height: 24px;
      font-size: 11px;
      border: none;
      background-color: transparent;
      background-image: url("/images/common/icon_checkoff.svg");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0 0;
    }
  }
  li.li_state_Y {
    .btn_status_change {
      background-image: url("/images/common/icon_checkon.svg");
    }
  }
`;
