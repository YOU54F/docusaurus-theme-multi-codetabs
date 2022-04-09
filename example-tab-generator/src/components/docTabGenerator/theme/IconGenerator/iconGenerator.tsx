import React from "react";
import { IconGeneratorOpts } from "../../types/types";

export function generateTabIcon({
  iconLocation,
  iconLink,
  iconTitle,
}: IconGeneratorOpts) {
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
