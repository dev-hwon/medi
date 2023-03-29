import React from "react";

export default function Desc({ tabmenu }) {
  let html = "";
  switch (tabmenu) {
    case 1:
      html = (
        <div className="asdf">
          <h1>{tabmenu}유저님</h1>
          <div>안뇽하세요</div>
        </div>
      );
      break;
    case 2:
      html = (
        <div className="asdf">
          <h1>{tabmenu}유저님</h1>
          <div>안뇽하세요</div>
        </div>
      );
      break;
    case 3:
      html = (
        <div className="asdf">
          <h1>{tabmenu}유저님</h1>
          <div>안뇽하세요</div>
        </div>
      );
      break;
  }
  return html;
}
