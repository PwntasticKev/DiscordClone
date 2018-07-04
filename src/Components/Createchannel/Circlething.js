import React from "react"
import styled from "styled-components"

export default function circleThing() {
  return (
    <SV version="1.1" id="Layer_1" x="0px" y="0px" viewBox="12 -12 40 40">
      <g>
        <g>
          <circle
            id="circle-1"
            style={{ fill: "#FFFFFF" }}
            cx="32"
            cy="8"
            r="20"
          />
        </g>
        <g>
          <g id="circle-1_1_">
            <path
              style={{ fill: "#DADDDF" }}
              d="M32-11c10.5,0,19,8.5,19,19s-8.5,19-19,19S13,18.5,13,8S21.5-11,32-11 M32-12C21-12,12-3,12,8s9,20,20,20
				s20-9,20-20S43-12,32-12L32-12z"
            />
          </g>
        </g>
        <rect
          x="26"
          y="-12"
          style={{ fill: "#FFFFFF" }}
          width="12"
          height="40"
        />
      </g>
    </SV>
  )
}

const SV = styled.svg`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 13rem;
  left: 45.53%;
`
