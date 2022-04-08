import React from "react";
import { TabDataItemLabel } from "@site/src/data/meta";

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
