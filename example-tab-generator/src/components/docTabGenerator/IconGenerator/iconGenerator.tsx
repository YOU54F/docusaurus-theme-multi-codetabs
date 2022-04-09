import React from "react";
import { TabDataItemLabel } from "../types";

export function generateTabIcon({
  iconLocation,
  iconLink,
  iconTitle,
}: TabDataItemLabel) {
  return (
    <div style={{ textAlign: "center" }}>
      <a href={iconLink ? iconLink : undefined}>
        {iconLocation ? (
          <img src={iconLocation} height="48" width="48" />
        ) : undefined}
        {iconTitle ? (
          <>
            <br />
            {iconTitle}
          </>
        ) : undefined}
      </a>
    </div>
  );
}
